"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ACCENT } from "@/lib/theme";

export type Panel = {
  no: string;
  id: string;
  meta: string;
  title: string;
  question: string;
  body: string;
};

const RING = "shadow-[0_0_0_1px_var(--al-hairline)]";
const INITIAL = 3;

// The extra cards stay in the DOM (just `hidden`) so their links remain
// crawlable and the count in the button is always the real one.
export function PanelGrid({ panels }: { panels: Panel[] }) {
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const extra = panels.length - INITIAL;

  const toggle = () => {
    const next = !expanded;
    setExpanded(next);
    // Collapsing shrinks the page under the button; bring the grid back into
    // view if its top is already scrolled off.
    if (!next) {
      const top = gridRef.current?.getBoundingClientRect().top ?? 0;
      if (top < 0) {
        gridRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        ref={gridRef}
        id="panel-grid"
        className="mt-14 grid scroll-mt-28 grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-[22px]"
      >
        {panels.map((p, i) => (
          <Link
            key={p.no}
            href={`/docs/${p.id}`}
            className={`block rounded-[22px] bg-card px-8 pt-[34px] pb-9 text-al-fg-strong transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:text-al-fg-strong hover:shadow-[0_0_0_1px_rgba(27,72,224,0.3),0_30px_60px_-34px_var(--al-shadow-lift)] ${RING} ${
              i >= INITIAL && !expanded ? "hidden" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-code text-[11.5px]" style={{ color: ACCENT }}>
                {p.no}
              </span>
              <span className="font-code text-[10.5px] text-al-fg-quaternary">
                {p.meta}
              </span>
            </div>
            <h3 className="mt-[26px] mb-0 text-[26px] leading-[1.1] font-semibold tracking-[-0.025em]">
              {p.title}
            </h3>
            <p className="mt-3 mb-0 text-[15.5px] leading-[1.5] font-medium text-al-fg-strong text-pretty">
              {p.question}
            </p>
            <p className="mt-2 mb-0 text-[15px] leading-[1.62] text-al-fg-body text-pretty">
              {p.body}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls="panel-grid"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-al-fg-strong shadow-[0_0_0_1px_var(--al-hairline-strong)] transition-colors hover:bg-al-surface-3"
        >
          {expanded ? "Show less" : `Show ${extra} more`}
          <span
            aria-hidden
            className={`text-[13px] transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          >
            ↓
          </span>
        </button>
      </div>
    </>
  );
}
