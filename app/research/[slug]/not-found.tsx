import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ACCENT } from "@/lib/theme";

export default function ResearchArticleNotFound() {
  return (
    <div className="font-display min-h-screen overflow-x-clip bg-al-canvas text-al-fg-strong">
      <SiteHeader active="research" />

      <section className="px-6 pt-[120px] pb-[140px] text-center">
        <div className="mx-auto max-w-[560px]">
          <p className="font-code text-[11px] tracking-[0.14em] text-al-fg-quaternary uppercase">
            404
          </p>
          <h1 className="mt-4 mb-0 text-[36px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[48px]">
            No such entry
          </h1>
          <p className="mx-auto mt-5 max-w-[42ch] text-[16px] leading-[1.6] text-al-fg-body text-pretty">
            That paper or write-up does not exist, or has not been published
            yet.
          </p>
          <Link
            href="/research"
            className="mt-9 inline-block rounded-full px-7 py-[15px] text-[15px] font-medium text-white no-underline transition-[filter] hover:text-white hover:brightness-90 focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none"
            style={{ background: ACCENT }}
          >
            Back to research
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
