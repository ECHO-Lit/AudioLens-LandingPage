import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemedGrainient } from "@/components/grainient-theme";
import { Parallax } from "@/components/parallax";
import { TextReveal } from "@/components/text-reveal";
import { PanelGrid } from "@/components/panel-grid";
import { ACCENT } from "@/lib/theme";

const EYEBROW = "Open source";

const CHIPS = [
  "Whisper Base",
  "Whisper Large-v3",
  "Wav2Vec2 emotion",
  "CUDA · ROCm · MPS · CPU",
  "Docker Compose",
];

// Three themes, in the order of the Methods cards below: listened, learned,
// breaks.
const PREMISE = [
  {
    tone: "var(--al-accent-text)",
    bg: "var(--al-accent-tint)",
    title: "Where it listened",
    body: "Saliency and attention trace a prediction back to the moments in the audio, and the layers, that produced it.",
  },
  {
    tone: "var(--al-fg-strong)",
    bg: "var(--al-surface-2)",
    title: "What it learned",
    body: "Embeddings, layer probes and the Jacobian Lens show how the model represents speech inside, layer by layer.",
  },
  {
    tone: "var(--al-accent-text)",
    bg: "var(--al-accent-tint)",
    title: "Where it breaks",
    body: "Perturbation, diagnostics, fairness slices and dataset EDA test it against noise, accents and the data itself.",
  },
];

// What it is / isn't / who it's for. The single home for the "isn't" and
// language facts; nothing here repeats the panels or the model list.
const OVERVIEW = [
  {
    label: "It is",
    items: [
      "A browser workbench for explaining speech-model predictions",
      "Built for Whisper (speech to text) and Wav2Vec2 (speech to emotion)",
      "Interactive: each question is a click, not a new script",
    ],
  },
  {
    label: "It isn't",
    items: [
      "A transcription, meeting-notes or call-analytics app",
      "Real-time: no microphone recording or live streaming",
      "Multilingual: it works on English speech only",
    ],
  },
  {
    label: "Built for",
    items: [
      "Researchers studying speech recognition or emotion models",
      "Engineers debugging a checkpoint before shipping it",
      "Teams auditing a model for accent or speaker bias",
    ],
  },
];

// The user's path through the workbench, not the REST calls behind it (those
// live in /docs/rest, linked under the list).
const HOW_IT_WORKS = [
  {
    label: "Bring audio",
    detail: "Upload a .wav, .mp3, .m4a or .flac file (up to 100 MB and 10 minutes), or start from a built-in dataset you've fetched with one script.",
  },
  {
    label: "Pick a model",
    detail: "Whisper for speech-to-text, Wav2Vec2 for emotion, or point it at your own Hugging Face checkpoint.",
  },
  {
    label: "See the prediction",
    detail: "The model runs once and shows you its transcript or emotion label.",
  },
  {
    label: "Ask why",
    detail: "Open any panel. Each analysis runs in the background and attaches to the same clip, so switching views never means re-uploading.",
  },
  {
    label: "Stress-test",
    detail: "Re-run the clip under noise or pitch changes, or slice results by speaker group, to see where the prediction breaks.",
  },
];

const FAQ = [
  {
    q: "What do I need to run it?",
    a: "Docker with Compose. A GPU is optional: AudioLens picks CUDA, ROCm or Apple MPS when one is available and falls back to CPU otherwise. Model weights download the first time a job needs them.",
    href: "/docs/quickstart",
    hrefLabel: "Read the quickstart",
  },
  {
    q: "Is there a hosted demo?",
    a: "Not yet. A limited public demo is planned; for now AudioLens is self-hosted only.",
    href: "/docs/demo",
    hrefLabel: "See what to expect",
  },
  {
    q: "What audio can I upload?",
    a: "WAV, MP3, M4A or FLAC files, up to 100 MB and 10 minutes each. You can also skip uploading and start from one of the built-in sample datasets. Uploads expire after 24 hours; datasets fetched with the scripts stay on disk until you delete them.",
    href: "/docs/datasets",
    hrefLabel: "See the datasets",
  },
  {
    q: "Which Hugging Face models will work?",
    a: "Speech Seq2Seq models like Whisper, CTC models, and audio-classification models like the Wav2Vec2 emotion checkpoint. Classification models must define id2label, and repos that need remote code are rejected. Registration validates the model up front, so an unsupported one fails immediately instead of running with wrong assumptions.",
    href: "/docs/custom",
    hrefLabel: "Read the custom checkpoint guide",
  },
  {
    q: "Can I script it instead of using the UI?",
    a: "Yes. Every panel is a thin client over the REST API, so anything you can click is also an endpoint you can call. A few shell and Python scripts cover starting the stack, checking queues and fetching the sample datasets.",
    href: "/docs/rest",
    hrefLabel: "Browse the REST API",
  },
  {
    q: "How do I know a saliency map is right?",
    a: "You check it. The faithfulness test deletes the audio the map calls most important and measures how far the prediction falls, against deleting random audio. If the map doesn't beat chance, don't trust it.",
    href: "/docs/saliency",
    hrefLabel: "Read about faithfulness",
  },
  {
    q: "Where does my audio go?",
    a: "It stays on your machine. There are no accounts: uploads belong to an anonymous session and expire after 24 hours, and nothing is phoned home.",
  },
  {
    q: "What's the license?",
    a: "AudioLens itself is MIT. The models and datasets it works with keep their own terms, listed one by one. No dataset audio is redistributed; you fetch it from the official source.",
    href: "/docs/licenses",
    hrefLabel: "See the licenses",
  },
  {
    q: "Can I use the sample datasets commercially?",
    a: "Not necessarily. RAVDESS, L2-ARCTIC and the Speech Accent Archive are licensed for non-commercial use only, Common Voice is CC0, and SAVEE's terms are unverified. Check each dataset's license before using it outside research or personal use.",
    href: "/docs/licenses",
    hrefLabel: "See the per-dataset licenses",
  },
  {
    q: "Where did it come from?",
    a: "It builds on ECHO, an MIT-licensed audio interpretability tool created by Anas Hussaindeen, Chandupa Ambepitiya and Dewmike Amarasinghe.",
    href: "/docs/licenses",
    hrefLabel: "Read the attribution",
  },
];

