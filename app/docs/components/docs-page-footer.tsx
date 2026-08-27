"use client";

import { MouseEvent, useState } from "react";
import { NAV_GROUPS } from "../docs-data";

export function DocsPageFooter({
  active,
  onNavClick,
}: {
  active: string;
  onNavClick: (id: string) => (e: MouseEvent) => void;
}) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  const flat = NAV_GROUPS.flatMap((g) => g.items);
  const idx = flat.findIndex((it) => it.id === active);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  return (
    <>
      <div className="mt-11 flex flex-wrap items-center gap-3.5 border-t border-[rgba(20,23,28,0.1)] pt-5">
        <span className="text-[13px] text-[#6b7280]">Was this page helpful?</span>
        <div className="flex gap-2">
          <button
            onClick={() => setVote("yes")}
            className="cursor-pointer rounded-[5px] px-3.5 py-1.5 text-[12.5px]"
            style={{
              fontFamily: "revert",
              border: `1px solid ${vote === "yes" ? "rgba(30,79,216,0.35)" : "rgba(20,23,28,0.13)"}`,
              background: vote === "yes" ? "#eef3ff" : "#fff",
              color: vote === "yes" ? "#1e4fd8" : "#4b5563",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => setVote("no")}
            className="cursor-pointer rounded-[5px] px-3.5 py-1.5 text-[12.5px]"
            style={{
              fontFamily: "revert",
              border: `1px solid ${vote === "no" ? "rgba(20,23,28,0.28)" : "rgba(20,23,28,0.13)"}`,
              background: vote === "no" ? "#f7f7f6" : "#fff",
              color: vote === "no" ? "#14171c" : "#4b5563",
            }}
          >
            No
          </button>
        </div>
        <span className="font-mono text-[11px] text-[#9ca3af]">
          {vote === "yes"
            ? "Thanks, noted."
            : vote === "no"
              ? "Tell us what was missing in an issue."
              : ""}
        </span>
      </div>

      <div className="mt-[26px] flex flex-wrap justify-between gap-3.5">
        {prev ? (
          <a
            href={`#${prev.id}`}
            onClick={onNavClick(prev.id)}
            className="min-w-[200px] rounded-lg border border-[rgba(20,23,28,0.11)] bg-white px-4 py-3 text-[#14171c] hover:border-[rgba(30,79,216,0.3)]"
          >
            <div className="font-mono text-[10px] text-[#9ca3af]">← Previous</div>
            <div className="mt-1 text-[13.5px] font-medium">{prev.title}</div>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={`#${next.id}`}
            onClick={onNavClick(next.id)}
            className="min-w-[200px] rounded-lg border border-[rgba(20,23,28,0.11)] bg-white px-4 py-3 text-right text-[#14171c] hover:border-[rgba(30,79,216,0.3)]"
          >
            <div className="font-mono text-[10px] text-[#9ca3af]">Next →</div>
            <div className="mt-1 text-[13.5px] font-medium">{next.title}</div>
          </a>
        ) : (
          <span />
        )}
      </div>
    </>
  );
}
