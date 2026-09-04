// Sections own their prose as data so the right-hand TOC and the search index
// can both be derived from one source. Components still render bespoke JSX --
// this model carries the text, not the layout.

export type ContentBlock =
  | { kind: "text"; text: string }
  | { kind: "code"; text: string; label?: string }
  | { kind: "item"; title: string; text?: string };

export type SectionHeading = {
  id: string;
  label: string;
  blocks: ContentBlock[];
};

export type SectionContent = {
  id: string;
  lead?: ContentBlock[];
  headings: SectionHeading[];
};
