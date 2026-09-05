"use client";

import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { DocsHeader } from "./components/docs-header";
import { DocsSidebar } from "./components/docs-sidebar";
import { DocsToc } from "./components/docs-toc";
import { DocsSearchDialog } from "./components/docs-search-dialog";
import { TOC_BY_SECTION } from "./docs-index.generated";
import { docsHref } from "./docs-data";

/**
 * Persistent shell around every docs page. Lives in the layout, so the search
 * dialog, its ⌘K listener and the sidebar survive navigation between pages
 * instead of remounting.
 */
export function DocsChrome({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  // The [slug] segment. Null on /docs itself, which redirects away.
  const active = useSelectedLayoutSegment() ?? "";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Headings carry scroll-mt, so handing the hash to the router is enough --
  // no manual offset maths, and the URL stays shareable.
  const handleSearchSelect = (id: string, headingId?: string) => {
    setSearchOpen(false);
    router.push(headingId ? `${docsHref(id)}#${headingId}` : docsHref(id));
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <a
        href="#docs-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[6px] focus:bg-white focus:px-4 focus:py-2 focus:text-[13px] focus:font-medium focus:text-[#14171c] focus:ring-2 focus:ring-[#1e4fd8] focus:outline-none"
      >
        Skip to content
      </a>

      <DocsHeader active={active} onOpenSearch={() => setSearchOpen(true)} />
      <DocsSearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onSelect={handleSearchSelect}
      />

      {/* One breakpoint scale for the whole shell: sidebar appears at lg, the
          TOC column at xl. The header flips at the same widths. */}
      <div className="mx-auto grid max-w-[1504px] grid-cols-[minmax(0,1fr)] items-start gap-8 px-4 sm:px-8 lg:grid-cols-[236px_minmax(0,1fr)] xl:grid-cols-[236px_minmax(0,1fr)_208px]">
        <DocsSidebar
          active={active}
          className="sticky top-[60px] hidden max-h-[calc(100vh-60px)] overflow-y-auto border-r border-[rgba(20,23,28,0.08)] py-[30px] pr-5 pb-[60px] lg:block"
        />

        <main id="docs-content" className="min-w-0 py-[34px] pb-[88px]">
          {children}
        </main>

        <DocsToc sectionId={active} items={TOC_BY_SECTION[active]} />
      </div>
    </div>
  );
}
