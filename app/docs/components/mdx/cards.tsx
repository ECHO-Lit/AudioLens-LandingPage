import Link from "next/link";
import type { ReactNode } from "react";
import { ACCENT } from "../../constants";

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
      <div className="text-[#6b7280] text-pretty [&_p]:mt-[5px] [&_p]:text-[12.5px] [&_p]:leading-[1.55]">
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
    "block rounded-lg border border-[rgba(20,23,28,0.11)] bg-white px-4 pt-[15px] pb-4 text-[#14171c] focus-visible:ring-2 focus-visible:ring-[#1e4fd8] focus-visible:outline-none";

  if (!href) {
    return <div className={`${shared} hover:border-[rgba(30,79,216,0.3)]`}>{body}</div>;
  }

  return (
    <Link
      href={href}
      className={`${shared} transition-transform hover:-translate-y-px hover:border-[rgba(30,79,216,0.35)]`}
    >
      {body}
    </Link>
  );
}
