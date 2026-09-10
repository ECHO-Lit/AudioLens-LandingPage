import Link from "next/link";
import type { ReactNode } from "react";
import { ACCENT } from "@/lib/theme";

/** Auto-fitting card grid. Used for prerequisites and "where to go next". */
export function CardGrid({ min = 232, children }: { min?: number; children: ReactNode }) {
  return (
    <div
      className="mt-[18px] grid gap-3"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))` }}
    >
      {children}
    </div>
  );
}

/**
 * A card. With `href` it renders as a link, otherwise as a plain panel.
 * `kicker` sits above the title, `meta` below the body.
 */
export function Card({
  title,
  kicker,
  meta,
  href,
  children,
}: {
  title: string;
  kicker?: string;
  meta?: string;
  href?: string;
  children?: ReactNode;
}) {
  const body = (
    <>
      {kicker && (
        <div className="mb-[9px] font-mono text-[10px]" style={{ color: ACCENT }}>
          {kicker}
        </div>
      )}
      <div className="text-[13.5px] font-semibold">{title}</div>
      {/* Sized on the paragraph: MDX wraps card copy in <p>, which carries the
          global 14.5px mapping and would beat a size inherited from here. */}
      <div className="text-al-fg-tertiary text-pretty [&_p]:mt-[5px] [&_p]:text-[12.5px] [&_p]:leading-[1.55]">
        {children}
      </div>
      {meta && (
        <div className="mt-3 font-mono text-[10.5px]" style={{ color: ACCENT }}>
          {meta} <span aria-hidden="true">→</span>
        </div>
      )}
    </>
  );

  const shared =
    "block rounded-lg border border-al-hairline-strong bg-card px-4 pt-[15px] pb-4 text-foreground focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:outline-none";

  if (!href) {
    return <div className={`${shared} hover:border-al-accent-line-strong`}>{body}</div>;
  }

  return (
    <Link
      href={href}
      className={`${shared} transition-transform hover:-translate-y-px hover:border-al-accent-line-strong`}
    >
      {body}
    </Link>
  );
}
