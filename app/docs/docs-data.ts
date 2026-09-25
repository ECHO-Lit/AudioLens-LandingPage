export type NavItem = { id: string; title: string; tag?: string; desc: string };
export type NavGroup = { label: string; items: NavItem[] };

/** Every page in sidebar order. Backs prev/next, routing and the sitemap. */
export function flatNav(): NavItem[] {
  return NAV_GROUPS.flatMap((g) => g.items);
}

export function findNavItem(id: string): NavItem | undefined {
  return flatNav().find((it) => it.id === id);
}

export function findNavGroup(id: string): NavGroup | undefined {
  return NAV_GROUPS.find((g) => g.items.some((it) => it.id === id));
}

export const docsHref = (id: string) => `/docs/${id}`;

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Get started",
    items: [
      { id: "intro", title: "Introduction", desc: "What AudioLens is and why it exists." },
      { id: "quickstart", title: "Quickstart", desc: "Boot the stack and run your first analysis in about ten minutes." },
      { id: "concepts", title: "Core concepts", desc: "Datapoints, the shared timeline, and how panels stay in sync." },
      { id: "datasets", title: "Loading datasets", desc: "Bring your own audio or fetch a built-in sample set with one script." },
    ],
  },
  {
    label: "Analysis panels",
    items: [
      { id: "saliency", title: "Saliency mapping", desc: "See which parts of the waveform drove each predicted token." },
      { id: "attention", title: "Attention", desc: "Inspect attention weights across encoder and decoder layers." },
      { id: "embeddings", title: "Embedding projector", desc: "Visualize learned representations in a reduced space, with clustering and nearest neighbours." },
      { id: "perturb", title: "Perturbation lab", desc: "Add noise, shift pitch, stretch time, or mask audio and watch metrics move." },
      { id: "diagnostics", title: "Diagnostics", desc: "Separate linguistic from acoustic influence on a prediction." },
      { id: "fairness", title: "Fairness slices", desc: "Compare model performance across accent, speaker, or any metadata slice." },
      { id: "probes", title: "Layer probes", desc: "Train a linear probe per layer to find where a property is represented." },
      { id: "jlens", title: "Jacobian Lens", desc: "A decoder-only, position-resolved lens over Whisper's decoder layers." },
      { id: "eda", title: "Dataset EDA", desc: "Explore a dataset's class balance, distributions, and outliers before you analyze it." },
    ],
  },
  {
    label: "Models",
    items: [
      { id: "whisper", title: "Whisper", desc: "Checkpoint options and configuration for Whisper models." },
      { id: "wav2vec", title: "Wav2Vec2", desc: "Checkpoint options and configuration for Wav2Vec2 models." },
      { id: "custom", title: "Custom checkpoints", desc: "Point the loader at a local or Hugging Face model of your own." },
      { id: "devices", title: "Device selection", desc: "Run inference on CPU, CUDA, ROCm, or Apple MPS." },
    ],
  },
  {
    label: "Deployment",
    items: [
      { id: "selfhost", title: "Self-hosting", desc: "Run the full stack yourself with Docker Compose." },
      { id: "demo", title: "Hosted demo", tag: "planned", desc: "A limited public demo is planned — here's what to expect." },
      { id: "troubleshoot", title: "Troubleshooting", desc: "Common setup problems and how to fix them." },
    ],
  },
  {
    label: "Reference",
    items: [
      { id: "rest", title: "REST API", desc: "Every panel is backed by an endpoint you can call directly." },
      { id: "env", title: "Environment variables", desc: "Configuration flags read by the API and worker containers." },
      { id: "arch", title: "Architecture", desc: "API control plane, Celery workers, Redis broker, shared storage." },
      { id: "cli", title: "CLI & scripts", desc: "Command-line tools for scripting and automation." },
    ],
  },
  {
    label: "Project",
    items: [
      { id: "contributing", title: "Contributing", desc: "How to propose changes and the branch/PR conventions we use." },
      { id: "changelog", title: "Changelog", desc: "What shipped in each release." },
      { id: "security", title: "Security", desc: "How to report a vulnerability." },
      { id: "licenses", title: "Licenses", desc: "AudioLens's license and the terms behind the models and datasets it ships with." },
    ],
  },
];
