/**
 * Placeholder research entries. `slug` is both the URL segment and the filename
 * stem of the body in `content/research/`, exactly as `NavItem.id` works for
 * the docs (see app/docs/docs-data.ts).
 *
 * Everything but the slug, kind and title is optional: an entry with no date,
 * authors or venue simply renders without those lines, so the boxes can stay
 * empty until there is something real to put in them.
 */
export type ResearchKind = "publication" | "blog";

export type ResearchEntry = {
  slug: string;
  kind: ResearchKind;
  title: string;
  excerpt?: string;
  /** ISO date, formatted for display by `formatResearchDate`. */
  date?: string;
  authors?: string[];
  topics?: string[];
  /** Publications only. */
  venue?: string;
  /** Write-ups only. */
  readingTime?: string;
  links?: { paper?: string; pdf?: string; code?: string };
  /** Omit for a generated gradient cover. */
  cover?: { src: string; width: number; height: number; alt: string };
  /** Mono caption drawn on the gradient cover. */
  coverLabel?: string;
  coverTone: 0 | 1 | 2 | 3;
  /** Kept in the source but left off the index, sitemap and routes. */
  draft?: boolean;
};

const ALL_RESEARCH: ResearchEntry[] = [
  {
    slug: "research-one",
    kind: "publication",
    title: "Paper title goes here",
    coverTone: 0,
    links: { paper: "#", pdf: "#" },
    draft: true,
  },
  {
    slug: "research-two",
    kind: "publication",
    title: "Paper title goes here",
    coverTone: 2,
    links: { paper: "#", pdf: "#" },
    draft: true,
  },
  {
    slug: "what-is-audiolens",
    kind: "blog",
    title: "Why speech models need a lens",
    excerpt:
      "What AudioLens is, why a transcript is not an explanation, and how to chain its panels to debug, audit and study speech models.",
    date: "2026-10-01",
    readingTime: "6 min read",
    topics: ["Interpretability", "Speech models", "Overview"],
    cover: {
      src: "/assets/research/cover-overview.jpeg",
      width: 3168,
      height: 1344,
      alt: "Translucent ribbons of blue, lilac and pearl light flowing in a wave",
    },
    coverTone: 1,
  },
];

/** Published entries only: everything downstream reads this, never ALL_RESEARCH. */
export const RESEARCH = ALL_RESEARCH.filter((entry) => !entry.draft);

export const researchHref = (slug: string) => `/research/${slug}`;

export const findResearch = (slug: string) =>
  RESEARCH.find((entry) => entry.slug === slug);

export const KIND_LABEL: Record<ResearchKind, string> = {
  publication: "Publication",
  blog: "Write-up",
};

/** Everything except the entry being read, newest first as listed. */
export function relatedResearch(slug: string, n = 3): ResearchEntry[] {
  return RESEARCH.filter((e) => e.slug !== slug).slice(0, n);
}

/** "4 September 2026" -- fixed locale so server and client agree. */
export function formatResearchDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
