import Image from "next/image";
import Link from "next/link";
import { Logomark } from "@/components/logomark";

const ACCENT = "#1e4fd8";
const EYEBROW = "Interpretability for voice models";

const FEATURES = [
  {
    no: "01",
    title: "Saliency mapping",
    body: "Gradient-weighted attribution over the raw waveform. Segment or heatmap view, ranked by contribution to each predicted token.",
    meta: "Grad-CAM · Integrated Gradients",
  },
  {
    no: "02",
    title: "Attention",
    body: "Per-head, per-layer attention across encoder frames, readable as a matrix or projected back onto the audio timeline.",
    meta: "Encoder · cross-attention",
  },
  {
    no: "03",
    title: "Embedding projector",
    body: "PCA and UMAP views of dataset-level embeddings with clustering, noise flags and a separation score you can trust cautiously.",
    meta: "PCA 50d · HDBSCAN",
  },
  {
    no: "04",
    title: "Perturbation lab",
    body: "Add noise, shift pitch, clip and mask regions, then watch WER move. Robustness measured, not assumed.",
    meta: "12 transforms",
  },
  {
    no: "05",
    title: "Transcript diffing",
    body: "Prediction against ground truth, aligned word by word, with WER, CER and Levenshtein surfaced per datapoint.",
    meta: "WER · CER · Levenshtein",
  },
  {
    no: "06",
    title: "Fairness & diagnostics",
    body: "Slice metrics by speaker, accent, language or any metadata column to find where the model quietly fails.",
    meta: "Slice-based reporting",
  },
];

