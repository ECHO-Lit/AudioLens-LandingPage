// GENERATED FILE -- do not edit.
// Run `node scripts/build-docs-index.mjs` (or npm run dev / npm run build) to
// regenerate from content/docs/*.mdx.

import type { SearchRecord, TocItem } from "./search-types";

/** Right-hand "On this page" anchors. Sections with no h2 are absent. */
export const TOC_BY_SECTION: Record<string, TocItem[]> = {
  "quickstart": [
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
      "id": "first-analysis",
      "label": "First analysis"
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
      "body": "Being written This page has no content yet."
    }
  ],
  "attention": [
    {
      "key": "content:attention:lead:0",
      "sectionId": "attention",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "cli": [
    {
      "key": "content:cli:lead:0",
      "sectionId": "cli",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "concepts": [
    {
      "key": "content:concepts:lead:0",
      "sectionId": "concepts",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "custom": [
    {
      "key": "content:custom:lead:0",
      "sectionId": "custom",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "datasets": [
    {
      "key": "content:datasets:lead:0",
      "sectionId": "datasets",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "devices": [
    {
      "key": "content:devices:lead:0",
      "sectionId": "devices",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "embeddings": [
    {
      "key": "content:embeddings:lead:0",
      "sectionId": "embeddings",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "env": [
    {
      "key": "content:env:lead:0",
      "sectionId": "env",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "fairness": [
    {
      "key": "content:fairness:lead:0",
      "sectionId": "fairness",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "intro": [
    {
      "key": "content:intro:lead:0",
      "sectionId": "intro",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "perturb": [
    {
      "key": "content:perturb:lead:0",
      "sectionId": "perturb",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "quickstart": [
    {
      "key": "content:quickstart:lead:0",
      "sectionId": "quickstart",
      "kind": "content",
      "title": "",
      "body": "Boot the full AudioLens stack locally with Docker, load a sample dataset, and produce your first saliency map against a Whisper checkpoint. About ten minutes, most of it model download."
    },
    {
      "key": "content:quickstart:lead:1",
      "sectionId": "quickstart",
      "kind": "content",
      "title": "",
      "body": "v1.0 MIT FastAPI · React 18"
    },
    {
      "key": "content:quickstart:lead:2",
      "sectionId": "quickstart",
      "kind": "content",
      "title": "",
      "body": "Model weights download on first run Only the worker container pulls weights, into hf-cache. The API image never imports the ML runtime."
    },
    {
      "key": "heading:quickstart:prerequisites:3",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "heading",
      "title": "Prerequisites",
      "body": ""
    },
    {
      "key": "content:quickstart:prerequisites:4",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Docker Docker Desktop on Windows or Mac, Docker Engine plus the Compose plugin on Linux. REQUIRED"
    },
    {
      "key": "content:quickstart:prerequisites:5",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "WSL 2 backend Enable it in Docker Desktop settings for faster bind-mount I/O and GPU passthrough. WINDOWS"
    },
    {
      "key": "content:quickstart:prerequisites:6",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Driver 555+ Verify with a base CUDA 12.6 image running nvidia-smi before booting the GPU profile. NVIDIA"
    },
    {
      "key": "content:quickstart:prerequisites:7",
      "sectionId": "quickstart",
      "headingId": "prerequisites",
      "kind": "content",
      "title": "Prerequisites",
      "body": "Native worker Docker Desktop does not expose MPS, so run the worker outside the container to use the GPU. APPLE"
    },
    {
      "key": "heading:quickstart:install-and-boot:8",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "heading",
      "title": "Install and boot",
      "body": ""
    },
    {
      "key": "content:quickstart:install-and-boot:9",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "Pick the target that matches your accelerator. Every path ends with the same three services on the same ports."
    },
    {
      "key": "content:quickstart:install-and-boot:10",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# 1. Clone git clone https://github.com/ECHO-Lit/ECHO-LIT.git cd ECHO-LIT # 2. Copy env files (defaults work out of the box) cp Backend/.env.example Backend/.env cp Frontend/.env.example Frontend/.env # 3. Boot the full stack docker compose up --build"
    },
    {
      "key": "content:quickstart:install-and-boot:11",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# Linux or WSL 2 with the NVIDIA Container Toolkit. # Scale the all-queue local worker to 0 so only the GPU # worker consumes GPU queues. docker compose --profile gpu up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-gpu"
    },
    {
      "key": "content:quickstart:install-and-boot:12",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# Linux with a supported ROCm host driver. docker compose --profile amd up --build \\ --scale worker-model-local=0 \\ redis api scheduler frontend worker-cpu worker-amd"
    },
    {
      "key": "content:quickstart:install-and-boot:13",
      "sectionId": "quickstart",
      "headingId": "install-and-boot",
      "kind": "content",
      "title": "Install and boot",
      "body": "# Docker Desktop cannot pass Metal into a Linux container. # Keep the API in Compose, run the worker natively. cd Backend python3 -m venv .venv source .venv/bin/activate pip install -r requirements.txt STORAGE_LOCAL_ROOT=shared-storage ML_DEVICE=mps \\ celery -A app.core.celery_app:celery_app worker \\ --queues=gpu-fast,gpu-large --concurrency=1"
    },
    {
      "key": "heading:quickstart:service-endpoints:14",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "heading",
      "title": "Service endpoints",
      "body": ""
    },
    {
      "key": "content:quickstart:service-endpoints:15",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "Frontend http://localhost:8080 ready"
    },
    {
      "key": "content:quickstart:service-endpoints:16",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "API http://localhost:8000/health ready"
    },
    {
      "key": "content:quickstart:service-endpoints:17",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "Redis broker localhost:6379 ready"
    },
    {
      "key": "content:quickstart:service-endpoints:18",
      "sectionId": "quickstart",
      "headingId": "service-endpoints",
      "kind": "content",
      "title": "Service endpoints",
      "body": "Worker heartbeat reported by /health polling"
    },
    {
      "key": "heading:quickstart:first-analysis:19",
      "sectionId": "quickstart",
      "headingId": "first-analysis",
      "kind": "heading",
      "title": "First analysis",
      "body": ""
    },
    {
      "key": "content:quickstart:first-analysis:20",
      "sectionId": "quickstart",
      "headingId": "first-analysis",
      "kind": "content",
      "title": "First analysis",
      "body": "Upload audio or pick a sample dataset Drop your own files into the uploader, or start from the bundled Common Voice and RAVDESS subsets. Dataset paths inside the container are case-sensitive, for example data/common_voice_valid_dev."
    },
    {
      "key": "content:quickstart:first-analysis:21",
      "sectionId": "quickstart",
      "headingId": "first-analysis",
      "kind": "content",
      "title": "First analysis",
      "body": "Select a model Choose a Whisper or Wav2Vec2 checkpoint. The first selection triggers a weight download into the worker cache; pre-warm it if you want an instant first run."
    },
    {
      "key": "content:quickstart:first-analysis:22",
      "sectionId": "quickstart",
      "headingId": "first-analysis",
      "kind": "content",
      "title": "First analysis",
      "body": "Read the prediction The transcript panel aligns prediction against ground truth word by word and reports WER, CER and Levenshtein distance per datapoint."
    },
    {
      "key": "content:quickstart:first-analysis:23",
      "sectionId": "quickstart",
      "headingId": "first-analysis",
      "kind": "content",
      "title": "First analysis",
      "body": "Generate a saliency map Run Grad-CAM or integrated gradients over the waveform. Segments are ranked by their contribution to each predicted token and highlighted on the shared timeline."
    },
    {
      "key": "content:quickstart:first-analysis:24",
      "sectionId": "quickstart",
      "headingId": "first-analysis",
      "kind": "content",
      "title": "First analysis",
      "body": "Perturb and compare Add noise, shift pitch, clip or mask a region, then watch the metrics move. Robustness measured, not assumed."
    },
    {
      "key": "heading:quickstart:where-to-go-next:25",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "heading",
      "title": "Where to go next",
      "body": ""
    },
    {
      "key": "content:quickstart:where-to-go-next:26",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Core concepts Datapoints, the shared timeline, and how panels stay in sync. 5 min read"
    },
    {
      "key": "content:quickstart:where-to-go-next:27",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Custom checkpoints Point the loader at a local or Hugging Face model of your own. Guide"
    },
    {
      "key": "content:quickstart:where-to-go-next:28",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "Architecture API control plane, Celery workers, Redis broker, shared storage. Reference"
    },
    {
      "key": "content:quickstart:where-to-go-next:29",
      "sectionId": "quickstart",
      "headingId": "where-to-go-next",
      "kind": "content",
      "title": "Where to go next",
      "body": "REST API Every panel is backed by an endpoint you can call directly. Reference"
    }
  ],
  "rest": [
    {
      "key": "content:rest:lead:0",
      "sectionId": "rest",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "saliency": [
    {
      "key": "content:saliency:lead:0",
      "sectionId": "saliency",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "wav2vec": [
    {
      "key": "content:wav2vec:lead:0",
      "sectionId": "wav2vec",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ],
  "whisper": [
    {
      "key": "content:whisper:lead:0",
      "sectionId": "whisper",
      "kind": "content",
      "title": "",
      "body": "Being written This page has no content yet."
    }
  ]
};
