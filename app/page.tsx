import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Grainient from "@/components/Grainient";

const ACCENT = "#1b48e0";
const EYEBROW = "Interpretability for speech models";

const CHIPS = [
  "Whisper",
  "Wav2Vec2",
  "Custom checkpoints",
  "CUDA · ROCm · MPS",
  "Self-hosted",
];

const PREMISE = [
  {
    figure: "0.072",
    tone: ACCENT,
    bg: "#f6f8ff",
    title: "A score hides the failure",
    body: "Word error rate tells you that something broke. It never tells you which 300 milliseconds of audio broke it.",
  },
  {
    figure: "3000",
    tone: "#0a0c11",
    bg: "#f7f7f6",
    title: "Embeddings hide the structure",
    body: "Points in latent space only become useful once clusters, outliers and noise flags are attached to real datapoints.",
  },
  {
    figure: "56%",
    tone: "#0a0c11",
    bg: "#f7f7f6",
    title: "Attribution needs context",
    body: "A salient segment matters only when you can hear it, perturb it and watch the prediction change in the same view.",
  },
];

const TIMELINE = [
  { range: "6.7-6.9s", label: "Saliency peak", value: "68%" },
  { range: "13.6-13.9s", label: "Attention head L6-H3", value: "0.41" },
  { range: "18.4-18.6s", label: "Nearest neighbour drift", value: "2.1σ" },
  { range: "19.3-19.7s", label: "Perturbation delta", value: "+0.09" },
];

const PANELS = [
  {
    no: "01",
    meta: "Grad-CAM · IG",
    title: "Saliency mapping",
    body: "Gradient-weighted attribution over the raw waveform, ranked by contribution to each predicted token and drawn back onto the audio.",
  },
  {
    no: "02",
    meta: "Encoder · cross",
    title: "Attention",
    body: "Per-head, per-layer attention across encoder frames, readable as a matrix or projected onto the timeline you already selected.",
  },
  {
    no: "03",
    meta: "PCA · HDBSCAN",
    title: "Embedding projector",
    body: "Dataset-level embeddings in PCA and UMAP space, with clustering, noise flags and a separation score reported honestly.",
  },
  {
    no: "04",
    meta: "12 transforms",
    title: "Perturbation lab",
    body: "Add noise, shift pitch, clip and mask regions, then watch the metrics move. Robustness measured, not assumed.",
  },
  {
    no: "05",
    meta: "WER · CER",
    title: "Transcript diffing",
    body: "Prediction against ground truth aligned word by word, with WER, CER and Levenshtein distance surfaced per datapoint.",
  },
  {
    no: "06",
    meta: "Slice reporting",
    title: "Fairness diagnostics",
    body: "Slice metrics by speaker, accent, language or any metadata column to find where the model quietly fails.",
  },
];

// The design draws every hairline as a 1px ring rather than a border, so the
// rounded corners stay crisp underneath the layered shadows.
const RING = "shadow-[0_0_0_1px_rgba(10,12,17,0.08)]";