const FOOTER_COLUMNS = [
  {
    label: "Product",
    links: [
      { text: "Features", href: "#features" },
      { text: "Dashboard", href: "#" },
      { text: "Changelog", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { text: "Documentation", href: "/docs" },
      { text: "Architecture", href: "#" },
      { text: "Model support", href: "#" },
    ],
  },
  {
    label: "Project",
    links: [
      { text: "GitHub", href: "#" },
      { text: "Contributing", href: "#" },
      { text: "Security", href: "#" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      {/* max-w values are content-box widths from the design plus their own
          horizontal padding, since Tailwind's preflight forces border-box. */}
      <header className="sticky top-0 z-30 px-10 pt-4">
        <div
          className="mx-auto flex h-[60px] max-w-[1154px] items-center gap-8 rounded-full border border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.6)] pr-[10px] pl-[22px] backdrop-blur-[18px] backdrop-saturate-[1.7]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(20,23,28,0.05), 0 1px 2px rgba(20,23,28,0.04), 0 20px 44px -24px rgba(20,23,28,0.3)",
          }}
        >
          <div className="flex items-center gap-[9px]">
            <Logomark heights={[7, 15, 11, 4]} containerHeight={15} mutedLast />
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-[#14171c]">
              AudioLens
            </span>
            <span className="rounded-[3px] border border-[rgba(20,23,28,0.14)] px-[5px] py-px font-mono text-[10px] text-[#6b7280]">
              v1.0
            </span>
          </div>
          <nav className="ml-auto flex gap-[26px] text-[13.5px] text-[#4b5563]">
            <a href="#features" className="text-[#4b5563]">
              Features
            </a>
            <Link href="/docs" className="text-[#4b5563]">
              Docs
            </Link>
            <a href="#" className="text-[#4b5563]">
              Research
            </a>
            <a href="#" className="text-[#4b5563]">
              GitHub
            </a>
          </nav>
          <a
            href="#"
            className="rounded-full px-[17px] py-[9px] text-[13px] font-medium text-white transition-[filter] hover:text-white hover:brightness-[0.88]"
            style={{ background: ACCENT }}
          >
            Open dashboard
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-10">
        <div className="flex flex-col items-center pt-[88px] pb-[26px] text-center">
          <div
            className="mb-[22px] font-mono text-[11px] tracking-[0.14em] uppercase"
            style={{ color: ACCENT }}
          >
            {EYEBROW}
          </div>
          <h1 className="m-0 text-[66px] leading-[1.02] font-medium tracking-[-0.035em] text-balance text-[#14171c]">
            Hear what your
            <br />
            model <em className="font-serif font-normal italic">actually</em>{" "}
            heard.
          </h1>
          <p className="mx-auto mt-[26px] max-w-[56ch] text-[17px] leading-[1.6] text-[#4b5563] text-pretty">
            An interpretability workbench for voice models. Trace a prediction
            from waveform to token with saliency, attention, embeddings and
            perturbation analysis, without leaving the timeline the audio lives
            on.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-[6px] px-[22px] py-3 text-[14px] font-medium text-white transition-[filter] hover:text-white hover:brightness-[0.88]"
              style={{ background: ACCENT }}
            >
              Open the dashboard
            </a>
            <code className="box-content flex h-[18px] w-[219px] items-center rounded-[6px] border border-[rgba(20,23,28,0.12)] bg-white px-[15px] py-[11px] font-mono text-[13px] text-[#374151]">
              $ docker compose up --build
            </code>
          </div>
        </div>

        <div className="relative pt-[34px] pb-24">
          <div
            className="pointer-events-none absolute top-[-46px] left-1/2 h-[400px] w-[94%] -translate-x-1/2 blur-[52px]"
            style={{
              background:
                "radial-gradient(60% 64% at 50% 32%, rgba(30,79,216,0.32) 0%, rgba(30,79,216,0.16) 44%, rgba(30,79,216,0) 80%)",
            }}
          />
          <div
            className="relative overflow-hidden rounded-[11px] border border-[rgba(20,23,28,0.13)] bg-white"
            style={{
              boxShadow:
                "0 1px 2px rgba(20,23,28,0.05), 0 40px 80px -40px rgba(20,23,28,0.3)",
            }}
          >
            <div className="flex h-[41px] items-center gap-3.5 border-b border-[rgba(20,23,28,0.1)] bg-[#f6f6f5] px-3.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#e0e0de]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#e0e0de]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#e0e0de]" />
              </div>
              <div className="flex h-[22px] max-w-[420px] flex-1 items-center rounded-[5px] border border-[rgba(20,23,28,0.1)] bg-white px-[9px] font-mono text-[10.5px] text-[#8b929c]">
                audiolens.app/lab/whisper-base
              </div>
              <div className="ml-auto font-mono text-[10px] text-[#a8adb5]">
                SAA dataset
              </div>
            </div>
            <Image
              src="/assets/dashboard.png"
              alt="AudioLens dashboard: audio embeddings, saliency overlay and datapoint editor"
              width={1915}
              height={980}
              className="block h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-t border-[rgba(20,23,28,0.09)] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-10">
          <div className="pt-[70px] pb-[34px]">
            <h2 className="m-0 max-w-[22ch] text-[34px] leading-[1.1] font-medium tracking-[-0.03em] text-[#14171c]">
              Six views on the same second of audio.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] border-t border-l border-[rgba(20,23,28,0.11)]">
            {FEATURES.map((f) => (
              <div
                key={f.no}
                className="border-r border-b border-[rgba(20,23,28,0.11)] px-[26px] pt-7 pb-8 transition-colors duration-150 hover:bg-[#fafbfe]"
              >
                <div
                  className="mb-4 font-mono text-[10.5px]"
                  style={{ color: ACCENT }}
                >
                  {f.no}
                </div>
                <h3 className="m-0 text-[16px] font-semibold tracking-[-0.01em] text-[#14171c]">
                  {f.title}
                </h3>
                <p className="mt-[9px] text-[13.5px] leading-[1.6] text-[#5b6472] text-pretty">
                  {f.body}
                </p>
                <div className="mt-5 font-mono text-[10px] text-[#9ca3af]">
                  {f.meta}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3.5 pt-14 pb-[74px]">
            <span className="text-[15px] text-[#374151]">
              Point it at your own checkpoint.
            </span>
            <a
              href="#"
              className="border-b border-[rgba(30,79,216,0.35)] pb-px text-[14px] font-medium"
              style={{ color: ACCENT }}
            >
              Read the model loader docs
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(20,23,28,0.11)] bg-[#fbfbfa]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] gap-10 px-10 pt-14 pb-[30px]">
          <div>
            <div className="flex items-center gap-[9px]">
              <Logomark heights={[6, 13, 9]} containerHeight={13} />
              <span className="text-[14px] font-semibold text-[#14171c]">
                AudioLens
              </span>
            </div>
            <p className="mt-3.5 max-w-[34ch] text-[13px] leading-[1.65] text-[#6b7280]">
              Explainability tooling for speech and voice models. Self-hosted,
              MIT licensed, built in the open.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.label}>
              <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-[#9ca3af] uppercase">
                {col.label}
              </div>
              <div className="flex flex-col gap-[9px] text-[13px]">
                {col.links.map((l) => (
                  <a key={l.text} href={l.href} className="text-[#4b5563]">
                    {l.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-5 border-t border-[rgba(20,23,28,0.09)] px-10 pt-[18px] pb-10 font-mono text-[10.5px] text-[#9ca3af]">
          <span>MIT License · Built for audio model interpretability</span>
          <span>Waveform to logits</span>
        </div>
      </footer>
    </div>
  );
}
