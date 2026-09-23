import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemedGrainient } from "@/components/grainient-theme";
import { Parallax } from "@/components/parallax";
import { TextReveal } from "@/components/text-reveal";
import { ACCENT } from "@/lib/theme";

const EYEBROW = "Open source";

const CHIPS = [
  "Whisper Base",
  "Whisper Large-v3",
  "Wav2Vec2 emotion",
  "CUDA · ROCm · MPS · CPU",
  "Docker Compose",
];

const PREMISE = [
  {
    figure: "9",
    tone: "var(--al-accent-text)",
    bg: "var(--al-accent-tint)",
    title: "Nine ways to look at one prediction",
    body: "Saliency, attention, embeddings, perturbation, diagnostics, fairness, layer probes, Jacobian Lens, and dataset EDA — nine panels, all reading the same job.",
  },
  {
    figure: "4",
    tone: "var(--al-fg-strong)",
    bg: "var(--al-surface-2)",
    title: "Stress-test with real perturbations",
    body: "Re-run a prediction under noise, pitch shift, time stretch, or time masking to see how much the output moves. Four transform types, chainable up to ten per request — not a marketing number.",
  },
  {
    figure: "Layer by layer",
    tone: "var(--al-accent-text)",
    bg: "var(--al-accent-tint)",
    title: "Open the model up, not just the output",
    body: "Layer probes and the Jacobian Lens look inside Whisper's decoder layer by layer, so 'the model got it wrong' becomes a specific, inspectable claim.",
  },
];

// Each row is a step label plus a one-line explanation. Qualitative on
// purpose: no measured durations or percentages.
const TIMELINE = [
  {
    label: "Waveform",
    detail: "The raw audio your model heard, scrubbable in the shared player.",
  },
  {
    label: "Prediction",
    detail: "The transcript (Whisper) or emotion label (Wav2Vec2) the model produced.",
  },
  {
    label: "Saliency & attention",
    detail: "Which moments in the audio, and which layers, shaped that output.",
  },
  {
    label: "Embeddings & probes",
    detail: "How the model represents the signal internally, and where a property lives layer by layer.",
  },
  {
    label: "Perturbation & fairness",
    detail: "Whether the prediction holds up under a perturbed input, and across accent, speaker, or metadata slices.",
  },
];

const HOW_IT_WORKS = [
  {
    label: "Upload",
    detail: "POST /upload stores the audio and returns an opaque audio_id. No inference runs yet.",
  },
  {
    label: "Queue",
    detail: "POST /jobs returns 202 with a job_id and publishes a task to a queue.",
  },
  {
    label: "Work",
    detail: "A worker picks up the task, lazily loads the model, runs the operation, and stores the result.",
  },
  {
    label: "Poll",
    detail: "The UI polls GET /jobs/{id}, then reads GET /jobs/{id}/result once it's ready.",
  },
  {
    label: "Expire",
    detail: "Job metadata and results expire after 24 hours.",
  },
];

const PANELS = [
  {
    no: "01",
    meta: "gradcam · lime · shap",
    title: "Saliency mapping",
    body: "See which parts of the waveform drove each predicted token. GradCAM, LIME and SHAP are available, with a faithfulness check (deletion curve, before/after) to tell you whether to trust the map.",
  },
  {
    no: "02",
    meta: "encoder & decoder · layer 0–31 · head 0–31",
    title: "Attention",
    body: "Inspect per-layer, per-head attention weights across Whisper's encoder and decoder (custom checkpoints too), one layer and head at a time.",
  },
  {
    no: "03",
    meta: "PCA · t-SNE · UMAP · HDBSCAN",
    title: "Embedding projector",
    body: "Project learned representations into 2D or 3D, cluster them with HDBSCAN, and pull nearest neighbours for any point you select.",
  },
  {
    no: "04",
    meta: "4 transform types",
    title: "Perturbation lab",
    body: "Re-run a prediction after adding noise, shifting pitch, stretching time, or masking part of the clip — four transform types, chainable up to ten per request, to see how robust an output really is.",
  },
  {
    no: "05",
    meta: "WER · CER",
    title: "Transcript accuracy metrics",
    body: "Score a predicted transcript against a reference using word- and character-error rate — the same metrics that power fairness slicing below, available anywhere you have ground truth to compare against.",
  },
  {
    no: "06",
    meta: "accent · speaker · language · custom metadata",
    title: "Fairness slicing",
    body: "Slice model performance — WER, CER, accuracy, macro-F1, ECE, and more — by accent, speaker, or any metadata column you provide, with minimum group-size guards so small slices don't produce misleading numbers.",
  },
];

