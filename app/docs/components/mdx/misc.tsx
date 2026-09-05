import type { ReactNode } from "react";

/**
 * Opening paragraph of a page. Larger than body copy -- MDX cannot tell the
 * first paragraph apart from the rest, so it is marked explicitly.
 */
export function Lead({ children }: { children: ReactNode }) {
  // MDX wraps the body in <p>, which picks up the global 14.5px paragraph
  // mapping. The descendant selector outranks that element's own class, so the
  // size has to be set on the paragraph rather than inherited from here.
  return (
    <div className="text-[#4b5563] text-pretty [&_p]:mt-3.5 [&_p]:text-[16px] [&_p]:leading-[1.62]">
      {children}
    </div>
  );
}

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

/**
 * State marker for reference tables. Deliberately unboxed and uncoloured --
 * plain muted mono, so a table of statuses reads as text rather than a row of
 * competing badges.
 */
export function Status({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10.5px] whitespace-nowrap text-[#6b7280]">{children}</span>
  );
}
