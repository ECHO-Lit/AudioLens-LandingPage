"use client";

import { useState } from "react";
import { ACCENT } from "../constants";

const CODE_BLOCKS = [
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

const PREREQS = [
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

const ENDPOINTS = [
  { name: "Frontend", addr: "http://localhost:8080", state: "ready" },
  { name: "API", addr: "http://localhost:8000/health", state: "ready" },
  { name: "Redis broker", addr: "localhost:6379", state: "ready" },
  { name: "Worker heartbeat", addr: "reported by /health", state: "polling" },
];

const STEPS = [
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

const NEXT_LINKS = [
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

export const QUICKSTART_TOC = [
  { id: "prereq", label: "Prerequisites" },
  { id: "install", label: "Install and boot" },
  { id: "endpoints", label: "Service endpoints" },
  { id: "first", label: "First analysis" },
  { id: "next", label: "Where to go next" },
];

export function QuickstartSection() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  const copyCode = () => {
    const text = CODE_BLOCKS[tab].code;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <p className="mt-3.5 max-w-[64ch] text-[16px] leading-[1.62] text-[#4b5563] text-pretty">
        Boot the full AudioLens stack locally with Docker, load a sample
        dataset, and produce your first saliency map against a Whisper
        checkpoint. About ten minutes, most of it model download.
      </p>

      <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10.5px] text-[#5b6472]">
        <span className="rounded border border-[rgba(20,23,28,0.11)] bg-white px-2 py-[3px]">
          v1.0
        </span>
        <span className="rounded border border-[rgba(20,23,28,0.11)] bg-white px-2 py-[3px]">
          MIT
        </span>
        <span className="rounded border border-[rgba(20,23,28,0.11)] bg-white px-2 py-[3px]">
          FastAPI · React 18
        </span>
      </div>

      <div className="mt-8 flex gap-3 rounded-lg border border-[rgba(30,79,216,0.2)] bg-[#f4f7ff] px-4 py-3.5">
        <div className="w-[3px] flex-none rounded-sm" style={{ background: ACCENT }} />
        <div>
          <div className="text-[13px] font-semibold text-[#12327f]">
            Model weights download on first run
          </div>
          <p className="mt-[5px] text-[13px] leading-[1.6] text-[#3f4b63]">
            Only the worker container pulls weights, into{" "}
            <code className="rounded-[3px] bg-[rgba(30,79,216,0.09)] px-1 font-mono text-[12px]">
              hf-cache
            </code>
            . The API image never imports the ML runtime.
          </p>
        </div>
      </div>

      <h2
        id="prereq"
        className="mt-11 border-b border-[rgba(20,23,28,0.1)] pb-2.5 text-[21px] font-semibold tracking-[-0.015em]"
      >
        Prerequisites
      </h2>
      <div className="mt-[18px] grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-3">
        {PREREQS.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-[rgba(20,23,28,0.11)] bg-white px-4 pt-[15px] pb-4 hover:border-[rgba(30,79,216,0.3)]"
          >
            <div
              className="mb-[9px] font-mono text-[10px]"
              style={{ color: ACCENT }}
            >
              {p.kicker}
            </div>
            <div className="text-[13.5px] font-semibold">{p.title}</div>
            <p className="mt-[5px] text-[12.5px] leading-[1.55] text-[#6b7280] text-pretty">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <h2
        id="install"
        className="mt-11 border-b border-[rgba(20,23,28,0.1)] pb-2.5 text-[21px] font-semibold tracking-[-0.015em]"
      >
        Install and boot
      </h2>
      <p className="mt-4 max-w-[64ch] text-[14.5px] leading-[1.65] text-[#4b5563]">
        Pick the target that matches your accelerator. Every path ends
        with the same three services on the same ports.
      </p>

      <div
        className="mt-[18px] overflow-hidden rounded-[9px] border border-[rgba(20,23,28,0.13)] bg-white"
        style={{ boxShadow: "0 1px 2px rgba(20,23,28,0.04)" }}
      >
        <div className="flex items-center gap-0.5 border-b border-[rgba(20,23,28,0.1)] bg-[#f7f7f6] px-2 py-1.5">
          {CODE_BLOCKS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => {
                setTab(i);
                setCopied(false);
              }}
              className="cursor-pointer rounded-[5px] px-[11px] py-1.5 font-mono text-[11px]"
              style={{
                color: tab === i ? "#14171c" : "#8b929c",
                background: tab === i ? "#fff" : "transparent",
              }}
            >
              {t.label}
            </button>
          ))}
          <button
            onClick={copyCode}
            className="ml-auto cursor-pointer rounded-[5px] border border-[rgba(20,23,28,0.12)] bg-white px-[9px] py-[5px] font-mono text-[10.5px] text-[#4b5563] hover:border-[rgba(20,23,28,0.24)]"
          >
            {copied ? "copied" : "copy"}
          </button>
        </div>
        <pre className="m-0 overflow-x-auto px-[18px] pt-[18px] pb-5 font-mono text-[12.5px] leading-[1.75] whitespace-pre text-[#26303f]">
          {CODE_BLOCKS[tab].code}
        </pre>
      </div>

      <h2
        id="endpoints"
        className="mt-11 border-b border-[rgba(20,23,28,0.1)] pb-2.5 text-[21px] font-semibold tracking-[-0.015em]"
      >
        Service endpoints
      </h2>
      <div className="mt-[18px] overflow-hidden rounded-[9px] border border-[rgba(20,23,28,0.11)] bg-white">
        <div className="grid grid-cols-[minmax(0,150px)_minmax(0,1fr)_auto] gap-4 border-b border-[rgba(20,23,28,0.1)] bg-[#f7f7f6] px-4 py-[9px] font-mono text-[10px] tracking-[0.09em] text-[#9ca3af] uppercase">
          <span>Service</span>
          <span>Address</span>
          <span>Status</span>
        </div>
        {ENDPOINTS.map((e) => (
          <div
            key={e.name}
            className="grid grid-cols-[minmax(0,150px)_minmax(0,1fr)_auto] items-center gap-4 border-b border-[rgba(20,23,28,0.07)] px-4 py-[11px]"
          >
            <span className="min-w-0 [overflow-wrap:anywhere] text-[13px] font-medium">
              {e.name}
            </span>
            <span className="min-w-0 [overflow-wrap:anywhere] font-mono text-[12px] text-[#4b5563]">
              {e.addr}
            </span>
            <span className="justify-self-start rounded-[3px] border border-[rgba(27,107,90,0.18)] bg-[#eef8f4] px-[7px] py-0.5 font-mono text-[10.5px] text-[#1b6b5a]">
              {e.state}
            </span>
          </div>
        ))}
      </div>

      <h2
        id="first"
        className="mt-11 border-b border-[rgba(20,23,28,0.1)] pb-2.5 text-[21px] font-semibold tracking-[-0.015em]"
      >
        First analysis
      </h2>
      <div className="mt-5 flex flex-col">
        {STEPS.map((s, i) => (
          <div key={s.n} className="grid grid-cols-[26px_1fr] gap-4 pb-[22px]">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[rgba(30,79,216,0.28)] bg-[#f4f7ff] font-mono text-[11px]"
                style={{ color: ACCENT }}
              >
                {s.n}
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-px flex-1 bg-[rgba(20,23,28,0.1)]" />
              )}
            </div>
            <div className="pt-0.5">
              <div className="text-[14.5px] font-semibold">{s.title}</div>
              <p className="mt-1.5 max-w-[62ch] text-[13.5px] leading-[1.62] text-[#5b6472] text-pretty">
                {s.body}
              </p>
              {s.cmd && (
                <code className="mt-2.5 inline-block rounded-[5px] border border-[rgba(20,23,28,0.12)] bg-white px-[11px] py-[7px] font-mono text-[12px] text-[#26303f]">
                  {s.cmd}
                </code>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2
        id="next"
        className="mt-[26px] border-b border-[rgba(20,23,28,0.1)] pb-2.5 text-[21px] font-semibold tracking-[-0.015em]"
      >
        Where to go next
      </h2>
      <div className="mt-[18px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
        {NEXT_LINKS.map((n) => (
          <a
            key={n.title}
            href="#"
            className="rounded-lg border border-[rgba(20,23,28,0.11)] bg-white p-4 text-[#14171c] transition-transform hover:-translate-y-px hover:border-[rgba(30,79,216,0.35)]"
          >
            <div className="text-[13.5px] font-semibold">{n.title}</div>
            <p className="mt-[5px] text-[12.5px] leading-[1.55] text-[#6b7280]">
              {n.body}
            </p>
            <div className="mt-3 font-mono text-[10.5px]" style={{ color: ACCENT }}>
              {n.meta} →
            </div>
          </a>
        ))}
      </div>

      <div className="mt-11 flex flex-wrap items-center gap-3.5 border-t border-[rgba(20,23,28,0.1)] pt-5">
        <span className="text-[13px] text-[#6b7280]">Was this page helpful?</span>
        <div className="flex gap-2">
          <button
            onClick={() => setVote("yes")}
            className="cursor-pointer rounded-[5px] px-3.5 py-1.5 text-[12.5px]"
            style={{
              fontFamily: "revert",
              border: `1px solid ${vote === "yes" ? "rgba(30,79,216,0.35)" : "rgba(20,23,28,0.13)"}`,
              background: vote === "yes" ? "#eef3ff" : "#fff",
              color: vote === "yes" ? ACCENT : "#4b5563",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => setVote("no")}
            className="cursor-pointer rounded-[5px] px-3.5 py-1.5 text-[12.5px]"
            style={{
              fontFamily: "revert",
              border: `1px solid ${vote === "no" ? "rgba(20,23,28,0.28)" : "rgba(20,23,28,0.13)"}`,
              background: vote === "no" ? "#f7f7f6" : "#fff",
              color: vote === "no" ? "#14171c" : "#4b5563",
            }}
          >
            No
          </button>
        </div>
        <span className="font-mono text-[11px] text-[#9ca3af]">
          {vote === "yes"
            ? "Thanks, noted."
            : vote === "no"
              ? "Tell us what was missing in an issue."
              : ""}
        </span>
      </div>

      <div className="mt-[26px] flex flex-wrap justify-between gap-3.5">
        <a
          href="#"
          className="min-w-[200px] rounded-lg border border-[rgba(20,23,28,0.11)] bg-white px-4 py-3 text-[#14171c] hover:border-[rgba(30,79,216,0.3)]"
        >
          <div className="font-mono text-[10px] text-[#9ca3af]">← Previous</div>
          <div className="mt-1 text-[13.5px] font-medium">Introduction</div>
        </a>
        <a
          href="#"
          className="min-w-[200px] rounded-lg border border-[rgba(20,23,28,0.11)] bg-white px-4 py-3 text-right text-[#14171c] hover:border-[rgba(30,79,216,0.3)]"
        >
          <div className="font-mono text-[10px] text-[#9ca3af]">Next →</div>
          <div className="mt-1 text-[13.5px] font-medium">Saliency mapping</div>
        </a>
      </div>
    </>
  );
}
