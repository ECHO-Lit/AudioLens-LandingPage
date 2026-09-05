"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "../search-types";
import { ACCENT } from "../constants";

export function DocsToc({
  sectionId,
  items,
}: {
  sectionId: string;
  items: TocItem[] | undefined;
}) {
  const [active, setActive] = useState(items?.[0]?.id ?? "");

  // Reset to the first heading when the page changes. Derived during render
  // rather than in an effect, so the observer below never briefly tracks the
  // previous page's anchors.
  const [prevSection, setPrevSection] = useState(sectionId);
  if (prevSection !== sectionId) {
    setPrevSection(sectionId);
    setActive(items?.[0]?.id ?? "");
  }

  // Scroll-spy. Headings carry scroll-mt so anchor jumps clear the sticky
  // header; the same offset shows up here as the top rootMargin.
  useEffect(() => {
    if (!items?.length) return;

    const nodes = items
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="docs-toc sticky top-[60px] hidden max-h-[calc(100vh-60px)] overflow-y-auto py-[34px] pb-[60px] xl:block">
      <div className="mb-3 font-mono text-[10px] tracking-[0.11em] text-[#9ca3af] uppercase">
        On this page
      </div>
      {items && items.length ? (
        <nav aria-label="On this page">
          <ul className="flex list-none flex-col gap-0.5 border-l border-[rgba(20,23,28,0.1)] p-0">
            {items.map((t) => {
              const on = t.id === active;
              return (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    aria-current={on ? "location" : undefined}
                    className="-ml-px block py-[5px] pl-3 text-[12.5px] leading-[1.4] text-[#6b7280] hover:text-[#374151] focus-visible:ring-2 focus-visible:ring-[#1e4fd8] focus-visible:outline-none"
                    style={{
                      borderLeft: `2px solid ${on ? ACCENT : "transparent"}`,
                      ...(on ? { color: "#14171c" } : {}),
                      fontWeight: on ? 500 : 400,
                    }}
                  >
                    {t.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <div className="pl-2.5 text-[12.5px] text-[#9ca3af]">Nothing to show</div>
      )}
    </aside>
  );
}
