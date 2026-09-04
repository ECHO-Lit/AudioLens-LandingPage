"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { Logomark } from "./logomark";
import { HamburgerIcon } from "./hamburger-icon";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SHRINK_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: globalThis.MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
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
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 md:px-10">
      <div ref={mobileRef} className="mx-auto max-w-[1154px]">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center gap-4 overflow-hidden rounded-full border border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.6)] py-2 pr-[10px] pl-[22px] backdrop-blur-[18px] backdrop-saturate-[1.7] transition-[height] duration-300 ease-out md:gap-8"
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
            className="ml-auto hidden items-center gap-8 transition-opacity duration-300 ease-out md:flex"
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
                  className="text-[#4b5563] transition-colors hover:text-[#14171c]"
                  style={{
                    fontWeight: active === l.key ? 500 : 400,
                    ...(active === l.key ? { color: "#14171c" } : {}),
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

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="ml-auto flex h-8 w-8 flex-none items-center justify-center rounded-full text-[#14171c] md:hidden"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>

        {mobileOpen && (
          <div
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.92)] p-3 backdrop-blur-[18px] backdrop-saturate-[1.7] md:hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(20,23,28,0.05), 0 1px 2px rgba(20,23,28,0.04), 0 20px 44px -24px rgba(20,23,28,0.3)",
            }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={(e) => {
                  if (l.key === "features") handleFeaturesClick(e);
                  setMobileOpen(false);
                }}
                className="rounded-lg px-3 py-2.5 text-[14px] text-[#4b5563] hover:bg-[#f7f7f6] hover:text-[#14171c]"
                style={{
                  fontWeight: active === l.key ? 500 : 400,
                  ...(active === l.key ? { color: "#14171c" } : {}),
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://github.com/ECHO-Lit/ECHO-LIT"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2.5 text-[14px] text-[#4b5563] hover:bg-[#f7f7f6] hover:text-[#14171c]"
            >
              GitHub
            </a>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-full px-3.5 py-2.5 text-center text-[13.5px] font-medium text-white transition-[filter] hover:text-white hover:brightness-[0.88]"
              style={{ background: ACCENT }}
            >
              Open dashboard
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
