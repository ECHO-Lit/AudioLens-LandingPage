"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { NAV_GROUPS } from "./docs-data";
import { SECTIONS, TOC_BY_SECTION } from "./sections";
import { DocsHeader } from "./components/docs-header";
import { DocsSidebar } from "./components/docs-sidebar";
import { DocsToc } from "./components/docs-toc";
import { DocsPageFooter } from "./components/docs-page-footer";
import { DocsPageActions } from "./components/docs-page-actions";
import { ACCENT } from "./constants";
import Grainient from "@/components/Grainient";

export default function DocsPage() {
  const [active, setActive] = useState("quickstart");
  const [tocActive, setTocActive] = useState(TOC_BY_SECTION.quickstart[0].id);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll-spy for the right-hand "On this page" panel. Only sections
  // registered in TOC_BY_SECTION have in-page anchors to track.
  useEffect(() => {
    const items = TOC_BY_SECTION[active];
    if (!items?.length) return;
    const sections = items
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTocActive(entry.target.id);
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [active]);

  const q = query.trim().toLowerCase();
  const nav = NAV_GROUPS.map((g) => ({
    label: g.label,
    items: g.items.filter((it) => !q || it.title.toLowerCase().includes(q)),
  })).filter((g) => g.items.length);

  const selectedGroup = NAV_GROUPS.find((g) =>
    g.items.some((it) => it.id === active),
  );
  const selectedItem = selectedGroup?.items.find((it) => it.id === active);

  const goToNav = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    setActive(id);
    setTocActive(TOC_BY_SECTION[id]?.[0]?.id ?? "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToToc = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setTocActive(id);
  };

  const ActiveSection = SECTIONS[active];

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <DocsHeader query={query} setQuery={setQuery} searchRef={searchRef} />

      <div className="docs-shell mx-auto grid max-w-[1504px] grid-cols-[236px_minmax(0,1fr)_208px] items-start gap-8 px-8">
        <DocsSidebar nav={nav} active={active} onNavClick={goToNav} />

        <main className="min-w-0 py-[34px] pb-[88px]">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
              <span>{selectedGroup?.label}</span>
              <span className="text-[#d1d5db]">/</span>
              <span className="text-[#4b5563]">{selectedItem?.title}</span>
            </div>
            <DocsPageActions title={selectedItem?.title} desc={selectedItem?.desc} />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(30,79,216,0.14)]">
            <div className="absolute inset-0 z-0">
              <Grainient
                className="h-full w-full"
                color1="#8ab4ff"
                color2={ACCENT}
                color3="#0b1e63"
                timeSpeed={0}
                colorBalance={-0.15}
                warpStrength={1}
                warpFrequency={5}
                warpSpeed={2}
                warpAmplitude={50}
                blendAngle={180}
                blendSoftness={0.05}
                rotationAmount={180}
                noiseScale={2}
                grainAmount={0.1}
                grainScale={2}
                grainAnimated={false}
                contrast={1.5}
                gamma={1}
                saturation={1}
                centerX={0}
                centerY={0}
                zoom={1.05}
              />
            </div>
            <div className="relative z-10 px-8 pt-11 pb-6">
              <h1
                className="m-0 text-[42px] leading-[1.08] font-medium tracking-[-0.03em] text-white"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.35), 0 1px 12px rgba(0,0,0,0.2)" }}
              >
                {selectedItem?.title}
              </h1>
              {selectedItem?.desc && (
                <p
                  className="mt-2.5 max-w-[58ch] text-[16.5px] leading-[1.6] text-white/85"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
                >
                  {selectedItem.desc}
                </p>
              )}
            </div>
          </div>

          {ActiveSection && <ActiveSection />}

          <DocsPageFooter key={active} active={active} onNavClick={goToNav} />

          <div className="mt-[26px] flex flex-wrap justify-between gap-5 border-t border-[rgba(20,23,28,0.1)] pt-[18px] font-mono text-[10.5px] text-[#9ca3af]">
            <span>AudioLens docs · MIT License</span>
            <span>Waveform to logits</span>
          </div>
        </main>

        <DocsToc
          tocItems={TOC_BY_SECTION[active]}
          tocActive={tocActive}
          onTocClick={goToToc}
        />
      </div>
    </div>
  );
}
