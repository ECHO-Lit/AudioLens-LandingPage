// GENERATED FILE -- do not edit.
// Run `node scripts/build-docs-index.mjs` (or npm run dev / npm run build) to
// regenerate from content/docs/*.mdx.

import type { SearchRecord, TocItem } from "./search-types";

/** Right-hand "On this page" anchors. Sections with no h2 are absent. */
export const TOC_BY_SECTION: Record<string, TocItem[]> = {
  "arch": [
    {
      "id": "control-plane-vs-execution-plane",
      "label": "Control plane vs. execution plane"
    },
    {
      "id": "request-flow",
      "label": "Request flow"
    },
    {
      "id": "queues",
      "label": "Queues"
    },
    {
      "id": "storage",
      "label": "Storage"
    },
    {
      "id": "compose-services",
      "label": "Compose services"
    },
    {
      "id": "related-pages",
      "label": "Related pages"
    }
  ],
  "attention": [
    {
      "id": "which-models-this-works-on",
      "label": "Which models this works on"
    },
    {
      "id": "selecting-a-layer-and-head",
      "label": "Selecting a layer and head"
    },
    {
      "id": "two-views",
      "label": "Two views"
    },
    {
      "id": "gpu-note-attention_force_cpu",
      "label": "GPU note: ATTENTION_FORCE_CPU"
    }
  ],
  "changelog": [
    {
      "id": "unreleased--audiolens",
      "label": "[Unreleased] — AudioLens"
    },
    {
      "id": "100--2024-10-13",
      "label": "[1.0.0] — 2024-10-13"
    }
  ],
  "cli": [
    {
      "id": "stack-management-scripts",
      "label": "Stack management scripts"
    },
    {
      "id": "dataset-scripts",
      "label": "Dataset scripts"
    },
    {
      "id": "useful-docker-compose-commands",
      "label": "Useful docker compose commands"
    }
  ],
  "concepts": [
    {
      "id": "the-shared-timeline",
      "label": "The shared timeline"
    },
    {
      "id": "what-a-datapoint-is",
      "label": "What a datapoint is"
    },
    {
      "id": "how-panels-stay-in-sync",
      "label": "How panels stay in sync"
    },
    {
      "id": "sessions-not-accounts",
      "label": "Sessions, not accounts"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "contributing": [
    {
      "id": "workflow",
      "label": "Workflow"
    },
    {
      "id": "style",
      "label": "Style"
    },
    {
      "id": "code-of-conduct",
      "label": "Code of Conduct"
    },
    {
      "id": "credits",
      "label": "Credits"
    }
  ],
  "custom": [
    {
      "id": "bring-your-own-model",
      "label": "Bring your own model"
    },
    {
      "id": "architecture-constraints",
      "label": "Architecture constraints"
    },
    {
      "id": "registering-a-model",
      "label": "Registering a model"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "datasets": [
    {
      "id": "bundled-datasets",
      "label": "Bundled datasets"
    },
    {
      "id": "custom-datasets",
      "label": "Custom datasets"
    },
    {
      "id": "formats-size-and-duration-limits",
      "label": "Formats, size, and duration limits"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "demo": [
    {
      "id": "status",
      "label": "Status"
    },
    {
      "id": "dataset-licensing-and-the-demo",
      "label": "Dataset licensing and the demo"
    },
    {
      "id": "usage-limits--not-decided-yet",
      "label": "Usage limits — not decided yet"
    },
    {
      "id": "in-the-meantime",
      "label": "In the meantime"
    }
  ],
  "devices": [
    {
      "id": "automatic-device-selection",
      "label": "Automatic device selection"
    },
    {
      "id": "compose-profiles-per-device",
      "label": "Compose profiles per device"
    },
    {
      "id": "attention_force_cpu",
      "label": "ATTENTION_FORCE_CPU"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "diagnostics": [
    {
      "id": "what-the-sweep-does",
      "label": "What the sweep does"
    },
    {
      "id": "limits",
      "label": "Limits"
    },
    {
      "id": "running-it",
      "label": "Running it"
    }
  ],
  "eda": [
    {
      "id": "what-the-eda-panel-shows",
      "label": "What the EDA panel shows"
    },
    {
      "id": "clustering-and-nearest-neighbours",
      "label": "Clustering and nearest neighbours"
    },
    {
      "id": "exporting-results",
      "label": "Exporting results"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "embeddings": [
    {
      "id": "projection-methods",
      "label": "Projection methods"
    },
    {
      "id": "clustering",
      "label": "Clustering"
    },
    {
      "id": "nearest-neighbour-retrieval",
      "label": "Nearest-neighbour retrieval"
    },
    {
      "id": "selection-and-export",
      "label": "Selection and export"
    }
  ],
  "env": [
    {
      "id": "runtime",
      "label": "Runtime"
    },
    {
      "id": "session--cookies",
      "label": "Session / cookies"
    },
    {
      "id": "storage",
      "label": "Storage"
    },
    {
      "id": "limits",
      "label": "Limits"
    },
    {
      "id": "device--features",
      "label": "Device / features"
    },
    {
      "id": "task-timing",
      "label": "Task timing"
    },
    {
      "id": "worker-tunables",
      "label": "Worker tunables"
    },
    {
      "id": "fairness",
      "label": "Fairness"
    },
    {
      "id": "frontend",
      "label": "Frontend"
    }
  ],
  "fairness": [
    {
      "id": "grouping",
      "label": "Grouping"
    },
    {
      "id": "metrics",
      "label": "Metrics"
    },
    {
      "id": "minimums",
      "label": "Minimums"
    },
    {
      "id": "dataset-size",
      "label": "Dataset size"
    },
    {
      "id": "how-long-it-takes",
      "label": "How long it takes"
    },
    {
      "id": "reading-the-results",
      "label": "Reading the results"
    }
  ],
  "intro": [
    {
      "id": "what-audiolens-is",
      "label": "What AudioLens is"
    },
    {
      "id": "why-it-exists",
      "label": "Why it exists"
    },
    {
      "id": "who-its-for",
      "label": "Who it's for"
    },
    {
      "id": "lineage-echo--audiolens",
      "label": "Lineage: ECHO → AudioLens"
    },
    {
      "id": "what-you-can-do",
      "label": "What you can do"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "jlens": [
    {
      "id": "two-operations",
      "label": "Two operations"
    },
    {
      "id": "the-j-lens-lab",
      "label": "The J-Lens Lab"
    },
    {
      "id": "saved-lenses",
      "label": "Saved lenses"
    }
  ],
  "licenses": [
    {
      "id": "audiolenss-own-license",
      "label": "AudioLens's own license"
    },
    {
      "id": "third-party-model-and-dataset-licenses",
      "label": "Third-party model and dataset licenses"
    },
    {
      "id": "what-this-means-in-practice",
      "label": "What this means in practice"
    }
  ],
  "perturb": [
    {
      "id": "four-perturbation-types",
      "label": "Four perturbation types"
    },
    {
      "id": "request-limits",
      "label": "Request limits"
    },
    {
      "id": "comparing-results",
      "label": "Comparing results"
    }
  ],
  "probes": [
    {
      "id": "how-it-works",
      "label": "How it works"
    },
    {
      "id": "probe-types",
      "label": "Probe types"
    },
    {
      "id": "limits",
      "label": "Limits"
    },
    {
      "id": "reading-the-results",
      "label": "Reading the results"
    }
  ],
  "quickstart": [
    {
      "id": "get-audiolens-running",
      "label": "Get AudioLens running"
    },
    {
      "id": "prerequisites",
      "label": "Prerequisites"
    },
    {
      "id": "install-and-boot",
      "label": "Install and boot"
    },
    {
      "id": "service-endpoints",
      "label": "Service endpoints"
    },
    {
      "id": "run-your-first-analysis",
      "label": "Run your first analysis"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "rest": [
    {
      "id": "session-model",
      "label": "Session model"
    },
    {
      "id": "audio",
      "label": "Audio"
    },
    {
      "id": "jobs",
      "label": "Jobs"
    },
    {
      "id": "custom-models",
      "label": "Custom models"
    },
    {
      "id": "analyses",
      "label": "Analyses"
    },
    {
      "id": "dataset-management-custom-datasets",
      "label": "Dataset management (custom datasets)"
    },
    {
      "id": "built-in-datasets",
      "label": "Built-in datasets"
    },
    {
      "id": "ops",
      "label": "Ops"
    }
  ],
  "saliency": [
    {
      "id": "methods",
      "label": "Methods"
    },
    {
      "id": "the-full_audio-flag",
      "label": "The full_audio flag"
    },
    {
      "id": "window-limits",
      "label": "Window limits"
    },
    {
      "id": "is-this-map-telling-the-truth--saliency-faithfulness",
      "label": "Is this map telling the truth? — saliency faithfulness"
    },
    {
      "id": "pairs-well-with-perturbation",
      "label": "Pairs well with perturbation"
    }
  ],
  "security": [
    {
      "id": "supported-versions",
      "label": "Supported versions"
    },
    {
      "id": "reporting-a-vulnerability",
      "label": "Reporting a vulnerability"
    },
    {
      "id": "what-audiolens-gives-you-by-default",
      "label": "What AudioLens gives you by default"
    },
    {
      "id": "best-practices-for-deployers",
      "label": "Best practices for deployers"
    },
    {
      "id": "production-configuration",
      "label": "Production configuration"
    }
  ],
  "selfhost": [
    {
      "id": "prerequisites",
      "label": "Prerequisites"
    },
    {
      "id": "clone-and-boot",
      "label": "Clone and boot"
    },
    {
      "id": "boot-variants",
      "label": "Boot variants"
    },
    {
      "id": "service-endpoints-after-boot",
      "label": "Service endpoints after boot"
    },
    {
      "id": "pre-warm-model-weights",
      "label": "Pre-warm model weights"
    },
    {
      "id": "scale-workers",
      "label": "Scale workers"
    },
    {
      "id": "helper-scripts",
      "label": "Helper scripts"
    },
    {
      "id": "production-notes",
      "label": "Production notes"
    },
    {
      "id": "windows-tip",
      "label": "Windows tip"
    },
    {
      "id": "teardown",
      "label": "Teardown"
    }
  ],
  "troubleshoot": [
    {
      "id": "first-run-model-downloads",
      "label": "First-run model downloads"
    },
    {
      "id": "windows-path-and-case-sensitivity",
      "label": "Windows path and case-sensitivity"
    },
    {
      "id": "apple-silicon-mps-under-docker-desktop",
      "label": "Apple Silicon (MPS) under Docker Desktop"
    },
    {
      "id": "nvidia-gpu-not-detected",
      "label": "NVIDIA GPU not detected"
    },
    {
      "id": "redis-full-or-503-responses",
      "label": "Redis full or 503 responses"
    },
    {
      "id": "checking-system-health",
      "label": "Checking system health"
    },
    {
      "id": "finding-stuck-jobs",
      "label": "Finding stuck jobs"
    }
  ],
  "wav2vec": [
    {
      "id": "available-checkpoint",
      "label": "Available checkpoint"
    },
    {
      "id": "legacy-fallback-models",
      "label": "Legacy fallback models"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ],
  "whisper": [
    {
      "id": "available-checkpoints",
      "label": "Available checkpoints"
    },
    {
      "id": "english-only",
      "label": "English-only"
    },
    {
      "id": "saliency-on-whisper",
      "label": "Saliency on Whisper"
    },
    {
      "id": "where-to-go-next",
      "label": "Where to go next"
    }
  ]
};

/** Heading and body records per section, in document order. */
export const SECTION_RECORDS: Record<string, SearchRecord[]> = {
  "arch": [
    {
      "key": "content:arch:lead:0",
      "sectionId": "arch",
      "kind": "content",
      "title": "",
      "body": "AudioLens splits into a CPU-only control plane and a model-execution plane. The frontend only ever talks to the control plane — it never reaches a worker directly."
    },
    {
      "key": "content:arch:lead:1",
      "sectionId": "arch",
      "kind": "content",
      "title": "",
      "body": "FastAPI Celery Redis No SQL database"
    },
    {
      "key": "heading:arch:control-plane-vs-execution-plane:2",
      "sectionId": "arch",
      "headingId": "control-plane-vs-execution-plane",
      "kind": "heading",
      "title": "Control plane vs. execution plane",
      "body": ""
    },
    {
      "key": "content:arch:control-plane-vs-execution-plane:3",
      "sectionId": "arch",
      "headingId": "control-plane-vs-execution-plane",
      "kind": "content",
      "title": "Control plane vs. execution plane",
      "body": "FastAPI is a CPU-only control plane: it accepts uploads, enqueues jobs, and serves results, but never runs a model itself. Celery workers are the model execution plane — they're the only processes that ever load a checkpoint or touch a GPU."
    },
    {
      "key": "heading:arch:request-flow:4",
      "sectionId": "arch",
      "headingId": "request-flow",
      "kind": "heading",
      "title": "Request flow",
      "body": ""
    },
    {
      "key": "content:arch:request-flow:5",
      "sectionId": "arch",
      "headingId": "request-flow",
      "kind": "content",
      "title": "Request flow",
      "body": "Upload audio POST /upload stores the audio and returns an opaque audio_id. No inference runs yet."
    },
    {
      "key": "content:arch:request-flow:6",
      "sectionId": "arch",
      "headingId": "request-flow",
      "kind": "content",
      "title": "Request flow",
      "body": "Submit a job POST /jobs returns 202 immediately with a job_id, and publishes a task envelope onto the appropriate queue."
    },
    {
      "key": "content:arch:request-flow:7",
      "sectionId": "arch",
      "headingId": "request-flow",
      "kind": "content",
      "title": "Request flow",
      "body": "A worker picks it up A Celery worker downloads the audio to a temp dir, lazily loads the model if it isn't already resident, runs the operation, and stores the result."
    },
    {
      "key": "content:arch:request-flow:8",
      "sectionId": "arch",
      "headingId": "request-flow",
      "kind": "content",
      "title": "Request flow",
      "body": "The UI polls The frontend polls GET /jobs/{id} for status, then reads GET /jobs/{id}/result once it's done."
    },
    {
      "key": "content:arch:request-flow:9",
      "sectionId": "arch",
      "headingId": "request-flow",
      "kind": "content",
      "title": "Request flow",
      "body": "Everything expires Job, upload, and result metadata expires after 24 hours."
    },
    {
      "key": "heading:arch:queues:10",
      "sectionId": "arch",
      "headingId": "queues",
      "kind": "heading",
      "title": "Queues",
      "body": ""
    },
    {
      "key": "content:arch:queues:11",
      "sectionId": "arch",
      "headingId": "queues",
      "kind": "content",
      "title": "Queues",
      "body": "Jobs are routed to one of three queues depending on which operation they run:"
    },
    {
      "key": "content:arch:queues:12",
      "sectionId": "arch",
      "headingId": "queues",
      "kind": "content",
      "title": "Queues",
      "body": "gpu-fast prediction, embedding, hidden states, layer probing (Whisper Base, Wav2Vec2)"
    },
    {
      "key": "content:arch:queues:13",
      "sectionId": "arch",
      "headingId": "queues",
      "kind": "content",
      "title": "Queues",
      "body": "gpu-large attention, saliency, faithfulness, Jacobian Lens, anything on Whisper Large"
    },
    {
      "key": "content:arch:queues:14",
      "sectionId": "arch",
      "headingId": "queues",
      "kind": "content",
      "title": "Queues",
      "body": "cpu perturbation, audio features, linguistic-vs-acoustic sweep, fairness, cleanup"
    },
    {
      "key": "heading:arch:storage:15",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "heading",
      "title": "Storage",
      "body": ""
    },
    {
      "key": "content:arch:storage:16",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "No SQL database. Redis holds four logical DBs:"
    },
    {
      "key": "content:arch:storage:17",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "DB0 Sessions / cache"
    },
    {
      "key": "content:arch:storage:18",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "DB1 Job metadata"
    },
    {
      "key": "content:arch:storage:19",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "DB2 Celery broker"
    },
    {
      "key": "content:arch:storage:20",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "DB3 Celery results"
    },
    {
      "key": "content:arch:storage:21",
      "sectionId": "arch",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "Uploaded audio and job results live in object storage — the local filesystem by default, or an S3-compatible bucket in production — under a 24-hour lifecycle policy (echo-transient-artifacts-24h). Celery Beat runs an hourly cleanup pass plus a stale-job reaper every 300 seconds."
    },
    {
      "key": "heading:arch:compose-services:22",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "heading",
      "title": "Compose services",
      "body": ""
    },
    {
      "key": "content:arch:compose-services:23",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "Compose project name: echo."
    },
    {
      "key": "content:arch:compose-services:24",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "redis redis:7-alpine 6379 AOF persistence, noeviction, healthcheck"
    },
    {
      "key": "content:arch:compose-services:25",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "api Backend Dockerfile, CPU-only 8000 FastAPI, uvicorn --reload, healthcheck on /health"
    },
    {
      "key": "content:arch:compose-services:26",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "worker-cpu Backend Dockerfile, cpu variant – --queues=cpu --concurrency=2"
    },
    {
      "key": "content:arch:compose-services:27",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "worker-model-local Backend Dockerfile, cpu variant – --queues=gpu-fast,gpu-large --concurrency=1"
    },
    {
      "key": "content:arch:compose-services:28",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "scheduler api image – celery beat — must run exactly once"
    },
    {
      "key": "content:arch:compose-services:29",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "worker-gpu Backend Dockerfile, gpu variant, profile gpu – NVIDIA GPU reservation"
    },
    {
      "key": "content:arch:compose-services:30",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "worker-amd Backend Dockerfile, rocm variant, profile amd – /dev/kfd, /dev/dri, ROCm"
    },
    {
      "key": "content:arch:compose-services:31",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "frontend Frontend Dockerfile, dev target 8080 depends on healthy api"
    },
    {
      "key": "content:arch:compose-services:32",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "Base images: python:3.11-slim (CPU/ROCm), nvidia/cuda:12.6.0-runtime-ubuntu22.04 (GPU). Frontend: node:20-alpine for development; the production target is nginx:alpine on port 80 with SPA fallback. Containers run as non-root user appuser (uid 1000)."
    },
    {
      "key": "content:arch:compose-services:33",
      "sectionId": "arch",
      "headingId": "compose-services",
      "kind": "content",
      "title": "Compose services",
      "body": "Image placeholder: architecture diagram Add /assets/docs/architecture-diagram.png — a diagram (not a screenshot) showing the frontend talking only to the FastAPI control plane, the control plane publishing job envelopes to the three queues, Celery workers consuming those queues, and the shared Redis/object-storage layer underneath. Replace this callout with ![Architecture diagram](/assets/docs/architecture-diagram.png) once the real image is uploaded."
    },
    {
      "key": "heading:arch:related-pages:34",
      "sectionId": "arch",
      "headingId": "related-pages",
      "kind": "heading",
      "title": "Related pages",
      "body": ""
    },
    {
      "key": "content:arch:related-pages:35",
      "sectionId": "arch",
      "headingId": "related-pages",
      "kind": "content",
      "title": "Related pages",
      "body": "Self-hosting for booting this stack, Environment variables for every tunable above, and Device selection for how ML_DEVICE picks CUDA, ROCm, MPS, or CPU."
    }
  ],
  "attention": [
    {
      "key": "content:attention:lead:0",
      "sectionId": "attention",
      "kind": "content",
      "title": "",
      "body": "The attention panel shows exactly what a chosen attention head looked at while producing its output — one layer, one head, at a time."
    },
    {
      "key": "content:attention:lead:1",
      "sectionId": "attention",
      "kind": "content",
      "title": "",
      "body": "Whisper custom models per-layer per-head"
    },
    {
      "key": "heading:attention:which-models-this-works-on:2",
      "sectionId": "attention",
      "headingId": "which-models-this-works-on",
      "kind": "heading",
      "title": "Which models this works on",
      "body": ""
    },
    {
      "key": "content:attention:which-models-this-works-on:3",
      "sectionId": "attention",
      "headingId": "which-models-this-works-on",
      "kind": "content",
      "title": "Which models this works on",
      "body": "Attention extraction is available for Whisper and custom models only. It is not available for wav2vec2 — wav2vec2 is a CTC classifier without the encoder-decoder attention structure this panel visualizes."
    },
    {
      "key": "heading:attention:selecting-a-layer-and-head:4",
      "sectionId": "attention",
      "headingId": "selecting-a-layer-and-head",
      "kind": "heading",
      "title": "Selecting a layer and head",
      "body": ""
    },
    {
      "key": "content:attention:selecting-a-layer-and-head:5",
      "sectionId": "attention",
      "headingId": "selecting-a-layer-and-head",
      "kind": "content",
      "title": "Selecting a layer and head",
      "body": "layer_idx 0–31, default 6 Which transformer layer to inspect"
    },
    {
      "key": "content:attention:selecting-a-layer-and-head:6",
      "sectionId": "attention",
      "headingId": "selecting-a-layer-and-head",
      "kind": "content",
      "title": "Selecting a layer and head",
      "body": "head_idx 0–31, default 0 Which attention head within that layer"
    },
    {
      "key": "content:attention:selecting-a-layer-and-head:7",
      "sectionId": "attention",
      "headingId": "selecting-a-layer-and-head",
      "kind": "content",
      "title": "Selecting a layer and head",
      "body": "Different heads specialize differently — some track local acoustic continuity, others track longer-range structure. There's no single \"right\" head to look at; the point of exposing both indices is to let you sweep across layers and heads and compare."
    },
    {
      "key": "heading:attention:two-views:8",
      "sectionId": "attention",
      "headingId": "two-views",
      "kind": "heading",
      "title": "Two views",
      "body": ""
    },
    {
      "key": "content:attention:two-views:9",
      "sectionId": "attention",
      "headingId": "two-views",
      "kind": "content",
      "title": "Two views",
      "body": "Matrix view — the raw attention weight matrix for the selected layer/head, source positions against target positions."
    },
    {
      "key": "content:attention:two-views:10",
      "sectionId": "attention",
      "headingId": "two-views",
      "kind": "content",
      "title": "Two views",
      "body": "Timeline view — attention weight plotted against the shared audio timeline, so you can line it up against the waveform, the saliency map, or the transcript for the same clip."
    },
    {
      "key": "content:attention:two-views:11",
      "sectionId": "attention",
      "headingId": "two-views",
      "kind": "content",
      "title": "Two views",
      "body": "Image placeholder: attention matrix view Add /assets/docs/attention-matrix.png — the attention panel with the layer/head selectors and the matrix view rendered for a sample clip. Replace this callout with ![Attention matrix view](/assets/docs/attention-matrix.png) once the real image is uploaded."
    },
    {
      "key": "heading:attention:gpu-note-attention_force_cpu:12",
      "sectionId": "attention",
      "headingId": "gpu-note-attention_force_cpu",
      "kind": "heading",
      "title": "GPU note: ATTENTION_FORCE_CPU",
      "body": ""
    },
    {
      "key": "content:attention:gpu-note-attention_force_cpu:13",
      "sectionId": "attention",
      "headingId": "gpu-note-attention_force_cpu",
      "kind": "content",
      "title": "GPU note: ATTENTION_FORCE_CPU",
      "body": "Attention extraction on GPU can trigger a Triton segfault in the underlying kernel. ATTENTION_FORCE_CPU (default true) works around this by forcing attention computation onto CPU regardless of the worker's normal device selection. Leave it on unless you've specifically verified GPU attention extraction is stable on your hardware — turning it off trades a rare crash for slightly faster runs."
    }
  ],
  "changelog": [
    {
      "key": "content:changelog:lead:0",
      "sectionId": "changelog",
      "kind": "content",
      "title": "",
      "body": "AudioLens doesn't carry a version number today — see Licenses and the rest of these docs for \"Open source\" as the only label used. This page tracks what's shipped and what's in development instead of version numbers."
    },
    {
      "key": "heading:changelog:unreleased--audiolens:1",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "heading",
      "title": "[Unreleased] — AudioLens",
      "body": ""
    },
    {
      "key": "content:changelog:unreleased--audiolens:2",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "in development"
    },
    {
      "key": "content:changelog:unreleased--audiolens:3",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "AudioLens extends the original ECHO project with a substantial set of new capabilities, currently in development:"
    },
    {
      "key": "content:changelog:unreleased--audiolens:4",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Asynchronous job execution (submit → poll → fetch result, instead of synchronous inference)"
    },
    {
      "key": "content:changelog:unreleased--audiolens:5",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "A job lifecycle API (/jobs, /jobs/{id}, /jobs/{id}/result)"
    },
    {
      "key": "content:changelog:unreleased--audiolens:6",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "An object storage abstraction (local filesystem or S3-compatible backend)"
    },
    {
      "key": "content:changelog:unreleased--audiolens:7",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Dataset EDA (exploratory data analysis) tooling"
    },
    {
      "key": "content:changelog:unreleased--audiolens:8",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Embedding analytics — 2D/3D projection, clustering, nearest-neighbour retrieval"
    },
    {
      "key": "content:changelog:unreleased--audiolens:9",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Saliency faithfulness checking (deletion-curve validation of saliency maps)"
    },
    {
      "key": "content:changelog:unreleased--audiolens:10",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Linguistic-vs-acoustic influence sweeps"
    },
    {
      "key": "content:changelog:unreleased--audiolens:11",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Layer-wise probing (linear probes per model layer)"
    },
    {
      "key": "content:changelog:unreleased--audiolens:12",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Jacobian Lens — a decoder-only, position-resolved lens over Whisper's decoder layers"
    },
    {
      "key": "content:changelog:unreleased--audiolens:13",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Accent and fairness slicing across speaker/accent/language/metadata groups"
    },
    {
      "key": "content:changelog:unreleased--audiolens:14",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Custom model ingestion (any compatible Hugging Face speech model)"
    },
    {
      "key": "content:changelog:unreleased--audiolens:15",
      "sectionId": "changelog",
      "headingId": "unreleased--audiolens",
      "kind": "content",
      "title": "[Unreleased] — AudioLens",
      "body": "Two new bundled datasets: LibriSpeech-1000 and SAVEE (SAVEE requires the user's own licensed copy — see Licenses)"
    },
    {
      "key": "heading:changelog:100--2024-10-13:16",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "heading",
      "title": "[1.0.0] — 2024-10-13",
      "body": ""
    },
    {
      "key": "content:changelog:100--2024-10-13:17",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "content",
      "title": "[1.0.0] — 2024-10-13",
      "body": "LIT for Voice — initial release."
    },
    {
      "key": "content:changelog:100--2024-10-13:18",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "content",
      "title": "[1.0.0] — 2024-10-13",
      "body": "React frontend, FastAPI backend"
    },
    {
      "key": "content:changelog:100--2024-10-13:19",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "content",
      "title": "[1.0.0] — 2024-10-13",
      "body": "Whisper and Wav2Vec2 model support"
    },
    {
      "key": "content:changelog:100--2024-10-13:20",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "content",
      "title": "[1.0.0] — 2024-10-13",
      "body": "Redis-backed caching"
    },
    {
      "key": "content:changelog:100--2024-10-13:21",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "content",
      "title": "[1.0.0] — 2024-10-13",
      "body": "Bundled Common Voice and RAVDESS datasets"
    },
    {
      "key": "content:changelog:100--2024-10-13:22",
      "sectionId": "changelog",
      "headingId": "100--2024-10-13",
      "kind": "content",
      "title": "[1.0.0] — 2024-10-13",
      "body": "This release was later renamed ECHO, and is now developed further as AudioLens. See Contributing for the full lineage and credits."
    }
  ],
  "cli": [
    {
      "key": "content:cli:lead:0",
      "sectionId": "cli",
      "kind": "content",
      "title": "",
      "body": "AudioLens doesn't ship a dedicated CLI binary — instead, a handful of shell and Python scripts under scripts/ cover the operations you'd otherwise script by hand: starting/stopping the stack, checking queue health, and importing datasets."
    },
    {
      "key": "heading:cli:stack-management-scripts:1",
      "sectionId": "cli",
      "headingId": "stack-management-scripts",
      "kind": "heading",
      "title": "Stack management scripts",
      "body": ""
    },
    {
      "key": "content:cli:stack-management-scripts:2",
      "sectionId": "cli",
      "headingId": "stack-management-scripts",
      "kind": "content",
      "title": "Stack management scripts",
      "body": "start.sh scripts/start.sh docker compose up -d --build, then waits for API + frontend to be healthy"
    },
    {
      "key": "content:cli:stack-management-scripts:3",
      "sectionId": "cli",
      "headingId": "stack-management-scripts",
      "kind": "content",
      "title": "Stack management scripts",
      "body": "stop.sh scripts/stop.sh Stops the stack"
    },
    {
      "key": "content:cli:stack-management-scripts:4",
      "sectionId": "cli",
      "headingId": "stack-management-scripts",
      "kind": "content",
      "title": "Stack management scripts",
      "body": "queue-status.sh scripts/queue-status.sh [-w] Prints queue depth and job status; -w watches continuously"
    },
    {
      "key": "heading:cli:dataset-scripts:5",
      "sectionId": "cli",
      "headingId": "dataset-scripts",
      "kind": "heading",
      "title": "Dataset scripts",
      "body": ""
    },
    {
      "key": "content:cli:dataset-scripts:6",
      "sectionId": "cli",
      "headingId": "dataset-scripts",
      "kind": "content",
      "title": "Dataset scripts",
      "body": "download_librispeech_1000.py Downloads the ~1000-row LibriSpeech-1000 sample from the HF datasets-server"
    },
    {
      "key": "content:cli:dataset-scripts:7",
      "sectionId": "cli",
      "headingId": "dataset-scripts",
      "kind": "content",
      "title": "Dataset scripts",
      "body": "import_librispeech_custom.py Imports a LibriSpeech-style dataset you already have on disk"
    },
    {
      "key": "content:cli:dataset-scripts:8",
      "sectionId": "cli",
      "headingId": "dataset-scripts",
      "kind": "content",
      "title": "Dataset scripts",
      "body": "prepare_savee_subset.py Prepares a SAVEE subset (up to 100 clips) — see the callout below"
    },
    {
      "key": "content:cli:dataset-scripts:9",
      "sectionId": "cli",
      "headingId": "dataset-scripts",
      "kind": "content",
      "title": "Dataset scripts",
      "body": "run_layer_probe_analysis.py Runs layer-probe analysis from the command line, outside the UI"
    },
    {
      "key": "content:cli:dataset-scripts:10",
      "sectionId": "cli",
      "headingId": "dataset-scripts",
      "kind": "content",
      "title": "Dataset scripts",
      "body": "SAVEE is not redistributable prepare_savee_subset.py requires that you already own a copy of the SAVEE dataset — the script's own comments state plainly that \"SAVEE is licensed and cannot be redistributed.\" AudioLens does not bundle or fetch SAVEE audio for you. See Licenses for what's currently confirmed about SAVEE's terms, and Loading datasets for the general import workflow."
    },
    {
      "key": "heading:cli:useful-docker-compose-commands:11",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "heading",
      "title": "Useful docker compose commands",
      "body": ""
    },
    {
      "key": "content:cli:useful-docker-compose-commands:12",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "Scale worker replicas:"
    },
    {
      "key": "content:cli:useful-docker-compose-commands:13",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "docker compose up -d --scale worker-cpu=2 --scale worker-model-local=2"
    },
    {
      "key": "content:cli:useful-docker-compose-commands:14",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "Tear the stack down, optionally wiping volumes (Redis data, local storage):"
    },
    {
      "key": "content:cli:useful-docker-compose-commands:15",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "docker compose down docker compose down -v"
    },
    {
      "key": "content:cli:useful-docker-compose-commands:16",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "Pre-warm model weights in a one-off container instead of waiting for the first real job to trigger the download:"
    },
    {
      "key": "content:cli:useful-docker-compose-commands:17",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "docker compose run --rm worker-model-local python3 -c \\ \"from transformers import pipeline; pipeline('automatic-speech-recognition', model='openai/whisper-base')\""
    },
    {
      "key": "content:cli:useful-docker-compose-commands:18",
      "sectionId": "cli",
      "headingId": "useful-docker-compose-commands",
      "kind": "content",
      "title": "Useful docker compose commands",
      "body": "See Self-hosting for the full boot sequence these commands fit into."
    }
  ],
  "concepts": [
    {
      "key": "heading:concepts:the-shared-timeline:0",
      "sectionId": "concepts",
      "headingId": "the-shared-timeline",
      "kind": "heading",
      "title": "The shared timeline",
      "body": ""
    },
    {
      "key": "content:concepts:the-shared-timeline:1",
      "sectionId": "concepts",
      "headingId": "the-shared-timeline",
      "kind": "content",
      "title": "The shared timeline",
      "body": "Every panel in AudioLens — Saliency, Attention, Embeddings, Perturbation, Diagnostics, Fairness, Layer Probes, J-Lens, Dataset EDA — reads from and writes to the same underlying job data. Instead of separate tools that each need their own upload and their own model run, AudioLens keeps one timeline per audio clip and model, and every analysis you launch attaches its result to that timeline."
    },
    {
      "key": "heading:concepts:what-a-datapoint-is:2",
      "sectionId": "concepts",
      "headingId": "what-a-datapoint-is",
      "kind": "heading",
      "title": "What a datapoint is",
      "body": ""
    },
    {
      "key": "content:concepts:what-a-datapoint-is:3",
      "sectionId": "concepts",
      "headingId": "what-a-datapoint-is",
      "kind": "content",
      "title": "What a datapoint is",
      "body": "A datapoint is one audio clip paired with one model. Everything you do — run a prediction, compute saliency, probe a layer, slice by fairness group — is an operation on that datapoint. A job (POST /jobs) runs one operation against one datapoint and returns a job_id; the UI polls GET /jobs/{id} until it's done, then reads GET /jobs/{id}/result."
    },
    {
      "key": "heading:concepts:how-panels-stay-in-sync:4",
      "sectionId": "concepts",
      "headingId": "how-panels-stay-in-sync",
      "kind": "heading",
      "title": "How panels stay in sync",
      "body": ""
    },
    {
      "key": "content:concepts:how-panels-stay-in-sync:5",
      "sectionId": "concepts",
      "headingId": "how-panels-stay-in-sync",
      "kind": "content",
      "title": "How panels stay in sync",
      "body": "Because every panel is reading results scoped to the same datapoint, switching from the Saliency tab to the Attention tab or the Embeddings tab doesn't require re-uploading audio or re-selecting a model — the frontend already knows which clip and which model you're looking at. Panels that depend on each other's output build on this directly: for example, the Embeddings tab's clustering (HDBSCAN) and nearest-neighbour retrieval reuse the same embedding space that the Dataset EDA tab visualizes, and J-Lens Lab (/j-lens) fits a lens over the decoder layers that the J-Lens panel then applies to a specific datapoint."
    },
    {
      "key": "content:concepts:how-panels-stay-in-sync:6",
      "sectionId": "concepts",
      "headingId": "how-panels-stay-in-sync",
      "kind": "content",
      "title": "How panels stay in sync",
      "body": "The operations underneath the panels are dispatched to three Celery queues so that fast, cheap work doesn't wait behind slow, heavy work:"
    },
    {
      "key": "content:concepts:how-panels-stay-in-sync:7",
      "sectionId": "concepts",
      "headingId": "how-panels-stay-in-sync",
      "kind": "content",
      "title": "How panels stay in sync",
      "body": "gpu-fast prediction, embedding, hidden states, layer probing"
    },
    {
      "key": "content:concepts:how-panels-stay-in-sync:8",
      "sectionId": "concepts",
      "headingId": "how-panels-stay-in-sync",
      "kind": "content",
      "title": "How panels stay in sync",
      "body": "gpu-large attention, saliency, faithfulness, Jacobian Lens"
    },
    {
      "key": "content:concepts:how-panels-stay-in-sync:9",
      "sectionId": "concepts",
      "headingId": "how-panels-stay-in-sync",
      "kind": "content",
      "title": "How panels stay in sync",
      "body": "cpu perturbation, audio features, linguistic-vs-acoustic sweep, fairness, cleanup"
    },
    {
      "key": "heading:concepts:sessions-not-accounts:10",
      "sectionId": "concepts",
      "headingId": "sessions-not-accounts",
      "kind": "heading",
      "title": "Sessions, not accounts",
      "body": ""
    },
    {
      "key": "content:concepts:sessions-not-accounts:11",
      "sectionId": "concepts",
      "headingId": "sessions-not-accounts",
      "kind": "content",
      "title": "Sessions, not accounts",
      "body": "AudioLens has no user accounts. The first time you visit, the API sets an anonymous, HttpOnly sid cookie with a 24-hour TTL. Every resource you create — uploaded audio, jobs, custom models, custom datasets — is scoped to that session cookie, not to an identity. There are no roles and no multi-tenancy: a session either has access to what it created, or it doesn't. When a session's data expires after 24 hours, it's simply gone — there's nothing to migrate or reclaim."
    },
    {
      "key": "heading:concepts:where-to-go-next:12",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:concepts:where-to-go-next:13",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Saliency mapping Analysis panel Attribution maps over the waveform"
    },
    {
      "key": "content:concepts:where-to-go-next:14",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Attention Analysis panel Per-layer, per-head attention weights"
    },
    {
      "key": "content:concepts:where-to-go-next:15",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Embedding projector Analysis panel Projections with clustering and nearest neighbours"
    },
    {
      "key": "content:concepts:where-to-go-next:16",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Dataset EDA Analysis panel Class balance, distributions, and outliers"
    },
    {
      "key": "content:concepts:where-to-go-next:17",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Fairness slices Analysis panel Performance across accent, speaker, or metadata"
    },
    {
      "key": "content:concepts:where-to-go-next:18",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Layer probes Analysis panel Where a property is represented, layer by layer"
    },
    {
      "key": "content:concepts:where-to-go-next:19",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Jacobian Lens Analysis panel A position-resolved lens over decoder layers"
    },
    {
      "key": "content:concepts:where-to-go-next:20",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Diagnostics Analysis panel Linguistic vs. acoustic influence"
    },
    {
      "key": "content:concepts:where-to-go-next:21",
      "sectionId": "concepts",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Perturbation lab Analysis panel Noise, pitch, time-stretch, and masking"
    }
  ],
  "contributing": [
    {
      "key": "content:contributing:lead:0",
      "sectionId": "contributing",
      "kind": "content",
      "title": "",
      "body": "AudioLens is open source and welcomes contributions. The workflow is intentionally ordinary: fork, branch, test, open a PR."
    },
    {
      "key": "heading:contributing:workflow:1",
      "sectionId": "contributing",
      "headingId": "workflow",
      "kind": "heading",
      "title": "Workflow",
      "body": ""
    },
    {
      "key": "content:contributing:workflow:2",
      "sectionId": "contributing",
      "headingId": "workflow",
      "kind": "content",
      "title": "Workflow",
      "body": "Fork the repo Fork https://github.com/ECHO-Lit/ECHO-LIT."
    },
    {
      "key": "content:contributing:workflow:3",
      "sectionId": "contributing",
      "headingId": "workflow",
      "kind": "content",
      "title": "Workflow",
      "body": "Branch from main Use a prefix that describes the change: feature/, bugfix/, docs/, or refactor/."
    },
    {
      "key": "content:contributing:workflow:4",
      "sectionId": "contributing",
      "headingId": "workflow",
      "kind": "content",
      "title": "Workflow",
      "body": "Make your change and test it Frontend tests run on Vitest, backend tests run on pytest."
    },
    {
      "key": "content:contributing:workflow:5",
      "sectionId": "contributing",
      "headingId": "workflow",
      "kind": "content",
      "title": "Workflow",
      "body": "Open a PR against main Reference the issue you're closing with Fixes #n in the description."
    },
    {
      "key": "heading:contributing:style:6",
      "sectionId": "contributing",
      "headingId": "style",
      "kind": "heading",
      "title": "Style",
      "body": ""
    },
    {
      "key": "content:contributing:style:7",
      "sectionId": "contributing",
      "headingId": "style",
      "kind": "content",
      "title": "Style",
      "body": "Frontend: ESLint."
    },
    {
      "key": "content:contributing:style:8",
      "sectionId": "contributing",
      "headingId": "style",
      "kind": "content",
      "title": "Style",
      "body": "Backend: PEP 8, checked with flake8 and formatted with black."
    },
    {
      "key": "heading:contributing:code-of-conduct:9",
      "sectionId": "contributing",
      "headingId": "code-of-conduct",
      "kind": "heading",
      "title": "Code of Conduct",
      "body": ""
    },
    {
      "key": "content:contributing:code-of-conduct:10",
      "sectionId": "contributing",
      "headingId": "code-of-conduct",
      "kind": "content",
      "title": "Code of Conduct",
      "body": "Contributions are governed by a Contributor Covenant 2.0 Code of Conduct, with a four-step enforcement ladder (correction, warning, temporary ban, permanent ban)."
    },
    {
      "key": "content:contributing:code-of-conduct:11",
      "sectionId": "contributing",
      "headingId": "code-of-conduct",
      "kind": "content",
      "title": "Code of Conduct",
      "body": "The Code of Conduct's contact method is still a placeholder As of this writing, the enforcement contact line in the repo's Code of Conduct still reads [INSERT CONTACT METHOD] rather than a real address. This is a known gap, not an oversight to paper over here — a maintainer needs to fill in a real reporting contact before the enforcement process described above is actually actionable. If you need to report a conduct issue in the meantime, use the security contact on the Security page as a fallback."
    },
    {
      "key": "heading:contributing:credits:12",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "heading",
      "title": "Credits",
      "body": ""
    },
    {
      "key": "content:contributing:credits:13",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "AudioLens is built by:"
    },
    {
      "key": "content:contributing:credits:14",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Januda Lelwala"
    },
    {
      "key": "content:contributing:credits:15",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Janith Mahanama"
    },
    {
      "key": "content:contributing:credits:16",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Hesandi Mallawarachchi"
    },
    {
      "key": "content:contributing:credits:17",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "AudioLens is built on and extends ECHO, an MIT-licensed audio interpretability tool created by:"
    },
    {
      "key": "content:contributing:credits:18",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Anas Hussaindeen"
    },
    {
      "key": "content:contributing:credits:19",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Chandupa Ambepitiya"
    },
    {
      "key": "content:contributing:credits:20",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Dewmike Amarasinghe"
    },
    {
      "key": "content:contributing:credits:21",
      "sectionId": "contributing",
      "headingId": "credits",
      "kind": "content",
      "title": "Credits",
      "body": "Both ECHO and AudioLens are inspired by Google PAIR's LIT (Learning Interpretability Tool)."
    }
  ],
  "custom": [
    {
      "key": "heading:custom:bring-your-own-model:0",
      "sectionId": "custom",
      "headingId": "bring-your-own-model",
      "kind": "heading",
      "title": "Bring your own model",
      "body": ""
    },
    {
      "key": "content:custom:bring-your-own-model:1",
      "sectionId": "custom",
      "headingId": "bring-your-own-model",
      "kind": "content",
      "title": "Bring your own model",
      "body": "Beyond the bundled Whisper and Wav2Vec2 checkpoints, AudioLens can register any Hugging Face repo that fits one of the architectures it knows how to run."
    },
    {
      "key": "heading:custom:architecture-constraints:2",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "heading",
      "title": "Architecture constraints",
      "body": ""
    },
    {
      "key": "content:custom:architecture-constraints:3",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "A custom model must be one of:"
    },
    {
      "key": "content:custom:architecture-constraints:4",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "a speech Seq2Seq architecture (like Whisper),"
    },
    {
      "key": "content:custom:architecture-constraints:5",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "a CTC architecture, or"
    },
    {
      "key": "content:custom:architecture-constraints:6",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "an audio-classification architecture (like Wav2Vec2 for emotion)."
    },
    {
      "key": "content:custom:architecture-constraints:7",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "Two rules apply to every custom model, no exceptions:"
    },
    {
      "key": "content:custom:architecture-constraints:8",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "trust_remote_code=False always — a repo that requires remote code execution to load cannot be registered."
    },
    {
      "key": "content:custom:architecture-constraints:9",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "Classification models must define id2label in their config, so AudioLens knows what the output classes mean. A classification checkpoint without id2label will fail validation."
    },
    {
      "key": "content:custom:architecture-constraints:10",
      "sectionId": "custom",
      "headingId": "architecture-constraints",
      "kind": "content",
      "title": "Architecture constraints",
      "body": "Not every Hugging Face model will work Registering a repo doesn't guarantee it loads. If its architecture, task, or config doesn't match what AudioLens expects, registration fails at the validation step below rather than silently running with wrong assumptions."
    },
    {
      "key": "heading:custom:registering-a-model:11",
      "sectionId": "custom",
      "headingId": "registering-a-model",
      "kind": "heading",
      "title": "Registering a model",
      "body": ""
    },
    {
      "key": "content:custom:registering-a-model:12",
      "sectionId": "custom",
      "headingId": "registering-a-model",
      "kind": "content",
      "title": "Registering a model",
      "body": "Registering a custom model follows the same asynchronous pattern as running an analysis job:"
    },
    {
      "key": "content:custom:registering-a-model:13",
      "sectionId": "custom",
      "headingId": "registering-a-model",
      "kind": "content",
      "title": "Registering a model",
      "body": "Submit the model POST /models with the Hugging Face repo id. This returns immediately with a 202 while the model is validated in the background."
    },
    {
      "key": "content:custom:registering-a-model:14",
      "sectionId": "custom",
      "headingId": "registering-a-model",
      "kind": "content",
      "title": "Registering a model",
      "body": "Validation runs AudioLens checks the model's architecture and config against the constraints above — Seq2Seq, CTC, or audio-classification; trust_remote_code=False; id2label present for classification models."
    },
    {
      "key": "content:custom:registering-a-model:15",
      "sectionId": "custom",
      "headingId": "registering-a-model",
      "kind": "content",
      "title": "Registering a model",
      "body": "Poll for the result GET /models/{id} to check status. Once validation succeeds, the model is available to use in jobs like any built-in model."
    },
    {
      "key": "content:custom:registering-a-model:16",
      "sectionId": "custom",
      "headingId": "registering-a-model",
      "kind": "content",
      "title": "Registering a model",
      "body": "Once registered, list, inspect, or remove custom models with GET /models, GET /models/{id}, and DELETE /models/{id}. If the model supports it, GET /models/jacobian-lenses/{model_id} lists any Jacobian Lenses fitted for it."
    },
    {
      "key": "heading:custom:where-to-go-next:17",
      "sectionId": "custom",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:custom:where-to-go-next:18",
      "sectionId": "custom",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "REST API Reference Full model registration and job endpoints"
    },
    {
      "key": "content:custom:where-to-go-next:19",
      "sectionId": "custom",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Whisper Models The bundled Seq2Seq checkpoints"
    },
    {
      "key": "content:custom:where-to-go-next:20",
      "sectionId": "custom",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Wav2Vec2 Models The bundled classification checkpoint"
    }
  ],
  "datasets": [
    {
      "key": "heading:datasets:bundled-datasets:0",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "heading",
      "title": "Bundled datasets",
      "body": ""
    },
    {
      "key": "content:datasets:bundled-datasets:1",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "AudioLens ships with a handful of small, bundled sample datasets so you can start exploring without uploading anything. Audio files themselves are never committed to the repository — bundled datasets are packaged separately, and a couple of the larger ones are fetched by a script you run yourself."
    },
    {
      "key": "content:datasets:bundled-datasets:2",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "Common Voice (cv-valid-dev subset) 100 bundled"
    },
    {
      "key": "content:datasets:bundled-datasets:3",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "RAVDESS 144 bundled"
    },
    {
      "key": "content:datasets:bundled-datasets:4",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "L2-ARCTIC 150 bundled, includes phone-error annotations"
    },
    {
      "key": "content:datasets:bundled-datasets:5",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "Speech Accent Archive (SAA) 150 bundled"
    },
    {
      "key": "content:datasets:bundled-datasets:6",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "LibriSpeech-1000 ~1000 fetched via scripts/download_librispeech_1000.py"
    },
    {
      "key": "content:datasets:bundled-datasets:7",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "SAVEE up to 100 prepared via scripts/prepare_savee_subset.py — requires you to already own a copy"
    },
    {
      "key": "content:datasets:bundled-datasets:8",
      "sectionId": "datasets",
      "headingId": "bundled-datasets",
      "kind": "content",
      "title": "Bundled datasets",
      "body": "Non-commercial licenses in this list RAVDESS, L2-ARCTIC, and the Speech Accent Archive (SAA) are all licensed for non-commercial use only. Common Voice and SAVEE's current terms are flagged as unverified. See /docs/licenses for the full breakdown per dataset before using any of these outside research or personal use."
    },
    {
      "key": "heading:datasets:custom-datasets:9",
      "sectionId": "datasets",
      "headingId": "custom-datasets",
      "kind": "heading",
      "title": "Custom datasets",
      "body": ""
    },
    {
      "key": "content:datasets:custom-datasets:10",
      "sectionId": "datasets",
      "headingId": "custom-datasets",
      "kind": "content",
      "title": "Custom datasets",
      "body": "Any user can upload their own dataset — there's no gatekeeping beyond the same file limits that apply to a single upload. A custom dataset needs labels from one of two sources:"
    },
    {
      "key": "content:datasets:custom-datasets:11",
      "sectionId": "datasets",
      "headingId": "custom-datasets",
      "kind": "content",
      "title": "Custom datasets",
      "body": "an uploaded label CSV mapping filenames to labels, or"
    },
    {
      "key": "content:datasets:custom-datasets:12",
      "sectionId": "datasets",
      "headingId": "custom-datasets",
      "kind": "content",
      "title": "Custom datasets",
      "body": "filename-pattern-derived labels, where labels are inferred from a naming convention (for example, the pattern used for SAVEE-style filenames)."
    },
    {
      "key": "content:datasets:custom-datasets:13",
      "sectionId": "datasets",
      "headingId": "custom-datasets",
      "kind": "content",
      "title": "Custom datasets",
      "body": "Custom dataset management goes through its own set of endpoints — creating the dataset, uploading files, submitting or deriving a manifest and labels, and listing or deleting the dataset later. See /docs/rest for the full list."
    },
    {
      "key": "heading:datasets:formats-size-and-duration-limits:14",
      "sectionId": "datasets",
      "headingId": "formats-size-and-duration-limits",
      "kind": "heading",
      "title": "Formats, size, and duration limits",
      "body": ""
    },
    {
      "key": "content:datasets:formats-size-and-duration-limits:15",
      "sectionId": "datasets",
      "headingId": "formats-size-and-duration-limits",
      "kind": "content",
      "title": "Formats, size, and duration limits",
      "body": "These limits apply to any audio you upload, whether it's a one-off clip or part of a custom dataset:"
    },
    {
      "key": "content:datasets:formats-size-and-duration-limits:16",
      "sectionId": "datasets",
      "headingId": "formats-size-and-duration-limits",
      "kind": "content",
      "title": "Formats, size, and duration limits",
      "body": "Accepted formats .wav .mp3 .m4a .flac"
    },
    {
      "key": "content:datasets:formats-size-and-duration-limits:17",
      "sectionId": "datasets",
      "headingId": "formats-size-and-duration-limits",
      "kind": "content",
      "title": "Formats, size, and duration limits",
      "body": "Max upload size 100 MB (MAX_UPLOAD_BYTES = 104857600)"
    },
    {
      "key": "content:datasets:formats-size-and-duration-limits:18",
      "sectionId": "datasets",
      "headingId": "formats-size-and-duration-limits",
      "kind": "content",
      "title": "Formats, size, and duration limits",
      "body": "Max clip duration 10 minutes (MAX_AUDIO_DURATION_SECONDS = 600)"
    },
    {
      "key": "content:datasets:formats-size-and-duration-limits:19",
      "sectionId": "datasets",
      "headingId": "formats-size-and-duration-limits",
      "kind": "content",
      "title": "Formats, size, and duration limits",
      "body": "Some analyses apply tighter limits on top of these — saliency, for example, caps the analysis window well below 10 minutes. See each panel's own page for its specific limits."
    },
    {
      "key": "heading:datasets:where-to-go-next:20",
      "sectionId": "datasets",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:datasets:where-to-go-next:21",
      "sectionId": "datasets",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Dataset EDA Analysis panel Explore class balance and distributions before you analyze"
    },
    {
      "key": "content:datasets:where-to-go-next:22",
      "sectionId": "datasets",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Licenses Reference Full license terms for AudioLens's models and datasets"
    },
    {
      "key": "content:datasets:where-to-go-next:23",
      "sectionId": "datasets",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "REST API Reference Every dataset and upload endpoint"
    }
  ],
  "demo": [
    {
      "key": "content:demo:lead:0",
      "sectionId": "demo",
      "kind": "content",
      "title": "",
      "body": "A limited public hosted demo of AudioLens is planned. It is not live yet — there is no URL to link to, and nothing below should be read as a description of a running service."
    },
    {
      "key": "content:demo:lead:1",
      "sectionId": "demo",
      "kind": "content",
      "title": "",
      "body": "Planned Not live"
    },
    {
      "key": "heading:demo:status:2",
      "sectionId": "demo",
      "headingId": "status",
      "kind": "heading",
      "title": "Status",
      "body": ""
    },
    {
      "key": "content:demo:status:3",
      "sectionId": "demo",
      "headingId": "status",
      "kind": "content",
      "title": "Status",
      "body": "/* TODO: set real demo URL, see {{DEMO_URL}} */"
    },
    {
      "key": "content:demo:status:4",
      "sectionId": "demo",
      "headingId": "status",
      "kind": "content",
      "title": "Status",
      "body": "Hosted demo Planned No URL yet — check this page again once it ships"
    },
    {
      "key": "content:demo:status:5",
      "sectionId": "demo",
      "headingId": "status",
      "kind": "content",
      "title": "Status",
      "body": "This demo isn't live Until a real deployment exists, the fastest way to use AudioLens today is to run it yourself — see Self-hosting. This page will be updated with a real link the moment the hosted demo ships."
    },
    {
      "key": "heading:demo:dataset-licensing-and-the-demo:6",
      "sectionId": "demo",
      "headingId": "dataset-licensing-and-the-demo",
      "kind": "heading",
      "title": "Dataset licensing and the demo",
      "body": ""
    },
    {
      "key": "content:demo:dataset-licensing-and-the-demo:7",
      "sectionId": "demo",
      "headingId": "dataset-licensing-and-the-demo",
      "kind": "content",
      "title": "Dataset licensing and the demo",
      "body": "AudioLens ships with several bundled sample datasets, and three of them — RAVDESS, L2-ARCTIC, and the Speech Accent Archive (SAA) — are licensed non-commercial only (see Licenses for the exact terms). AudioLens is a non-commercial, open-source project, and the hosted demo will be a non-commercial public demo with no paid tier — so using these datasets there is compatible with their license terms. Attribution/citation requirements still apply and are listed on the Licenses page. This only becomes a real question for someone who forks AudioLens into a commercial product; that fork would need to drop these three datasets or obtain a separate license for them."
    },
    {
      "key": "heading:demo:usage-limits--not-decided-yet:8",
      "sectionId": "demo",
      "headingId": "usage-limits--not-decided-yet",
      "kind": "heading",
      "title": "Usage limits — not decided yet",
      "body": ""
    },
    {
      "key": "content:demo:usage-limits--not-decided-yet:9",
      "sectionId": "demo",
      "headingId": "usage-limits--not-decided-yet",
      "kind": "content",
      "title": "Usage limits — not decided yet",
      "body": "No rate limiting exists in AudioLens's code today. If and when the hosted demo launches, any usage caps (requests per session, clip length, concurrent jobs, etc.) will be a policy decision made at launch time, not a feature that's already built. Don't rely on this page — or any other page in these docs — as evidence that quotas exist; as of this writing, they don't."
    },
    {
      "key": "heading:demo:in-the-meantime:10",
      "sectionId": "demo",
      "headingId": "in-the-meantime",
      "kind": "heading",
      "title": "In the meantime",
      "body": ""
    },
    {
      "key": "content:demo:in-the-meantime:11",
      "sectionId": "demo",
      "headingId": "in-the-meantime",
      "kind": "content",
      "title": "In the meantime",
      "body": "If you want to try AudioLens now, Self-hosting gets the full stack running locally with Docker Compose in about ten minutes — see also the Quickstart."
    }
  ],
  "devices": [
    {
      "key": "heading:devices:automatic-device-selection:0",
      "sectionId": "devices",
      "headingId": "automatic-device-selection",
      "kind": "heading",
      "title": "Automatic device selection",
      "body": ""
    },
    {
      "key": "content:devices:automatic-device-selection:1",
      "sectionId": "devices",
      "headingId": "automatic-device-selection",
      "kind": "content",
      "title": "Automatic device selection",
      "body": "Workers pick an inference device with the ML_DEVICE environment variable. The default, ML_DEVICE=auto, tries devices in this order: CUDA → ROCm → MPS → CPU, falling back to the next option if a device isn't available."
    },
    {
      "key": "content:devices:automatic-device-selection:2",
      "sectionId": "devices",
      "headingId": "automatic-device-selection",
      "kind": "content",
      "title": "Automatic device selection",
      "body": "You can also pin a worker to a specific device explicitly: ML_DEVICE=cpu, mps, cuda, cuda:N (a specific GPU index), or rocm."
    },
    {
      "key": "content:devices:automatic-device-selection:3",
      "sectionId": "devices",
      "headingId": "automatic-device-selection",
      "kind": "content",
      "title": "Automatic device selection",
      "body": "Apple Silicon (MPS) needs a native worker Docker Desktop cannot expose MPS to a container. To use an Apple Silicon GPU, run the model-serving worker natively, outside Docker — see the macos mps tab below."
    },
    {
      "key": "heading:devices:compose-profiles-per-device:4",
      "sectionId": "devices",
      "headingId": "compose-profiles-per-device",
      "kind": "heading",
      "title": "Compose profiles per device",
      "body": ""
    },
    {
      "key": "content:devices:compose-profiles-per-device:5",
      "sectionId": "devices",
      "headingId": "compose-profiles-per-device",
      "kind": "content",
      "title": "Compose profiles per device",
      "body": "# NVIDIA docker compose --profile gpu up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-gpu"
    },
    {
      "key": "content:devices:compose-profiles-per-device:6",
      "sectionId": "devices",
      "headingId": "compose-profiles-per-device",
      "kind": "content",
      "title": "Compose profiles per device",
      "body": "# AMD ROCm docker compose --profile amd up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-amd"
    },
    {
      "key": "content:devices:compose-profiles-per-device:7",
      "sectionId": "devices",
      "headingId": "compose-profiles-per-device",
      "kind": "content",
      "title": "Compose profiles per device",
      "body": "# Apple Silicon (MPS) — run the worker natively cd Backend python3 -m venv .venv && source .venv/bin/activate pip install -r requirements.txt STORAGE_LOCAL_ROOT=shared-storage ML_DEVICE=mps \\ celery -A app.core.celery_app:celery_app worker --queues=gpu-fast,gpu-large --concurrency=1"
    },
    {
      "key": "content:devices:compose-profiles-per-device:8",
      "sectionId": "devices",
      "headingId": "compose-profiles-per-device",
      "kind": "content",
      "title": "Compose profiles per device",
      "body": "The NVIDIA variant (worker-gpu) requests an NVIDIA GPU reservation and needs driver 555+. The AMD variant (worker-amd) needs /dev/kfd and /dev/dri exposed and a ROCm-supported GPU on Linux. Both profiles scale worker-model-local to 0 so the GPU-capable worker takes over the gpu-fast/gpu-large queues instead."
    },
    {
      "key": "heading:devices:attention_force_cpu:9",
      "sectionId": "devices",
      "headingId": "attention_force_cpu",
      "kind": "heading",
      "title": "ATTENTION_FORCE_CPU",
      "body": ""
    },
    {
      "key": "content:devices:attention_force_cpu:10",
      "sectionId": "devices",
      "headingId": "attention_force_cpu",
      "kind": "content",
      "title": "ATTENTION_FORCE_CPU",
      "body": "ATTENTION_FORCE_CPU defaults to true. It forces the attention operation onto CPU regardless of ML_DEVICE, working around a GPU Triton segfault. Leave it at its default unless you've specifically confirmed attention is stable on GPU in your environment."
    },
    {
      "key": "heading:devices:where-to-go-next:11",
      "sectionId": "devices",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:devices:where-to-go-next:12",
      "sectionId": "devices",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Quickstart Get started Boot the stack for the first time"
    },
    {
      "key": "content:devices:where-to-go-next:13",
      "sectionId": "devices",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Environment variables Reference Every configuration flag, including ML_DEVICE"
    },
    {
      "key": "content:devices:where-to-go-next:14",
      "sectionId": "devices",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Architecture Reference Control plane, workers, Redis, and storage"
    }
  ],
  "diagnostics": [
    {
      "key": "content:diagnostics:lead:0",
      "sectionId": "diagnostics",
      "kind": "content",
      "title": "",
      "body": "Diagnostics runs a linguistic-vs-acoustic sweep: a batch of controlled variants across several files, designed to separate how much of a prediction comes from what was said versus how it sounded."
    },
    {
      "key": "content:diagnostics:lead:1",
      "sectionId": "diagnostics",
      "kind": "content",
      "title": "",
      "body": "linguistic-vs-acoustic sweep batch analysis"
    },
    {
      "key": "heading:diagnostics:what-the-sweep-does:2",
      "sectionId": "diagnostics",
      "headingId": "what-the-sweep-does",
      "kind": "heading",
      "title": "What the sweep does",
      "body": ""
    },
    {
      "key": "content:diagnostics:what-the-sweep-does:3",
      "sectionId": "diagnostics",
      "headingId": "what-the-sweep-does",
      "kind": "content",
      "title": "What the sweep does",
      "body": "Instead of perturbing one clip at a time, diagnostics sweeps a whole batch of files across one or more acoustic dimensions and looks at how predictions shift as a group — separating variation that tracks the content of the speech from variation that tracks its acoustics."
    },
    {
      "key": "heading:diagnostics:limits:4",
      "sectionId": "diagnostics",
      "headingId": "limits",
      "kind": "heading",
      "title": "Limits",
      "body": ""
    },
    {
      "key": "content:diagnostics:limits:5",
      "sectionId": "diagnostics",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "Files up to 25 Per sweep request"
    },
    {
      "key": "content:diagnostics:limits:6",
      "sectionId": "diagnostics",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "Sweep dimensions 1–5 pitch, speed, noise, time_mask, freq_mask"
    },
    {
      "key": "content:diagnostics:limits:7",
      "sectionId": "diagnostics",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "Total variants ≤ 60 Across the whole sweep"
    },
    {
      "key": "content:diagnostics:limits:8",
      "sectionId": "diagnostics",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "Minimum clip length ≥ 0.5s Shorter clips are rejected"
    },
    {
      "key": "content:diagnostics:limits:9",
      "sectionId": "diagnostics",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "The five available sweep dimensions are pitch, speed, noise, time_mask, and freq_mask — you choose between 1 and 5 of them per sweep, and the combination of files × dimensions is capped so a single request can't generate an unbounded number of variants."
    },
    {
      "key": "heading:diagnostics:running-it:10",
      "sectionId": "diagnostics",
      "headingId": "running-it",
      "kind": "heading",
      "title": "Running it",
      "body": ""
    },
    {
      "key": "content:diagnostics:running-it:11",
      "sectionId": "diagnostics",
      "headingId": "running-it",
      "kind": "content",
      "title": "Running it",
      "body": "Diagnostics is submitted as a job like any other analysis:"
    },
    {
      "key": "content:diagnostics:running-it:12",
      "sectionId": "diagnostics",
      "headingId": "running-it",
      "kind": "content",
      "title": "Running it",
      "body": "curl -X POST http://localhost:8000/api/v1/analyses/linguistic-vs-acoustic \\ -H \"Content-Type: application/json\" \\ --cookie \"sid=<your session cookie>\" \\ -d '{ \"audio_ids\": [\"<id-1>\", \"<id-2>\"], \"sweeps\": [\"pitch\", \"noise\"] }'"
    },
    {
      "key": "content:diagnostics:running-it:13",
      "sectionId": "diagnostics",
      "headingId": "running-it",
      "kind": "content",
      "title": "Running it",
      "body": "The endpoint responds 202 Accepted immediately, before any variant has actually been generated, with an estimate of the work ahead:"
    },
    {
      "key": "content:diagnostics:running-it:14",
      "sectionId": "diagnostics",
      "headingId": "running-it",
      "kind": "content",
      "title": "Running it",
      "body": "{ \"job_id\": \"…\", \"estimated_variants\": 24, \"estimated_seconds\": 40 }"
    },
    {
      "key": "content:diagnostics:running-it:15",
      "sectionId": "diagnostics",
      "headingId": "running-it",
      "kind": "content",
      "title": "Running it",
      "body": "Poll the job the same way as any other analysis — see REST API for the shared GET /jobs/{id} / GET /jobs/{id}/result pattern every panel in AudioLens uses."
    }
  ],
  "eda": [
    {
      "key": "heading:eda:what-the-eda-panel-shows:0",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "heading",
      "title": "What the EDA panel shows",
      "body": ""
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:1",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Before you run any model on a dataset, the Dataset EDA panel lets you look at the dataset itself: how balanced its classes are, how its acoustic features are distributed, and where its outliers sit."
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:2",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "The panel covers, for a loaded dataset:"
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:3",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Class balance — counts per label, so you can spot skew before it shows up as a fairness problem later."
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:4",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Histograms of acoustic feature distributions."
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:5",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Box plots to compare feature spread across classes."
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:6",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Correlation heatmap across acoustic features."
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:7",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Outlier detection, flagging clips that sit far outside the rest of the distribution."
    },
    {
      "key": "content:eda:what-the-eda-panel-shows:8",
      "sectionId": "eda",
      "headingId": "what-the-eda-panel-shows",
      "kind": "content",
      "title": "What the EDA panel shows",
      "body": "Image placeholder: EDA panel overview Add /assets/docs/eda-panel-overview.png — a screenshot of the Dataset EDA panel showing the class balance chart, a feature histogram, and the correlation heatmap side by side. Replace this callout with ![Dataset EDA panel overview](/assets/docs/eda-panel-overview.png) once the real image is uploaded."
    },
    {
      "key": "heading:eda:clustering-and-nearest-neighbours:9",
      "sectionId": "eda",
      "headingId": "clustering-and-nearest-neighbours",
      "kind": "heading",
      "title": "Clustering and nearest neighbours",
      "body": ""
    },
    {
      "key": "content:eda:clustering-and-nearest-neighbours:10",
      "sectionId": "eda",
      "headingId": "clustering-and-nearest-neighbours",
      "kind": "content",
      "title": "Clustering and nearest neighbours",
      "body": "The EDA panel also runs HDBSCAN clustering over the dataset's embedding space and reports a silhouette score for the resulting clusters, so you can judge how well-separated the clusters actually are rather than taking cluster assignments at face value. From any point, you can pull up its nearest neighbours in that same embedding space — useful for spotting near-duplicates or checking whether a mislabeled clip has neighbours that suggest what its label should have been."
    },
    {
      "key": "content:eda:clustering-and-nearest-neighbours:11",
      "sectionId": "eda",
      "headingId": "clustering-and-nearest-neighbours",
      "kind": "content",
      "title": "Clustering and nearest neighbours",
      "body": "This reuses the same embedding space as the Embedding projector panel — the two are looking at the same underlying representation from different angles."
    },
    {
      "key": "heading:eda:exporting-results:12",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "heading",
      "title": "Exporting results",
      "body": ""
    },
    {
      "key": "content:eda:exporting-results:13",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "content",
      "title": "Exporting results",
      "body": "Acoustic features CSV"
    },
    {
      "key": "content:eda:exporting-results:14",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "content",
      "title": "Exporting results",
      "body": "Full EDA report JSON"
    },
    {
      "key": "content:eda:exporting-results:15",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "content",
      "title": "Exporting results",
      "body": "Clusters CSV"
    },
    {
      "key": "content:eda:exporting-results:16",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "content",
      "title": "Exporting results",
      "body": "Most Plotly charts PNG download"
    },
    {
      "key": "content:eda:exporting-results:17",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "content",
      "title": "Exporting results",
      "body": "There is no SRT, PDF, or transcript export anywhere in AudioLens — the exports above are the complete list."
    },
    {
      "key": "content:eda:exporting-results:18",
      "sectionId": "eda",
      "headingId": "exporting-results",
      "kind": "content",
      "title": "Exporting results",
      "body": "Dataset-level EDA data is served by GET /{dataset}/eda for built-in datasets; see /docs/rest for the full endpoint reference."
    },
    {
      "key": "heading:eda:where-to-go-next:19",
      "sectionId": "eda",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:eda:where-to-go-next:20",
      "sectionId": "eda",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Loading datasets Get started Bundled datasets and custom uploads"
    },
    {
      "key": "content:eda:where-to-go-next:21",
      "sectionId": "eda",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Embedding projector Analysis panel Projections, clustering, and nearest neighbours"
    },
    {
      "key": "content:eda:where-to-go-next:22",
      "sectionId": "eda",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Fairness slices Analysis panel Compare performance across metadata slices"
    }
  ],
  "embeddings": [
    {
      "key": "content:embeddings:lead:0",
      "sectionId": "embeddings",
      "kind": "content",
      "title": "",
      "body": "The embedding projector reduces a model's learned representations down to a space you can actually look at — two or three dimensions you can rotate, zoom, and select points in."
    },
    {
      "key": "content:embeddings:lead:1",
      "sectionId": "embeddings",
      "kind": "content",
      "title": "",
      "body": "PCA t-SNE UMAP HDBSCAN nearest neighbour"
    },
    {
      "key": "heading:embeddings:projection-methods:2",
      "sectionId": "embeddings",
      "headingId": "projection-methods",
      "kind": "heading",
      "title": "Projection methods",
      "body": ""
    },
    {
      "key": "content:embeddings:projection-methods:3",
      "sectionId": "embeddings",
      "headingId": "projection-methods",
      "kind": "content",
      "title": "Projection methods",
      "body": "The embedding operation supports three reduction methods:"
    },
    {
      "key": "content:embeddings:projection-methods:4",
      "sectionId": "embeddings",
      "headingId": "projection-methods",
      "kind": "content",
      "title": "Projection methods",
      "body": "PCA — linear, fast, preserves global variance structure."
    },
    {
      "key": "content:embeddings:projection-methods:5",
      "sectionId": "embeddings",
      "headingId": "projection-methods",
      "kind": "content",
      "title": "Projection methods",
      "body": "t-SNE — nonlinear, tends to separate local clusters well."
    },
    {
      "key": "content:embeddings:projection-methods:6",
      "sectionId": "embeddings",
      "headingId": "projection-methods",
      "kind": "content",
      "title": "Projection methods",
      "body": "UMAP — nonlinear, generally faster than t-SNE at similar cluster quality."
    },
    {
      "key": "content:embeddings:projection-methods:7",
      "sectionId": "embeddings",
      "headingId": "projection-methods",
      "kind": "content",
      "title": "Projection methods",
      "body": "Each can be projected into 2D or 3D, your choice."
    },
    {
      "key": "heading:embeddings:clustering:8",
      "sectionId": "embeddings",
      "headingId": "clustering",
      "kind": "heading",
      "title": "Clustering",
      "body": ""
    },
    {
      "key": "content:embeddings:clustering:9",
      "sectionId": "embeddings",
      "headingId": "clustering",
      "kind": "content",
      "title": "Clustering",
      "body": "Clustering is optional and off by default. When enabled, it runs HDBSCAN over the projected points, with min_cluster_size tunable from 2 to 50. Smaller values surface more, smaller clusters; larger values collapse the projection into a handful of broad groups."
    },
    {
      "key": "heading:embeddings:nearest-neighbour-retrieval:10",
      "sectionId": "embeddings",
      "headingId": "nearest-neighbour-retrieval",
      "kind": "heading",
      "title": "Nearest-neighbour retrieval",
      "body": ""
    },
    {
      "key": "content:embeddings:nearest-neighbour-retrieval:11",
      "sectionId": "embeddings",
      "headingId": "nearest-neighbour-retrieval",
      "kind": "content",
      "title": "Nearest-neighbour retrieval",
      "body": "Click a point and the panel can retrieve its nearest neighbours in embedding space — useful for answering \"what else does the model think is similar to this clip?\" without leaving the projector."
    },
    {
      "key": "heading:embeddings:selection-and-export:12",
      "sectionId": "embeddings",
      "headingId": "selection-and-export",
      "kind": "heading",
      "title": "Selection and export",
      "body": ""
    },
    {
      "key": "content:embeddings:selection-and-export:13",
      "sectionId": "embeddings",
      "headingId": "selection-and-export",
      "kind": "content",
      "title": "Selection and export",
      "body": "Box or lasso select a region of points to inspect them together, or to hand a subset off to another panel."
    },
    {
      "key": "content:embeddings:selection-and-export:14",
      "sectionId": "embeddings",
      "headingId": "selection-and-export",
      "kind": "content",
      "title": "Selection and export",
      "body": "PNG export is available on the projection via Plotly's built-in export, like the other Plotly-backed charts in the app."
    },
    {
      "key": "content:embeddings:selection-and-export:15",
      "sectionId": "embeddings",
      "headingId": "selection-and-export",
      "kind": "content",
      "title": "Selection and export",
      "body": "Image placeholder: 3D embedding scatter Add /assets/docs/embeddings-3d.png — the projector in 3D mode with a handful of HDBSCAN clusters colored distinctly and a lasso selection in progress. Replace this callout with ![3D embedding scatter](/assets/docs/embeddings-3d.png) once the real image is uploaded."
    }
  ],
  "env": [
    {
      "key": "content:env:lead:0",
      "sectionId": "env",
      "kind": "content",
      "title": "",
      "body": "Every flag below has a working default — you don't need an .env file to boot AudioLens locally. This page is the full reference for when you do need to change one, grouped by what it controls."
    },
    {
      "key": "heading:env:runtime:1",
      "sectionId": "env",
      "headingId": "runtime",
      "kind": "heading",
      "title": "Runtime",
      "body": ""
    },
    {
      "key": "content:env:runtime:2",
      "sectionId": "env",
      "headingId": "runtime",
      "kind": "content",
      "title": "Runtime",
      "body": "ENVIRONMENT development production enforces secure cookies and HTTPS origins"
    },
    {
      "key": "content:env:runtime:3",
      "sectionId": "env",
      "headingId": "runtime",
      "kind": "content",
      "title": "Runtime",
      "body": "CODE_VERSION development Cache identity component"
    },
    {
      "key": "heading:env:session--cookies:4",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "heading",
      "title": "Session / cookies",
      "body": ""
    },
    {
      "key": "content:env:session--cookies:5",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "content",
      "title": "Session / cookies",
      "body": "SESSION_TTL_SECONDS / JOB_TTL_SECONDS 86400 Session and job expiry (24h)"
    },
    {
      "key": "content:env:session--cookies:6",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "content",
      "title": "Session / cookies",
      "body": "SESSION_COOKIE_NAME sid Session cookie name"
    },
    {
      "key": "content:env:session--cookies:7",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "content",
      "title": "Session / cookies",
      "body": "COOKIE_SECURE false Set true behind HTTPS"
    },
    {
      "key": "content:env:session--cookies:8",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "content",
      "title": "Session / cookies",
      "body": "COOKIE_SAMESITE lax lax / strict / none"
    },
    {
      "key": "content:env:session--cookies:9",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "content",
      "title": "Session / cookies",
      "body": "COOKIE_DOMAIN unset Leave unset for localhost"
    },
    {
      "key": "content:env:session--cookies:10",
      "sectionId": "env",
      "headingId": "session--cookies",
      "kind": "content",
      "title": "Session / cookies",
      "body": "ALLOWED_ORIGINS http://localhost:8080,http://127.0.0.1:8080 CORS origins — * is rejected"
    },
    {
      "key": "heading:env:storage:11",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "heading",
      "title": "Storage",
      "body": ""
    },
    {
      "key": "content:env:storage:12",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "REDIS_URL redis://localhost:6379/0 Sessions / cache (DB0)"
    },
    {
      "key": "content:env:storage:13",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "JOB_REDIS_URL redis://localhost:6379/1 Job metadata (DB1)"
    },
    {
      "key": "content:env:storage:14",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "CELERY_BROKER_URL redis://localhost:6379/2 Celery broker (DB2)"
    },
    {
      "key": "content:env:storage:15",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "CELERY_RESULT_BACKEND redis://localhost:6379/3 Celery results (DB3)"
    },
    {
      "key": "content:env:storage:16",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "STORAGE_BACKEND local local or s3"
    },
    {
      "key": "content:env:storage:17",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "STORAGE_LOCAL_ROOT shared-storage Local storage path"
    },
    {
      "key": "content:env:storage:18",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "S3_BUCKET unset S3-compatible bucket name"
    },
    {
      "key": "content:env:storage:19",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "S3_ENDPOINT_URL unset S3-compatible endpoint"
    },
    {
      "key": "content:env:storage:20",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "S3_REGION unset (us-east-1 if using AWS defaults) S3 region"
    },
    {
      "key": "content:env:storage:21",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "S3_ACCESS_KEY_ID unset S3 access key"
    },
    {
      "key": "content:env:storage:22",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "S3_SECRET_ACCESS_KEY unset S3 secret key"
    },
    {
      "key": "content:env:storage:23",
      "sectionId": "env",
      "headingId": "storage",
      "kind": "content",
      "title": "Storage",
      "body": "REDIS_MAXMEMORY (compose-level) 1gb Redis memory cap"
    },
    {
      "key": "heading:env:limits:24",
      "sectionId": "env",
      "headingId": "limits",
      "kind": "heading",
      "title": "Limits",
      "body": ""
    },
    {
      "key": "content:env:limits:25",
      "sectionId": "env",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "MAX_UPLOAD_BYTES 104857600 (100 MB) Max upload size"
    },
    {
      "key": "content:env:limits:26",
      "sectionId": "env",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "MAX_AUDIO_DURATION_SECONDS 600 (10 min) Max clip length"
    },
    {
      "key": "content:env:limits:27",
      "sectionId": "env",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "MAX_SALIENCY_SECONDS 12 Saliency analysis window (gradcam / lime)"
    },
    {
      "key": "content:env:limits:28",
      "sectionId": "env",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "MAX_SALIENCY_SECONDS_SHAP 6 Stricter SHAP window (memory guard)"
    },
    {
      "key": "content:env:limits:29",
      "sectionId": "env",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "SALIENCY_SHAP_SAMPLES 8 SHAP samples per call"
    },
    {
      "key": "heading:env:device--features:30",
      "sectionId": "env",
      "headingId": "device--features",
      "kind": "heading",
      "title": "Device / features",
      "body": ""
    },
    {
      "key": "content:env:device--features:31",
      "sectionId": "env",
      "headingId": "device--features",
      "kind": "content",
      "title": "Device / features",
      "body": "ML_DEVICE auto auto / cpu / mps / cuda / cuda:N / rocm — see Device selection"
    },
    {
      "key": "content:env:device--features:32",
      "sectionId": "env",
      "headingId": "device--features",
      "kind": "content",
      "title": "Device / features",
      "body": "ATTENTION_FORCE_CPU true Works around a GPU Triton segfault in attention computation"
    },
    {
      "key": "content:env:device--features:33",
      "sectionId": "env",
      "headingId": "device--features",
      "kind": "content",
      "title": "Device / features",
      "body": "ENABLE_LEGACY_SYNC_INFERENCE false Legacy synchronous routes (410 otherwise); refused in production"
    },
    {
      "key": "content:env:device--features:34",
      "sectionId": "env",
      "headingId": "device--features",
      "kind": "content",
      "title": "Device / features",
      "body": "API_V1_PREFIX /api/v1 Set in code only"
    },
    {
      "key": "heading:env:task-timing:35",
      "sectionId": "env",
      "headingId": "task-timing",
      "kind": "heading",
      "title": "Task timing",
      "body": ""
    },
    {
      "key": "content:env:task-timing:36",
      "sectionId": "env",
      "headingId": "task-timing",
      "kind": "content",
      "title": "Task timing",
      "body": "TASK_SOFT_TIME_LIMIT_SECONDS / TASK_TIME_LIMIT_SECONDS 3300 / 3600 Worker task timeout"
    },
    {
      "key": "content:env:task-timing:37",
      "sectionId": "env",
      "headingId": "task-timing",
      "kind": "content",
      "title": "Task timing",
      "body": "BROKER_VISIBILITY_TIMEOUT_SECONDS derived Must stay ordered after the time limits above"
    },
    {
      "key": "content:env:task-timing:38",
      "sectionId": "env",
      "headingId": "task-timing",
      "kind": "content",
      "title": "Task timing",
      "body": "STALE_JOB_SECONDS derived Threshold the reaper uses to consider a job stale"
    },
    {
      "key": "content:env:task-timing:39",
      "sectionId": "env",
      "headingId": "task-timing",
      "kind": "content",
      "title": "Task timing",
      "body": "STALE_JOB_SWEEP_SECONDS 300 Reaper sweep interval"
    },
    {
      "key": "heading:env:worker-tunables:40",
      "sectionId": "env",
      "headingId": "worker-tunables",
      "kind": "heading",
      "title": "Worker tunables",
      "body": ""
    },
    {
      "key": "content:env:worker-tunables:41",
      "sectionId": "env",
      "headingId": "worker-tunables",
      "kind": "content",
      "title": "Worker tunables",
      "body": "MODEL_REGISTRY_MAX_ENTRIES 3 Model variants a worker keeps loaded at once"
    },
    {
      "key": "content:env:worker-tunables:42",
      "sectionId": "env",
      "headingId": "worker-tunables",
      "kind": "content",
      "title": "Worker tunables",
      "body": "MODEL_REGISTRY_IDLE_SECONDS 1800 Idle model eviction time"
    },
    {
      "key": "heading:env:fairness:43",
      "sectionId": "env",
      "headingId": "fairness",
      "kind": "heading",
      "title": "Fairness",
      "body": ""
    },
    {
      "key": "content:env:fairness:44",
      "sectionId": "env",
      "headingId": "fairness",
      "kind": "content",
      "title": "Fairness",
      "body": "FR10_MIN_GROUP_SIZE 8 Minimum items per group for a fairness slice"
    },
    {
      "key": "content:env:fairness:45",
      "sectionId": "env",
      "headingId": "fairness",
      "kind": "content",
      "title": "Fairness",
      "body": "FR10_MIN_SPEAKERS_PER_GROUP 2 Minimum distinct speakers per group"
    },
    {
      "key": "heading:env:frontend:46",
      "sectionId": "env",
      "headingId": "frontend",
      "kind": "heading",
      "title": "Frontend",
      "body": ""
    },
    {
      "key": "content:env:frontend:47",
      "sectionId": "env",
      "headingId": "frontend",
      "kind": "content",
      "title": "Frontend",
      "body": "VITE_API_BASE_URL unset (defaults to page host on :8000) API base URL for production frontend builds"
    },
    {
      "key": "content:env:frontend:48",
      "sectionId": "env",
      "headingId": "frontend",
      "kind": "content",
      "title": "Frontend",
      "body": "See Self-hosting for how these get set in practice — .env files, compose overrides, or inline on the boot command."
    }
  ],
  "fairness": [
    {
      "key": "content:fairness:lead:0",
      "sectionId": "fairness",
      "kind": "content",
      "title": "",
      "body": "Fairness slicing groups a dataset by a metadata column — speaker, accent, language, or anything else you've attached — and compares model performance across those groups, with bootstrap statistics behind every number."
    },
    {
      "key": "content:fairness:lead:1",
      "sectionId": "fairness",
      "kind": "content",
      "title": "",
      "body": "slice metrics bootstrap shipped feature"
    },
    {
      "key": "content:fairness:lead:2",
      "sectionId": "fairness",
      "kind": "content",
      "title": "",
      "body": "Shipped, not beta Fairness slicing is a complete, shipped feature — it is not labeled \"beta\" anywhere in the product, and this page shouldn't imply otherwise."
    },
    {
      "key": "heading:fairness:grouping:3",
      "sectionId": "fairness",
      "headingId": "grouping",
      "kind": "heading",
      "title": "Grouping",
      "body": ""
    },
    {
      "key": "content:fairness:grouping:4",
      "sectionId": "fairness",
      "headingId": "grouping",
      "kind": "content",
      "title": "Grouping",
      "body": "You can slice by up to 2 grouping keys at once (e.g. accent and speaker together, not just one at a time)."
    },
    {
      "key": "heading:fairness:metrics:5",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "heading",
      "title": "Metrics",
      "body": ""
    },
    {
      "key": "content:fairness:metrics:6",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "wer"
    },
    {
      "key": "content:fairness:metrics:7",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "cer"
    },
    {
      "key": "content:fairness:metrics:8",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "accuracy"
    },
    {
      "key": "content:fairness:metrics:9",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "macro_f1"
    },
    {
      "key": "content:fairness:metrics:10",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "ece"
    },
    {
      "key": "content:fairness:metrics:11",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "silhouette"
    },
    {
      "key": "content:fairness:metrics:12",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "leakage"
    },
    {
      "key": "content:fairness:metrics:13",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "grounding_lift"
    },
    {
      "key": "content:fairness:metrics:14",
      "sectionId": "fairness",
      "headingId": "metrics",
      "kind": "content",
      "title": "Metrics",
      "body": "attribution_entropy"
    },
    {
      "key": "heading:fairness:minimums:15",
      "sectionId": "fairness",
      "headingId": "minimums",
      "kind": "heading",
      "title": "Minimums",
      "body": ""
    },
    {
      "key": "content:fairness:minimums:16",
      "sectionId": "fairness",
      "headingId": "minimums",
      "kind": "content",
      "title": "Minimums",
      "body": "A slice needs enough data before its statistics mean anything, so two minimums are enforced:"
    },
    {
      "key": "content:fairness:minimums:17",
      "sectionId": "fairness",
      "headingId": "minimums",
      "kind": "content",
      "title": "Minimums",
      "body": "FR10_MIN_GROUP_SIZE 8 minimum items in a group before it's included"
    },
    {
      "key": "content:fairness:minimums:18",
      "sectionId": "fairness",
      "headingId": "minimums",
      "kind": "content",
      "title": "Minimums",
      "body": "FR10_MIN_SPEAKERS_PER_GROUP 2 minimum distinct speakers per group"
    },
    {
      "key": "content:fairness:minimums:19",
      "sectionId": "fairness",
      "headingId": "minimums",
      "kind": "content",
      "title": "Minimums",
      "body": "Groups below either minimum are excluded from the results rather than reported with unreliable statistics."
    },
    {
      "key": "heading:fairness:dataset-size:20",
      "sectionId": "fairness",
      "headingId": "dataset-size",
      "kind": "heading",
      "title": "Dataset size",
      "body": ""
    },
    {
      "key": "content:fairness:dataset-size:21",
      "sectionId": "fairness",
      "headingId": "dataset-size",
      "kind": "content",
      "title": "Dataset size",
      "body": "Fairness analysis is capped at ≤ 20,000 items total per run."
    },
    {
      "key": "heading:fairness:how-long-it-takes:22",
      "sectionId": "fairness",
      "headingId": "how-long-it-takes",
      "kind": "heading",
      "title": "How long it takes",
      "body": ""
    },
    {
      "key": "content:fairness:how-long-it-takes:23",
      "sectionId": "fairness",
      "headingId": "how-long-it-takes",
      "kind": "content",
      "title": "How long it takes",
      "body": "This is not a quick job A full fairness run — many groups, several metrics, bootstrap resampling across all of them — can take 10 to 30+ minutes. It runs on the cpu queue as a background job; submit it and come back rather than waiting on the request."
    },
    {
      "key": "heading:fairness:reading-the-results:24",
      "sectionId": "fairness",
      "headingId": "reading-the-results",
      "kind": "heading",
      "title": "Reading the results",
      "body": ""
    },
    {
      "key": "content:fairness:reading-the-results:25",
      "sectionId": "fairness",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Disparity radar — one axis per metric, one line per group, so you can see at a glance which groups the model treats differently and on which metric."
    },
    {
      "key": "content:fairness:reading-the-results:26",
      "sectionId": "fairness",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Group error bars — per-group metric values with bootstrap confidence intervals, so you can tell a real gap from noise."
    },
    {
      "key": "content:fairness:reading-the-results:27",
      "sectionId": "fairness",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Phone confusion matrix — where phone-level annotations exist (for example, L2-ARCTIC), a confusion matrix of which phones get mistaken for which, broken out by group."
    },
    {
      "key": "content:fairness:reading-the-results:28",
      "sectionId": "fairness",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Image placeholder: fairness disparity radar Add /assets/docs/fairness-radar.png — the fairness panel's disparity radar chart with several groups plotted across the metric axes. Replace this callout with ![Fairness disparity radar](/assets/docs/fairness-radar.png) once the real image is uploaded."
    }
  ],
  "intro": [
    {
      "key": "heading:intro:what-audiolens-is:0",
      "sectionId": "intro",
      "headingId": "what-audiolens-is",
      "kind": "heading",
      "title": "What AudioLens is",
      "body": ""
    },
    {
      "key": "content:intro:what-audiolens-is:1",
      "sectionId": "intro",
      "headingId": "what-audiolens-is",
      "kind": "content",
      "title": "What AudioLens is",
      "body": "AudioLens is an interpretability and debugging workbench for speech models — the audio-domain counterpart to Google PAIR's LIT (Learning Interpretability Tool), which targets text and tabular models. It lets a researcher or developer follow a single prediction from raw waveform to emitted token, using saliency maps, attention visualization, embedding projections, perturbation testing, layer probing, and fairness slicing — all on one shared timeline."
    },
    {
      "key": "content:intro:what-audiolens-is:2",
      "sectionId": "intro",
      "headingId": "what-audiolens-is",
      "kind": "content",
      "title": "What AudioLens is",
      "body": "What AudioLens is not AudioLens is not a transcription, meeting-notes, or call-analytics product. It doesn't run in real time (no microphone recording, no WebSockets), it doesn't support multiple languages (Whisper decoding is pinned to English, and the Wav2Vec2 emotion model is English-only), it has no user accounts, and there's no speaker diarization, summarization, sentiment analysis, or SRT/PDF transcript export."
    },
    {
      "key": "heading:intro:why-it-exists:3",
      "sectionId": "intro",
      "headingId": "why-it-exists",
      "kind": "heading",
      "title": "Why it exists",
      "body": ""
    },
    {
      "key": "content:intro:why-it-exists:4",
      "sectionId": "intro",
      "headingId": "why-it-exists",
      "kind": "content",
      "title": "Why it exists",
      "body": "Speech models are hard to debug from the outside. A transcript or a confidence score tells you what a model predicted, not why — which parts of the waveform it attended to, whether a saliency map can be trusted, whether performance holds up across accents or speakers, or where in the network a property like pitch or phoneme identity is actually represented. AudioLens exists to make those questions answerable interactively, on real audio, without writing one-off analysis scripts for every question."
    },
    {
      "key": "heading:intro:who-its-for:5",
      "sectionId": "intro",
      "headingId": "who-its-for",
      "kind": "heading",
      "title": "Who it's for",
      "body": ""
    },
    {
      "key": "content:intro:who-its-for:6",
      "sectionId": "intro",
      "headingId": "who-its-for",
      "kind": "content",
      "title": "Who it's for",
      "body": "Researchers and engineers working on speech recognition or speech emotion models who need to inspect a specific prediction, compare checkpoints, stress-test robustness with perturbations, or check whether a model's errors are concentrated in particular speaker groups."
    },
    {
      "key": "heading:intro:lineage-echo--audiolens:7",
      "sectionId": "intro",
      "headingId": "lineage-echo--audiolens",
      "kind": "heading",
      "title": "Lineage: ECHO → AudioLens",
      "body": ""
    },
    {
      "key": "content:intro:lineage-echo--audiolens:8",
      "sectionId": "intro",
      "headingId": "lineage-echo--audiolens",
      "kind": "content",
      "title": "Lineage: ECHO → AudioLens",
      "body": "AudioLens is built on and extends ECHO, an MIT-licensed audio interpretability tool originally released as LIT for Voice (v1.0.0, 2024-10-13) and created by Anas Hussaindeen, Chandupa Ambepitiya, and Dewmike Amarasinghe. AudioLens is inspired throughout by Google PAIR's LIT. See /docs/licenses for the full license and attribution."
    },
    {
      "key": "heading:intro:what-you-can-do:9",
      "sectionId": "intro",
      "headingId": "what-you-can-do",
      "kind": "heading",
      "title": "What you can do",
      "body": ""
    },
    {
      "key": "content:intro:what-you-can-do:10",
      "sectionId": "intro",
      "headingId": "what-you-can-do",
      "kind": "content",
      "title": "What you can do",
      "body": "Saliency mapping Analysis panel Attribution maps over the waveform"
    },
    {
      "key": "content:intro:what-you-can-do:11",
      "sectionId": "intro",
      "headingId": "what-you-can-do",
      "kind": "content",
      "title": "What you can do",
      "body": "Attention Analysis panel Per-layer, per-head attention weights"
    },
    {
      "key": "content:intro:what-you-can-do:12",
      "sectionId": "intro",
      "headingId": "what-you-can-do",
      "kind": "content",
      "title": "What you can do",
      "body": "Embedding projector Analysis panel 2D/3D projections with clustering and nearest neighbours"
    },
    {
      "key": "content:intro:what-you-can-do:13",
      "sectionId": "intro",
      "headingId": "what-you-can-do",
      "kind": "content",
      "title": "What you can do",
      "body": "Fairness slices Analysis panel Compare performance across accent, speaker, or metadata"
    },
    {
      "key": "heading:intro:where-to-go-next:14",
      "sectionId": "intro",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:intro:where-to-go-next:15",
      "sectionId": "intro",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Quickstart Get started Boot the stack and run your first analysis"
    },
    {
      "key": "content:intro:where-to-go-next:16",
      "sectionId": "intro",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Core concepts Get started Datapoints, the shared timeline, and panel sync"
    }
  ],
  "jlens": [
    {
      "key": "content:jlens:lead:0",
      "sectionId": "jlens",
      "kind": "content",
      "title": "",
      "body": "Jacobian Lens is a decoder-only, position-resolved lens over Whisper's decoder layers — it learns a mapping you can then apply to new clips to see how a decoder layer's representation relates to the tokens it eventually produces, position by position."
    },
    {
      "key": "content:jlens:lead:1",
      "sectionId": "jlens",
      "kind": "content",
      "title": "",
      "body": "decoder-only position-resolved Whisper /j-lens Lab"
    },
    {
      "key": "heading:jlens:two-operations:2",
      "sectionId": "jlens",
      "headingId": "two-operations",
      "kind": "heading",
      "title": "Two operations",
      "body": ""
    },
    {
      "key": "content:jlens:two-operations:3",
      "sectionId": "jlens",
      "headingId": "two-operations",
      "kind": "content",
      "title": "Two operations",
      "body": "jacobian_lens_fit — fits a new lens from a dataset of samples. Requires 2 to 1000 samples, each clip ≤ 60 seconds, and a dataset or manifest that includes a transcript (the lens is fit against known text, not raw audio alone)."
    },
    {
      "key": "content:jlens:two-operations:4",
      "sectionId": "jlens",
      "headingId": "two-operations",
      "kind": "content",
      "title": "Two operations",
      "body": "jacobian_lens_apply — applies an already-fitted lens to a clip. Takes top_k (how many top results to return) and an optional transcript."
    },
    {
      "key": "heading:jlens:the-j-lens-lab:5",
      "sectionId": "jlens",
      "headingId": "the-j-lens-lab",
      "kind": "heading",
      "title": "The J-Lens Lab",
      "body": ""
    },
    {
      "key": "content:jlens:the-j-lens-lab:6",
      "sectionId": "jlens",
      "headingId": "the-j-lens-lab",
      "kind": "content",
      "title": "The J-Lens Lab",
      "body": "Fitting a lens has its own dedicated page in the app: /j-lens, called the J-Lens Lab. It's a 3-step flow:"
    },
    {
      "key": "content:jlens:the-j-lens-lab:7",
      "sectionId": "jlens",
      "headingId": "the-j-lens-lab",
      "kind": "content",
      "title": "The J-Lens Lab",
      "body": "Pick model and dataset Choose the Whisper checkpoint and the dataset (with transcripts) you'll fit against."
    },
    {
      "key": "content:jlens:the-j-lens-lab:8",
      "sectionId": "jlens",
      "headingId": "the-j-lens-lab",
      "kind": "content",
      "title": "The J-Lens Lab",
      "body": "Select samples Choose which samples from that dataset — within the 2–1000 range — go into the fit."
    },
    {
      "key": "content:jlens:the-j-lens-lab:9",
      "sectionId": "jlens",
      "headingId": "the-j-lens-lab",
      "kind": "content",
      "title": "The J-Lens Lab",
      "body": "Fit Submit the fit job and wait for it to complete; the result is a saved lens you can apply to new clips afterward."
    },
    {
      "key": "content:jlens:the-j-lens-lab:10",
      "sectionId": "jlens",
      "headingId": "the-j-lens-lab",
      "kind": "content",
      "title": "The J-Lens Lab",
      "body": "Image placeholder: J-Lens Lab flow Add /assets/docs/jlens-lab.png — the /j-lens page showing the 3-step fit flow (model+dataset, sample selection, fit) and the saved lenses list. Replace this callout with ![J-Lens Lab flow](/assets/docs/jlens-lab.png) once the real image is uploaded."
    },
    {
      "key": "heading:jlens:saved-lenses:11",
      "sectionId": "jlens",
      "headingId": "saved-lenses",
      "kind": "heading",
      "title": "Saved lenses",
      "body": ""
    },
    {
      "key": "content:jlens:saved-lenses:12",
      "sectionId": "jlens",
      "headingId": "saved-lenses",
      "kind": "content",
      "title": "Saved lenses",
      "body": "Once fit, a lens is saved and shows up in a saved lenses list, ready to apply to new clips via jacobian_lens_apply without re-fitting."
    },
    {
      "key": "content:jlens:saved-lenses:13",
      "sectionId": "jlens",
      "headingId": "saved-lenses",
      "kind": "content",
      "title": "Saved lenses",
      "body": "To remove one:"
    },
    {
      "key": "content:jlens:saved-lenses:14",
      "sectionId": "jlens",
      "headingId": "saved-lenses",
      "kind": "content",
      "title": "Saved lenses",
      "body": "curl -X DELETE http://localhost:8000/jobs/jacobian-lenses/{lens_id} \\ --cookie \"sid=<your session cookie>\""
    }
  ],
  "licenses": [
    {
      "key": "content:licenses:lead:0",
      "sectionId": "licenses",
      "kind": "content",
      "title": "",
      "body": "AudioLens itself is MIT licensed. The models and datasets it works with are a mix of permissive and non-commercial licenses — read this page before you deploy AudioLens anywhere other than your own machine, and especially before deciding what a public instance can show."
    },
    {
      "key": "content:licenses:lead:1",
      "sectionId": "licenses",
      "kind": "content",
      "title": "",
      "body": "MIT Open source"
    },
    {
      "key": "heading:licenses:audiolenss-own-license:2",
      "sectionId": "licenses",
      "headingId": "audiolenss-own-license",
      "kind": "heading",
      "title": "AudioLens's own license",
      "body": ""
    },
    {
      "key": "content:licenses:audiolenss-own-license:3",
      "sectionId": "licenses",
      "headingId": "audiolenss-own-license",
      "kind": "content",
      "title": "AudioLens's own license",
      "body": "AudioLens's code is MIT licensed."
    },
    {
      "key": "content:licenses:audiolenss-own-license:4",
      "sectionId": "licenses",
      "headingId": "audiolenss-own-license",
      "kind": "content",
      "title": "AudioLens's own license",
      "body": "Copyright (c) 2025 Anas Hussaindeen, Chandupa Ambepitiya, Dewmike Amarasinghe (original ECHO)"
    },
    {
      "key": "content:licenses:audiolenss-own-license:5",
      "sectionId": "licenses",
      "headingId": "audiolenss-own-license",
      "kind": "content",
      "title": "AudioLens's own license",
      "body": "Copyright (c) 2026 Januda Lelwala, Janith Mahanama, Hesandi Mallawarachchi (AudioLens, an extension of ECHO)"
    },
    {
      "key": "content:licenses:audiolenss-own-license:6",
      "sectionId": "licenses",
      "headingId": "audiolenss-own-license",
      "kind": "content",
      "title": "AudioLens's own license",
      "body": "AudioLens does not redistribute any dataset audio. Datasets are fetched or imported by scripts you run yourself — see Loading datasets and CLI & scripts. The MIT license on AudioLens's code says nothing about the license terms of the audio, transcripts, or model weights it helps you work with — those are listed below."
    },
    {
      "key": "heading:licenses:third-party-model-and-dataset-licenses:7",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "heading",
      "title": "Third-party model and dataset licenses",
      "body": ""
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:8",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "openai/whisper-base Apache 2.0 Permissive, commercial use OK huggingface.co/openai/whisper-base"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:9",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "openai/whisper-large-v3 Apache 2.0 (same Whisper license family) Permissive, commercial use OK huggingface.co/openai/whisper-large-v3"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:10",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "r-f/wav2vec-english-speech-emotion-recognition Apache 2.0 Permissive; fine-tuned from jonatasgrosman/wav2vec2-large-xlsr-53-english huggingface.co/r-f/wav2vec-english-speech-emotion-recognition"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:11",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "facebook/wav2vec2-base-960h (legacy fallback) Apache 2.0 Permissive huggingface.co/facebook/wav2vec2-base-960h"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:12",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "jonatasgrosman/wav2vec2-large-xlsr-53-english (legacy fallback) Apache 2.0 Permissive huggingface.co/jonatasgrosman/wav2vec2-large-xlsr-53-english"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:13",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "Common Voice (cv-valid-dev subset) Unverified — check source Mozilla's own historical policy is CC0 (public domain) for audio + transcripts, but as of Oct 2025 Mozilla moved distribution behind \"Mozilla Data Collective\" and current live terms could not be confirmed by automated fetch commonvoice.mozilla.org (fetch attempts blocked by JS-rendered page)"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:14",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "RAVDESS CC BY-NC-SA 4.0 — non-commercial only Commercial license must be purchased separately (contact ravdess@gmail.com); attribution + share-alike required; cite the PLoS ONE paper zenodo.org/records/1188976"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:15",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "L2-ARCTIC CC BY-NC 4.0 — non-commercial only Attribution required; must cite Zhao et al. (2018) Interspeech; registration (name/email/affiliation) required before download; commercial use needs approval from Dr. Ricardo Gutierrez-Osuna psi.engr.tamu.edu/l2-arctic-corpus"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:16",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "Speech Accent Archive (SAA) CC BY-NC-SA 4.0 Non-commercial, attribution, share-alike accent.gmu.edu"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:17",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "LibriSpeech / LibriSpeech-1000 CC BY 4.0 Attribution required, commercial use allowed openslr.org/12, huggingface.co/datasets/openslr/librispeech_asr"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:18",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "SAVEE Unverified — check source The project's own import script states plainly that \"SAVEE is licensed and cannot be redistributed\" — not freely licensed; requires obtaining a copy directly from the University of Surrey. Automated fetch of the official SAVEE site failed (TLS certificate mismatch) kahlan.eps.surrey.ac.uk/savee (fetch blocked)"
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:19",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "RAVDESS, L2-ARCTIC, and SAA are non-commercial licenses These three bundled datasets are licensed for non-commercial use only. AudioLens is itself a non-commercial, open-source project — self-hosted for free, and its planned hosted demo is a non-commercial public demo with no paid tier — so this is compatible with how AudioLens uses them. Attribution and citation requirements still apply regardless. If you fork AudioLens for a commercial deployment, you'd need to either drop these three datasets or get a separate license: RAVDESS's commercial terms require a purchased license (ravdess@gmail.com), and L2-ARCTIC's require approval from its maintainer (Dr. Ricardo Gutierrez-Osuna)."
    },
    {
      "key": "content:licenses:third-party-model-and-dataset-licenses:20",
      "sectionId": "licenses",
      "headingId": "third-party-model-and-dataset-licenses",
      "kind": "content",
      "title": "Third-party model and dataset licenses",
      "body": "Common Voice and SAVEE license terms are unverified Both are marked \"unverified — check source\" in the table above rather than given a guessed license, because automated attempts to fetch their current official terms failed. Follow the source links and confirm the terms yourself before relying on either dataset for anything beyond local experimentation — don't take this page's absence of a confirmed license as evidence that one doesn't apply."
    },
    {
      "key": "heading:licenses:what-this-means-in-practice:21",
      "sectionId": "licenses",
      "headingId": "what-this-means-in-practice",
      "kind": "heading",
      "title": "What this means in practice",
      "body": ""
    },
    {
      "key": "content:licenses:what-this-means-in-practice:22",
      "sectionId": "licenses",
      "headingId": "what-this-means-in-practice",
      "kind": "content",
      "title": "What this means in practice",
      "body": "Whisper and Wav2Vec2 model weights are unambiguously permissive (Apache 2.0) — nothing about running inference with them restricts commercial use."
    },
    {
      "key": "content:licenses:what-this-means-in-practice:23",
      "sectionId": "licenses",
      "headingId": "what-this-means-in-practice",
      "kind": "content",
      "title": "What this means in practice",
      "body": "AudioLens's own code (MIT) does not redistribute any dataset audio — the license terms above attach to the datasets themselves, fetched or imported by scripts you run, not to anything AudioLens ships in its repo."
    },
    {
      "key": "content:licenses:what-this-means-in-practice:24",
      "sectionId": "licenses",
      "headingId": "what-this-means-in-practice",
      "kind": "content",
      "title": "What this means in practice",
      "body": "Non-commercial datasets are opt-in, not required — you can run AudioLens entirely against LibriSpeech, your own uploaded audio, or a custom dataset and never touch RAVDESS, L2-ARCTIC, or SAA."
    },
    {
      "key": "content:licenses:what-this-means-in-practice:25",
      "sectionId": "licenses",
      "headingId": "what-this-means-in-practice",
      "kind": "content",
      "title": "What this means in practice",
      "body": "Confirm current terms yourself for Common Voice and SAVEE before quoting a license anywhere official — this table reflects what could be verified as of the date at the top of this content pack, not a live feed."
    },
    {
      "key": "content:licenses:what-this-means-in-practice:26",
      "sectionId": "licenses",
      "headingId": "what-this-means-in-practice",
      "kind": "content",
      "title": "What this means in practice",
      "body": "See Loading datasets for how each dataset gets into AudioLens, and Hosted demo for how the demo uses these datasets as a non-commercial deployment."
    }
  ],
  "perturb": [
    {
      "key": "content:perturb:lead:0",
      "sectionId": "perturb",
      "kind": "content",
      "title": "",
      "body": "The perturbation lab applies a controlled transform to a clip, re-runs the model on the result, and lets you compare the prediction before and after — a direct robustness check rather than an inferred one."
    },
    {
      "key": "content:perturb:lead:1",
      "sectionId": "perturb",
      "kind": "content",
      "title": "",
      "body": "noise time_masking pitch_shift time_stretch"
    },
    {
      "key": "heading:perturb:four-perturbation-types:2",
      "sectionId": "perturb",
      "headingId": "four-perturbation-types",
      "kind": "heading",
      "title": "Four perturbation types",
      "body": ""
    },
    {
      "key": "content:perturb:four-perturbation-types:3",
      "sectionId": "perturb",
      "headingId": "four-perturbation-types",
      "kind": "content",
      "title": "Four perturbation types",
      "body": "There are four perturbation types available today — noted explicitly here because marketing copy elsewhere may round this up; this page is the accurate count:"
    },
    {
      "key": "content:perturb:four-perturbation-types:4",
      "sectionId": "perturb",
      "headingId": "four-perturbation-types",
      "kind": "content",
      "title": "Four perturbation types",
      "body": "noise"
    },
    {
      "key": "content:perturb:four-perturbation-types:5",
      "sectionId": "perturb",
      "headingId": "four-perturbation-types",
      "kind": "content",
      "title": "Four perturbation types",
      "body": "time_masking"
    },
    {
      "key": "content:perturb:four-perturbation-types:6",
      "sectionId": "perturb",
      "headingId": "four-perturbation-types",
      "kind": "content",
      "title": "Four perturbation types",
      "body": "pitch_shift"
    },
    {
      "key": "content:perturb:four-perturbation-types:7",
      "sectionId": "perturb",
      "headingId": "four-perturbation-types",
      "kind": "content",
      "title": "Four perturbation types",
      "body": "time_stretch"
    },
    {
      "key": "heading:perturb:request-limits:8",
      "sectionId": "perturb",
      "headingId": "request-limits",
      "kind": "heading",
      "title": "Request limits",
      "body": ""
    },
    {
      "key": "content:perturb:request-limits:9",
      "sectionId": "perturb",
      "headingId": "request-limits",
      "kind": "content",
      "title": "Request limits",
      "body": "Up to 10 perturbations per request. Each generates a new audio variant, which is then run back through the model so you can compare its prediction against the original."
    },
    {
      "key": "heading:perturb:comparing-results:10",
      "sectionId": "perturb",
      "headingId": "comparing-results",
      "kind": "heading",
      "title": "Comparing results",
      "body": ""
    },
    {
      "key": "content:perturb:comparing-results:11",
      "sectionId": "perturb",
      "headingId": "comparing-results",
      "kind": "content",
      "title": "Comparing results",
      "body": "For each perturbation, the panel shows:"
    },
    {
      "key": "content:perturb:comparing-results:12",
      "sectionId": "perturb",
      "headingId": "comparing-results",
      "kind": "content",
      "title": "Comparing results",
      "body": "Original vs. generated waveform, side by side, so you can see exactly what the transform did to the signal."
    },
    {
      "key": "content:perturb:comparing-results:13",
      "sectionId": "perturb",
      "headingId": "comparing-results",
      "kind": "content",
      "title": "Comparing results",
      "body": "Re-run prediction for the perturbed clip, next to the original prediction, so you can see whether — and how much — the transform moved the model's output."
    },
    {
      "key": "content:perturb:comparing-results:14",
      "sectionId": "perturb",
      "headingId": "comparing-results",
      "kind": "content",
      "title": "Comparing results",
      "body": "This is the most direct robustness signal in AudioLens: instead of asking \"what does the model attend to,\" perturbation asks \"does the model's answer survive a small, controlled change to the input.\""
    },
    {
      "key": "content:perturb:comparing-results:15",
      "sectionId": "perturb",
      "headingId": "comparing-results",
      "kind": "content",
      "title": "Comparing results",
      "body": "Image placeholder: perturbation before/after Add /assets/docs/perturb-compare.png — the perturbation panel showing the original and perturbed waveforms stacked, with both predictions displayed for comparison. Replace this callout with ![Perturbation before and after](/assets/docs/perturb-compare.png) once the real image is uploaded."
    }
  ],
  "probes": [
    {
      "key": "content:probes:lead:0",
      "sectionId": "probes",
      "kind": "content",
      "title": "",
      "body": "Layer probing answers a specific question: for some property you care about — speaker gender, accent, emotion, anything you can label — which layer of the model actually represents it best?"
    },
    {
      "key": "content:probes:lead:1",
      "sectionId": "probes",
      "kind": "content",
      "title": "",
      "body": "layer_probe logreg linear_svm cross-validation"
    },
    {
      "key": "heading:probes:how-it-works:2",
      "sectionId": "probes",
      "headingId": "how-it-works",
      "kind": "heading",
      "title": "How it works",
      "body": ""
    },
    {
      "key": "content:probes:how-it-works:3",
      "sectionId": "probes",
      "headingId": "how-it-works",
      "kind": "content",
      "title": "How it works",
      "body": "The layer_probe operation trains a small linear classifier — a probe — on the hidden states from each layer independently, then scores how well each layer's probe predicts the property. The result is a per-layer view of where in the model that property becomes linearly separable."
    },
    {
      "key": "heading:probes:probe-types:4",
      "sectionId": "probes",
      "headingId": "probe-types",
      "kind": "heading",
      "title": "Probe types",
      "body": ""
    },
    {
      "key": "content:probes:probe-types:5",
      "sectionId": "probes",
      "headingId": "probe-types",
      "kind": "content",
      "title": "Probe types",
      "body": "logreg — logistic regression."
    },
    {
      "key": "content:probes:probe-types:6",
      "sectionId": "probes",
      "headingId": "probe-types",
      "kind": "content",
      "title": "Probe types",
      "body": "linear_svm — linear support vector machine."
    },
    {
      "key": "heading:probes:limits:7",
      "sectionId": "probes",
      "headingId": "limits",
      "kind": "heading",
      "title": "Limits",
      "body": ""
    },
    {
      "key": "content:probes:limits:8",
      "sectionId": "probes",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "Properties up to 8 Per probing run"
    },
    {
      "key": "content:probes:limits:9",
      "sectionId": "probes",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "CV folds 2–10 Cross-validation folds per probe"
    },
    {
      "key": "content:probes:limits:10",
      "sectionId": "probes",
      "headingId": "limits",
      "kind": "content",
      "title": "Limits",
      "body": "Each property is probed independently across all layers, using cross-validation so the reported score isn't just an artifact of the particular train/test split."
    },
    {
      "key": "heading:probes:reading-the-results:11",
      "sectionId": "probes",
      "headingId": "reading-the-results",
      "kind": "heading",
      "title": "Reading the results",
      "body": ""
    },
    {
      "key": "content:probes:reading-the-results:12",
      "sectionId": "probes",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Layer profile chart — probe accuracy (or the relevant score) plotted against layer index, for each property. The layer where the curve peaks is where that property is most linearly represented."
    },
    {
      "key": "content:probes:reading-the-results:13",
      "sectionId": "probes",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Selectivity heatmap — properties against layers, so you can compare multiple properties' profiles at once and see whether they peak at the same layer or different ones."
    },
    {
      "key": "content:probes:reading-the-results:14",
      "sectionId": "probes",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Confusion matrix — per-property, per-layer, showing which classes the probe actually confuses at that layer."
    },
    {
      "key": "content:probes:reading-the-results:15",
      "sectionId": "probes",
      "headingId": "reading-the-results",
      "kind": "content",
      "title": "Reading the results",
      "body": "Image placeholder: layer probe profile Add /assets/docs/probes-profile.png — the layer probe panel showing the layer profile chart and selectivity heatmap for a multi-property run. Replace this callout with ![Layer probe profile](/assets/docs/probes-profile.png) once the real image is uploaded."
    }
  ],
  "quickstart": [
    {
      "key": "heading:quickstart:get-audiolens-running:0",
      "sectionId": "quickstart",
      "headingId": "get-audiolens-running",
      "kind": "heading",
      "title": "Get AudioLens running",
      "body": ""
    },
    {
      "key": "content:quickstart:get-audiolens-running:1",
      "sectionId": "quickstart",
      "headingId": "get-audiolens-running",
      "kind": "content",
      "title": "Get AudioLens running",
      "body": "AudioLens runs as a set of Docker Compose services: a CPU-only FastAPI control plane, one or more Celery workers that actually load models, Redis for sessions and job metadata, and a React frontend. This page gets the full stack running locally and walks through one analysis job."
    },
    {
      "key": "content:quickstart:get-audiolens-running:2",
      "sectionId": "quickstart",
      "headingId": "get-audiolens-running",
      "kind": "content",
      "title": "Get AudioLens running",
      "body": "Open source MIT FastAPI · React 18"
    },
    {
      "key": "content:quickstart:get-audiolens-running:3",
      "sectionId": "quickstart",
      "headingId": "get-audiolens-running",
      "kind": "content",
      "title": "Get AudioLens running",
      "body": "Model weights download on first use Env files are optional — sane defaults work without them. Model weights are not bundled; they download lazily the first time a job needs them. If you'd rather not wait mid-analysis, pre-warm them ahead of time (see below)."
    },
    {
      "key": "heading:quickstart:prerequisites:4",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "heading",
      "title": "Prerequisites",
      "body": ""
    },
    {
      "key": "content:quickstart:prerequisites:5",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Docker Required Docker Desktop (Windows/Mac) or Docker Engine + Compose plugin 2.24+ (Linux)"
    },
    {
      "key": "content:quickstart:prerequisites:6",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "WSL 2 Windows only Docker Desktop needs the WSL 2 backend"
    },
    {
      "key": "content:quickstart:prerequisites:7",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "NVIDIA driver 555+ Optional, for CUDA Only needed for the NVIDIA GPU variant"
    },
    {
      "key": "content:quickstart:prerequisites:8",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "ROCm-supported GPU Optional, for AMD Linux only, for the AMD GPU variant"
    },
    {
      "key": "heading:quickstart:install-and-boot:9",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "heading",
      "title": "Install and boot",
      "body": ""
    },
    {
      "key": "content:quickstart:install-and-boot:10",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "git clone https://github.com/ECHO-Lit/ECHO-LIT.git AudioLens cd AudioLens cp Backend/.env.example Backend/.env cp Frontend/.env.example Frontend/.env docker compose up --build"
    },
    {
      "key": "content:quickstart:install-and-boot:11",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# NVIDIA docker compose --profile gpu up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-gpu"
    },
    {
      "key": "content:quickstart:install-and-boot:12",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# AMD ROCm docker compose --profile amd up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-amd"
    },
    {
      "key": "content:quickstart:install-and-boot:13",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# Apple Silicon (MPS) — Docker Desktop can't expose MPS, so the worker # runs natively, outside Docker cd Backend python3 -m venv .venv && source .venv/bin/activate pip install -r requirements.txt STORAGE_LOCAL_ROOT=shared-storage ML_DEVICE=mps \\ celery -A app.core.celery_app:celery_app worker --queues=gpu-fast,gpu-large --concurrency=1"
    },
    {
      "key": "content:quickstart:install-and-boot:14",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "Windows tip Keep the repo at a short path (e.g. C:\\dev\\AudioLens) — dataset paths are case-sensitive."
    },
    {
      "key": "content:quickstart:install-and-boot:15",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "To pre-warm model weights instead of downloading them lazily on first job:"
    },
    {
      "key": "content:quickstart:install-and-boot:16",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "docker compose run --rm worker-model-local python3 -c \\ \"from transformers import pipeline; pipeline('automatic-speech-recognition', model='openai/whisper-base')\""
    },
    {
      "key": "content:quickstart:install-and-boot:17",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "To tear the stack down: docker compose down (add -v to also wipe volumes)."
    },
    {
      "key": "heading:quickstart:service-endpoints:18",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "heading",
      "title": "Service endpoints",
      "body": ""
    },
    {
      "key": "content:quickstart:service-endpoints:19",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "Frontend http://localhost:8080"
    },
    {
      "key": "content:quickstart:service-endpoints:20",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "API health check http://localhost:8000/health"
    },
    {
      "key": "content:quickstart:service-endpoints:21",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "Redis localhost:6379"
    },
    {
      "key": "heading:quickstart:run-your-first-analysis:22",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "heading",
      "title": "Run your first analysis",
      "body": ""
    },
    {
      "key": "content:quickstart:run-your-first-analysis:23",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "content",
      "title": "Run your first analysis",
      "body": "Open the frontend Visit http://localhost:8080. A new anonymous session cookie is set automatically — there's no sign-up or login."
    },
    {
      "key": "content:quickstart:run-your-first-analysis:24",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "content",
      "title": "Run your first analysis",
      "body": "Pick a dataset or upload a clip Start from a bundled dataset (see /docs/datasets) or upload your own .wav, .mp3, .m4a, or .flac file, up to 100 MB and 10 minutes long."
    },
    {
      "key": "content:quickstart:run-your-first-analysis:25",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "content",
      "title": "Run your first analysis",
      "body": "Choose a model Pick whisper-base (speech-to-text) or wav2vec2 (emotion classification) from the model dropdown."
    },
    {
      "key": "content:quickstart:run-your-first-analysis:26",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "content",
      "title": "Run your first analysis",
      "body": "Launch an analysis Start with a prediction job to see the model's raw output, then try saliency to see which parts of the waveform drove it. The UI polls the job until it completes."
    },
    {
      "key": "content:quickstart:run-your-first-analysis:27",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "content",
      "title": "Run your first analysis",
      "body": "Read the result The result appears on the shared timeline. Open another panel — Attention or Embeddings, for example — and it stays in sync with the same datapoint."
    },
    {
      "key": "content:quickstart:run-your-first-analysis:28",
      "sectionId": "quickstart",
      "headingId": "run-your-first-analysis",
      "kind": "content",
      "title": "Run your first analysis",
      "body": "Image placeholder: first analysis result Add /assets/docs/quickstart-first-result.png — a screenshot of the frontend showing a completed prediction job with the saliency panel open on the shared timeline. Replace this callout with ![First analysis result in AudioLens](/assets/docs/quickstart-first-result.png) once the real image is uploaded."
    },
    {
      "key": "heading:quickstart:where-to-go-next:29",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:quickstart:where-to-go-next:30",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Core concepts Get started Datapoints, the shared timeline, and panel sync"
    },
    {
      "key": "content:quickstart:where-to-go-next:31",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Loading datasets Get started Bundled datasets, licenses, and custom uploads"
    },
    {
      "key": "content:quickstart:where-to-go-next:32",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Saliency mapping Analysis panel Attribution maps over the waveform"
    },
    {
      "key": "content:quickstart:where-to-go-next:33",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Device selection Models Run on CPU, CUDA, ROCm, or Apple MPS"
    }
  ],
  "rest": [
    {
      "key": "content:rest:lead:0",
      "sectionId": "rest",
      "kind": "content",
      "title": "",
      "body": "Every panel in the UI is a thin client over this API — there's no functionality in AudioLens that isn't reachable by calling these endpoints directly."
    },
    {
      "key": "content:rest:lead:1",
      "sectionId": "rest",
      "kind": "content",
      "title": "",
      "body": "Anonymous session 24h TTL No accounts"
    },
    {
      "key": "heading:rest:session-model:2",
      "sectionId": "rest",
      "headingId": "session-model",
      "kind": "heading",
      "title": "Session model",
      "body": ""
    },
    {
      "key": "content:rest:session-model:3",
      "sectionId": "rest",
      "headingId": "session-model",
      "kind": "content",
      "title": "Session model",
      "body": "Auth is a single anonymous, HttpOnly sid cookie, issued on first contact and valid for 24 hours. Every resource you create — uploaded audio, jobs, custom models, custom datasets — is scoped to the session that created it. There are no accounts, no roles, and no multi-tenancy: ownership is just \"which session created this.\""
    },
    {
      "key": "content:rest:session-model:4",
      "sectionId": "rest",
      "headingId": "session-model",
      "kind": "content",
      "title": "Session model",
      "body": "GET /session Get (or implicitly create) the current session"
    },
    {
      "key": "heading:rest:audio:5",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "heading",
      "title": "Audio",
      "body": ""
    },
    {
      "key": "content:rest:audio:6",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "POST /upload Upload an audio file, returns an opaque audio_id — no inference runs yet"
    },
    {
      "key": "content:rest:audio:7",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "GET /upload/list List audio uploaded in this session"
    },
    {
      "key": "content:rest:audio:8",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "GET /upload/metadata/{id} Get metadata for one upload"
    },
    {
      "key": "content:rest:audio:9",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "DELETE /upload/{id} Delete an upload"
    },
    {
      "key": "content:rest:audio:10",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "POST /audio/materialize Materialize an audio reference (e.g. from a bundled dataset) into a usable audio resource"
    },
    {
      "key": "content:rest:audio:11",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "GET /audio/{id} Fetch audio bytes by id"
    },
    {
      "key": "content:rest:audio:12",
      "sectionId": "rest",
      "headingId": "audio",
      "kind": "content",
      "title": "Audio",
      "body": "POST /audio/{id}/variant Create a derived variant of an audio file"
    },
    {
      "key": "heading:rest:jobs:13",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "heading",
      "title": "Jobs",
      "body": ""
    },
    {
      "key": "content:rest:jobs:14",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "Jobs are how every analysis operation actually runs — POST /jobs hands back a job_id immediately (202), and a worker picks it up asynchronously."
    },
    {
      "key": "content:rest:jobs:15",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "POST /jobs Submit a job — returns 202 with a job_id"
    },
    {
      "key": "content:rest:jobs:16",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "GET /jobs/{id} Poll job status"
    },
    {
      "key": "content:rest:jobs:17",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "GET /jobs/{id}/result Fetch the job's result once complete"
    },
    {
      "key": "content:rest:jobs:18",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "DELETE /jobs/{id} Cancel or remove a job"
    },
    {
      "key": "content:rest:jobs:19",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "DELETE /jobs/jacobian-lenses/{lens_id} Delete a fitted Jacobian Lens"
    },
    {
      "key": "content:rest:jobs:20",
      "sectionId": "rest",
      "headingId": "jobs",
      "kind": "content",
      "title": "Jobs",
      "body": "The specific type you submit to POST /jobs determines which analysis runs. See each panel's own page for parameters: Saliency, Attention, Embeddings, Perturbation, Diagnostics, Fairness, Layer probes, Jacobian Lens, and Dataset EDA."
    },
    {
      "key": "heading:rest:custom-models:21",
      "sectionId": "rest",
      "headingId": "custom-models",
      "kind": "heading",
      "title": "Custom models",
      "body": ""
    },
    {
      "key": "content:rest:custom-models:22",
      "sectionId": "rest",
      "headingId": "custom-models",
      "kind": "content",
      "title": "Custom models",
      "body": "POST /models Register a custom Hugging Face model — see Custom checkpoints"
    },
    {
      "key": "content:rest:custom-models:23",
      "sectionId": "rest",
      "headingId": "custom-models",
      "kind": "content",
      "title": "Custom models",
      "body": "GET /models List registered custom models"
    },
    {
      "key": "content:rest:custom-models:24",
      "sectionId": "rest",
      "headingId": "custom-models",
      "kind": "content",
      "title": "Custom models",
      "body": "GET /models/{id} Get one custom model's details"
    },
    {
      "key": "content:rest:custom-models:25",
      "sectionId": "rest",
      "headingId": "custom-models",
      "kind": "content",
      "title": "Custom models",
      "body": "DELETE /models/{id} Remove a custom model"
    },
    {
      "key": "content:rest:custom-models:26",
      "sectionId": "rest",
      "headingId": "custom-models",
      "kind": "content",
      "title": "Custom models",
      "body": "GET /models/jacobian-lenses/{model_id} List Jacobian Lenses fitted for a model"
    },
    {
      "key": "heading:rest:analyses:27",
      "sectionId": "rest",
      "headingId": "analyses",
      "kind": "heading",
      "title": "Analyses",
      "body": ""
    },
    {
      "key": "content:rest:analyses:28",
      "sectionId": "rest",
      "headingId": "analyses",
      "kind": "content",
      "title": "Analyses",
      "body": "Two operations — fairness and linguistic-vs-acoustic — live under a versioned prefix rather than /jobs directly:"
    },
    {
      "key": "content:rest:analyses:29",
      "sectionId": "rest",
      "headingId": "analyses",
      "kind": "content",
      "title": "Analyses",
      "body": "POST /api/v1/analyses/linguistic-vs-acoustic Run the linguistic-vs-acoustic sweep — see Diagnostics"
    },
    {
      "key": "content:rest:analyses:30",
      "sectionId": "rest",
      "headingId": "analyses",
      "kind": "content",
      "title": "Analyses",
      "body": "GET /api/v1/analyses/fairness/groupable List metadata columns you can group by"
    },
    {
      "key": "content:rest:analyses:31",
      "sectionId": "rest",
      "headingId": "analyses",
      "kind": "content",
      "title": "Analyses",
      "body": "POST /api/v1/analyses/fairness Run a fairness slice — see Fairness slices"
    },
    {
      "key": "content:rest:analyses:32",
      "sectionId": "rest",
      "headingId": "analyses",
      "kind": "content",
      "title": "Analyses",
      "body": "POST /api/v1/analyses/fairness/cancel-all Cancel all running fairness jobs"
    },
    {
      "key": "heading:rest:dataset-management-custom-datasets:33",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "heading",
      "title": "Dataset management (custom datasets)",
      "body": ""
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:34",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "POST /upload/dataset/create Create a new custom dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:35",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "POST /upload/dataset/{name}/files Add files to a custom dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:36",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "POST /upload/dataset/{name}/manifest Upload or replace a dataset manifest"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:37",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "GET /upload/dataset/label-patterns List built-in filename label patterns (e.g. the savee pattern)"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:38",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "GET /upload/dataset/{name}/labels Get labels for a dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:39",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "POST /upload/dataset/{name}/labels Set labels for a dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:40",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "DELETE /upload/dataset/{name}/labels Clear labels for a dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:41",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "POST /upload/dataset/{name}/labels/derive Derive labels from a filename pattern"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:42",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "GET /upload/dataset/list List custom datasets in this session"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:43",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "GET /upload/dataset/{name}/metadata Get dataset metadata"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:44",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "GET /upload/dataset/{name}/files[/…] Browse or download files in a dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:45",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "DELETE /upload/dataset/{name} Delete a custom dataset"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:46",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "POST /upload/dataset/cleanup Clean up orphaned dataset artifacts"
    },
    {
      "key": "content:rest:dataset-management-custom-datasets:47",
      "sectionId": "rest",
      "headingId": "dataset-management-custom-datasets",
      "kind": "content",
      "title": "Dataset management (custom datasets)",
      "body": "See Loading datasets for the higher-level workflow."
    },
    {
      "key": "heading:rest:built-in-datasets:48",
      "sectionId": "rest",
      "headingId": "built-in-datasets",
      "kind": "heading",
      "title": "Built-in datasets",
      "body": ""
    },
    {
      "key": "content:rest:built-in-datasets:49",
      "sectionId": "rest",
      "headingId": "built-in-datasets",
      "kind": "content",
      "title": "Built-in datasets",
      "body": "GET /{dataset}/metadata Metadata for a bundled dataset"
    },
    {
      "key": "content:rest:built-in-datasets:50",
      "sectionId": "rest",
      "headingId": "built-in-datasets",
      "kind": "content",
      "title": "Built-in datasets",
      "body": "GET /{dataset}/eda Bundled dataset's EDA report — see Dataset EDA"
    },
    {
      "key": "content:rest:built-in-datasets:51",
      "sectionId": "rest",
      "headingId": "built-in-datasets",
      "kind": "content",
      "title": "Built-in datasets",
      "body": "GET, HEAD, OPTIONS /{dataset}/file/{path} Fetch a file from a bundled dataset (supports HTTP Range)"
    },
    {
      "key": "heading:rest:ops:52",
      "sectionId": "rest",
      "headingId": "ops",
      "kind": "heading",
      "title": "Ops",
      "body": ""
    },
    {
      "key": "content:rest:ops:53",
      "sectionId": "rest",
      "headingId": "ops",
      "kind": "content",
      "title": "Ops",
      "body": "GET /health Checks Redis (all logical DBs), storage backend, worker count, queue depth"
    },
    {
      "key": "content:rest:ops:54",
      "sectionId": "rest",
      "headingId": "ops",
      "kind": "content",
      "title": "Ops",
      "body": "GET /metrics Metrics endpoint"
    },
    {
      "key": "content:rest:ops:55",
      "sectionId": "rest",
      "headingId": "ops",
      "kind": "content",
      "title": "Ops",
      "body": "Legacy synchronous routes are not current API Older synchronous inference routes still exist in the codebase for backward compatibility, but they answer 410 Gone unless ENABLE_LEGACY_SYNC_INFERENCE=true is set — and that flag is refused outside production. They are not part of the current API surface and are intentionally left out of this reference. Use POST /jobs for everything."
    }
  ],
  "saliency": [
    {
      "key": "content:saliency:lead:0",
      "sectionId": "saliency",
      "kind": "content",
      "title": "",
      "body": "Saliency mapping attributes a prediction back to the waveform, so you can see which stretch of audio pushed the model toward the token or label it produced."
    },
    {
      "key": "content:saliency:lead:1",
      "sectionId": "saliency",
      "kind": "content",
      "title": "",
      "body": "gradcam lime shap full_audio flag"
    },
    {
      "key": "heading:saliency:methods:2",
      "sectionId": "saliency",
      "headingId": "methods",
      "kind": "heading",
      "title": "Methods",
      "body": ""
    },
    {
      "key": "content:saliency:methods:3",
      "sectionId": "saliency",
      "headingId": "methods",
      "kind": "content",
      "title": "Methods",
      "body": "The saliency operation supports three methods:"
    },
    {
      "key": "content:saliency:methods:4",
      "sectionId": "saliency",
      "headingId": "methods",
      "kind": "content",
      "title": "Methods",
      "body": "gradcam"
    },
    {
      "key": "content:saliency:methods:5",
      "sectionId": "saliency",
      "headingId": "methods",
      "kind": "content",
      "title": "Methods",
      "body": "lime"
    },
    {
      "key": "content:saliency:methods:6",
      "sectionId": "saliency",
      "headingId": "methods",
      "kind": "content",
      "title": "Methods",
      "body": "shap"
    },
    {
      "key": "content:saliency:methods:7",
      "sectionId": "saliency",
      "headingId": "methods",
      "kind": "content",
      "title": "Methods",
      "body": "“gradcam” is not Grad-CAM The method labeled gradcam in the API and UI does not run Grad-CAM. It runs Integrated Gradients under the hood. The name is kept for historical reasons in the API surface, but if you're comparing this against literature on Grad-CAM for audio models, you're actually looking at an Integrated Gradients attribution. Attribute results accordingly when you write them up."
    },
    {
      "key": "heading:saliency:the-full_audio-flag:8",
      "sectionId": "saliency",
      "headingId": "the-full_audio-flag",
      "kind": "heading",
      "title": "The full_audio flag",
      "body": ""
    },
    {
      "key": "content:saliency:the-full_audio-flag:9",
      "sectionId": "saliency",
      "headingId": "the-full_audio-flag",
      "kind": "content",
      "title": "The full_audio flag",
      "body": "By default, saliency runs on a bounded window of the clip rather than the full file. Set full_audio to run the attribution over the entire clip instead of just the windowed portion — subject to the window limits below."
    },
    {
      "key": "heading:saliency:window-limits:10",
      "sectionId": "saliency",
      "headingId": "window-limits",
      "kind": "heading",
      "title": "Window limits",
      "body": ""
    },
    {
      "key": "content:saliency:window-limits:11",
      "sectionId": "saliency",
      "headingId": "window-limits",
      "kind": "content",
      "title": "Window limits",
      "body": "Saliency computation is memory- and compute-bound, so it's capped:"
    },
    {
      "key": "content:saliency:window-limits:12",
      "sectionId": "saliency",
      "headingId": "window-limits",
      "kind": "content",
      "title": "Window limits",
      "body": "gradcam and lime: up to 12 seconds (MAX_SALIENCY_SECONDS)."
    },
    {
      "key": "content:saliency:window-limits:13",
      "sectionId": "saliency",
      "headingId": "window-limits",
      "kind": "content",
      "title": "Window limits",
      "body": "shap: up to 6 seconds (MAX_SALIENCY_SECONDS_SHAP) — SHAP is run with a fixed number of samples per call (SALIENCY_SHAP_SAMPLES), which makes it the most memory-sensitive of the three, hence the stricter window."
    },
    {
      "key": "content:saliency:window-limits:14",
      "sectionId": "saliency",
      "headingId": "window-limits",
      "kind": "content",
      "title": "Window limits",
      "body": "If your clip is longer than the relevant limit, trim it or pick a shorter segment before requesting saliency."
    },
    {
      "key": "heading:saliency:is-this-map-telling-the-truth--saliency-faithfulness:15",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "heading",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": ""
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:16",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "A saliency map can look convincing and still be wrong. The companion check, saliency_faithfulness, asks the honest question directly: if you delete the parts of the waveform the map says matter most, does the prediction actually change?"
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:17",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "It does this with a deletion curve: progressively occlude the highest-attributed regions and re-run prediction, comparing the before/after result at each step."
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:18",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "n_steps 3–20, default 9 Deletion curve resolution"
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:19",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "top_fraction 0.2 Fraction of the map treated as most-salient"
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:20",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "random_repeats 2–10, default 3 Random-deletion baselines for comparison"
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:21",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "occlusion optional Alternative to deletion for masking regions"
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:22",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "A map that's faithful should show a real drop in confidence as the top fraction is deleted — clearly separated from what random deletion does at the same rate. If deleting the \"important\" region barely moves the prediction, treat the saliency map for that clip with suspicion rather than as ground truth."
    },
    {
      "key": "content:saliency:is-this-map-telling-the-truth--saliency-faithfulness:23",
      "sectionId": "saliency",
      "headingId": "is-this-map-telling-the-truth--saliency-faithfulness",
      "kind": "content",
      "title": "Is this map telling the truth? — saliency faithfulness",
      "body": "Image placeholder: saliency waveform overlay Add /assets/docs/saliency-overlay.png — the saliency panel showing the attribution heatmap drawn over the waveform, with the method selector and full_audio toggle visible. Replace this callout with ![Saliency waveform overlay](/assets/docs/saliency-overlay.png) once the real image is uploaded."
    },
    {
      "key": "heading:saliency:pairs-well-with-perturbation:24",
      "sectionId": "saliency",
      "headingId": "pairs-well-with-perturbation",
      "kind": "heading",
      "title": "Pairs well with perturbation",
      "body": ""
    },
    {
      "key": "content:saliency:pairs-well-with-perturbation:25",
      "sectionId": "saliency",
      "headingId": "pairs-well-with-perturbation",
      "kind": "content",
      "title": "Pairs well with perturbation",
      "body": "Saliency tells you where the model is looking. Perturbation tells you what happens if you actually change what's there — noise, pitch, time. Running both against the same clip is the fastest way to sanity-check an attribution: if saliency says a region matters, perturbing that region should move the prediction."
    }
  ],
  "security": [
    {
      "key": "content:security:lead:0",
      "sectionId": "security",
      "kind": "content",
      "title": "",
      "body": "AudioLens is self-hosted software with no accounts and no telemetry. Here's how to report a vulnerability, and what's a deployer's own responsibility versus what AudioLens does for you out of the box."
    },
    {
      "key": "heading:security:supported-versions:1",
      "sectionId": "security",
      "headingId": "supported-versions",
      "kind": "heading",
      "title": "Supported versions",
      "body": ""
    },
    {
      "key": "content:security:supported-versions:2",
      "sectionId": "security",
      "headingId": "supported-versions",
      "kind": "content",
      "title": "Supported versions",
      "body": "1.0.x yes"
    },
    {
      "key": "heading:security:reporting-a-vulnerability:3",
      "sectionId": "security",
      "headingId": "reporting-a-vulnerability",
      "kind": "heading",
      "title": "Reporting a vulnerability",
      "body": ""
    },
    {
      "key": "content:security:reporting-a-vulnerability:4",
      "sectionId": "security",
      "headingId": "reporting-a-vulnerability",
      "kind": "content",
      "title": "Reporting a vulnerability",
      "body": "Report security issues to janithmahanama47@gmail.com."
    },
    {
      "key": "content:security:reporting-a-vulnerability:5",
      "sectionId": "security",
      "headingId": "reporting-a-vulnerability",
      "kind": "content",
      "title": "Reporting a vulnerability",
      "body": "You should get a response within 48 hours."
    },
    {
      "key": "content:security:reporting-a-vulnerability:6",
      "sectionId": "security",
      "headingId": "reporting-a-vulnerability",
      "kind": "content",
      "title": "Reporting a vulnerability",
      "body": "The target for a patch, once a report is confirmed, is 14 days."
    },
    {
      "key": "heading:security:what-audiolens-gives-you-by-default:7",
      "sectionId": "security",
      "headingId": "what-audiolens-gives-you-by-default",
      "kind": "heading",
      "title": "What AudioLens gives you by default",
      "body": ""
    },
    {
      "key": "content:security:what-audiolens-gives-you-by-default:8",
      "sectionId": "security",
      "headingId": "what-audiolens-gives-you-by-default",
      "kind": "content",
      "title": "What AudioLens gives you by default",
      "body": "The session model is anonymous — a single HttpOnly sid cookie per session, no user accounts, no passwords, no stored credentials to compromise. There's nothing resembling an account database to breach."
    },
    {
      "key": "heading:security:best-practices-for-deployers:9",
      "sectionId": "security",
      "headingId": "best-practices-for-deployers",
      "kind": "heading",
      "title": "Best practices for deployers",
      "body": ""
    },
    {
      "key": "content:security:best-practices-for-deployers:10",
      "sectionId": "security",
      "headingId": "best-practices-for-deployers",
      "kind": "content",
      "title": "Best practices for deployers",
      "body": "These are recommendations, not shipped features The items below are things you should configure when you self-host AudioLens for anyone other than yourself on localhost — they are not built into AudioLens automatically. In particular: no rate limiting exists in AudioLens's code today. If you expose an instance publicly, putting a reverse proxy or gateway with rate limiting in front of it is your responsibility, not something the API does for you."
    },
    {
      "key": "content:security:best-practices-for-deployers:11",
      "sectionId": "security",
      "headingId": "best-practices-for-deployers",
      "kind": "content",
      "title": "Best practices for deployers",
      "body": "Serve over HTTPS in any deployment reachable outside your own machine."
    },
    {
      "key": "content:security:best-practices-for-deployers:12",
      "sectionId": "security",
      "headingId": "best-practices-for-deployers",
      "kind": "content",
      "title": "Best practices for deployers",
      "body": "Put API auth or network-level access control in front of it if the instance shouldn't be open to anyone who can reach the URL — AudioLens's own session model has no login step."
    },
    {
      "key": "content:security:best-practices-for-deployers:13",
      "sectionId": "security",
      "headingId": "best-practices-for-deployers",
      "kind": "content",
      "title": "Best practices for deployers",
      "body": "Add rate limiting at the proxy/gateway layer — again, not present in AudioLens itself."
    },
    {
      "key": "content:security:best-practices-for-deployers:14",
      "sectionId": "security",
      "headingId": "best-practices-for-deployers",
      "kind": "content",
      "title": "Best practices for deployers",
      "body": "Get informed consent before processing anyone else's audio through an instance you run — treat uploaded audio as data you're responsible for under whatever privacy obligations apply to you."
    },
    {
      "key": "heading:security:production-configuration:15",
      "sectionId": "security",
      "headingId": "production-configuration",
      "kind": "heading",
      "title": "Production configuration",
      "body": ""
    },
    {
      "key": "content:security:production-configuration:16",
      "sectionId": "security",
      "headingId": "production-configuration",
      "kind": "content",
      "title": "Production configuration",
      "body": "Two environment flags matter most for a production posture:"
    },
    {
      "key": "content:security:production-configuration:17",
      "sectionId": "security",
      "headingId": "production-configuration",
      "kind": "content",
      "title": "Production configuration",
      "body": "COOKIE_SECURE=true once you're behind HTTPS"
    },
    {
      "key": "content:security:production-configuration:18",
      "sectionId": "security",
      "headingId": "production-configuration",
      "kind": "content",
      "title": "Production configuration",
      "body": "ALLOWED_ORIGINS set to your real origin(s) — * is rejected"
    },
    {
      "key": "content:security:production-configuration:19",
      "sectionId": "security",
      "headingId": "production-configuration",
      "kind": "content",
      "title": "Production configuration",
      "body": "Full reference: Environment variables."
    }
  ],
  "selfhost": [
    {
      "key": "content:selfhost:lead:0",
      "sectionId": "selfhost",
      "kind": "content",
      "title": "",
      "body": "AudioLens is distributed as open source and is meant to be self-hosted with Docker Compose. There's no hosted control plane to sign up for — you run the API, the workers, Redis, and the frontend yourself, on your own hardware."
    },
    {
      "key": "content:selfhost:lead:1",
      "sectionId": "selfhost",
      "kind": "content",
      "title": "",
      "body": "Docker Compose Open source MIT"
    },
    {
      "key": "heading:selfhost:prerequisites:2",
      "sectionId": "selfhost",
      "headingId": "prerequisites",
      "kind": "heading",
      "title": "Prerequisites",
      "body": ""
    },
    {
      "key": "content:selfhost:prerequisites:3",
      "sectionId": "selfhost",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Docker Desktop (Windows/Mac) or Docker Engine + Compose plugin 2.24+ (Linux)."
    },
    {
      "key": "content:selfhost:prerequisites:4",
      "sectionId": "selfhost",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Windows: the WSL 2 backend, enabled in Docker Desktop."
    },
    {
      "key": "content:selfhost:prerequisites:5",
      "sectionId": "selfhost",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "NVIDIA GPU: driver 555+ on the host."
    },
    {
      "key": "content:selfhost:prerequisites:6",
      "sectionId": "selfhost",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "AMD GPU: a ROCm-supported GPU, Linux only."
    },
    {
      "key": "content:selfhost:prerequisites:7",
      "sectionId": "selfhost",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Apple Silicon (MPS): Docker Desktop cannot expose Metal to a container. You'll run the worker natively outside Docker for GPU acceleration on Mac — see the macOS tab below and Device selection."
    },
    {
      "key": "heading:selfhost:clone-and-boot:8",
      "sectionId": "selfhost",
      "headingId": "clone-and-boot",
      "kind": "heading",
      "title": "Clone and boot",
      "body": ""
    },
    {
      "key": "content:selfhost:clone-and-boot:9",
      "sectionId": "selfhost",
      "headingId": "clone-and-boot",
      "kind": "content",
      "title": "Clone and boot",
      "body": "git clone https://github.com/ECHO-Lit/ECHO-LIT.git AudioLens cd AudioLens cp Backend/.env.example Backend/.env cp Frontend/.env.example Frontend/.env docker compose up --build"
    },
    {
      "key": "content:selfhost:clone-and-boot:10",
      "sectionId": "selfhost",
      "headingId": "clone-and-boot",
      "kind": "content",
      "title": "Clone and boot",
      "body": "Env files are optional — both services run with sane defaults if you skip the cp steps. See Environment variables for everything you can override."
    },
    {
      "key": "heading:selfhost:boot-variants:11",
      "sectionId": "selfhost",
      "headingId": "boot-variants",
      "kind": "heading",
      "title": "Boot variants",
      "body": ""
    },
    {
      "key": "content:selfhost:boot-variants:12",
      "sectionId": "selfhost",
      "headingId": "boot-variants",
      "kind": "content",
      "title": "Boot variants",
      "body": "git clone https://github.com/ECHO-Lit/ECHO-LIT.git AudioLens cd AudioLens cp Backend/.env.example Backend/.env cp Frontend/.env.example Frontend/.env docker compose up --build"
    },
    {
      "key": "content:selfhost:boot-variants:13",
      "sectionId": "selfhost",
      "headingId": "boot-variants",
      "kind": "content",
      "title": "Boot variants",
      "body": "# NVIDIA — adds a GPU worker, drops the CPU-only model worker docker compose --profile gpu up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-gpu"
    },
    {
      "key": "content:selfhost:boot-variants:14",
      "sectionId": "selfhost",
      "headingId": "boot-variants",
      "kind": "content",
      "title": "Boot variants",
      "body": "# AMD ROCm — Linux only docker compose --profile amd up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-amd"
    },
    {
      "key": "content:selfhost:boot-variants:15",
      "sectionId": "selfhost",
      "headingId": "boot-variants",
      "kind": "content",
      "title": "Boot variants",
      "body": "# Apple Silicon (MPS) — run the worker natively, outside Docker cd Backend python3 -m venv .venv && source .venv/bin/activate pip install -r requirements.txt STORAGE_LOCAL_ROOT=shared-storage ML_DEVICE=mps \\ celery -A app.core.celery_app:celery_app worker --queues=gpu-fast,gpu-large --concurrency=1"
    },
    {
      "key": "content:selfhost:boot-variants:16",
      "sectionId": "selfhost",
      "headingId": "boot-variants",
      "kind": "content",
      "title": "Boot variants",
      "body": "See Architecture for what each compose service (worker-cpu, worker-model-local, worker-gpu, worker-amd, scheduler) actually does."
    },
    {
      "key": "heading:selfhost:service-endpoints-after-boot:17",
      "sectionId": "selfhost",
      "headingId": "service-endpoints-after-boot",
      "kind": "heading",
      "title": "Service endpoints after boot",
      "body": ""
    },
    {
      "key": "content:selfhost:service-endpoints-after-boot:18",
      "sectionId": "selfhost",
      "headingId": "service-endpoints-after-boot",
      "kind": "content",
      "title": "Service endpoints after boot",
      "body": "Frontend http://localhost:8080 React app, served by the dev/nginx target"
    },
    {
      "key": "content:selfhost:service-endpoints-after-boot:19",
      "sectionId": "selfhost",
      "headingId": "service-endpoints-after-boot",
      "kind": "content",
      "title": "Service endpoints after boot",
      "body": "API health http://localhost:8000/health FastAPI control plane"
    },
    {
      "key": "content:selfhost:service-endpoints-after-boot:20",
      "sectionId": "selfhost",
      "headingId": "service-endpoints-after-boot",
      "kind": "content",
      "title": "Service endpoints after boot",
      "body": "Redis localhost:6379 4 logical DBs — sessions, jobs, Celery broker, Celery results"
    },
    {
      "key": "heading:selfhost:pre-warm-model-weights:21",
      "sectionId": "selfhost",
      "headingId": "pre-warm-model-weights",
      "kind": "heading",
      "title": "Pre-warm model weights",
      "body": ""
    },
    {
      "key": "content:selfhost:pre-warm-model-weights:22",
      "sectionId": "selfhost",
      "headingId": "pre-warm-model-weights",
      "kind": "content",
      "title": "Pre-warm model weights",
      "body": "By default, model weights download lazily on the first job that needs them — which can take a while for larger checkpoints. Pre-warm the Whisper Base weights before your first real analysis:"
    },
    {
      "key": "content:selfhost:pre-warm-model-weights:23",
      "sectionId": "selfhost",
      "headingId": "pre-warm-model-weights",
      "kind": "content",
      "title": "Pre-warm model weights",
      "body": "docker compose run --rm worker-model-local python3 -c \\ \"from transformers import pipeline; pipeline('automatic-speech-recognition', model='openai/whisper-base')\""
    },
    {
      "key": "heading:selfhost:scale-workers:24",
      "sectionId": "selfhost",
      "headingId": "scale-workers",
      "kind": "heading",
      "title": "Scale workers",
      "body": ""
    },
    {
      "key": "content:selfhost:scale-workers:25",
      "sectionId": "selfhost",
      "headingId": "scale-workers",
      "kind": "content",
      "title": "Scale workers",
      "body": "docker compose up -d --scale worker-cpu=2 --scale worker-model-local=2"
    },
    {
      "key": "heading:selfhost:helper-scripts:26",
      "sectionId": "selfhost",
      "headingId": "helper-scripts",
      "kind": "heading",
      "title": "Helper scripts",
      "body": ""
    },
    {
      "key": "content:selfhost:helper-scripts:27",
      "sectionId": "selfhost",
      "headingId": "helper-scripts",
      "kind": "content",
      "title": "Helper scripts",
      "body": "The repo ships a few scripts under scripts/ to save you the raw compose invocations:"
    },
    {
      "key": "content:selfhost:helper-scripts:28",
      "sectionId": "selfhost",
      "headingId": "helper-scripts",
      "kind": "content",
      "title": "Helper scripts",
      "body": "start.sh — docker compose up -d --build, then waits for the API and frontend to become healthy."
    },
    {
      "key": "content:selfhost:helper-scripts:29",
      "sectionId": "selfhost",
      "headingId": "helper-scripts",
      "kind": "content",
      "title": "Helper scripts",
      "body": "stop.sh — stops the stack."
    },
    {
      "key": "content:selfhost:helper-scripts:30",
      "sectionId": "selfhost",
      "headingId": "helper-scripts",
      "kind": "content",
      "title": "Helper scripts",
      "body": "queue-status.sh [-w] — prints queue depth and job status; -w watches continuously."
    },
    {
      "key": "content:selfhost:helper-scripts:31",
      "sectionId": "selfhost",
      "headingId": "helper-scripts",
      "kind": "content",
      "title": "Helper scripts",
      "body": "Full reference, plus the dataset-import scripts, is on the CLI & scripts page."
    },
    {
      "key": "heading:selfhost:production-notes:32",
      "sectionId": "selfhost",
      "headingId": "production-notes",
      "kind": "heading",
      "title": "Production notes",
      "body": ""
    },
    {
      "key": "content:selfhost:production-notes:33",
      "sectionId": "selfhost",
      "headingId": "production-notes",
      "kind": "content",
      "title": "Production notes",
      "body": "Defaults are for local development The defaults you get out of the box (ENVIRONMENT=development, COOKIE_SECURE=false, HTTP-only ALLOWED_ORIGINS) are not safe to expose on the public internet as-is."
    },
    {
      "key": "content:selfhost:production-notes:34",
      "sectionId": "selfhost",
      "headingId": "production-notes",
      "kind": "content",
      "title": "Production notes",
      "body": "Set ENVIRONMENT=production — this enforces secure cookies and HTTPS origins."
    },
    {
      "key": "content:selfhost:production-notes:35",
      "sectionId": "selfhost",
      "headingId": "production-notes",
      "kind": "content",
      "title": "Production notes",
      "body": "Set COOKIE_SECURE=true once you're behind HTTPS, and set ALLOWED_ORIGINS to your real origin(s) — * is rejected."
    },
    {
      "key": "content:selfhost:production-notes:36",
      "sectionId": "selfhost",
      "headingId": "production-notes",
      "kind": "content",
      "title": "Production notes",
      "body": "For a durable, horizontally-scalable storage backend instead of the local filesystem, set STORAGE_BACKEND=s3 plus S3_BUCKET, S3_ENDPOINT_URL, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY."
    },
    {
      "key": "content:selfhost:production-notes:37",
      "sectionId": "selfhost",
      "headingId": "production-notes",
      "kind": "content",
      "title": "Production notes",
      "body": "Full variable-by-variable reference: Environment variables."
    },
    {
      "key": "heading:selfhost:windows-tip:38",
      "sectionId": "selfhost",
      "headingId": "windows-tip",
      "kind": "heading",
      "title": "Windows tip",
      "body": ""
    },
    {
      "key": "content:selfhost:windows-tip:39",
      "sectionId": "selfhost",
      "headingId": "windows-tip",
      "kind": "content",
      "title": "Windows tip",
      "body": "Keep the repo checkout at a short path (e.g. C:\\dev\\AudioLens) rather than deep inside a long user-profile path. Dataset file paths are case-sensitive, and long Windows paths combined with case mismatches are a common source of \"file not found\" errors on first boot."
    },
    {
      "key": "heading:selfhost:teardown:40",
      "sectionId": "selfhost",
      "headingId": "teardown",
      "kind": "heading",
      "title": "Teardown",
      "body": ""
    },
    {
      "key": "content:selfhost:teardown:41",
      "sectionId": "selfhost",
      "headingId": "teardown",
      "kind": "content",
      "title": "Teardown",
      "body": "docker compose down # stop and remove containers docker compose down -v # also wipe named volumes (Redis data, local storage)"
    }
  ],
  "troubleshoot": [
    {
      "key": "content:troubleshoot:lead:0",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "Most self-hosting problems fall into a handful of buckets: slow first-run downloads, Windows path quirks, GPU passthrough, or a queue that's stuck. Start here before opening an issue."
    },
    {
      "key": "content:troubleshoot:lead:1",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "First run is slow 10–30+ min Model weights download lazily on first use"
    },
    {
      "key": "content:troubleshoot:lead:2",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "Windows path errors Short path tip Long paths + case-sensitive dataset files"
    },
    {
      "key": "content:troubleshoot:lead:3",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "No GPU on macOS Docker Desktop limitation MPS needs a native worker"
    },
    {
      "key": "content:troubleshoot:lead:4",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "GPU profile ignored check nvidia-smi Driver not visible inside the container"
    },
    {
      "key": "content:troubleshoot:lead:5",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "503 / Redis full Broker or cache at capacity"
    },
    {
      "key": "content:troubleshoot:lead:6",
      "sectionId": "troubleshoot",
      "kind": "content",
      "title": "",
      "body": "Jobs stuck queue-status.sh -w Find and clear stalled jobs"
    },
    {
      "key": "heading:troubleshoot:first-run-model-downloads:7",
      "sectionId": "troubleshoot",
      "headingId": "first-run-model-downloads",
      "kind": "heading",
      "title": "First-run model downloads",
      "body": ""
    },
    {
      "key": "content:troubleshoot:first-run-model-downloads:8",
      "sectionId": "troubleshoot",
      "headingId": "first-run-model-downloads",
      "kind": "content",
      "title": "First-run model downloads",
      "body": "Whisper Large and fairness jobs in particular can take 10–30+ minutes to become ready the first time they run, because the underlying model weights are pulled lazily on first use rather than baked into the image. This is expected, not a hang."
    },
    {
      "key": "content:troubleshoot:first-run-model-downloads:9",
      "sectionId": "troubleshoot",
      "headingId": "first-run-model-downloads",
      "kind": "content",
      "title": "First-run model downloads",
      "body": "Avoid the wait during a demo or first analysis by pre-warming weights ahead of time — see Self-hosting → Pre-warm model weights."
    },
    {
      "key": "heading:troubleshoot:windows-path-and-case-sensitivity:10",
      "sectionId": "troubleshoot",
      "headingId": "windows-path-and-case-sensitivity",
      "kind": "heading",
      "title": "Windows path and case-sensitivity",
      "body": ""
    },
    {
      "key": "content:troubleshoot:windows-path-and-case-sensitivity:11",
      "sectionId": "troubleshoot",
      "headingId": "windows-path-and-case-sensitivity",
      "kind": "content",
      "title": "Windows path and case-sensitivity",
      "body": "Dataset file paths are case-sensitive, even on Windows. Combined with Windows' path-length limits, a deep checkout path can produce confusing \"file not found\" errors that have nothing to do with the dataset itself."
    },
    {
      "key": "content:troubleshoot:windows-path-and-case-sensitivity:12",
      "sectionId": "troubleshoot",
      "headingId": "windows-path-and-case-sensitivity",
      "kind": "content",
      "title": "Windows path and case-sensitivity",
      "body": "Fix: use a short checkout path Clone the repo somewhere short, e.g. C:\\dev\\AudioLens, instead of nested deep inside a long user-profile directory."
    },
    {
      "key": "heading:troubleshoot:apple-silicon-mps-under-docker-desktop:13",
      "sectionId": "troubleshoot",
      "headingId": "apple-silicon-mps-under-docker-desktop",
      "kind": "heading",
      "title": "Apple Silicon (MPS) under Docker Desktop",
      "body": ""
    },
    {
      "key": "content:troubleshoot:apple-silicon-mps-under-docker-desktop:14",
      "sectionId": "troubleshoot",
      "headingId": "apple-silicon-mps-under-docker-desktop",
      "kind": "content",
      "title": "Apple Silicon (MPS) under Docker Desktop",
      "body": "Docker Desktop cannot expose Apple's Metal (MPS) backend to a container — this is a Docker Desktop limitation, not an AudioLens bug. If you're on a Mac and want GPU acceleration, run the worker natively outside Docker instead:"
    },
    {
      "key": "content:troubleshoot:apple-silicon-mps-under-docker-desktop:15",
      "sectionId": "troubleshoot",
      "headingId": "apple-silicon-mps-under-docker-desktop",
      "kind": "content",
      "title": "Apple Silicon (MPS) under Docker Desktop",
      "body": "cd Backend python3 -m venv .venv && source .venv/bin/activate pip install -r requirements.txt STORAGE_LOCAL_ROOT=shared-storage ML_DEVICE=mps \\ celery -A app.core.celery_app:celery_app worker --queues=gpu-fast,gpu-large --concurrency=1"
    },
    {
      "key": "content:troubleshoot:apple-silicon-mps-under-docker-desktop:16",
      "sectionId": "troubleshoot",
      "headingId": "apple-silicon-mps-under-docker-desktop",
      "kind": "content",
      "title": "Apple Silicon (MPS) under Docker Desktop",
      "body": "See Device selection for how ML_DEVICE=auto picks a backend."
    },
    {
      "key": "heading:troubleshoot:nvidia-gpu-not-detected:17",
      "sectionId": "troubleshoot",
      "headingId": "nvidia-gpu-not-detected",
      "kind": "heading",
      "title": "NVIDIA GPU not detected",
      "body": ""
    },
    {
      "key": "content:troubleshoot:nvidia-gpu-not-detected:18",
      "sectionId": "troubleshoot",
      "headingId": "nvidia-gpu-not-detected",
      "kind": "content",
      "title": "NVIDIA GPU not detected",
      "body": "If the gpu compose profile comes up but jobs still run on CPU, confirm the driver is actually visible inside a container before suspecting compose or AudioLens itself:"
    },
    {
      "key": "content:troubleshoot:nvidia-gpu-not-detected:19",
      "sectionId": "troubleshoot",
      "headingId": "nvidia-gpu-not-detected",
      "kind": "content",
      "title": "NVIDIA GPU not detected",
      "body": "Check the host driver version NVIDIA needs driver 555+. Anything older won't work with the CUDA base image AudioLens ships."
    },
    {
      "key": "content:troubleshoot:nvidia-gpu-not-detected:20",
      "sectionId": "troubleshoot",
      "headingId": "nvidia-gpu-not-detected",
      "kind": "content",
      "title": "NVIDIA GPU not detected",
      "body": "Confirm GPU passthrough with a throwaway container docker run --rm --gpus all nvidia/cuda:12.6.0-base-ubuntu22.04 nvidia-smiIf this doesn't show your GPU, the problem is in your Docker/NVIDIA Container Toolkit setup, not in the AudioLens compose file."
    },
    {
      "key": "content:troubleshoot:nvidia-gpu-not-detected:21",
      "sectionId": "troubleshoot",
      "headingId": "nvidia-gpu-not-detected",
      "kind": "content",
      "title": "NVIDIA GPU not detected",
      "body": "Re-check the profile flags Make sure you booted with --profile gpu and scaled worker-model-local to 0, per Self-hosting — a leftover CPU-profile worker will happily pick up jobs and mask the GPU issue."
    },
    {
      "key": "heading:troubleshoot:redis-full-or-503-responses:22",
      "sectionId": "troubleshoot",
      "headingId": "redis-full-or-503-responses",
      "kind": "heading",
      "title": "Redis full or 503 responses",
      "body": ""
    },
    {
      "key": "content:troubleshoot:redis-full-or-503-responses:23",
      "sectionId": "troubleshoot",
      "headingId": "redis-full-or-503-responses",
      "kind": "content",
      "title": "Redis full or 503 responses",
      "body": "Redis is configured with noeviction and a memory cap (REDIS_MAXMEMORY, default 1gb). Once it's full, writes start failing and the API can return 503s. Check /health (below) first — it reports Redis status directly. If Redis is the culprit, either raise REDIS_MAXMEMORY or clear stale data with docker compose down -v and a fresh start (this wipes job history and uploaded audio, not your source checkout)."
    },
    {
      "key": "heading:troubleshoot:checking-system-health:24",
      "sectionId": "troubleshoot",
      "headingId": "checking-system-health",
      "kind": "heading",
      "title": "Checking system health",
      "body": ""
    },
    {
      "key": "content:troubleshoot:checking-system-health:25",
      "sectionId": "troubleshoot",
      "headingId": "checking-system-health",
      "kind": "content",
      "title": "Checking system health",
      "body": "GET /health"
    },
    {
      "key": "content:troubleshoot:checking-system-health:26",
      "sectionId": "troubleshoot",
      "headingId": "checking-system-health",
      "kind": "content",
      "title": "Checking system health",
      "body": "reports Redis (all three logical DBs used by the API — sessions/cache, job metadata, Celery), storage backend reachability, worker count, and queue depth in one response. This is the first thing to check when something feels wrong — before digging into container logs."
    },
    {
      "key": "heading:troubleshoot:finding-stuck-jobs:27",
      "sectionId": "troubleshoot",
      "headingId": "finding-stuck-jobs",
      "kind": "heading",
      "title": "Finding stuck jobs",
      "body": ""
    },
    {
      "key": "content:troubleshoot:finding-stuck-jobs:28",
      "sectionId": "troubleshoot",
      "headingId": "finding-stuck-jobs",
      "kind": "content",
      "title": "Finding stuck jobs",
      "body": "scripts/queue-status.sh -w"
    },
    {
      "key": "content:troubleshoot:finding-stuck-jobs:29",
      "sectionId": "troubleshoot",
      "headingId": "finding-stuck-jobs",
      "kind": "content",
      "title": "Finding stuck jobs",
      "body": "watches queue depth and per-job status continuously, so you can see whether a job is actually progressing or just sitting in a queue with no worker consuming it. If a queue is backed up with no matching worker running, re-check which containers you started against the queue routing table — gpu-fast/gpu-large jobs need worker-model-local or worker-gpu/worker-amd, and cpu jobs need worker-cpu."
    }
  ],
  "wav2vec": [
    {
      "key": "heading:wav2vec:available-checkpoint:0",
      "sectionId": "wav2vec",
      "headingId": "available-checkpoint",
      "kind": "heading",
      "title": "Available checkpoint",
      "body": ""
    },
    {
      "key": "content:wav2vec:available-checkpoint:1",
      "sectionId": "wav2vec",
      "headingId": "available-checkpoint",
      "kind": "content",
      "title": "Available checkpoint",
      "body": "AudioLens's Wav2Vec2 model is used for emotion classification, not transcription."
    },
    {
      "key": "content:wav2vec:available-checkpoint:2",
      "sectionId": "wav2vec",
      "headingId": "available-checkpoint",
      "kind": "content",
      "title": "Available checkpoint",
      "body": "wav2vec2 r-f/wav2vec-english-speech-emotion-recognition emotion classification shown in the UI dropdown; labels are read from the model's config at runtime"
    },
    {
      "key": "content:wav2vec:available-checkpoint:3",
      "sectionId": "wav2vec",
      "headingId": "available-checkpoint",
      "kind": "content",
      "title": "Available checkpoint",
      "body": "Apache 2.0 license r-f/wav2vec-english-speech-emotion-recognition is Apache 2.0 licensed. It is fine-tuned from jonatasgrosman/wav2vec2-large-xlsr-53-english. See /docs/licenses for the full terms and source links."
    },
    {
      "key": "content:wav2vec:available-checkpoint:4",
      "sectionId": "wav2vec",
      "headingId": "available-checkpoint",
      "kind": "content",
      "title": "Available checkpoint",
      "body": "Like Whisper, this model is English-only — there is no multi-language support for emotion classification."
    },
    {
      "key": "heading:wav2vec:legacy-fallback-models:5",
      "sectionId": "wav2vec",
      "headingId": "legacy-fallback-models",
      "kind": "heading",
      "title": "Legacy fallback models",
      "body": ""
    },
    {
      "key": "content:wav2vec:legacy-fallback-models:6",
      "sectionId": "wav2vec",
      "headingId": "legacy-fallback-models",
      "kind": "content",
      "title": "Legacy fallback models",
      "body": "Two older Wav2Vec2 checkpoints remain in the codebase as a legacy fallback path, used only for attention visualization on an older code path:"
    },
    {
      "key": "content:wav2vec:legacy-fallback-models:7",
      "sectionId": "wav2vec",
      "headingId": "legacy-fallback-models",
      "kind": "content",
      "title": "Legacy fallback models",
      "body": "jonatasgrosman/wav2vec2-large-xlsr-53-english"
    },
    {
      "key": "content:wav2vec:legacy-fallback-models:8",
      "sectionId": "wav2vec",
      "headingId": "legacy-fallback-models",
      "kind": "content",
      "title": "Legacy fallback models",
      "body": "facebook/wav2vec2-base-960h"
    },
    {
      "key": "content:wav2vec:legacy-fallback-models:9",
      "sectionId": "wav2vec",
      "headingId": "legacy-fallback-models",
      "kind": "content",
      "title": "Legacy fallback models",
      "body": "Both are Apache 2.0 licensed. They aren't part of the main model catalog and aren't offered in the UI dropdown."
    },
    {
      "key": "heading:wav2vec:where-to-go-next:10",
      "sectionId": "wav2vec",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:wav2vec:where-to-go-next:11",
      "sectionId": "wav2vec",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Attention Analysis panel Per-layer, per-head attention weights"
    },
    {
      "key": "content:wav2vec:where-to-go-next:12",
      "sectionId": "wav2vec",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Fairness slices Analysis panel Compare emotion-classification performance across groups"
    },
    {
      "key": "content:wav2vec:where-to-go-next:13",
      "sectionId": "wav2vec",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Licenses Reference Full license terms for AudioLens's models"
    }
  ],
  "whisper": [
    {
      "key": "heading:whisper:available-checkpoints:0",
      "sectionId": "whisper",
      "headingId": "available-checkpoints",
      "kind": "heading",
      "title": "Available checkpoints",
      "body": ""
    },
    {
      "key": "content:whisper:available-checkpoints:1",
      "sectionId": "whisper",
      "headingId": "available-checkpoints",
      "kind": "content",
      "title": "Available checkpoints",
      "body": "AudioLens ships two Whisper checkpoints for speech-to-text, both under the Apache 2.0 license."
    },
    {
      "key": "content:whisper:available-checkpoints:2",
      "sectionId": "whisper",
      "headingId": "available-checkpoints",
      "kind": "content",
      "title": "Available checkpoints",
      "body": "whisper-base openai/whisper-base shown in the UI model dropdown"
    },
    {
      "key": "content:whisper:available-checkpoints:3",
      "sectionId": "whisper",
      "headingId": "available-checkpoints",
      "kind": "content",
      "title": "Available checkpoints",
      "body": "whisper-large openai/whisper-large-v3 API-only — intentionally hidden from the UI dropdown"
    },
    {
      "key": "content:whisper:available-checkpoints:4",
      "sectionId": "whisper",
      "headingId": "available-checkpoints",
      "kind": "content",
      "title": "Available checkpoints",
      "body": "whisper-large is fully usable through the REST API (POST /jobs, POST /models, etc.) — it's just not offered as a choice in the frontend's model picker."
    },
    {
      "key": "content:whisper:available-checkpoints:5",
      "sectionId": "whisper",
      "headingId": "available-checkpoints",
      "kind": "content",
      "title": "Available checkpoints",
      "body": "Apache 2.0 license Both Whisper checkpoints are permissively licensed and commercial use is allowed. See /docs/licenses for the full terms and source links."
    },
    {
      "key": "heading:whisper:english-only:6",
      "sectionId": "whisper",
      "headingId": "english-only",
      "kind": "heading",
      "title": "English-only",
      "body": ""
    },
    {
      "key": "content:whisper:english-only:7",
      "sectionId": "whisper",
      "headingId": "english-only",
      "kind": "content",
      "title": "English-only",
      "body": "Whisper decoding in AudioLens is pinned to language=\"en\" and task=\"transcribe\". AudioLens does not support multi-language transcription or translation tasks — every Whisper job runs in English-transcribe mode regardless of the input clip's actual language."
    },
    {
      "key": "heading:whisper:saliency-on-whisper:8",
      "sectionId": "whisper",
      "headingId": "saliency-on-whisper",
      "kind": "heading",
      "title": "Saliency on Whisper",
      "body": ""
    },
    {
      "key": "content:whisper:saliency-on-whisper:9",
      "sectionId": "whisper",
      "headingId": "saliency-on-whisper",
      "kind": "content",
      "title": "Saliency on Whisper",
      "body": "Whisper models can be analyzed with the Saliency panel. One thing worth knowing before you rely on the result: the method labeled gradcam in the API and UI does not actually run Grad-CAM — it runs Integrated Gradients under the hood. See /docs/saliency for the full detail on saliency methods and how to check whether a given map is trustworthy."
    },
    {
      "key": "heading:whisper:where-to-go-next:10",
      "sectionId": "whisper",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:whisper:where-to-go-next:11",
      "sectionId": "whisper",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Saliency mapping Analysis panel Attribution maps, including the gradcam naming caveat"
    },
    {
      "key": "content:whisper:where-to-go-next:12",
      "sectionId": "whisper",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Device selection Models Run Whisper on CPU, CUDA, ROCm, or Apple MPS"
    },
    {
      "key": "content:whisper:where-to-go-next:13",
      "sectionId": "whisper",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Licenses Reference Full license terms for AudioLens's models"
    }
  ]
};
