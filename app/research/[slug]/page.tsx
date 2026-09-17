import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";
import { ACCENT } from "@/lib/theme";
import { ResearchCard } from "../research-card";
import { ResearchCover } from "../research-cover";
import {
  KIND_LABEL,
  RESEARCH,
  findResearch,
  formatResearchDate,
  relatedResearch,
  researchHref,
} from "../research-data";

type Props = { params: Promise<{ slug: string }> };

const RING = "shadow-[0_0_0_1px_var(--al-hairline)]";

export function generateStaticParams() {
  return RESEARCH.map((entry) => ({ slug: entry.slug }));
}

// Nothing outside RESEARCH exists, so every article can be prerendered.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findResearch(slug);
  if (!entry) return {};

  const url = `${SITE_URL}${researchHref(slug)}`;
  return {
    title: `${entry.title} — AudioLens research`,
    description: entry.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "AudioLens",
      title: entry.title,
      description: entry.excerpt,
      ...(entry.date ? { publishedTime: entry.date } : {}),
      ...(entry.authors ? { authors: entry.authors } : {}),
      ...(entry.cover ? { images: [{ url: entry.cover.src }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.excerpt,
      ...(entry.cover ? { images: [entry.cover.src] } : {}),
    },
  };
}

export default async function ResearchArticlePage({ params }: Props) {
  const { slug } = await params;
  const entry = findResearch(slug);
  // Guard before the dynamic import so the slug can only ever name a known entry.
  if (!entry) notFound();

  const { default: Content } = await import(`@/content/research/${slug}.mdx`);
  const related = relatedResearch(slug);
  const links = entry.links ?? {};

  return (
    <div className="font-display min-h-screen overflow-x-clip bg-al-canvas text-al-fg-strong">
      <SiteHeader active="research" />

      <article>
        {/* Masthead */}
        <header className="relative px-6 pt-[56px] sm:pt-[72px]">
          <div
            aria-hidden
            className="al-drift pointer-events-none absolute top-[-200px] left-1/2 z-0 h-[620px] w-[1300px] max-w-none opacity-60 blur-[30px]"
            style={{
              transform: "translateX(-50%)",
              animation: "al-drift 26s ease-in-out infinite",
              background:
                "radial-gradient(38% 34% at 50% 34%, var(--al-wash-a) 0%, var(--al-wash-a-0) 72%), radial-gradient(30% 30% at 32% 44%, var(--al-wash-b) 0%, var(--al-wash-b-0) 70%)",
            }}
          />

          <div className="relative z-[1] mx-auto max-w-[900px]">
            <nav aria-label="Breadcrumb">
              <ol className="flex list-none items-center gap-2 p-0 text-[12px] text-al-fg-quaternary">
                <li>
                  <Link
                    href="/research"
                    className="text-al-fg-tertiary no-underline hover:text-al-fg-strong"
                  >
                    Research
                  </Link>
                </li>
                <li aria-hidden className="text-al-fg-faint">
                  /
                </li>
                <li>{KIND_LABEL[entry.kind]}</li>
              </ol>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span
                className="font-code rounded-full px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase"
                style={
                  entry.kind === "publication"
                    ? {
                        color: "var(--al-accent-text)",
                        background: "var(--al-accent-tint)",
                      }
                    : {
                        color: "var(--al-fg-tertiary)",
                        background: "var(--al-surface-2)",
                      }
                }
              >
                {KIND_LABEL[entry.kind]}
              </span>
              {entry.date && (
                <time
                  dateTime={entry.date}
                  className="font-code text-[11.5px] text-al-fg-quaternary"
                >
                  {formatResearchDate(entry.date)}
                </time>
              )}
              {entry.readingTime && (
                <span className="font-code text-[11.5px] text-al-fg-quaternary">
                  {entry.readingTime}
                </span>
              )}
            </div>

            <h1 className="mt-6 mb-0 max-w-[22ch] text-[34px] leading-[1.04] font-semibold tracking-[-0.04em] text-balance sm:text-[46px] lg:text-[58px]">
              {entry.title}
            </h1>

            {(entry.authors || entry.venue) && (
              <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                {entry.authors && (
                  <span className="text-[15px] text-al-fg-body">
                    {entry.authors.join(", ")}
                  </span>
                )}
                {entry.venue && (
                  <span className="font-code text-[11.5px] text-al-fg-quaternary">
                    {entry.venue}
                  </span>
                )}
              </div>
            )}

            {/* Publications carry the paper actions; write-ups just go back. */}
            {entry.kind === "publication" ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.paper ?? "#"}
                  className="rounded-full px-6 py-3 text-[14.5px] font-medium text-white no-underline shadow-[0_14px_30px_-14px_var(--al-shadow-accent)] transition-[filter] hover:text-white hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  View paper
                </a>
                {links.pdf && (
                  <a
                    href={links.pdf}
                    className={`rounded-full bg-card/80 px-5 py-3 text-[14.5px] font-medium text-al-fg-strong no-underline transition-colors hover:bg-al-surface-3 hover:text-al-fg-strong ${RING}`}
                  >
                    PDF
                  </a>
                )}
                {links.code && (
                  <a
                    href={links.code}
                    className={`rounded-full bg-card/80 px-5 py-3 text-[14.5px] font-medium text-al-fg-strong no-underline transition-colors hover:bg-al-surface-3 hover:text-al-fg-strong ${RING}`}
                  >
                    Code
                  </a>
                )}
              </div>
            ) : (
              <div className="mt-8">
                <Link
                  href="/research"
                  className={`inline-flex items-center gap-2 rounded-full bg-card/80 px-5 py-3 text-[14.5px] font-medium text-al-fg-strong no-underline transition-colors hover:bg-al-surface-3 hover:text-al-fg-strong ${RING}`}
                >
                  <span aria-hidden>←</span> All research
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Hero cover */}
        <div className="relative z-[1] px-6 pt-12 sm:pt-14">
          <div className="mx-auto max-w-[1080px]">
            <ResearchCover
              entry={entry}
              ratio="21 / 9"
              priority
              className={`rounded-[26px] ${RING}`}
            />
          </div>
        </div>

        {/* Body. research-prose lifts the docs-scale MDX typography to article
            size -- see the rules in app/globals.css. */}
        <div className="px-6 pt-14 sm:pt-16">
          <div className="research-prose mx-auto max-w-[720px]">
            <Content />
          </div>
        </div>
      </article>

      {/* Read next */}
      {related.length > 0 && (
        <section className="px-6 pt-[90px] sm:pt-[120px]">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="m-0 text-[28px] leading-none font-semibold tracking-[-0.03em] sm:text-[36px]">
                Read next
              </h2>
              <Link
                href="/research"
                className="text-[14.5px] font-medium no-underline"
                style={{ color: "var(--al-accent-text)" }}
              >
                All research →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[22px]">
              {related.map((e) => (
                <ResearchCard key={e.slug} entry={e} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="pt-[90px] sm:pt-[120px]" />
      <SiteFooter />
    </div>
  );
}
