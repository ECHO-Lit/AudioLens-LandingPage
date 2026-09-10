import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { docsHref, findNavGroup, findNavItem, flatNav } from "../docs-data";
import { DocsPageActions } from "../components/docs-page-actions";
import { DocsPageFooter } from "../components/docs-page-footer";
import { ThemedGrainient } from "@/components/grainient-theme";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return flatNav().map((item) => ({ slug: item.id }));
}

// Nothing outside NAV_GROUPS exists, so every page can be prerendered.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findNavItem(slug);
  if (!item) return {};

  const url = `${SITE_URL}${docsHref(slug)}`;
  return {
    title: item.title,
    description: item.desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "AudioLens docs",
      title: `${item.title} — AudioLens docs`,
      description: item.desc,
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} — AudioLens docs`,
      description: item.desc,
    },
  };
}

export default async function DocsSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = findNavItem(slug);
  // Guard before the dynamic import so the slug can only ever name a known page.
  if (!item) notFound();

  const group = findNavGroup(slug);
  const { default: Content } = await import(`@/content/docs/${slug}.mdx`);

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-2">
        <nav aria-label="Breadcrumb">
          <ol className="flex list-none items-center gap-2 p-0 text-[12px] text-al-fg-quaternary">
            <li>{group?.label}</li>
            <li aria-hidden="true" className="text-al-fg-faint">
              /
            </li>
            <li className="text-muted-foreground">{item.title}</li>
          </ol>
        </nav>
        <DocsPageActions title={item.title} desc={item.desc} slug={slug} />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-al-accent-line">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* Blue-on-dark triple already reads correctly in both themes --
              only the contrast eases off in dark so it stays a backdrop
              instead of glowing on the near-black page around it. */}
          <ThemedGrainient
            className="h-full w-full"
            color1="#8ab4ff"
            color2="#1e4fd8"
            color3="#0b1e63"
            dark={{ contrast: 1.2 }}
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
        <div className="relative z-10 px-5 pt-9 pb-6 sm:px-8 sm:pt-11">
          <h1
            className="m-0 text-[32px] leading-[1.08] font-medium tracking-[-0.03em] text-white sm:text-[42px]"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.35), 0 1px 12px rgba(0,0,0,0.2)" }}
          >
            {item.title}
          </h1>
          <p
            className="mt-2.5 text-[15px] leading-[1.6] text-white/85 sm:text-[16.5px]"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
          >
            {item.desc}
          </p>
        </div>
      </div>

      {/* Marked so "Copy page" can lift the real prose out of the DOM. */}
      <div data-docs-prose>
        <Content />
      </div>

      <DocsPageFooter active={slug} />

      <div className="mt-[26px] flex flex-wrap justify-between gap-5 border-t border-al-hairline-strong pt-[18px] font-mono text-[10.5px] text-al-fg-quaternary">
        <span>AudioLens docs · MIT License</span>
        <span>Waveform to logits</span>
      </div>
    </>
  );
}
