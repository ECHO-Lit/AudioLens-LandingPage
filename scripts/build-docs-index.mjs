/**
 * Generates app/docs/docs-index.generated.ts from content/docs/*.mdx.
 *
 * Why a standalone script rather than a remark plugin in next.config.ts:
 * Turbopack runs the MDX pipeline in Rust and can only accept plugins named as
 * strings with serializable options, so a custom JS plugin cannot be injected
 * there. Parsing the sources separately sidesteps that entirely.
 *
 * Two things come out of here:
 *   TOC_BY_SECTION  -- the right-hand "On this page" list
 *   SECTION_RECORDS -- heading and body search records, in document order
 *
 * Page-level records are not generated: search.ts builds those from NAV_GROUPS,
 * which stays the single source of truth for titles, descriptions and order.
 *
 * Heading ids use github-slugger, the same slugger rehype-slug uses in the
 * render pipeline, so TOC anchors match the rendered DOM by construction.
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import GithubSlugger from "github-slugger";
import { toString as mdastToString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { unified } from "unified";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const CONTENT_DIR = join(ROOT, "content", "docs");
const OUT_FILE = join(ROOT, "app", "docs", "docs-index.generated.ts");

// JSX attributes worth indexing. Card/Step/Callout titles are real prose and
// users search for them; layout props (min, tone, href) are not, and neither is
// `label`, which is an aria-label rather than visible copy.
const TITLE_ATTRS = ["title"];
const EXTRA_TEXT_ATTRS = ["kicker", "meta", "items"];

const processor = unified().use(remarkParse).use(remarkGfm).use(remarkMdx);

/** Attribute value as a plain string, or null when it is an expression we skip. */
function attrText(node, name) {
  const attr = node.attributes?.find((a) => a.type === "mdxJsxAttribute" && a.name === name);
  if (!attr) return null;
  if (typeof attr.value === "string") return attr.value;
  // Expression container, e.g. items={["v1.0", "MIT"]}. Pull the string
  // literals out rather than evaluating arbitrary JS.
  const raw = attr.value?.value;
  if (typeof raw !== "string") return null;
  const literals = raw.match(/(["'])(?:(?!\1|\\).|\\.)*\1/g);
  if (!literals) return null;
  return literals.map((l) => l.slice(1, -1)).join(" ");
}

function jsxExtraText(node) {
  return EXTRA_TEXT_ATTRS.map((name) => attrText(node, name))
    .filter(Boolean)
    .join(" ");
}

function clean(text) {
  return text.replace(/\s+/g, " ").trim();
}

/** One table row -> { title: first cell, body: remaining cells }. */
function tableBlocks(node) {
  const [, ...rows] = node.children ?? [];
  return rows
    .map((row) => {
      const cells = (row.children ?? []).map((c) => clean(mdastToString(c))).filter(Boolean);
      if (!cells.length) return null;
      const [title, ...rest] = cells;
      return { title, body: rest.join(" ") };
    })
    .filter(Boolean);
}

/**
 * Flattens a block node into searchable { title, body } pairs.
 *
 * JSX elements carrying a `title` become one record each and are not descended
 * into -- that keeps a Card or Step as one coherent hit. Containers without a
 * title (CardGrid, Steps, CodeTabs) are transparent and recursed through, so
 * their children stay individually findable.
 */
function blocksFrom(node) {
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    const title = TITLE_ATTRS.map((n) => attrText(node, n)).find(Boolean);
    const extra = jsxExtraText(node);
    if (title) {
      return [{ title: clean(title), body: clean([mdastToString(node), extra].join(" ")) }];
    }
    const nested = (node.children ?? []).flatMap(blocksFrom);
    if (nested.length) return extra ? [{ title: "", body: clean(extra) }, ...nested] : nested;
    const own = clean([mdastToString(node), extra].join(" "));
    return own ? [{ title: "", body: own }] : [];
  }

  if (node.type === "table") return tableBlocks(node);
  if (node.type === "code") {
    const body = clean(node.value ?? "");
    return body ? [{ title: "", body }] : [];
  }
  if (node.type === "list") {
    return (node.children ?? [])
      .map((item) => clean(mdastToString(item)))
      .filter(Boolean)
      .map((body) => ({ title: "", body }));
  }

  const body = clean(mdastToString(node));
  return body ? [{ title: "", body }] : [];
}

function parseSection(sectionId, source) {
  const tree = processor.parse(source);
  const slugger = new GithubSlugger();

  const toc = [];
  const records = [];
  let current = null; // null while still in the lead, above the first heading.

  const push = (kind, title, body, headingId) => {
    records.push({
      key: `${kind}:${sectionId}:${headingId ?? "lead"}:${records.length}`,
      sectionId,
      ...(headingId ? { headingId } : {}),
      kind,
      title,
      body,
    });
  };

  for (const node of tree.children) {
    // Only h2 gets an anchor in the TOC -- deeper headings are indexed as
    // content so they stay searchable without crowding the sidebar.
    if (node.type === "heading" && node.depth === 2) {
      const label = clean(mdastToString(node));
      if (!label) continue;
      const id = slugger.slug(label);
      toc.push({ id, label });
      current = { id, label };
      push("heading", label, "", id);
      continue;
    }

    if (node.type === "heading") {
      const label = clean(mdastToString(node));
      if (label) push("content", current?.label ?? "", label, current?.id);
      continue;
    }

    for (const block of blocksFrom(node)) {
      const body = block.title ? clean(`${block.title} ${block.body}`) : block.body;
      if (!body) continue;
      push("content", current?.label ?? "", body, current?.id);
    }
  }

  return { toc, records };
}

const files = readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith(".mdx"))
  .sort();

const tocBySection = {};
const recordsBySection = {};

for (const file of files) {
  const sectionId = file.replace(/\.mdx$/, "");
  const source = readFileSync(join(CONTENT_DIR, file), "utf8");
  const { toc, records } = parseSection(sectionId, source);
  if (toc.length) tocBySection[sectionId] = toc;
  if (records.length) recordsBySection[sectionId] = records;
}

const banner = `// GENERATED FILE -- do not edit.
// Run \`node scripts/build-docs-index.mjs\` (or npm run dev / npm run build) to
// regenerate from content/docs/*.mdx.
`;

const out = `${banner}
import type { SearchRecord, TocItem } from "./search-types";

/** Right-hand "On this page" anchors. Sections with no h2 are absent. */
export const TOC_BY_SECTION: Record<string, TocItem[]> = ${JSON.stringify(tocBySection, null, 2)};

/** Heading and body records per section, in document order. */
export const SECTION_RECORDS: Record<string, SearchRecord[]> = ${JSON.stringify(recordsBySection, null, 2)};
`;

writeFileSync(OUT_FILE, out, "utf8");

const sections = Object.keys(recordsBySection).length;
const total = Object.values(recordsBySection).reduce((n, r) => n + r.length, 0);
console.log(
  `docs index: ${files.length} files, ${sections} with content, ${total} records -> ${relative(ROOT, OUT_FILE)}`,
);
