"use client";

import Link from "next/link";
import { NAV_GROUPS, docsHref } from "../docs-data";

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
          <div className="mb-2.5 pl-2.5 font-mono text-[10px] tracking-[0.11em] text-al-fg-quaternary uppercase">
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
                    className="flex items-center justify-between gap-2 rounded-[5px] px-2.5 py-1.5 text-[13.5px] leading-[1.3] text-muted-foreground hover:bg-al-surface-3 hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
                    style={{
                      fontWeight: on ? 500 : 400,
                      ...(on
                        ? { color: "var(--al-accent-text)", background: "var(--al-accent-tint)" }
                        : {}),
                    }}
                  >
                    <span>{item.title}</span>
                    {item.tag ? (
                      <span className="rounded-[3px] border border-al-hairline-strong px-1 py-px font-mono text-[9px] tracking-[0.04em] text-al-fg-tertiary">
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
