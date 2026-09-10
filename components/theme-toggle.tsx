"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const CYCLE = ["light", "dark", "system"] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Avoids a hydration mismatch: the server doesn't know the persisted/system
  // theme, so the icon renders only once the client has settled on one.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        className={cn("size-4", className)}
      />
    );
  }

  const current = theme ?? "system";
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        const next = CYCLE[(CYCLE.indexOf(current as (typeof CYCLE)[number]) + 1) % CYCLE.length];
        setTheme(next);
      }}
      aria-label={`Theme: ${current}. Click to switch.`}
      title={`Theme: ${current}`}
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-full text-al-fg-tertiary transition-colors hover:bg-al-surface-2 hover:text-al-fg-strong",
        className,
      )}
    >
      {isDark ? (
        <Moon className="size-[17px]" strokeWidth={1.75} />
      ) : (
        <Sun className="size-[17px]" strokeWidth={1.75} />
      )}
    </button>
  );
}
