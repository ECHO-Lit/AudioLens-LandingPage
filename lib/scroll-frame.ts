// One scroll/resize listener for the whole page, flushed on a single rAF.
//
// The landing page runs a handful of scroll-driven effects at once (per-heading
// character reveals, several parallax layers). Giving each its own listener
// would mean N handlers and N layout reads per scroll event; sharing one frame
// keeps the reads batched and lets every subscriber write in the same tick.
//
// Client-only module -- import it from "use client" files only.

type Frame = () => void;

const subscribers = new Set<Frame>();
let rafId = 0;
let listening = false;

function flush() {
  rafId = 0;
  for (const fn of subscribers) fn();
}

function schedule() {
  if (!rafId) rafId = requestAnimationFrame(flush);
}

/** Run `fn` once now, then on every scroll and resize frame. Returns cleanup. */
export function onScrollFrame(fn: Frame): () => void {
  subscribers.add(fn);

  if (!listening) {
    listening = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }

  // Position is already wherever the browser restored it to on load, so seed
  // the effect before the first scroll event ever fires.
  fn();

  return () => {
    subscribers.delete(fn);
    if (subscribers.size > 0) return;

    listening = false;
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };
}

/** True when the visitor has asked the OS to reduce motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function clamp01(n: number): number {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
