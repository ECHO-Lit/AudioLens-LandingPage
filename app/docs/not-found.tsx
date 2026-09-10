import Link from "next/link";
import { ACCENT } from "@/lib/theme";
import { docsHref, flatNav } from "./docs-data";

export default function DocsNotFound() {
  const first = flatNav()[0];
  return (
    <div className="py-16">
      <p className="font-mono text-[11px] tracking-[0.09em] text-al-fg-quaternary uppercase">404</p>
      <h1 className="mt-3 text-[32px] leading-[1.1] font-medium tracking-[-0.03em]">
        No such page
      </h1>
      <p className="mt-3 text-[14.5px] leading-[1.65] text-muted-foreground">
        That documentation page does not exist. Use the sidebar, or press{" "}
        <kbd className="rounded-[3px] border border-al-hairline-strong bg-card px-1.5 py-px font-mono text-[11px]">
          ⌘K
        </kbd>{" "}
        to search.
      </p>
      <Link
        href={docsHref(first.id)}
        className="mt-6 inline-block rounded-[5px] px-3.5 py-2 text-[13px] font-medium text-white hover:brightness-[0.88] focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
        style={{ background: ACCENT }}
      >
        Go to {first.title}
      </Link>
    </div>
  );
}
