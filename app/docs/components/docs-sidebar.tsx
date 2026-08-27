import { MouseEvent } from "react";
import { NavGroup } from "../docs-data";
import { ACCENT } from "../constants";

export function DocsSidebar({
  nav,
  active,
  onNavClick,
}: {
  nav: NavGroup[];
  active: string;
  onNavClick: (id: string) => (e: MouseEvent) => void;
}) {
  return (
    <aside className="docs-side sticky top-[60px] max-h-[calc(100vh-60px)] overflow-y-auto py-[30px] pb-[60px]">
      {nav.map((group) => (
        <div key={group.label} className="mb-[26px]">
          <div className="mb-2.5 pl-2.5 font-mono text-[10px] tracking-[0.11em] text-[#9ca3af] uppercase">
            {group.label}
          </div>
          <div className="flex flex-col gap-px">
            {group.items.map((item) => {
              const on = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onNavClick(item.id)}
                  className="flex items-center justify-between gap-2 rounded-[5px] px-2.5 py-1.5 text-[13.5px] leading-[1.3] hover:bg-[rgba(20,23,28,0.045)]"
                  style={{
                    color: on ? ACCENT : "#4b5563",
                    fontWeight: on ? 500 : 400,
                    background: on ? "#eef3ff" : "transparent",
                  }}
                >
                  <span>{item.title}</span>
                  {item.tag ? (
                    <span className="rounded-[3px] border border-[rgba(20,23,28,0.12)] px-1 py-px font-mono text-[9px] tracking-[0.04em] text-[#6b7280]">
                      {item.tag}
                    </span>
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
