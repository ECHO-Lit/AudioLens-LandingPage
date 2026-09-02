export type NavItem = { id: string; title: string; tag?: string; desc: string };
export type NavGroup = { label: string; items: NavItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Get started",
    items: [
      {
        id: "intro",
        title: "Introduction",
        desc: "What AudioLens is and why it exists.",
      },
      {
        id: "quickstart",
        title: "Quickstart",
        desc: "Boot the stack and run your first analysis in about ten minutes.",
      },
      {
        id: "concepts",
        title: "Core concepts",
        desc: "Datapoints, the shared timeline, and how panels stay in sync.",
      },
      {
        id: "datasets",
        title: "Loading datasets",
        desc: "Bring your own audio or start from a bundled sample set.",
      },
    ],
  },
  {
    label: "Analysis panels",
    items: [
      {
        id: "saliency",
        title: "Saliency mapping",
        desc: "See which parts of the waveform drove each predicted token.",
      },
      {
        id: "attention",
        title: "Attention",
        desc: "Inspect attention weights across encoder and decoder layers.",
      },
      {
        id: "embeddings",
        title: "Embedding projector",
        desc: "Visualize learned representations in a reduced space.",
      },
      {
        id: "perturb",
        title: "Perturbation lab",
        desc: "Add noise, shift pitch, or mask audio and watch metrics move.",
      },
      {
        id: "fairness",
        title: "Fairness slices",
        tag: "beta",
        desc: "Compare model performance across demographic slices.",
      },
    ],
  },
  {
    label: "Models",
    items: [
      {
        id: "whisper",
        title: "Whisper",
        desc: "Checkpoint options and configuration for Whisper models.",
      },
      {
        id: "wav2vec",
        title: "Wav2Vec2",
        desc: "Checkpoint options and configuration for Wav2Vec2 models.",
      },
      {
        id: "custom",
        title: "Custom checkpoints",
        desc: "Point the loader at a local or Hugging Face model of your own.",
      },
      {
        id: "devices",
        title: "Device selection",
        desc: "Run inference on CPU, CUDA, ROCm, or Apple MPS.",
      },
    ],
  },
  {
    label: "Reference",
    items: [
      {
        id: "rest",
        title: "REST API",
        desc: "Every panel is backed by an endpoint you can call directly.",
      },
      {
        id: "env",
        title: "Environment variables",
        desc: "Configuration flags read by the API and worker containers.",
      },
      {
        id: "arch",
        title: "Architecture",
        desc: "API control plane, Celery workers, Redis broker, shared storage.",
      },
      {
        id: "cli",
        title: "CLI",
        desc: "Command-line tools for scripting and automation.",
      },
    ],
  },
];
