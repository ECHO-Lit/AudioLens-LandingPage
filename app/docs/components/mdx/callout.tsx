import type { ReactNode } from "react";
import { ACCENT } from "../../constants";

const TONES = {
  note: { border: "rgba(30,79,216,0.2)", bg: "#f4f7ff", bar: ACCENT, title: "#12327f" },
  warn: { border: "rgba(180,83,9,0.22)", bg: "#fffaf2", bar: "#b45309", title: "#7c3d05" },
} as const;

export function Callout({
  title,
  tone = "note",
  children,
}: {
  title?: string;
  tone?: keyof typeof TONES;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <aside
      className="mt-8 flex gap-3 rounded-lg border px-4 py-3.5"
      style={{ borderColor: t.border, background: t.bg }}
    >
      <div className="w-[3px] flex-none rounded-sm" style={{ background: t.bar }} aria-hidden="true" />
      <div className="min-w-0">
        {title && (
          <div className="text-[13px] font-semibold" style={{ color: t.title }}>
            {title}
          </div>
        )}
        {/* MDX wraps the body in <p>; the margin below targets that first child. */}
        <div className="text-[13px] leading-[1.6] text-[#3f4b63] [&>*:first-child]:mt-[5px] [&>p]:mt-[5px]">
          {children}
        </div>
      </div>
    </aside>
  );
}
