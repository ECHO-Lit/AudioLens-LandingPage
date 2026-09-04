import { MouseEvent } from "react";
import { TocItem } from "../sections";
import { ACCENT } from "../constants";

export function DocsToc({
  tocItems,
  tocActive,
  onTocClick,
}: {
  tocItems: TocItem[] | undefined;
  tocActive: string;
  onTocClick: (id: string) => (e: MouseEvent) => void;
}) {
  return (
    <aside className="docs-toc sticky top-[60px] max-h-[calc(100vh-60px)] overflow-y-auto py-[34px] pb-[60px]">
      <div className="mb-3 font-mono text-[10px] tracking-[0.11em] text-[#9ca3af] uppercase">
        On this page
      </div>
      {tocItems && tocItems.length ? (
        <div className="flex flex-col gap-0.5 border-l border-[rgba(20,23,28,0.1)]">
          {tocItems.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={onTocClick(t.id)}
              className="-ml-px py-[5px] pl-3 text-[12.5px] leading-[1.4] text-[#6b7280] hover:text-[#374151]"
              style={{
                borderLeft: `2px solid ${t.id === tocActive ? ACCENT : "transparent"}`,
                ...(t.id === tocActive ? { color: "#14171c" } : {}),
                fontWeight: t.id === tocActive ? 500 : 400,
              }}
            >
              {t.label}
            </a>
          ))}
        </div>
      ) : (
        <div className="pl-2.5 text-[12.5px] text-[#9ca3af]">Nothing to show</div>
      )}
    </aside>
  );
}
