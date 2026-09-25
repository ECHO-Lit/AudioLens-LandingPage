import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TextReveal } from "@/components/text-reveal";
import { ACCENT } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About — AudioLens",
  description:
    "Why AudioLens exists, where it came from, and the people who built it.",
};

const EYEBROW = "font-code text-[11.5px] tracking-[0.14em] uppercase";

// Facts here come from docs/intro and docs/licenses; keep them in step with
// those pages.

export default function AboutPage() {
  return (
    <div className="font-display min-h-screen overflow-x-clip bg-al-canvas text-al-fg-strong">
      <SiteHeader active="about" />

      {/* Hero: same wash, eyebrow and title as the research page. */}
      <section className="relative px-6 pt-[72px] text-center sm:pt-[88px] lg:pt-[104px]">
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
          <div className={EYEBROW} style={{ color: ACCENT }}>
            About us
          </div>

          <h1 className="mt-5 mb-0 text-[38px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-[52px] lg:text-[72px]">
            Opening up the black box
            <br />
            of speech models.
          </h1>

          <p className="mx-auto mt-[26px] max-w-[56ch] text-[17px] leading-[1.6] text-al-fg-body text-pretty sm:text-[18px]">
            AudioLens is an open-source workbench for looking inside speech
            models, built in the open as an extension of ECHO.
          </p>
        </div>

        {/* Logo banner: the image alone, no frame or outline. */}
        <div className="relative z-[1] mx-auto mt-[64px] max-w-[1240px] overflow-hidden rounded-[22px]">
          <Image
            src="/assets/logo.jpeg"
            alt="The AudioLens logo: three flowing lines inside a glowing rounded square, on a deep blue background."
            width={2880}
            height={1440}
            priority
            className="block h-[240px] w-full object-cover object-center sm:h-[340px] lg:h-[440px]"
          />
        </div>
      </section>

      {/* Vision: a narrow, left-aligned reading column under a large heading. */}
      <section
        id="vision"
        className="scroll-mt-24 px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]"
      >
        <div className="mx-auto max-w-[780px]">
          <TextReveal
            as="h2"
            text="Our vision"
            className="m-0 text-[40px] leading-none font-semibold tracking-[-0.04em] sm:text-[52px] lg:text-[64px]"
          />
          <div className="mt-8 flex flex-col gap-6 text-[18px] leading-[1.65] text-al-fg-body text-pretty sm:text-[20px]">
            <p className="m-0">
              Speech models are hard to debug from the outside. A transcript or
              a confidence score tells you what a model predicted, not why.
            </p>
            <p className="m-0">
              AudioLens makes the why answerable: which parts of the waveform
              the model leaned on, whether a saliency map can be trusted,
              whether it holds up across accents and speakers, and where in
              the network a property like pitch or phoneme identity actually
              lives. All of it interactive, on real audio, without a one-off
              script for every question.
            </p>
            <p className="m-0">
              It is the audio counterpart to Google PAIR&apos;s LIT, and it
              builds on ECHO, an MIT-licensed audio interpretability tool first
              released as <em>LIT for Voice</em> (v1.0.0, October 2024). In
              2026, Januda Lelwala, Janith Mahanama and Hesandi Mallawarachchi
              extended it into the workbench you see here, with nine analysis
              panels on one shared timeline. Full attribution, including
              ECHO&apos;s original authors, is on{" "}
              <Link href="/docs/licenses" className="underline underline-offset-4">
                the licenses page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Get involved: same reading column as the vision. */}
      <section
        id="get-involved"
        className="scroll-mt-24 px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]"
      >
        <div className="mx-auto max-w-[780px]">
          <TextReveal
            as="h2"
            text="Get involved"
            className="m-0 text-[40px] leading-none font-semibold tracking-[-0.04em] sm:text-[52px] lg:text-[64px]"
          />
          <div className="mt-8 flex flex-col gap-6 text-[18px] leading-[1.65] text-al-fg-body text-pretty sm:text-[20px]">
            <p className="m-0">
              AudioLens is built in the open, and there are a few ways in. To
              propose a change, start with the{" "}
              <Link href="/docs/contributing" className="underline underline-offset-4">
                contributing guide
              </Link>
              , which covers the branch and pull request conventions.
            </p>
            <p className="m-0">
              If you find a security issue, please report it privately through
              the{" "}
              <Link href="/docs/security" className="underline underline-offset-4">
                security page
              </Link>{" "}
              rather than a public issue. Everything else, the code, the issues
              and the releases, lives on{" "}
              <a
                href="https://github.com/ECHO-Lit/ECHO-LIT"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