// The nine panels, in theme order (see PREMISE). Each is described once: a
// plain question, then the technical detail. ids match app/docs/docs-data.ts.
const PANELS = [
  {
    no: "01",
    id: "saliency",
    meta: "gradcam · lime · shap",
    title: "Saliency mapping",
    question: "Which part of the audio made it say this word?",
    body: "Per-token attribution over the waveform, with a faithfulness check (deletion curve, before/after) that tells you whether to trust the map.",
  },
  {
    no: "02",
    id: "attention",
    meta: "encoder & decoder · layer 0–31 · head 0–31",
    title: "Attention",
    question: "Where is each layer looking?",
    body: "Per-layer, per-head attention weights across Whisper's encoder and decoder, custom checkpoints included, one layer and head at a time.",
  },
  {
    no: "03",
    id: "embeddings",
    meta: "PCA · t-SNE · UMAP · HDBSCAN",
    title: "Embedding projector",
    question: "Which clips does the model treat as similar?",
    body: "Project learned representations into 2D or 3D, cluster them with HDBSCAN, and pull nearest neighbours for any point you select.",
  },
  {
    no: "04",
    id: "probes",
    meta: "logreg · linear svm",
    title: "Layer probes",
    question: "Which layer knows the speaker's emotion or accent?",
    body: "Trains a linear probe on every layer's hidden states and scores where the property becomes linearly separable.",
  },
  {
    no: "05",
    id: "jlens",
    meta: "decoder · position-resolved",
    title: "Jacobian Lens",
    question: "What was it about to say, layer by layer?",
    body: "Maps each Whisper decoder layer onto the vocabulary at every token position. Fit the lens once, then apply it to any clip.",
  },
  {
    no: "06",
    id: "perturb",
    meta: "noise · pitch · stretch · mask",
    title: "Perturbation lab",
    question: "Does it hold up with noise or faster speech?",
    body: "Four transform types, chainable up to ten per request, with the prediction compared before and after.",
  },
  {
    no: "07",
    id: "diagnostics",
    meta: "linguistic vs. acoustic",
    title: "Diagnostics",
    question: "Is it relying on the words, or how they sounded?",
    body: "Sweeps up to 25 files across pitch, speed, noise and masking to separate what was said from how it sounded.",
  },
  {
    no: "08",
    id: "fairness",
    meta: "WER · CER · accuracy · ECE",
    title: "Fairness slices",
    question: "Is it worse for some accents or speakers?",
    body: "Slice performance by accent, speaker or any metadata column you provide, with minimum group-size guards so small slices don't mislead.",
  },
  {
    no: "09",
    id: "eda",
    meta: "librosa features · outliers",
    title: "Dataset EDA",
    question: "Is my dataset lopsided before I start?",
    body: "Class balance, acoustic feature distributions and outliers, so data problems don't get mistaken for model bugs.",
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
            AudioLens shows you why a speech model said what it said. Load a
            clip, run Whisper or Wav2Vec2, and trace the prediction back
            through the audio and the model&apos;s layers: nine views, one
            shared timeline.
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

      {/* Overview: one plain statement of what this is, then is / isn't / for
          whom in three hairline-ruled columns. */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div
            className="font-code text-[11.5px] tracking-[0.14em] uppercase"
            style={{ color: "var(--al-accent-text)" }}
          >
            Overview
          </div>
          <p className="mt-6 mb-0 max-w-[34ch] text-[28px] leading-[1.14] font-semibold tracking-[-0.03em] text-balance sm:text-[38px] lg:text-[52px]">
            AudioLens is an open-source workbench for looking inside speech
            models.{" "}
            <span className="text-al-fg-quaternary">
              It&apos;s the audio counterpart to Google PAIR&apos;s LIT: instead
              of just reading a transcript or a label, you see which sounds,
              layers and features produced it.
            </span>
          </p>

          <div className="mt-[70px] grid gap-x-10 gap-y-12 md:grid-cols-3">
            {OVERVIEW.map((col) => (
              <div
                key={col.label}
                className="pt-5 shadow-[inset_0_1px_0_var(--al-hairline-strong)]"
              >
                <div className="font-code text-[11.5px] tracking-[0.14em] text-al-fg-tertiary uppercase">
                  {col.label}
                </div>
                <ul className="mt-6 mb-0 flex list-none flex-col gap-4 p-0">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-[16px] leading-[1.55] text-al-fg-body text-pretty"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works: open editorial layout. Sticky heading on the left, a
          numbered ledger on the right, separated only by hairlines. */}
      <section
        id="how-it-works"
        className="scroll-mt-24 px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]"
      >
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
              text="From a clip to an explanation."
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] sm:w-min sm:text-[44px] lg:text-[64px]"
            />
            <p className="mt-6 mb-0 max-w-[40ch] text-[17px] leading-[1.6] text-al-fg-body text-pretty">
              No scripts, no notebooks. Five steps in the browser, and every
              panel stays in sync with the same clip.
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
            <li className="py-6 text-[14px] leading-[1.6] text-al-fg-tertiary shadow-[inset_0_1px_0_var(--al-hairline-strong)]">
              Under the hood every step is a REST job: upload, queue, poll.{" "}
              <Link href="/docs/rest" className="underline underline-offset-4">
                API reference
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* The premise */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[24ch]">
            <TextReveal
              as="h2"
              text="Beyond the transcript."
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] sm:w-min sm:text-[44px] lg:text-[64px]"
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
                  className="text-[32px] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-[36px]"
                  style={{ color: p.tone }}
                >
                  {p.title}
                </div>
                <p className="mt-4 mb-0 text-[15px] leading-[1.6] text-al-fg-body text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nine panels, each described once. Keeps id="features" so the header's
          /#features link, which predates this design, still resolves. */}
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
                className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] sm:w-min sm:text-[44px] lg:text-[64px]"
              />
            </div>
            <Link
              href="/docs"
              className="rounded-full px-6 py-3.5 text-[15px] font-medium text-al-fg-strong shadow-[0_0_0_1px_var(--al-hairline-strong)] transition-colors hover:bg-al-surface-3 hover:text-al-fg-strong"
            >
              Method reference
            </Link>
          </div>
          <p className="mt-6 mb-0 max-w-[52ch] text-[17px] leading-[1.6] text-al-fg-body text-pretty">
            Nine panels, each built around one question. All of them read the
            same clip and the same prediction.
          </p>

          <PanelGrid panels={PANELS} />
        </div>
      </section>

      {/* Models & datasets: two hairline-ruled lists, set large, in the
          manner of a model index. */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[24ch]">
            <TextReveal
              as="h2"
              text="Models & datasets, one script away."
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] sm:w-min sm:text-[44px] lg:text-[64px]"
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
            Whisper and Wav2Vec2 checkpoints are Apache 2.0. Datasets:
            a script fetches each one from its official source
            (L2-ARCTIC needs a free registration, Common Voice a Kaggle
            account) and each carries its own license — see{" "}
            <Link href="/docs/datasets" className="underline underline-offset-4">
              loading datasets
            </Link>{" "}
            and{" "}
            <Link href="/docs/licenses" className="underline underline-offset-4">
              the licenses page
            </Link>{" "}
            before using them commercially.
          </p>
        </div>
      </section>

      {/* FAQ: native <details>, so the page stays a server component. */}
      <section className="px-6 pt-[90px] sm:pt-[120px] lg:pt-[150px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="w-full sm:w-fit sm:max-w-full lg:sticky lg:top-28 lg:self-start">
            <div
              className="font-code text-[11.5px] tracking-[0.14em] uppercase"
              style={{ color: "var(--al-accent-text)" }}
            >
              FAQ
            </div>
            <TextReveal
              as="h2"
              text="Questions, answered."
              className="mt-5 mb-0 text-[34px] leading-none font-semibold tracking-[-0.04em] sm:w-min sm:text-[44px] lg:text-[64px]"
            />
            <div className="mt-6 aspect-[2/1] w-full sm:w-0 sm:min-w-full overflow-hidden rounded-2xl sm:aspect-[3/2] lg:aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/FAQ.svg"
                alt=""
                aria-hidden
                width={600}
                height={600}
                className="block h-full w-full scale-125 object-cover"
              />
            </div>
          </div>
          <div className="shadow-[inset_0_-1px_0_var(--al-hairline-strong)]">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group shadow-[inset_0_1px_0_var(--al-hairline-strong)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[20px] font-semibold tracking-[-0.02em] transition-colors hover:text-[var(--al-accent-text)] sm:text-[24px] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="text-[24px] leading-none font-normal text-al-fg-quaternary transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-0 mb-0 max-w-[56ch] pb-7 text-[15.5px] leading-[1.65] text-al-fg-body text-pretty">
                  {item.a}
                  {item.href && (
                    <>
                      {" "}
                      <Link href={item.href} className="underline underline-offset-4">
                        {item.hrefLabel}
                      </Link>
                      .
                    </>
                  )}
                </p>
              </details>
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
