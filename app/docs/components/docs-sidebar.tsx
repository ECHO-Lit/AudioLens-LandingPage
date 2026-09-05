"use client";

import Link from "next/link";
import { NAV_GROUPS, docsHref } from "../docs-data";
import { ACCENT } from "../constants";

export function DocsSidebar({
  active,
  onNavigate,
  className = "",
}: {
  active: string;
  /** Called after a link is followed -- used by the mobile drawer to close. */
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <nav aria-label="Documentation" className={className}>
      {NAV_GROUPS.map((group) => (
        <div key={group.label} className="mb-[26px]">
          <div className="mb-2.5 pl-2.5 font-mono text-[10px] tracking-[0.11em] text-[#9ca3af] uppercase">
            {group.label}
          </div>
          <ul className="flex list-none flex-col gap-px p-0">
            {group.items.map((item) => {
              const on = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={docsHref(item.id)}
                    onClick={onNavigate}
                    aria-current={on ? "page" : undefined}
                    className="flex items-center justify-between gap-2 rounded-[5px] px-2.5 py-1.5 text-[13.5px] leading-[1.3] text-[#4b5563] hover:bg-[#f0f0ef] hover:text-[#374151] focus-visible:ring-2 focus-visible:ring-[#1e4fd8] focus-visible:outline-none"
                    style={{
                      fontWeight: on ? 500 : 400,
                      ...(on ? { color: ACCENT, background: "#eef3ff" } : {}),
                    }}
                  >
                    <span>{item.title}</span>
                    {item.tag ? (
                      <span className="rounded-[3px] border border-[rgba(20,23,28,0.12)] px-1 py-px font-mono text-[9px] tracking-[0.04em] text-[#6b7280]">
                        {item.tag}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
