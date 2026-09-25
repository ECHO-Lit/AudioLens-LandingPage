import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ACCENT } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Research — AudioLens",
  description:
    "Nothing published yet. Writeups and findings behind AudioLens will land here as they're ready.",
};

export default function ResearchPage() {
  return (
    <div className="font-display min-h-screen overflow-x-clip bg-al-canvas text-al-fg-strong">
      <SiteHeader active="research" />

      <section className="relative px-6 pt-[72px] text-center sm:pt-[88px] lg:pt-[104px]">
        {/* Same ambient wash as the landing hero, at a lower amplitude. */}
        <div
          aria-hidden
          className="al-drift pointer-events-none absolute top-[-140px] left-1/2 z-0 h-[760px] w-[1500px] max-w-none opacity-70 blur-[30px]"
          style={{
            transform: "translateX(-50%)",
            animation: "al-drift 26s ease-in-out infinite",
            background:
              "radial-gradient(38% 34% at 50% 34%, var(--al-wash-a) 0%, var(--al-wash-a-0) 72%), radial-gradient(30% 30% at 32% 44%, var(--al-wash-b) 0%, var(--al-wash-b-0) 70%)",
          }}
        />

        <div className="relative z-[1] mx-auto max-w-[1120px]">
          <div
            className="font-code text-[11.5px] tracking-[0.14em] uppercase"
            style={{ color: ACCENT }}
          >
            Research
          </div>

          <h1 className="mt-5 mb-0 text-[38px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-[52px] lg:text-[72px]">
            Papers, benchmarks
            <br />
            and write-ups.
          </h1>

          <p className="mx-auto mt-[26px] max-w-[56ch] text-[17px] leading-[1.6] text-al-fg-body text-pretty sm:text-[18px]">
            Nothing published yet. AudioLens is built in the open as an extension of ECHO —
            inspired by Google PAIR&apos;s LIT. Writeups and findings will land here as they&apos;re
            ready.
          </p>
        </div>

        <div className="relative z-[1] mx-auto mt-[64px] max-w-[1240px] overflow-hidden rounded-[22px]">
          {/* Animated SVG: plain img so the animation plays. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Research.svg"
            alt="AudioLens research"
            width={2400}
            height={1350}
            className="block h-[240px] w-full object-cover object-center sm:h-[340px] lg:h-[440px]"
          />
        </div>
      </section>

      <section
        id="papers"
        className="scroll-mt-24 px-6 pt-[70px] text-center sm:pt-[90px] lg:pt-[110px]"
      >
        <p className="m-0 text-[18px] text-al-fg-tertiary">Nothing added yet.</p>
      </section>

      <div className="pt-[90px] sm:pt-[120px]" />
      <SiteFooter />
    </div>
  );
}
