"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { onScrollFrame, prefersReducedMotion } from "@/lib/scroll-frame";

type ParallaxProps = ComponentPropsWithoutRef<"div"> & {
  /** Optional: a bare decorative layer can carry its own background instead. */
  children?: ReactNode;
  /**
   * Fraction of the element's distance from the viewport centre to counter-move
   * by. Positive lags behind the scroll (moves up as you scroll down), negative
   * runs ahead of it. Keep it small -- past ~0.25 the layer visibly detaches.
   */
  speed?: number;
  /** Hard cap on the offset in px, so tall pages can't drift a layer off-frame. */
  max?: number;
};

// Wraps its children in a div whose transform is driven by scroll position.
// Transform-only, so the browser can keep the layer composited -- nothing here
// touches layout, and the wrapper writes no styles at all under reduced motion.
export function Parallax({
  children,
  speed = 0.12,
  max = 140,
  className,
  ...rest
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    el.style.willChange = "transform";

    const stop = onScrollFrame(() => {
      const rect = el.getBoundingClientRect();
      // Zero offset when the element is centred in the viewport, so every
      // layer's parallax reads as symmetric around the point you're looking at.
      const fromCentre = rect.top + rect.height / 2 - window.innerHeight / 2;
      const y = Math.max(-max, Math.min(max, -fromCentre * speed));

      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    });

    return () => {
      stop();
      el.style.transform = "";
      el.style.willChange = "";
    };
  }, [speed, max]);

  return (
    <div ref={ref} className={cn(className)} {...rest}>
      {children}
    </div>
  );
}