const MODELS_AND_DATASETS = [
  {
    group: "Models",
    items: [
      "Whisper Base",
      "Whisper Large-v3",
      "Wav2Vec2 emotion",
      "Bring your own Hugging Face model",
    ],
  },
  {
    group: "Datasets",
    items: [
      "Common Voice",
      "RAVDESS",
      "L2-ARCTIC",
      "Speech Accent Archive",
      "LibriSpeech-1000",
    ],
  },
];

const DEPLOY_YOUR_WAY = [
  {
    figure: "Self-host",
    title: "Run it yourself",
    body: "docker compose up --build gets you the full stack on your own machine.",
    href: undefined as string | undefined,
  },
  {
    figure: "Planned",
    title: "Hosted demo",
    body: "A limited public demo is planned — not live yet.",
    // TODO: set real demo URL, see {{DEMO_URL}}
    href: "#" as string | undefined,
  },
  {
    figure: "MIT",
    title: "Open source",
    body: "MIT licensed, no telemetry, nothing phoned home. Read the code, fork it, self-host it.",
    href: undefined as string | undefined,
  },
];

// The design draws every hairline as a 1px ring rather than a border, so the
// rounded corners stay crisp underneath the layered shadows.
const RING = "shadow-[0_0_0_1px_var(--al-hairline)]";

