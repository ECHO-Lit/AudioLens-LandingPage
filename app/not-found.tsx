import Link from "next/link";
import { ThemedGrainient } from "@/components/grainient-theme";
import { Parallax } from "@/components/parallax";
import { ACCENT } from "@/lib/theme";

export default function NotFound() {
  return (
    <div className="font-display flex min-h-screen items-center overflow-x-clip bg-al-canvas text-al-fg-strong">
      <section className="relative w-full px-6 text-center">
        <div className="relative mx-auto max-w-[820px] overflow-hidden rounded-[32px] px-6 py-16 shadow-[0_0_0_1px_var(--al-hairline-soft)] sm:px-12 sm:py-24">
          <Parallax
            speed={0.08}
            max={56}
            className="absolute inset-x-0 -inset-y-16 z-0"
            aria-hidden="true"
          >
            <ThemedGrainient
              className="h-full w-full"
              color1="#c9dcff"
              color2="#eef1ff"
              color3="#ecdcff"
              dark={{ color1: "#101a3a", color2: "#0b1020", color3: "#1a1233" }}
              timeSpeed={0}
              colorBalance={0}
              warpStrength={1}
              warpFrequency={5}
              warpSpeed={2}
              warpAmplitude={50}
              blendAngle={180}
              blendSoftness={0.05}
              rotationAmount={180}
              noiseScale={2}
              grainAmount={0.06}
              grainScale={2}
              grainAnimated={false}
              contrast={1}
              gamma={1}
              saturation={0.9}
              centerX={0}
              centerY={0}
              zoom={1.05}
            />
          </Parallax>

          <div className="relative z-10">
            <div
              className="font-display text-[120px] leading-none font-semibold tracking-[-0.02em] sm:text-[160px]"
              style={{
                color: ACCENT,
                WebkitTextStroke: `2px ${ACCENT}`,
              }}
            >
              404
            </div>

            <h1 className="mt-[18px] mb-0 text-[38px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-[52px] lg:text-[64px]">
              Nothing on this timeline.
            </h1>

            <p className="mx-auto mt-[22px] mb-0 max-w-[46ch] text-[16px] leading-[1.6] text-al-fg-body sm:text-[18px]">
              That page moved, was renamed, or never emitted a token. Saliency
              can&apos;t attribute a route that doesn&apos;t exist.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="rounded-full px-7 py-[15px] text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_var(--al-shadow-accent)] transition-[filter] hover:text-white hover:brightness-90"
                style={{ background: ACCENT }}
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
