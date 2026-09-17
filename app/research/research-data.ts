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
};

export const RESEARCH: ResearchEntry[] = [
  {
    slug: "research-one",
    kind: "publication",
    title: "Paper title goes here",
    coverTone: 0,
    links: { paper: "#", pdf: "#" },
  },
  {
    slug: "research-two",
    kind: "publication",
    title: "Paper title goes here",
    coverTone: 2,
    links: { paper: "#", pdf: "#" },
  },
  {
    slug: "research-three",
    kind: "blog",
    title: "Write-up title goes here",
    coverTone: 1,
  },
];

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
