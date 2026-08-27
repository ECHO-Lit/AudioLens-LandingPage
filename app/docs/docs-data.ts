export type NavItem = { id: string; title: string; tag?: string };
export type NavGroup = { label: string; items: NavItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Get started",
    items: [
      { id: "intro", title: "Introduction" },
      { id: "quickstart", title: "Quickstart" },
      { id: "concepts", title: "Core concepts" },
      { id: "datasets", title: "Loading datasets" },
    ],
  },
  {
    label: "Analysis panels",
    items: [
      { id: "saliency", title: "Saliency mapping" },
      { id: "attention", title: "Attention" },
      { id: "embeddings", title: "Embedding projector" },
      { id: "perturb", title: "Perturbation lab" },
      { id: "fairness", title: "Fairness slices", tag: "beta" },
    ],
  },
  {
    label: "Models",
    items: [
      { id: "whisper", title: "Whisper" },
      { id: "wav2vec", title: "Wav2Vec2" },
      { id: "custom", title: "Custom checkpoints" },
      { id: "devices", title: "Device selection" },
    ],
  },
  {
    label: "Reference",
    items: [
      { id: "rest", title: "REST API" },
      { id: "env", title: "Environment variables" },
      { id: "arch", title: "Architecture" },
      { id: "cli", title: "CLI" },
    ],
  },
];
