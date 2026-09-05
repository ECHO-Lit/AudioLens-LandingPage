import type { ReactNode } from "react";

/** Small metadata chips under a page lead -- version, licence, stack. */
export function Badges({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex list-none flex-wrap gap-2 p-0 font-mono text-[10.5px] text-[#5b6472]">
      {items.map((b) => (
        <li key={b} className="rounded border border-[rgba(20,23,28,0.11)] bg-white px-2 py-[3px]">
          {b}
        </li>
      ))}
    </ul>
  );
}

const PILL_TONES = {
  ok: { border: "rgba(27,107,90,0.18)", bg: "#eef8f4", fg: "#1b6b5a" },
  pending: { border: "rgba(180,83,9,0.2)", bg: "#fff8ee", fg: "#96560a" },
  muted: { border: "rgba(20,23,28,0.14)", bg: "#f7f7f6", fg: "#6b7280" },
} as const;

/** Status pill, mostly for the status column of reference tables. */
export function Pill({
  tone = "muted",
  children,
}: {
  tone?: keyof typeof PILL_TONES;
  children: ReactNode;
}) {
  const t = PILL_TONES[tone];
  return (
    <span
      className="inline-block rounded-[3px] border px-[7px] py-0.5 font-mono text-[10.5px] whitespace-nowrap"
      style={{ borderColor: t.border, background: t.bg, color: t.fg }}
    >
      {children}
    </span>
  );
}
