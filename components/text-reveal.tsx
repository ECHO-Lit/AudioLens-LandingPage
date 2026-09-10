"use client";

import { useEffect, useRef, type CSSProperties, type ElementType } from "react";
import { cn } from "@/lib/utils";
import { clamp01, onScrollFrame, prefersReducedMotion } from "@/lib/scroll-frame";

type TextRevealProps = {
  /**
   * Plain text -- it gets split per character, so no nested markup. A "
"
   * renders as a hard line break, which is how the design's two-line headings
   * keep their break point.
   */
  text: string;
  /** Element to render. Defaults to a <span> so callers pick their own heading level. */
  as?: ElementType;
  className?: string;
  /**
   * Viewport fractions that bracket the reveal: it starts when the element's
   * top crosses `start` * viewport height and completes when its bottom
   * crosses `end` * viewport height.
   */
  start?: number;
  end?: number;
  /** How many characters sit mid-fade at any moment. Higher = softer wave. */
  spread?: number;
  /** Opacity of a character that hasn't been reached yet. */
  dim?: number;
};

// The per-character opacity itself is CSS (see .al-reveal-char in globals.css):
// each character carries its index as --al-reveal-i, the container publishes
// scroll progress as --al-reveal-p, and the ramp is a clamp() over those. That
// keeps this component to one style write per frame no matter how long the
// heading is, instead of one write per character.
export function TextReveal({
  text,
  as,
  className,
  start = 0.88,
  end = 0.45,
  spread = 9,
  dim = 0.14,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    // The CSS default is --al-reveal-p: 1, so a reduced-motion visitor (and
    // anyone without JS) simply reads fully opaque text.
    if (!el || prefersReducedMotion()) return;

    return onScrollFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const from = vh * start;
      // Adding the element's own height means a tall three-line heading takes
      // proportionally longer to fill than a one-liner, rather than both
      // resolving over the same fixed scroll distance.
      const travel = from - vh * end + rect.height;
      const p = travel <= 0 ? 1 : clamp01((from - rect.top) / travel);

      el.style.setProperty("--al-reveal-p", p.toFixed(4));
    });
  }, [start, end]);

  // Cast to a concrete intrinsic so ref/aria props type-check; the runtime
  // still renders whatever tag name the caller passed.
  const Tag = (as ?? "span") as "span";
  const lines = text.split("\n");
  let index = 0;

  return (
    <Tag
      ref={ref}
      // Split text reads terribly character by character in a screen reader,
      // so the accessible name is the intact string and the pieces are hidden.
      aria-label={text}
      className={cn("al-reveal", className)}
      style={
        {
          // --al-reveal-p is deliberately not set here: its @property
          // initial-value is 1, so text server-renders (and stays, without JS)
          // fully opaque, and the effect takes it over from the first frame.
          "--al-reveal-n": text.replace(/[ \n]/g, "").length,
          "--al-reveal-s": spread,
          "--al-reveal-d": dim,
        } as CSSProperties
      }
    >
      {lines.map((line, l) => (
        <span key={`line-${l}`} aria-hidden>
          {l > 0 ? <br /> : null}
          {line.split(" ").flatMap((word, w, words) => {
            const chars = Array.from(word).map((char) => {
              const i = index++;
              return (
                <span
                  key={i}
                  className="al-reveal-char"
                  style={{ "--al-reveal-i": i } as CSSProperties}
                >
                  {char}
                </span>
              );
            });

            // The separator is a bare text node between two words, not a child
            // of either. A space trailing inside a word wrapper gets trimmed by
            // the white-space rules and the gap disappears; out here it is
            // ordinary text and stays the only place a line may break.
            return w < words.length - 1 ? [...chars, " "] : chars;
          })}
        </span>
      ))}
    </Tag>
  );
}
