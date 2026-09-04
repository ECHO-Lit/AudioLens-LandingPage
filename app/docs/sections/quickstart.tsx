"use client";

import { useState } from "react";
import { ACCENT } from "../constants";
import {
  CALLOUT_TITLE,
  CODE_BLOCKS,
  ENDPOINTS,
  INSTALL_INTRO,
  LEAD,
  NEXT_LINKS,
  PREREQS,
  STEPS,
} from "./quickstart.content";

export { QUICKSTART_TOC } from "./quickstart.content";

export function QuickstartSection() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const text = CODE_BLOCKS[tab].code;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <p className="mt-3.5 max-w-[64ch] text-[16px] leading-[1.62] text-[#4b5563] text-pretty">
        {LEAD}
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
            {CALLOUT_TITLE}
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
        {INSTALL_INTRO}
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
              className="cursor-pointer rounded-[5px] px-[11px] py-1.5 font-mono text-[11px] text-[#8b929c] hover:text-[#4b5563]"
              style={tab === i ? { color: "#14171c", background: "#fff" } : undefined}
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
    </>
  );
}
