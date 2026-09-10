"use client";

import Link from "next/link";
import { Logomark } from "@/components/logomark";
import { ThemeToggle } from "@/components/theme-toggle";
import { ACCENT } from "@/lib/theme";
import { DASHBOARD_HREF, SITE_LINKS } from "../docs-links";
import { DocsMobileNav } from "./docs-mobile-nav";

function SearchIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="flex-none"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </svg>
  );
}

export function DocsHeader({
  active,
  onOpenSearch,
}: {
  active: string;
  onOpenSearch: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-al-hairline-strong bg-[var(--al-header-bg)] backdrop-blur-[14px] backdrop-saturate-150 dark:backdrop-saturate-100">
      <div className="mx-auto flex h-[60px] max-w-[1504px] items-center gap-3 px-4 sm:gap-6 sm:px-8">
        <DocsMobileNav active={active} />

        <div className="flex flex-none items-center gap-[9px] text-foreground">
          <Link
            href="/"
            className="flex items-center gap-[9px] text-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
          >
            <Logomark heights={[7, 15, 11, 4]} containerHeight={15} mutedLast />
            <span className="text-[15px] font-semibold tracking-[-0.01em] whitespace-nowrap">
              AudioLens
            </span>
          </Link>
          <span className="text-[15px] font-normal text-al-fg-faint" aria-hidden="true">
            /
          </span>
          <Link
            href="/docs"
            className="text-[15px] font-medium whitespace-nowrap text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
          >
            Docs
          </Link>
        </div>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-[22px]">
          {/* Full search field from sm up; icon-only button on narrow screens,
              which is the only search affordance touch users get. */}
          <button
            onClick={onOpenSearch}
            aria-label="Search documentation"
            className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[6px] border border-al-hairline-strong bg-card text-al-fg-quaternary hover:border-al-hairline-hover focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none sm:hidden"
          >
            <SearchIcon size={15} />
          </button>

          <button
            onClick={onOpenSearch}
            className="hidden h-[34px] w-[190px] cursor-text items-center gap-2 rounded-[6px] border border-al-hairline-strong bg-card px-2.5 text-left text-al-fg-quaternary hover:border-al-hairline-hover focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none sm:flex lg:w-[220px]"
          >
            <SearchIcon />
            <span className="min-w-0 flex-1 truncate text-[12.5px]">Search documentation</span>
            <span className="hidden rounded-[3px] border border-al-hairline-strong px-1 py-px font-mono text-[10px] lg:inline">
              ⌘K
            </span>
          </button>

          {/* ThemeToggle sits outside the lg:flex nav below so it stays
              reachable at every width, not just when the sidebar nav is
              visible. */}
          <ThemeToggle />

          {/* Promoted from md: to lg: so it flips at the same width the sidebar
              collapses -- the two used to disagree between 768 and 820px. */}
          <nav
            aria-label="Site"
            className="hidden items-center gap-[22px] text-[13.5px] text-muted-foreground lg:flex"
          >
            {SITE_LINKS.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
                >
                  {l.label}
                </Link>
              ),
            )}
            <a
              href={DASHBOARD_HREF}
              className="rounded-[5px] px-3.5 py-2 text-[13px] font-medium text-white hover:brightness-[0.88] focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
              style={{ background: ACCENT }}
            >
              Dashboard
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
