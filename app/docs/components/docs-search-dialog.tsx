import { useEffect, useMemo, useRef, useState } from "react";
import { ACCENT } from "../constants";
import {
  SearchRecord,
  groupResults,
  searchDocs,
  snippet,
  tokenize,
} from "../search";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Colour-only highlight: changing font-weight here would reflow the row on
// every keystroke.
function Highlight({ text, tokens }: { text: string; tokens: string[] }) {
  if (!tokens.length || !text) return <>{text}</>;

  // Longest first: regex alternation is leftmost-first, so "in" listed before
  // "install" would swallow the match and leave "stall" unhighlighted.
  const pattern = [...tokens]
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "gi"));
  const lookup = new Set(tokens);

  return (
    <>
      {parts.map((part, i) =>
        lookup.has(part.toLowerCase()) ? (
          <span key={i} style={{ color: ACCENT }}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

// A page and everything that matched inside it. The page reads as the parent
// row; its headings and body hits are indented beneath a vertical rule.
function ResultGroup({
  group,
  tokens,
  onSelect,
}: {
  group: { sectionId: string; title: string; records: SearchRecord[] };
  tokens: string[];
  onSelect: (id: string, headingId?: string) => void;
}) {
  const page = group.records.find((r) => r.kind === "page");

  // Nest matches under the heading they belong to, keeping rank order. Intro
  // copy has no heading, so it lands in a leading unlabelled bucket.
  const buckets: {
    headingId?: string;
    label: string;
    records: SearchRecord[];
  }[] = [];

  for (const record of group.records) {
    if (record.kind === "page") continue;
    const key = record.headingId ?? "";
    let bucket = buckets.find((b) => (b.headingId ?? "") === key);
    if (!bucket) {
      bucket = { headingId: record.headingId, label: "", records: [] };
      buckets.push(bucket);
    }
    if (!bucket.label && record.title) bucket.label = record.title;
    if (record.kind === "content") bucket.records.push(record);
  }

  return (
    <>
      <CommandItem
        value={page?.key ?? `page:${group.sectionId}`}
        onSelect={() => onSelect(group.sectionId)}
      >
        <div className="flex min-w-0 flex-col gap-0.5 py-0.5">
          <span className="truncate text-sm font-medium">
            <Highlight text={group.title} tokens={tokens} />
          </span>
          {page && (
            <span className="truncate text-xs text-muted-foreground">
              <Highlight text={page.body} tokens={tokens} />
            </span>
          )}
        </div>
      </CommandItem>

      {/* One continuous rule spans the heading and everything matched inside
          it, so they read as a single nested unit rather than sibling rows. */}
      {buckets.map((bucket) => (
        <div
          key={bucket.headingId ?? "lead"}
          className="ml-3 border-l border-[rgba(20,23,28,0.16)]"
        >
          {bucket.label && (
            <CommandItem
              value={`heading:${group.sectionId}:${bucket.headingId}`}
              onSelect={() => onSelect(group.sectionId, bucket.headingId)}
              className="ml-1 text-[13px]"
            >
              <span className="truncate">
                <Highlight text={bucket.label} tokens={tokens} />
              </span>
            </CommandItem>
          )}
          {bucket.records.map((record) => (
            <CommandItem
              key={record.key}
              value={record.key}
              onSelect={() => onSelect(record.sectionId, record.headingId)}
              className={bucket.label ? "ml-4" : "ml-1"}
            >
              <span className="truncate text-xs text-muted-foreground">
                <Highlight text={snippet(record.body, tokens)} tokens={tokens} />
              </span>
            </CommandItem>
          ))}
        </div>
      ))}
    </>
  );
}

export function DocsSearchDialog({
  open,
  onOpenChange,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (id: string, headingId?: string) => void;
}) {
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  // Clear the field whenever the dialog opens or closes. Done during render
  // rather than in an effect so it covers every path -- the parent's ⌘K
  // shortcut closes the dialog without going through onOpenChange.
  const [wasOpen, setWasOpen] = useState(open);
  if (wasOpen !== open) {
    setWasOpen(open);
    setQuery("");
  }

  const tokens = useMemo(() => tokenize(query), [query]);
  const groups = useMemo(() => groupResults(searchDocs(query)), [query]);

  // A new query means a new list -- start it at the top rather than wherever
  // the previous result set was scrolled to.
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search documentation"
      description="Search AudioLens docs by page, heading, or content"
      className="top-[18%] left-auto inset-x-0 mx-auto translate-x-0 sm:max-w-xl"
    >
      {/* Ranking happens in searchDocs; cmdk's own filter would re-sort the DOM
          on every keystroke. */}
      <Command shouldFilter={false} className="p-2.5">
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search documentation..."
        />
        <CommandList ref={listRef} className="mt-3 max-h-[420px]">
          {hasQuery && (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              {groups.map((group) => (
                <ResultGroup
                  key={group.sectionId}
                  group={group}
                  tokens={tokens}
                  onSelect={onSelect}
                />
              ))}
            </>
          )}
        </CommandList>
        {/* Negative margins undo the Command padding so the divider still
            spans the full dialog width. */}
        <div className="-mx-2.5 -mb-2.5 mt-2.5 flex items-center gap-3 border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
          <span>
            <kbd className="font-sans">↑↓</kbd> navigate
          </span>
          <span>
            <kbd className="font-sans">↵</kbd> select
          </span>
          <span>
            <kbd className="font-sans">esc</kbd> close
          </span>
        </div>
      </Command>
    </CommandDialog>
  );
}
