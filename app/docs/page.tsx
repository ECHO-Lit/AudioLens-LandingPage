"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { NAV_GROUPS } from "./docs-data";
import { SECTIONS, TOC_BY_SECTION } from "./sections";
import { DocsHeader } from "./components/docs-header";
import { DocsSidebar } from "./components/docs-sidebar";
import { DocsToc } from "./components/docs-toc";
import { DocsFooter } from "./components/docs-footer";

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
          <div className="mb-4 flex items-center gap-2 text-[12px] text-[#9ca3af]">
            <span>{selectedGroup?.label}</span>
            <span className="text-[#d1d5db]">/</span>
            <span className="text-[#4b5563]">{selectedItem?.title}</span>
          </div>

          <h1 className="m-0 text-[38px] leading-[1.08] font-medium tracking-[-0.03em]">
            {selectedItem?.title}
          </h1>

          {ActiveSection && <ActiveSection />}
        </main>

        <DocsToc
          tocItems={TOC_BY_SECTION[active]}
          tocActive={tocActive}
          onTocClick={goToToc}
        />
      </div>

      <DocsFooter />
    </div>
  );
}