export default function Home() {
  // overflow-x-clip, not -hidden: `hidden` on one axis forces the other to
  // `auto`, which turns the wrapper into a scroll container and stops the
  // sticky header from sticking.
  return (
    <div className="font-display min-h-screen overflow-x-clip bg-white text-[#0a0c11]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative px-6 pt-[72px] text-center sm:pt-[88px] lg:pt-[104px]">
        {/* Geometry is the v2 artboard's verbatim: left:50% plus translateX(-50%),
            with the drift animation's own transform taking over once it runs. */}
        <div
          aria-hidden
          className="al-drift pointer-events-none absolute top-[-140px] left-1/2 z-0 h-[900px] w-[1500px] max-w-none opacity-90 blur-[30px]"
          style={{
            transform: "translateX(-50%)",
            animation: "al-drift 26s ease-in-out infinite",
            background:
              "radial-gradient(38% 34% at 50% 34%, rgba(27,72,224,0.20) 0%, rgba(27,72,224,0) 72%), radial-gradient(30% 30% at 30% 44%, rgba(102,163,255,0.22) 0%, rgba(102,163,255,0) 70%), radial-gradient(28% 28% at 70% 40%, rgba(160,120,255,0.16) 0%, rgba(160,120,255,0) 72%)",
          }}
        />

        <div className="relative z-[1] mx-auto max-w-[1120px]">
          <div
            className={`inline-flex items-center gap-2.5 rounded-full bg-white/75 py-[7px] pr-2 pl-3.5 text-[13px] text-[#535a67] ${RING}`}
          >
            <span
              className="font-code text-[11px] tracking-[0.06em]"
            >
              v1.0
            </span>
            <span>{EYEBROW}</span>
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center text-[12px] text-[#535a67]">
              →
            </span>
          </div>

          <h1 className="mt-[26px] mb-0 text-[44px] leading-[0.94] font-semibold tracking-[-0.045em] text-balance sm:text-[64px] md:text-[80px] lg:text-[104px]">
            Listen to the
            <br />
            model thinking.
          </h1>

          <p className="mx-auto mt-[30px] max-w-[60ch] text-[17px] leading-[1.55] font-normal text-[#535a67] text-pretty sm:text-[20px]">
            AudioLens is an interpretability workbench for speech models. Follow
            a single prediction from raw waveform to emitted token, across
            saliency, attention, embeddings and perturbation, on one shared
            timeline.
          </p>

          <div className="mt-[38px] flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="rounded-full px-7 py-[15px] text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(27,72,224,0.7)] transition-[filter] hover:text-white hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Open the dashboard
            </a>
            <Link
              href="/docs"
              className={`rounded-full bg-white/80 px-[26px] py-[15px] text-[15px] font-medium text-[#0a0c11] transition-colors hover:bg-[#f4f5f7] hover:text-[#0a0c11] ${RING}`}
            >
              Read the docs
            </Link>
          </div>
        </div>

        {/* Product shot */}
        <div className="relative z-[1] mx-auto mt-[74px] max-w-[1240px]">
          <div className="relative rounded-[26px] bg-linear-to-b from-white/90 to-white/50 p-2.5 shadow-[0_0_0_1px_rgba(10,12,17,0.07),0_70px_120px_-60px_rgba(10,32,90,0.55)]">
            <div className={`overflow-hidden rounded-[18px] bg-white ${RING}`}>
              <div className="flex h-[42px] items-center gap-3.5 bg-[#f7f8fa] px-4 shadow-[inset_0_-1px_0_rgba(10,12,17,0.07)]">
                <div className="flex gap-[7px]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e3e5e9]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e3e5e9]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e3e5e9]" />
                </div>
                <div
                  className={`font-code flex h-6 max-w-[400px] flex-1 items-center rounded-full bg-white px-3 text-[11px] text-[#8b929c] ${RING}`}
                >
                  audiolens.app/lab/whisper-base
                </div>
                <span className="font-code ml-auto hidden text-[10.5px] text-[#a8adb5] sm:inline">
                  SAA dataset
                </span>
              </div>
              <Image
                src="/assets/dashboard.png"
                alt="AudioLens dashboard showing audio embeddings, saliency overlay and datapoint editor"
                width={1915}
                height={980}
                className="block h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="font-code relative z-[1] mx-auto flex max-w-[1240px] flex-wrap justify-center gap-3.5 pt-[34px] text-[11.5px] text-[#6b7280]">
          {CHIPS.map((c) => (
            <span key={c} className={`rounded-full bg-white px-3.5 py-2 ${RING}`}>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* The premise */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[24ch]">
            <h2 className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]">
              A transcript is not an explanation.
            </h2>
          </div>

          <div className="mt-[70px] grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-[26px]">
            {PREMISE.map((p) => (
              <div
                key={p.title}
                className="rounded-[22px] px-[30px] pt-8 pb-[34px] shadow-[0_0_0_1px_rgba(10,12,17,0.06)]"
                style={{ background: p.bg }}
              >
                <div
                  className="font-code text-[44px] leading-none font-normal tracking-[-0.03em]"
                  style={{ color: p.tone }}
                >
                  {p.figure}
                </div>
                <div className="mt-5 text-[19px] font-semibold tracking-[-0.015em]">
                  {p.title}
                </div>
                <p className="mt-[9px] mb-0 text-[15px] leading-[1.6] text-[#535a67] text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One timeline */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-[#0a0c11] px-6 pt-[52px] text-white sm:px-10 sm:pt-[64px] lg:px-16 lg:pt-[78px]">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-160px] right-[-160px] h-[620px] w-[620px] blur-[20px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(27,72,224,0.55) 0%, rgba(27,72,224,0) 68%)",
            }}
          />
          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-end gap-14">
            <div>
              <div className="font-code text-[11.5px] tracking-[0.14em] text-[#8fabff] uppercase">
                One timeline
              </div>
              <h2 className="mt-5 mb-0 text-[32px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[42px] lg:text-[60px]">
                Every panel points at the same frames.
              </h2>
              <p className="mt-6 mb-0 max-w-[46ch] text-[17px] leading-[1.6] text-white/65 text-pretty">
                Select a span once. Saliency, attention heads, embedding
                neighbours and perturbation deltas all recompute against it, so
                evidence accumulates instead of scattering across tabs.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 pb-1.5">
              {TIMELINE.map((t) => (
                <div
                  key={t.range}
                  className="grid grid-cols-[76px_1fr_52px] items-center gap-[18px] rounded-[14px] bg-white/5 px-[18px] py-[15px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)] sm:grid-cols-[96px_1fr_52px]"
                >
                  <span className="font-code text-[11.5px] text-white/50">
                    {t.range}
                  </span>
                  <span className="text-[15px] font-medium">{t.label}</span>
                  <span className="font-code text-right text-[12.5px] text-[#8fabff]">
                    {t.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-16 max-h-[300px] overflow-hidden rounded-t-[20px] shadow-[0_-1px_0_rgba(255,255,255,0.12)]">
            <Image
              src="/assets/dashboard.png"
              alt="Saliency overlay and embedding view inside the AudioLens workbench"
              width={1915}
              height={980}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Six panels. Keeps id="features" so the header's /#features link, which
          predates this design, still resolves. */}
      <section
        id="features"
        className="scroll-mt-24 px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="max-w-[22ch]">
              <h2 className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]">
                Methods, not vibes.
              </h2>
            </div>
            <Link
              href="/docs"
              className="rounded-full px-6 py-3.5 text-[15px] font-medium text-[#0a0c11] shadow-[0_0_0_1px_rgba(10,12,17,0.12)] transition-colors hover:bg-[#f4f5f7] hover:text-[#0a0c11]"
            >
              Method reference
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-[22px]">
            {PANELS.map((p) => (
              <div
                key={p.no}
                className={`rounded-[22px] bg-white px-8 pt-[34px] pb-9 transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(27,72,224,0.3),0_30px_60px_-34px_rgba(10,32,90,0.4)] ${RING}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-code text-[11.5px]"
                    style={{ color: ACCENT }}
                  >
                    {p.no}
                  </span>
                  <span className="font-code text-[10.5px] text-[#9ca3af]">
                    {p.meta}
                  </span>
                </div>
                <h3 className="mt-[26px] mb-0 text-[26px] leading-[1.1] font-semibold tracking-[-0.025em]">
                  {p.title}
                </h3>
                <p className="mt-3 mb-0 text-[15px] leading-[1.62] text-[#535a67] text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] px-6 py-16 text-center shadow-[0_0_0_1px_rgba(10,12,17,0.07)] sm:px-12 sm:pt-24 sm:pb-[100px]">
          {/* Static (timeSpeed 0, grain not animated) grainient. lightMode is
              off on purpose: it recolors by each stop's hue, and a hue read
              off near-white pastels has almost no chroma to work with, so it
              washes out to flat gray (as seen). Feeding the pastel colors
              straight into the raw blend instead keeps them light enough for
              the dark heading/body text while actually showing their tint. */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Grainient
              className="h-full w-full"
              color1="#c9dcff"
              color2="#eef1ff"
              color3="#ecdcff"
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
          </div>
          <div className="relative z-10">
            <h2 className="m-0 text-[38px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-[52px] lg:text-[72px]">
              Run it on your
              <br />
              own checkpoint.
            </h2>
            <p className="mx-auto mt-[26px] mb-0 max-w-[52ch] text-[16px] leading-[1.6] text-[#535a67] sm:text-[18px]">
              Self-hosted, MIT licensed, no telemetry. One command brings up the
              API, worker and workbench.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-full px-7 py-[15px] text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(27,72,224,0.7)] transition-[filter] hover:text-white hover:brightness-90"
                style={{ background: ACCENT }}
              >
                Get started
              </a>
              <code
                className={`font-code rounded-full bg-white px-[22px] py-[15px] text-[13px] text-[#2b3342] sm:text-[14px] ${RING}`}
              >
                $ docker compose up --build
              </code>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
