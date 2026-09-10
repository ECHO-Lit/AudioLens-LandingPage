import { ACCENT } from "@/lib/theme";

export function Logomark({
  heights,
  containerHeight,
  mutedLast = false,
}: {
  heights: number[];
  containerHeight: number;
  mutedLast?: boolean;
}) {
  return (
    <div
      className="flex items-end gap-[2px]"
      style={{ height: containerHeight }}
    >
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[2px]"
          style={{
            height: h,
            background:
              mutedLast && i === heights.length - 1
                ? "var(--al-accent-line-strong)"
                : ACCENT,
          }}
        />
      ))}
    </div>
  );
}
