"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Copy control shared by CodeBlock and CodeTabs.
 *
 * Takes a text getter rather than the text itself: the code has already been
 * turned into highlighted <span> markup by rehype-pretty-code on the server, so
 * the plain source is no longer available as a string on the client. Callers
 * read `textContent` off the rendered node instead.
 */
export function CopyButton({
  getText,
  label = "Copy code",
}: {
  getText: () => string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    const text = getText();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className="cursor-pointer rounded-[5px] border border-[rgba(20,23,28,0.12)] bg-white px-[9px] py-[5px] font-mono text-[10.5px] text-[#4b5563] hover:border-[rgba(20,23,28,0.24)] focus-visible:ring-2 focus-visible:ring-[#1e4fd8] focus-visible:ring-offset-1 focus-visible:outline-none"
    >
      <span aria-hidden="true">{copied ? "copied" : "copy"}</span>
      {/* The visible label swaps silently; announce the result separately. */}
      <span className="sr-only" role="status">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