export default function Home() {
  // overflow-x-clip, not -hidden: `hidden` on one axis forces the other to
  // `auto`, which turns the wrapper into a scroll container and stops the
  // sticky header from sticking.
  return (
    <div className="font-display min-h-screen overflow-x-clip bg-al-canvas text-al-fg-strong">
      <SiteHeader />

      {/* Hero */}
      <section className="relative px-6 pt-[72px] text-center sm:pt-[88px] lg:pt-[104px]">
        {/* Geometry is the v2 artboard's verbatim: left:50% plus translateX(-50%),
            with the drift animation's own transform taking over once it runs. */}
        <Parallax
          aria-hidden
          speed={0.18}
          max={140}
          className="pointer-events-none absolute top-[-140px] left-1/2 z-0 h-[900px] w-[1500px] max-w-none"
        >
          {/* left-1/2 lives on the parallax wrapper now, so the -50% pull and
              the drift animation that overrides it both stay on this inner
              layer, exactly as the artboard had them. */}
          <div
            className="al-drift h-full w-full opacity-90 blur-[30px]"
            style={{
              transform: "translateX(-50%)",
              animation: "al-drift 26s ease-in-out infinite",
              background:
                "radial-gradient(38% 34% at 50% 34%, var(--al-wash-a) 0%, var(--al-wash-a-0) 72%), radial-gradient(30% 30% at 30% 44%, var(--al-wash-b) 0%, var(--al-wash-b-0) 70%), radial-gradient(28% 28% at 70% 40%, var(--al-wash-c) 0%, var(--al-wash-c-0) 72%)",
            }}
          />
        </Parallax>

        <div className="relative z-[1] mx-auto max-w-[1120px]">
          <div
            className={`inline-flex items-center gap-2.5 rounded-full bg-card/75 py-[7px] pr-2 pl-3.5 text-[13px] text-al-fg-body ${RING}`}
          >
            <span
              className="font-code text-[11px] tracking-[0.06em]"
            >
              {EYEBROW}
            </span>
            <span>Interpretability for speech models</span>
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center text-[12px] text-al-fg-body">
              →
            </span>
          </div>

          <h1 className="mt-[26px] mb-0 text-[44px] leading-[0.94] font-semibold tracking-[-0.045em] text-balance sm:text-[64px] md:text-[80px] lg:text-[104px]">
            Listen to the
            <br />
            model thinking.
          </h1>

          <p className="mx-auto mt-[30px] max-w-[60ch] text-[17px] leading-[1.55] font-normal text-al-fg-body text-pretty sm:text-[20px]">
            AudioLens is an interpretability workbench for speech models. Follow
            a single prediction from raw waveform to emitted token, across
            saliency, attention, embeddings and perturbation, on one shared
            timeline.
          </p>

          <div className="mt-[38px] flex flex-wrap justify-center gap-3">
            {/* TODO: set real demo URL, see {{DEMO_URL}} */}
            <a
              href="#"
              className="rounded-full px-7 py-[15px] text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_var(--al-shadow-accent)] transition-[filter] hover:text-white hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Open the dashboard
            </a>
            <Link
              href="/docs"
              className={`rounded-full bg-card/80 px-[26px] py-[15px] text-[15px] font-medium text-al-fg-strong transition-colors hover:bg-al-surface-3 hover:text-al-fg-strong ${RING}`}
            >
              Read the docs
            </Link>
          </div>
        </div>

        {/* Product shot */}
        <Parallax
          speed={0.06}
          max={44}
          className="relative z-[1] mx-auto mt-[74px] max-w-[1240px]"
        >
          <div className="relative rounded-[26px] bg-linear-to-b from-card/90 to-card/50 p-2.5 shadow-[0_0_0_1px_var(--al-hairline-soft),0_70px_120px_-60px_var(--al-shadow-deep)]">
            <div className={`overflow-hidden rounded-[18px] bg-card ${RING}`}>
              <div className="flex h-[42px] items-center gap-3.5 bg-al-surface-2 px-4 shadow-[inset_0_-1px_0_var(--al-hairline-soft)]">
                <div className="flex gap-[7px]">
                  <div className="h-2.5 w-2.5 rounded-full bg-al-fg-faint" />
                  <div className="h-2.5 w-2.5 rounded-full bg-al-fg-faint" />
                  <div className="h-2.5 w-2.5 rounded-full bg-al-fg-faint" />
                </div>
                <div
                  className={`font-code flex h-6 max-w-[400px] flex-1 items-center rounded-full bg-card px-3 text-[11px] text-al-fg-tertiary ${RING}`}
                >
                  localhost:8080/embeddings
                </div>
              </div>
              <Image
                src="/assets/dashboard.png"
                alt="AudioLens embedding projector showing a 2D projection of Whisper encoder embeddings, colored by cluster, next to the waveform and predicted transcript."
                width={1915}
                height={980}
                className="block h-auto w-full dark:opacity-[0.88] dark:contrast-[1.05]"
                priority
              />
            </div>
          </div>
        </Parallax>

        <div className="font-code relative z-[1] mx-auto flex max-w-[1240px] flex-wrap justify-center gap-3.5 pt-[34px] text-[11.5px] text-al-fg-tertiary">
          {CHIPS.map((c) => (
            <span key={c} className={`rounded-full bg-card px-3.5 py-2 ${RING}`}>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* The premise */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[24ch]">
            <TextReveal
              as="h2"
              text="Beyond the transcript."
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]"
            />
          </div>

          {/* Media card leads the row, three premise cards follow it: four
              across on desktop, two by two on tablet, stacked on mobile. */}
          <div className="mt-[70px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-al-panel shadow-[0_0_0_1px_var(--al-hairline-soft)]">
              <video
                src="/assets/loop-card.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-[30px] text-[17px] font-medium tracking-[-0.015em] text-white">
                Hear what it heard.
              </div>
            </div>
            {PREMISE.map((p) => (
              <div
                key={p.title}
                className="rounded-[22px] px-[30px] pt-8 pb-[34px] shadow-[0_0_0_1px_var(--al-hairline-soft)]"
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
                <p className="mt-[9px] mb-0 text-[15px] leading-[1.6] text-al-fg-body text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One timeline */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-al-panel px-6 pt-[52px] pb-9 text-white sm:px-10 sm:pt-[64px] sm:pb-11 lg:px-16 lg:pt-[78px] lg:pb-14">
          <Parallax
            aria-hidden
            speed={0.2}
            max={120}
            className="pointer-events-none absolute top-[-160px] right-[-160px] h-[620px] w-[620px] blur-[20px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(27,72,224,0.55) 0%, rgba(27,72,224,0) 68%)",
            }}
          />
          <div className="relative">
            <div className="font-code text-[11.5px] tracking-[0.14em] text-[#8fabff] uppercase">
              One timeline
            </div>
            <TextReveal
              as="h2"
              text="One prediction, every panel."
              className="mt-5 mb-0 max-w-[16ch] text-[32px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[42px] lg:text-[60px]"
            />
            <p className="mt-6 mb-0 max-w-[52ch] text-[17px] leading-[1.6] text-white/65 text-pretty">
              Every panel reads the same job: the same waveform, the same
              prediction, the same timeline. Move between saliency, attention,
              embeddings and probes without losing your place.
            </p>
          </div>

          {/* Multitrack view: one lane per panel, and one selected span (the
              lit bars) sitting at the same x in every lane. The bars are
              decorative, not data. */}
          <div className="relative mt-12 sm:mt-14">
            <div className="font-code mb-3 hidden items-center justify-between text-[10.5px] tracking-[0.12em] text-white/35 uppercase md:flex md:pl-[calc(38%+24px)]">
              <span>0:00</span>
              <span className="text-[#8fabff]">selected span</span>
              <span>end</span>
            </div>
            <ol className="m-0 list-none p-0">
              {TIMELINE.map((lane, i) => (
                <li
                  key={lane.label}
                  className="grid items-center gap-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] md:grid-cols-[38%_1fr] md:gap-6"
                >
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-code text-[11px] text-white/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[18px] font-semibold tracking-[-0.015em] sm:text-[20px]">
                        {lane.label}
                      </span>
                    </div>
                    <p className="mt-1.5 mb-0 max-w-[44ch] text-[13.5px] leading-[1.55] text-white/55">
                      {lane.detail}
                    </p>
                  </div>
                  <div
                    aria-hidden
                    className="relative flex h-12 items-center gap-[3px] overflow-hidden rounded-[10px] bg-white/[0.03] px-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]"
                  >
                    {Array.from({ length: 56 }, (_, k) => {
                      const h =
                        22 +
                        Math.abs(
                          Math.sin(k * 0.55 + i * 1.7) * 44 +
                            Math.sin(k * 1.9 + i) * 20,
                        );
                      const lit = k >= 31 && k <= 39;
                      return (
                        <span
                          key={k}
                          className={`w-full rounded-full ${lit ? "bg-[#8fabff]" : "bg-white/20"}`}
                          style={{ height: `${Math.min(h, 100)}%` }}
                        />
                      );
                    })}
                  </div>
                </li>
              ))}
            </ol>
            {/* The shared playhead: one hairline through every lane. */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 bottom-0 hidden w-px bg-[#8fabff]/60 md:block"
              style={{ left: "calc(38% + 24px + (100% - 38% - 24px) * 0.634)" }}
            />
          </div>
          {/* Rounded and hairlined on all four sides: the shot used to bleed
              into the panel's bottom edge, so it read as part of the card
              rather than as something sitting inside it. */}
          <div className="relative mt-16 max-h-[300px] overflow-hidden rounded-[20px] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
            <Image
              src="/assets/embedded-image.jpg"
              alt="Speech embeddings rendered as a voxel landscape, peaks marking the frames the model weighted most heavily"
              width={1836}
              height={1033}
              priority
              className="block h-[300px] w-full scale-[1.176] object-cover object-center"
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
              <TextReveal
                as="h2"
                text="Methods, not vibes."
                className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]"
              />
            </div>
            <Link
              href="/docs"
              className="rounded-full px-6 py-3.5 text-[15px] font-medium text-al-fg-strong shadow-[0_0_0_1px_var(--al-hairline-strong)] transition-colors hover:bg-al-surface-3 hover:text-al-fg-strong"
            >
              Method reference
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-[22px]">
            {PANELS.map((p) => (
              <div
                key={p.no}
                className={`rounded-[22px] bg-card px-8 pt-[34px] pb-9 transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(27,72,224,0.3),0_30px_60px_-34px_var(--al-shadow-lift)] ${RING}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-code text-[11.5px]"
                    style={{ color: ACCENT }}
                  >
                    {p.no}
                  </span>
                  <span className="font-code text-[10.5px] text-al-fg-quaternary">
                    {p.meta}
                  </span>
                </div>
                <h3 className="mt-[26px] mb-0 text-[26px] leading-[1.1] font-semibold tracking-[-0.025em]">
                  {p.title}
                </h3>
                <p className="mt-3 mb-0 text-[15px] leading-[1.62] text-al-fg-body text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works: open editorial layout. Sticky heading on the left, a
          numbered ledger on the right, separated only by hairlines. */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              className="font-code text-[11.5px] tracking-[0.14em] uppercase"
              style={{ color: "var(--al-accent-text)" }}
            >
              How it works
            </div>
            <TextReveal
              as="h2"
              text="How a job actually runs"
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]"
            />
            <p className="mt-6 mb-0 max-w-[40ch] text-[17px] leading-[1.6] text-al-fg-body text-pretty">
              Every panel is backed by an asynchronous job: upload once, queue
              an operation, and poll for the result.
            </p>
          </div>
          <ol className="m-0 list-none p-0 shadow-[inset_0_-1px_0_var(--al-hairline-strong)]">
            {HOW_IT_WORKS.map((s, i) => (
              <li
                key={s.label}
                className="group grid grid-cols-[44px_1fr] gap-x-4 py-7 shadow-[inset_0_1px_0_var(--al-hairline-strong)] sm:grid-cols-[64px_1fr] sm:py-9"
              >
                <span className="font-code pt-2 text-[12px] text-al-fg-quaternary transition-colors group-hover:text-[var(--al-accent-text)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-[26px] leading-[1.1] font-semibold tracking-[-0.03em] sm:text-[34px]">
                    {s.label}
                  </div>
                  <p className="mt-3 mb-0 max-w-[52ch] text-[15.5px] leading-[1.6] text-al-fg-body text-pretty">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Models & datasets: two hairline-ruled lists, set large, in the
          manner of a model index. */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[24ch]">
            <TextReveal
              as="h2"
              text="Models & datasets, out of the box."
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]"
            />
          </div>

          <div className="mt-[70px] grid gap-14 md:grid-cols-2 md:gap-10 lg:gap-20">
            {MODELS_AND_DATASETS.map((g) => (
              <div key={g.group}>
                <div className="font-code flex items-baseline justify-between pb-4 text-[11.5px] tracking-[0.14em] text-al-fg-tertiary uppercase">
                  <span>{g.group}</span>
                  <span>{String(g.items.length).padStart(2, "0")}</span>
                </div>
                <ul className="m-0 list-none p-0 shadow-[inset_0_-1px_0_var(--al-hairline-strong)]">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center justify-between gap-6 py-[18px] text-[20px] font-medium tracking-[-0.02em] shadow-[inset_0_1px_0_var(--al-hairline-strong)] transition-colors hover:text-[var(--al-accent-text)] sm:text-[24px]"
                    >
                      <span>{item}</span>
                      <span
                        aria-hidden
                        className="text-[16px] text-al-fg-faint transition-[transform,color] group-hover:translate-x-1 group-hover:text-[var(--al-accent-text)]"
                      >
                        →
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 mb-0 max-w-[60ch] text-[15px] leading-[1.6] text-al-fg-body text-pretty">
            Whisper and Wav2Vec2 checkpoints are Apache 2.0. Bundled datasets
            carry their own licenses — see{" "}
            <Link href="/docs/licenses" className="underline underline-offset-4">
              the licenses page
            </Link>{" "}
            before using them commercially.
          </p>
        </div>
      </section>

      {/* Deploy your way: three open columns under a heavy top rule, no
          cards. The rule picks up the accent on hover. */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div>
            <TextReveal
              as="h2"
              text="Deploy your way."
              className="whitespace-nowrap mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-[44px] lg:text-[64px]"
            />
          </div>

          <div className="mt-[70px] grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {DEPLOY_YOUR_WAY.map((p) => (
              <div
                key={p.title}
                className="group border-t-2 border-al-fg-strong pt-6 transition-colors hover:border-[var(--al-accent-text)]"
              >
                <span
                  className={`font-code inline-block rounded-full px-3 py-1 text-[11px] tracking-[0.08em] uppercase ${RING}`}
                >
                  {p.figure}
                </span>
                <div className="mt-8 text-[30px] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-[36px]">
                  {p.href ? (
                    <Link
                      href={p.href}
                      className="inline-flex items-baseline gap-2 hover:text-[var(--al-accent-text)]"
                    >
                      {p.title}
                      <span aria-hidden className="text-[22px]">
                        →
                      </span>
                    </Link>
                  ) : (
                    p.title
                  )}
                </div>
                <p className="mt-4 mb-0 max-w-[36ch] text-[15.5px] leading-[1.6] text-al-fg-body text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] px-6 py-16 text-center shadow-[0_0_0_1px_var(--al-hairline-soft)] sm:px-12 sm:pt-24 sm:pb-[100px]">
          {/* Static (timeSpeed 0, grain not animated) grainient. lightMode is
              off on purpose: it recolors by each stop's hue, and a hue read
              off near-white pastels has almost no chroma to work with, so it
              washes out to flat gray (as seen). Feeding the pastel colors
              straight into the raw blend instead keeps them light enough for
              the dark heading/body text while actually showing their tint.
              Dark triple is deeper/lower-chroma so the blend stays a subtle
              backdrop instead of glowing on the near-black page. */}
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
            <TextReveal
              as="h2"
              text={"Run it on your\nown checkpoint."}
              className="m-0 text-[38px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-[52px] lg:text-[72px]"
            />
            <p className="mx-auto mt-[26px] mb-0 max-w-[52ch] text-[16px] leading-[1.6] text-al-fg-body sm:text-[18px]">
              Self-hosted, MIT licensed, no telemetry. One command brings up the API, worker and workbench.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/docs/quickstart"
                className="rounded-full px-7 py-[15px] text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_var(--al-shadow-accent)] transition-[filter] hover:text-white hover:brightness-90"
                style={{ background: ACCENT }}
              >
                Get started
              </Link>
              <code
                className={`font-code rounded-full bg-card px-[22px] py-[15px] text-[13px] text-al-fg-strong sm:text-[14px] ${RING}`}
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
