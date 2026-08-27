"use client";

import { useEffect, useState, MouseEvent } from "react";
import Link from "next/link";
import { Logomark } from "./logomark";

const ACCENT = "#1e4fd8";
const SHRINK_AT = 24;

const NAV_LINKS = [
  { key: "features", href: "/#features", label: "Features" },
  { key: "docs", href: "/docs", label: "Docs" },
  { key: "research", href: "/research", label: "Research" },
] as const;

export function SiteHeader({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SHRINK_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const expanded = !scrolled || hovered;

  // Next's <Link> bails on scrolling for a same-route hash change, so
  // #features needs a manual smooth scroll when already on "/".
  const handleFeaturesClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "/#features");
  };

  return (
    <header className="sticky top-0 z-30 px-10 pt-4">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="mx-auto flex max-w-[1154px] items-center gap-8 overflow-hidden rounded-full border border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.6)] pr-[10px] pl-[22px] backdrop-blur-[18px] backdrop-saturate-[1.7] transition-[height] duration-300 ease-out"
        style={{
          height: expanded ? 60 : 40,
          boxShadow:
            "0 0 0 1px rgba(20,23,28,0.05), 0 1px 2px rgba(20,23,28,0.04), 0 20px 44px -24px rgba(20,23,28,0.3)",
        }}
      >
        <Link href="/" className="flex flex-none items-center gap-[9px]">
          <Logomark heights={[7, 15, 11, 4]} containerHeight={15} mutedLast />
          <span className="text-[15px] font-semibold tracking-[-0.01em] whitespace-nowrap text-[#14171c]">
            AudioLens
          </span>
        </Link>

        <div
          className="ml-auto flex items-center gap-8 transition-opacity duration-300 ease-out"
          style={{
            opacity: expanded ? 1 : 0,
            pointerEvents: expanded ? "auto" : "none",
          }}
        >
          <nav className="flex gap-[26px] text-[13.5px] whitespace-nowrap">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={l.key === "features" ? handleFeaturesClick : undefined}
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
            className="rounded-full px-[17px] py-[9px] text-[13px] font-medium whitespace-nowrap text-white transition-[filter] hover:text-white hover:brightness-[0.88]"
            style={{ background: ACCENT }}
          >
            Open dashboard
          </a>
        </div>
      </div>
    </header>
  );
}
