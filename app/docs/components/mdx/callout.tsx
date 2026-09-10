import type { ReactNode } from "react";

const TONES = {
  note: {
    border: "var(--al-note-border)",
    bg: "var(--al-note-bg)",
    bar: "var(--al-note-bar)",
    title: "var(--al-note-title)",
  },
  warn: {
    border: "var(--al-warn-border)",
    bg: "var(--al-warn-bg)",
    bar: "var(--al-warn-bar)",
    title: "var(--al-warn-title)",
  },
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
        {/* MDX wraps the body in <p>, which would otherwise take the global
            14.5px paragraph size -- set it on the paragraph, not the box. */}
        <div className="text-al-fg-body [&_p]:mt-[5px] [&_p]:text-[13px] [&_p]:leading-[1.6]">
          {children}
        </div>
      </div>
    </aside>
  );
}
