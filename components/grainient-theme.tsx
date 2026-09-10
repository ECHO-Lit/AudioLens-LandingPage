"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Grainient from "@/components/Grainient";
import type { ComponentProps } from "react";

type GrainientProps = ComponentProps<typeof Grainient>;

// Grainient reads its colors (and a few other uniforms) as plain props, not
// CSS vars, so it can't take a `dark:` variant -- it needs the resolved theme
// up front. `dark` overlays onto the base (light) props once the theme
// resolves to dark; anything not overridden -- color triple, contrast, etc --
// falls through unchanged.
export function ThemedGrainient({
  dark,
  ...rest
}: GrainientProps & { dark?: Partial<GrainientProps> }) {
  const { resolvedTheme } = useTheme();
  // Server and first client paint both have no resolved theme yet; rendering
  // the light props until then avoids a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const props = mounted && resolvedTheme === "dark" ? { ...rest, ...dark } : rest;

  return <Grainient {...props} />;
}
