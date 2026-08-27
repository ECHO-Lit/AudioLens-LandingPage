import Link from "next/link";
import { Logomark } from "./logomark";

const ACCENT = "#1e4fd8";

const NAV_LINKS = [
  { key: "features", href: "/#features", label: "Features" },
  { key: "docs", href: "/docs", label: "Docs" },
  { key: "research", href: "/research", label: "Research" },
] as const;

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-30 px-10 pt-4">
      <div
        className="mx-auto flex h-[60px] max-w-[1154px] items-center gap-8 rounded-full border border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.6)] pr-[10px] pl-[22px] backdrop-blur-[18px] backdrop-saturate-[1.7]"
        style={{
          boxShadow:
            "0 0 0 1px rgba(20,23,28,0.05), 0 1px 2px rgba(20,23,28,0.04), 0 20px 44px -24px rgba(20,23,28,0.3)",
        }}
      >
        <Link href="/" className="flex items-center gap-[9px]">
          <Logomark heights={[7, 15, 11, 4]} containerHeight={15} mutedLast />
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-[#14171c]">
            AudioLens
          </span>
          <span className="rounded-[3px] border border-[rgba(20,23,28,0.14)] px-[5px] py-px font-mono text-[10px] text-[#6b7280]">
            v1.0
          </span>
        </Link>
        <nav className="ml-auto flex gap-[26px] text-[13.5px]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="transition-colors hover:text-[#14171c]"
              style={{
                color: active === l.key ? "#14171c" : "#4b5563",
                fontWeight: active === l.key ? 500 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/ECHO-Lit/ECHO-LIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4b5563] transition-colors hover:text-[#14171c]"
          >
            GitHub
          </a>
        </nav>
        <a
          href="#"
          className="rounded-full px-[17px] py-[9px] text-[13px] font-medium text-white transition-[filter] hover:text-white hover:brightness-[0.88]"
          style={{ background: ACCENT }}
        >
          Open dashboard
        </a>
      </div>
    </header>
  );
}
