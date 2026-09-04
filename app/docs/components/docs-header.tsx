import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logomark } from "@/components/logomark";
import { HamburgerIcon } from "@/components/hamburger-icon";
import { ACCENT } from "../constants";

export function DocsHeader({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(20,23,28,0.09)] bg-[rgba(251,251,250,0.86)] backdrop-blur-[14px] backdrop-saturate-150">
      <div className="mx-auto flex h-[60px] max-w-[1504px] items-center gap-3 px-4 sm:gap-6 sm:px-8">
        <div className="flex flex-none items-center gap-[9px] text-[#14171c]">
          <Link href="/" className="flex items-center gap-[9px] text-[#14171c] hover:text-[#14171c]">
            <Logomark heights={[7, 15, 11, 4]} containerHeight={15} mutedLast />
            <span className="text-[15px] font-semibold tracking-[-0.01em] whitespace-nowrap">
              AudioLens
            </span>
          </Link>
          <span className="text-[15px] font-normal text-[#c9ccd1]">/</span>
          <span className="text-[15px] font-medium whitespace-nowrap text-[#4b5563]">Docs</span>
        </div>
        <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-[22px] md:flex-none">
          <button
            onClick={onOpenSearch}
            className="flex h-[34px] min-w-0 flex-1 cursor-text items-center gap-2 rounded-[6px] border border-[rgba(20,23,28,0.12)] bg-white px-2.5 text-left hover:border-[rgba(20,23,28,0.22)] md:w-[220px] md:flex-none"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2.4"
              className="flex-none"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M15.5 15.5 21 21" />
            </svg>
            <span className="min-w-0 flex-1 truncate text-[12.5px] text-[#9ca3af]">
              Search documentation
            </span>
            <span className="hidden rounded-[3px] border border-[rgba(20,23,28,0.12)] px-1 py-px font-mono text-[10px] text-[#9ca3af] md:inline">
              ⌘K
            </span>
          </button>
          <nav className="hidden items-center gap-[22px] text-[13.5px] text-[#4b5563] md:flex">
            <a href="#" className="text-[#4b5563] transition-colors hover:text-[#14171c]">
              Guides
            </a>
            <a href="#" className="text-[#4b5563] transition-colors hover:text-[#14171c]">
              API
            </a>
            <a href="#" className="text-[#4b5563] transition-colors hover:text-[#14171c]">
              Changelog
            </a>
            <a
              href="https://github.com/ECHO-Lit/ECHO-LIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b5563] transition-colors hover:text-[#14171c]"
            >
              GitHub
            </a>
            <a
              href="#"
              className="rounded-[5px] px-3.5 py-2 text-[13px] font-medium text-white hover:brightness-[0.88]"
              style={{ background: ACCENT }}
            >
              Dashboard
            </a>
          </nav>
        </div>

        <div ref={mobileRef} className="relative flex-none md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-8 w-8 items-center justify-center rounded-[6px] text-[#14171c] hover:bg-[rgba(20,23,28,0.06)]"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>

          {mobileOpen && (
            <div className="absolute top-[calc(100%+8px)] right-0 z-20 flex w-[200px] flex-col gap-1 rounded-[10px] border border-[rgba(20,23,28,0.12)] bg-white p-2 shadow-[0_8px_24px_rgba(20,23,28,0.12)]">
              <a href="#" className="rounded-[6px] px-3 py-2 text-[13.5px] text-[#4b5563] hover:bg-[#f7f7f6] hover:text-[#14171c]">
                Guides
              </a>
              <a href="#" className="rounded-[6px] px-3 py-2 text-[13.5px] text-[#4b5563] hover:bg-[#f7f7f6] hover:text-[#14171c]">
                API
              </a>
              <a href="#" className="rounded-[6px] px-3 py-2 text-[13.5px] text-[#4b5563] hover:bg-[#f7f7f6] hover:text-[#14171c]">
                Changelog
              </a>
              <a
                href="https://github.com/ECHO-Lit/ECHO-LIT"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[6px] px-3 py-2 text-[13.5px] text-[#4b5563] hover:bg-[#f7f7f6] hover:text-[#14171c]"
              >
                GitHub
              </a>
              <a
                href="#"
                className="mt-1 rounded-[6px] px-3 py-2 text-center text-[13px] font-medium text-white hover:brightness-[0.88]"
                style={{ background: ACCENT }}
              >
                Dashboard
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
