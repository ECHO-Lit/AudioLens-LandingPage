import Link from "next/link";
import { ResearchCover } from "./research-cover";
import {
  KIND_LABEL,
  formatResearchDate,
  researchHref,
  type ResearchEntry,
} from "./research-data";

// Same 1px ring the landing page draws its panels with.
const RING = "shadow-[0_0_0_1px_var(--al-hairline)]";
const LIFT =
  "transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(27,72,224,0.3),0_30px_60px_-34px_var(--al-shadow-lift)]";

/**
 * The whole box is one link, so a card is a single tab stop rather than a
 * title link with dead space around it. Date, excerpt and topics render only
 * when the entry carries them.
 */
export function ResearchCard({
  entry,
  priority = false,
}: {
  entry: ResearchEntry;
  priority?: boolean;
}) {
  return (
    <Link
      href={researchHref(entry.slug)}
      className={`group block overflow-hidden rounded-[22px] bg-card text-al-fg-strong hover:text-al-fg-strong focus-visible:ring-2 focus-visible:ring-al-accent focus-visible:ring-offset-2 focus-visible:ring-offset-al-canvas focus-visible:outline-none ${RING} ${LIFT}`}
    >
      <ResearchCover entry={entry} priority={priority} />

      <div className="px-7 pt-6 pb-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className="font-code rounded-full px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase"
            style={
              entry.kind === "publication"
                ? {
                    color: "var(--al-accent-text)",
                    background: "var(--al-accent-tint)",
                  }
                : {
                    color: "var(--al-fg-tertiary)",
                    background: "var(--al-surface-2)",
                  }
            }
          >
            {KIND_LABEL[entry.kind]}
          </span>
          {entry.date && (
            <span className="font-code text-[11px] text-al-fg-quaternary">
              {formatResearchDate(entry.date)}
            </span>
          )}
          {entry.readingTime && (
            <span className="font-code text-[11px] text-al-fg-quaternary">
              {entry.readingTime}
            </span>
          )}
        </div>

        <h3 className="mt-4 mb-0 text-[19px] leading-[1.25] font-semibold tracking-[-0.025em] text-balance">
          {entry.title}
        </h3>

        {entry.excerpt && (
          <p className="mt-3 mb-0 text-[14.5px] leading-[1.6] text-al-fg-body text-pretty">
            {entry.excerpt}
          </p>
        )}

        {entry.topics && entry.topics.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {entry.topics.map((t) => (
              <span
                key={t}
                className="font-code rounded-full bg-al-surface-2 px-2.5 py-1 text-[10px] tracking-[0.06em] text-al-fg-tertiary"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <span
          className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium"
          style={{ color: "var(--al-accent-text)" }}
        >
          {entry.kind === "publication" ? "Read the paper" : "Read the write-up"}
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
