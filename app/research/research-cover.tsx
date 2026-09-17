import Image from "next/image";
import type { ResearchEntry } from "./research-data";

// Four washes built from the palette tokens the hero already uses, so covers
// retint with the theme instead of shipping a second set of hardcoded colors.
// An entry without an image gets one of these plus its mono label.
const TONES = [
  "radial-gradient(70% 90% at 18% 12%, var(--al-wash-a) 0%, var(--al-wash-a-0) 70%), radial-gradient(60% 80% at 84% 78%, var(--al-wash-c) 0%, var(--al-wash-c-0) 72%)",
  "radial-gradient(75% 95% at 82% 16%, var(--al-wash-b) 0%, var(--al-wash-b-0) 70%), radial-gradient(55% 75% at 14% 84%, var(--al-wash-a) 0%, var(--al-wash-a-0) 74%)",
  "radial-gradient(65% 85% at 50% 8%, var(--al-wash-c) 0%, var(--al-wash-c-0) 68%), radial-gradient(70% 90% at 26% 92%, var(--al-wash-b) 0%, var(--al-wash-b-0) 72%)",
  "radial-gradient(80% 100% at 12% 88%, var(--al-wash-b) 0%, var(--al-wash-b-0) 66%), radial-gradient(60% 80% at 76% 20%, var(--al-wash-c) 0%, var(--al-wash-c-0) 70%)",
] as const;

type Props = {
  entry: ResearchEntry;
  /** Card thumbnails run 16/9; article heroes run wider. */
  ratio?: string;
  priority?: boolean;
  className?: string;
};

export function ResearchCover({
  entry,
  ratio = "16 / 9",
  priority = false,
  className = "",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-al-surface-2 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {entry.cover ? (
        <Image
          src={entry.cover.src}
          alt={entry.cover.alt}
          width={entry.cover.width}
          height={entry.cover.height}
          priority={priority}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] dark:opacity-[0.88] dark:contrast-[1.05]"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
            style={{ background: TONES[entry.coverTone] }}
          />
          {/* Fine grid, so a flat wash still reads as a plotted figure. */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.5] mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(var(--al-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--al-hairline) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          {entry.coverLabel && (
            <span className="font-code absolute bottom-5 left-6 text-[11.5px] tracking-[0.14em] text-al-fg-tertiary uppercase">
              {entry.coverLabel}
            </span>
          )}
        </>
      )}
    </div>
  );
}
