import { SectionContent } from "./content-types";

export const LEAD =
  "Boot the full AudioLens stack locally with Docker, load a sample dataset, and produce your first saliency map against a Whisper checkpoint. About ten minutes, most of it model download.";

export const CALLOUT_TITLE = "Model weights download on first run";

// Rendered split around an inline <code>hf-cache</code>; kept flat here so the
// search index sees one continuous sentence.
export const CALLOUT_BODY =
  "Only the worker container pulls weights, into hf-cache. The API image never imports the ML runtime.";

export const INSTALL_INTRO =
  "Pick the target that matches your accelerator. Every path ends with the same three services on the same ports.";

export const CODE_BLOCKS = [
  {
    label: "docker",
    code: `# 1. Clone
git clone https://github.com/ECHO-Lit/ECHO-LIT.git
cd ECHO-LIT

# 2. Copy env files (defaults work out of the box)
cp Backend/.env.example Backend/.env
cp Frontend/.env.example Frontend/.env

# 3. Boot the full stack
docker compose up --build`,
  },
  {
    label: "nvidia",
    code: `# Linux or WSL 2 with the NVIDIA Container Toolkit.
# Scale the all-queue local worker to 0 so only the GPU
# worker consumes GPU queues.
docker compose --profile gpu up --build \\
  --scale worker-model-local=0 \\
  redis api scheduler frontend worker-cpu worker-gpu`,
  },
  {
    label: "amd rocm",
    code: `# Linux with a supported ROCm host driver.
docker compose --profile amd up --build \\
  --scale worker-model-local=0 \\
  redis api scheduler frontend worker-cpu worker-amd`,
  },
  {
    label: "macos mps",
    code: `# Docker Desktop cannot pass Metal into a Linux container.
# Keep the API in Compose, run the worker natively.
cd Backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

STORAGE_LOCAL_ROOT=shared-storage ML_DEVICE=mps \\
  celery -A app.core.celery_app:celery_app worker \\
  --queues=gpu-fast,gpu-large --concurrency=1`,
  },
];

export const PREREQS = [
  {
    kicker: "REQUIRED",
    title: "Docker",
    body: "Docker Desktop on Windows or Mac, Docker Engine plus the Compose plugin on Linux.",
  },
  {
    kicker: "WINDOWS",
    title: "WSL 2 backend",
    body: "Enable it in Docker Desktop settings for faster bind-mount I/O and GPU passthrough.",
  },
  {
    kicker: "NVIDIA",
    title: "Driver 555+",
    body: "Verify with a base CUDA 12.6 image running nvidia-smi before booting the GPU profile.",
  },
  {
    kicker: "APPLE",
    title: "Native worker",
    body: "Docker Desktop does not expose MPS, so run the worker outside the container to use the GPU.",
  },
];

export const ENDPOINTS = [
  { name: "Frontend", addr: "http://localhost:8080", state: "ready" },
  { name: "API", addr: "http://localhost:8000/health", state: "ready" },
  { name: "Redis broker", addr: "localhost:6379", state: "ready" },
  { name: "Worker heartbeat", addr: "reported by /health", state: "polling" },
];

export const STEPS = [
  {
    n: "1",
    title: "Upload audio or pick a sample dataset",
    body: "Drop your own files into the uploader, or start from the bundled Common Voice and RAVDESS subsets. Dataset paths inside the container are case-sensitive.",
    cmd: "data/common_voice_valid_dev",
  },
  {
    n: "2",
    title: "Select a model",
    body: "Choose a Whisper or Wav2Vec2 checkpoint. The first selection triggers a weight download into the worker cache; pre-warm it if you want an instant first run.",
    cmd: null,
  },
  {
    n: "3",
    title: "Read the prediction",
    body: "The transcript panel aligns prediction against ground truth word by word and reports WER, CER and Levenshtein distance per datapoint.",
    cmd: null,
  },
  {
    n: "4",
    title: "Generate a saliency map",
    body: "Run Grad-CAM or integrated gradients over the waveform. Segments are ranked by their contribution to each predicted token and highlighted on the shared timeline.",
    cmd: null,
  },
  {
    n: "5",
    title: "Perturb and compare",
    body: "Add noise, shift pitch, clip or mask a region, then watch the metrics move. Robustness measured, not assumed.",
    cmd: null,
  },
];

export const NEXT_LINKS = [
  {
    title: "Core concepts",
    body: "Datapoints, the shared timeline, and how panels stay in sync.",
    meta: "5 min read",
  },
  {
    title: "Custom checkpoints",
    body: "Point the loader at a local or Hugging Face model of your own.",
    meta: "Guide",
  },
  {
    title: "Architecture",
    body: "API control plane, Celery workers, Redis broker, shared storage.",
    meta: "Reference",
  },
  {
    title: "REST API",
    body: "Every panel is backed by an endpoint you can call directly.",
    meta: "Reference",
  },
];

export const QUICKSTART_CONTENT: SectionContent = {
  id: "quickstart",
  lead: [
    { kind: "text", text: LEAD },
    { kind: "item", title: CALLOUT_TITLE, text: CALLOUT_BODY },
  ],
  headings: [
    {
      id: "prereq",
      label: "Prerequisites",
      blocks: PREREQS.map((p) => ({
        kind: "item" as const,
        title: p.title,
        text: p.body,
      })),
    },
    {
      id: "install",
      label: "Install and boot",
      blocks: [
        { kind: "text" as const, text: INSTALL_INTRO },
        ...CODE_BLOCKS.map((c) => ({
          kind: "code" as const,
          text: c.code,
          label: c.label,
        })),
      ],
    },
    {
      id: "endpoints",
      label: "Service endpoints",
      blocks: ENDPOINTS.map((e) => ({
        kind: "item" as const,
        title: e.name,
        text: e.addr,
      })),
    },
    {
      id: "first",
      label: "First analysis",
      blocks: STEPS.map((s) => ({
        kind: "item" as const,
        title: s.title,
        text: s.cmd ? `${s.body} ${s.cmd}` : s.body,
      })),
    },
    {
      id: "next",
      label: "Where to go next",
      blocks: NEXT_LINKS.map((n) => ({
        kind: "item" as const,
        title: n.title,
        text: n.body,
      })),
    },
  ],
};

export const QUICKSTART_TOC = QUICKSTART_CONTENT.headings.map(({ id, label }) => ({
  id,
  label,
}));
