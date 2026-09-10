"use client";

import Link from "next/link";
import { useState } from "react";
import { docsHref, flatNav } from "../docs-data";

function VoteButton({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className="cursor-pointer rounded-[5px] border border-al-hairline-strong bg-card px-3.5 py-1.5 text-[12.5px] text-muted-foreground hover:border-al-hairline-hover hover:bg-al-surface-2 focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
      style={{
        fontFamily: "revert",
        ...(on
          ? {
              border: "1px solid var(--al-hairline-hover)",
              background: "var(--al-surface-2)",
              color: "var(--foreground)",
            }
          : {}),
      }}
    >
      {children}
    </button>
  );
}

export function DocsPageFooter({ active }: { active: string }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  const flat = flatNav();
  const idx = flat.findIndex((it) => it.id === active);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  const cardClass =
    "min-w-[200px] rounded-lg border border-al-hairline-strong bg-card px-4 py-3 text-foreground hover:border-al-accent-line-strong focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none";

  return (
    <>
      <div className="mt-11 flex flex-wrap items-center gap-3.5 border-t border-al-hairline-strong pt-5">
        <span id="helpful-label" className="text-[13px] text-al-fg-tertiary">
          Was this page helpful?
        </span>
        <div className="flex gap-2" role="group" aria-labelledby="helpful-label">
          <VoteButton on={vote === "yes"} onClick={() => setVote("yes")}>
            Yes
          </VoteButton>
          <VoteButton on={vote === "no"} onClick={() => setVote("no")}>
            No
          </VoteButton>
        </div>
        <span className="font-mono text-[11px] text-al-fg-quaternary" role="status">
          {vote === "yes"
            ? "Thanks, noted."
            : vote === "no"
              ? "Tell us what was missing in an issue."
              : ""}
        </span>
      </div>

      <nav aria-label="Pagination" className="mt-[26px] flex flex-wrap justify-between gap-3.5">
        {prev ? (
          <Link href={docsHref(prev.id)} rel="prev" className={cardClass}>
            <div className="font-mono text-[10px] text-al-fg-quaternary">
              <span aria-hidden="true">←</span> Previous
            </div>
            <div className="mt-1 text-[13.5px] font-medium">{prev.title}</div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={docsHref(next.id)} rel="next" className={`${cardClass} text-right`}>
            <div className="font-mono text-[10px] text-al-fg-quaternary">
              Next <span aria-hidden="true">→</span>
            </div>
            <div className="mt-1 text-[13.5px] font-medium">{next.title}</div>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
