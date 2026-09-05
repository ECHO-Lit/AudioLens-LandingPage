// Shared shapes for the docs search index and TOC.
//
// Kept in their own module because docs-index.generated.ts imports them and
// search.ts imports the generated data -- putting the types in search.ts would
// make that a cycle.

export type SearchKind = "page" | "heading" | "content";

export type SearchRecord = {
  key: string;
  sectionId: string;
  headingId?: string;
  kind: SearchKind;
  title: string;
  body: string;
};

export type TocItem = { id: string; label: string };
