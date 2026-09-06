"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { Logomark } from "./logomark";
import { HamburgerIcon } from "./hamburger-icon";

const ACCENT = "#1e4fd8";
// Never hide the bar while still near the top of the page.
const REVEAL_ABOVE = 96;
// Ignore sub-pixel and rubber-band scroll noise, so the bar doesn't flicker.
const DIRECTION_THRESHOLD = 6;

const NAV_LINKS = [
  { key: "features", href: "/#features", label: "Features" },
  { key: "docs", href: "/docs", label: "Docs" },
  { key: "research", href: "/research", label: "Research" },
] as const;

export function SiteHeader({ active }: { active?: string }) {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  // Read in the scroll handler without making it a dependency, so the
  // listener is attached once instead of re-bound on every menu toggle.
  const mobileOpenRef = useRef(false);
  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    lastY.current = window.scrollY;
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y <= REVEAL_ABOVE || mobileOpenRef.current) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      // Only advance the reference point once a move was decisive enough to
      // act on; otherwise slow drags never accumulate past the threshold.
      if (Math.abs(delta) < DIRECTION_THRESHOLD) return;
      setHidden(delta > 0);
      lastY.current = y;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(evaluate);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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

  // Next's <Link> bails on scrolling for a same-route hash change, so
  // #features needs a manual smooth scroll when already on "/".
  const handleFeaturesClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "/#features");
  };

  // Layout and colours are the original header's; only the typeface
  // (font-display) follows the v2 design.
  return (
    <header
      className="font-display sticky top-0 z-30 px-4 pt-4 transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none sm:px-6 md:px-10"
      style={{
        transform: hidden ? "translateY(calc(-100% - 12px))" : "translateY(0)",
      }}
    >
      <div ref={mobileRef} className="mx-auto max-w-[1154px]">
        <div
          className="flex h-[60px] items-center gap-4 overflow-hidden rounded-full border border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.6)] py-2 pr-[10px] pl-[22px] backdrop-blur-[18px] backdrop-saturate-[1.7] md:gap-8"
          style={{
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

          <div className="ml-auto hidden items-center gap-8 md:flex">
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
