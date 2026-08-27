import { RefObject } from "react";
import Link from "next/link";
import { Logomark } from "@/components/logomark";
import { ACCENT } from "../constants";

export function DocsHeader({
  query,
  setQuery,
  searchRef,
}: {
  query: string;
  setQuery: (v: string) => void;
  searchRef: RefObject<HTMLInputElement | null>;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(20,23,28,0.09)] bg-[rgba(251,251,250,0.86)] backdrop-blur-[14px] backdrop-saturate-150">
      <div className="mx-auto flex h-[60px] max-w-[1504px] items-center gap-6 px-8">
        <Link href="/" className="flex items-center gap-[9px] text-[#14171c]">
          <Logomark heights={[7, 15, 11, 4]} containerHeight={15} mutedLast />
          <span className="text-[15px] font-semibold tracking-[-0.01em]">
            AudioLens
          </span>
          <span className="text-[15px] font-normal text-[#c9ccd1]">/</span>
          <span className="text-[15px] font-medium text-[#4b5563]">Docs</span>
        </Link>
        <div
          onClick={() => searchRef.current?.focus()}
          className="ml-6 flex h-[34px] max-w-[362px] flex-1 cursor-text items-center gap-2 rounded-[6px] border border-[rgba(20,23,28,0.12)] bg-white px-2.5 hover:border-[rgba(20,23,28,0.22)]"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2.4"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5 21 21" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={searchRef}
            placeholder="Search documentation"
            className="min-w-0 flex-1 border-none bg-transparent py-px text-[12.5px] text-[#14171c] outline-none"
          />
          <span className="rounded-[3px] border border-[rgba(20,23,28,0.12)] px-1 py-px font-mono text-[10px] text-[#9ca3af]">
            ⌘K
          </span>
        </div>
        <nav className="ml-auto flex items-center gap-[22px] text-[13.5px] text-[#4b5563]">
          <a href="#" className="text-[#4b5563]">
            Guides
          </a>
          <a href="#" className="text-[#4b5563]">
            API
          </a>
          <a href="#" className="text-[#4b5563]">
            Changelog
          </a>
          <a
            href="https://github.com/ECHO-Lit/ECHO-LIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4b5563]"
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
    </header>
  );
}
