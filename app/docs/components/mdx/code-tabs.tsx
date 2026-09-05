"use client";

import { Children, isValidElement, useId, useRef, useState, type ReactNode } from "react";
import { CodeChromeContext } from "./code-block";
import { CopyButton } from "./copy-button";

/**
 * Tabbed code blocks. Children are ordinary MDX fences -- one per label:
 *
 *   <CodeTabs labels={["docker", "nvidia"]}>
 *   ```bash
 *   ...
 *   ```
 *   ```bash
 *   ...
 *   ```
 *   </CodeTabs>
 *
 * Only the active fence is mounted, so the copy button can read the visible
 * block's textContent without picking a specific child.
 */
export function CodeTabs({
  labels,
  label = "Code variants",
  children,
}: {
  labels: string[];
  label?: string;
  children: ReactNode;
}) {
  const panels = Children.toArray(children).filter(isValidElement);
  const [tab, setTab] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const count = Math.min(labels.length, panels.length);
  if (count === 0) return null;

  const active = Math.min(tab, count - 1);

  // Roving tabindex: only the selected tab is in the tab order, arrows move
  // between them. Standard APG tabs behaviour.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    let nextIndex: number | null = null;
    if (delta !== 0) nextIndex = (active + delta + count) % count;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = count - 1;
    if (nextIndex === null) return;
    e.preventDefault();
    setTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div
      className="mt-[18px] overflow-hidden rounded-[9px] border border-[rgba(20,23,28,0.13)] bg-white"
      style={{ boxShadow: "0 1px 2px rgba(20,23,28,0.04)" }}
    >
      <div className="flex items-center gap-0.5 border-b border-[rgba(20,23,28,0.1)] bg-[#f7f7f6] px-2 py-1.5">
        <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="flex gap-0.5">
          {labels.slice(0, count).map((l, i) => (
            <button
              key={l}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setTab(i)}
              className="cursor-pointer rounded-[5px] px-[11px] py-1.5 font-mono text-[11px] text-[#8b929c] hover:text-[#4b5563] focus-visible:ring-2 focus-visible:ring-[#1e4fd8] focus-visible:outline-none"
              style={i === active ? { color: "#14171c", background: "#fff" } : undefined}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="ml-auto">
          <CopyButton getText={() => bodyRef.current?.textContent ?? ""} />
        </div>
      </div>

      <div
        ref={bodyRef}
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        // No tabIndex: shiki already renders the scrollable <pre> focusable,
        // so adding one here would create a second stop on the same region.
      >
        <CodeChromeContext.Provider value={false}>{panels[active]}</CodeChromeContext.Provider>
      </div>
    </div>
  );
}
