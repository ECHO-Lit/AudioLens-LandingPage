import { NAV_GROUPS } from "./docs-data";
import { SECTION_CONTENT } from "./sections";
import { ContentBlock } from "./sections/content-types";

export type SearchKind = "page" | "heading" | "content";

export type SearchRecord = {
  key: string;
  sectionId: string;
  headingId?: string;
  kind: SearchKind;
  title: string;
  body: string;
};

export const MAX_RESULTS = 20;
const MAX_PER_HEADING = 2;

function blockText(block: ContentBlock): string {
  if (block.kind === "item") {
    return block.text ? `${block.title} ${block.text}` : block.title;
  }
  return block.text;
}

// Built once at module scope -- the corpus is static.
const INDEX: SearchRecord[] = (() => {
  const records: SearchRecord[] = [];

  for (const group of NAV_GROUPS) {
    for (const item of group.items) {
      records.push({
        key: `page:${item.id}`,
        sectionId: item.id,
        kind: "page",
        title: item.title,
        body: item.desc,
      });

      const content = SECTION_CONTENT[item.id];
      if (!content) continue;

      // Intro copy sits above the first heading, so it has no anchor and no
      // heading label of its own -- it is shown as bare excerpt.
      for (const block of content.lead ?? []) {
        records.push({
          key: `lead:${item.id}:${records.length}`,
          sectionId: item.id,
          kind: "content",
          title: "",
          body: blockText(block),
        });
      }

      for (const heading of content.headings) {
        records.push({
          key: `heading:${item.id}:${heading.id}`,
          sectionId: item.id,
          headingId: heading.id,
          kind: "heading",
          title: heading.label,
          body: "",
        });

        for (const block of heading.blocks) {
          records.push({
            key: `content:${item.id}:${heading.id}:${records.length}`,
            sectionId: item.id,
            headingId: heading.id,
            kind: "content",
            title: heading.label,
            body: blockText(block),
          });
        }
      }
    }
  }

  return records;
})();

const SECTION_TITLES: Record<string, string> = Object.fromEntries(
  NAV_GROUPS.flatMap((g) => g.items.map((it) => [it.id, it.title])),
);

export function sectionTitle(id: string): string {
  return SECTION_TITLES[id] ?? id;
}

// Results in rank order, bucketed under the page they belong to. Page order
// follows the best-ranked hit each page contributed.
export function groupResults(
  records: SearchRecord[],
): { sectionId: string; title: string; records: SearchRecord[] }[] {
  const order: string[] = [];
  const bySection = new Map<string, SearchRecord[]>();

  for (const record of records) {
    let bucket = bySection.get(record.sectionId);
    if (!bucket) {
      bucket = [];
      bySection.set(record.sectionId, bucket);
      order.push(record.sectionId);
    }
    bucket.push(record);
  }

  return order.map((sectionId) => ({
    sectionId,
    title: sectionTitle(sectionId),
    records: bySection.get(sectionId)!,
  }));
}

export function tokenize(query: string): string[] {
  return [...new Set(query.toLowerCase().split(/\s+/).filter(Boolean))];
}

const KIND_BONUS: Record<SearchKind, number> = {
  page: 3,
  heading: 2,
  content: 0,
};

// Score one token against one field. Returns 0 when the token is absent, so a
// caller can enforce AND semantics across tokens.
function scoreField(field: string, token: string, weight: number): number {
  if (!field) return 0;
  const haystack = field.toLowerCase();
  const at = haystack.indexOf(token);
  if (at === -1) return 0;

  let score = weight;
  // Word-boundary hits beat mid-word ones ("boot" > "reboot").
  if (at === 0 || !/[a-z0-9]/.test(haystack[at - 1])) score *= 2;
  // Earlier matches rank slightly higher.
  score += Math.max(0, 10 - at) / 10;
  return score;
}

export function searchDocs(query: string): SearchRecord[] {
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const scored: { record: SearchRecord; score: number }[] = [];

  for (const record of INDEX) {
    // A record matches only on what it actually shows. Scoring the breadcrumb
    // would make every block inside a page match that page's name -- typing
    // "q" would drag in all of Quickstart's body text.
    const fields: [string, number][] =
      record.kind === "content"
        ? [[record.body, 1]]
        : record.kind === "heading"
          ? [[record.title, 10]]
          : [
              [record.title, 10],
              [record.body, 1],
            ];

    let total = 0;
    let matchedAll = true;

    for (const token of tokens) {
      let best = 0;
      for (const [field, weight] of fields) {
        const score = scoreField(field, token, weight);
        if (score > best) best = score;
      }
      if (best === 0) {
        matchedAll = false;
        break;
      }
      total += best;
    }

    if (!matchedAll) continue;
    scored.push({ record, score: total + KIND_BONUS[record.kind] });
  }

  scored.sort((a, b) => b.score - a.score);

  // One heading can hold many similar blocks (e.g. four code tabs). Cap how
  // many body hits each contributes so the list stays scannable across pages.
  const perHeading = new Map<string, number>();
  const results: SearchRecord[] = [];

  for (const { record } of scored) {
    if (record.kind === "content") {
      const bucket = `${record.sectionId}:${record.headingId ?? ""}`;
      const used = perHeading.get(bucket) ?? 0;
      if (used >= MAX_PER_HEADING) continue;
      perHeading.set(bucket, used + 1);
    }
    results.push(record);
    if (results.length >= MAX_RESULTS) break;
  }

  return results;
}

const SNIPPET_RADIUS = 60;

// Excerpt around the first matching token, trimmed to word boundaries.
export function snippet(body: string, tokens: string[]): string {
  if (!body) return "";

  const haystack = body.toLowerCase();
  let at = -1;
  for (const token of tokens) {
    const found = haystack.indexOf(token);
    if (found !== -1 && (at === -1 || found < at)) at = found;
  }
  if (at === -1) at = 0;

  let start = Math.max(0, at - SNIPPET_RADIUS);
  let end = Math.min(body.length, at + SNIPPET_RADIUS * 2);

  if (start > 0) {
    const space = body.indexOf(" ", start);
    if (space !== -1 && space < at) start = space + 1;
  }
  if (end < body.length) {
    const space = body.lastIndexOf(" ", end);
    if (space > at) end = space;
  }

  const text = body.slice(start, end).replace(/\s+/g, " ").trim();
  return `${start > 0 ? "… " : ""}${text}${end < body.length ? " …" : ""}`;
}
