"use client";

import { Dialog } from "@base-ui/react/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HamburgerIcon } from "@/components/hamburger-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { DocsSidebar } from "./docs-sidebar";
import { ACCENT } from "@/lib/theme";
import { DASHBOARD_HREF, SITE_LINKS } from "../docs-links";

/**
 * Below the sidebar breakpoint this is the only way to reach the other doc
 * pages, so it carries the full nav tree -- not just the site-level links.
 */
export function DocsMobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close once a navigation lands. Clicking a link also calls onNavigate; this
  // additionally covers back/forward while the drawer is open. Derived during
  // render rather than in an effect so it does not cost a second pass.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label="Open documentation menu"
        className="flex h-8 w-8 flex-none items-center justify-center rounded-[6px] text-foreground hover:bg-al-surface-2 focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none lg:hidden"
      >
        <HamburgerIcon open={open} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/20 supports-backdrop-filter:backdrop-blur-[2px] data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0" />
        <Dialog.Popup className="fixed top-0 left-0 z-50 flex h-full w-[min(86vw,320px)] flex-col border-r border-al-hairline-strong bg-background shadow-[0_0_40px_var(--al-shadow-sm)] outline-none data-closed:animate-out data-closed:slide-out-to-left data-open:animate-in data-open:slide-in-from-left">
          <div className="flex h-[60px] flex-none items-center justify-between border-b border-al-hairline-strong px-4">
            <Dialog.Title className="text-[15px] font-semibold tracking-[-0.01em]">
              Documentation
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close documentation menu"
              className="flex h-8 w-8 items-center justify-center rounded-[6px] text-muted-foreground hover:bg-al-surface-2 focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
            >
              <HamburgerIcon open />
            </Dialog.Close>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
            <DocsSidebar active={active} onNavigate={() => setOpen(false)} />

            <div className="mt-2 flex flex-col gap-1 border-t border-al-hairline-strong pt-4">
              {SITE_LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[6px] px-2.5 py-2 text-[13.5px] text-muted-foreground hover:bg-al-surface-3 hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="rounded-[6px] px-2.5 py-2 text-[13.5px] text-muted-foreground hover:bg-al-surface-3 hover:text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
                  >
                    {l.label}
                  </Link>
                ),
              )}
              <div className="mt-1 flex items-center justify-between rounded-[6px] px-2.5 py-2">
                <span className="text-[13.5px] text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <a
                href={DASHBOARD_HREF}
                className="mt-1 rounded-[6px] px-2.5 py-2 text-center text-[13px] font-medium text-white hover:brightness-[0.88] focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
                style={{ background: ACCENT }}
              >
                Dashboard
              </a>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
