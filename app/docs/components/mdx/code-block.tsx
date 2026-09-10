"use client";

import { createContext, useContext, useRef, type ComponentProps } from "react";
import { CopyButton } from "./copy-button";

/**
 * rehype-pretty-code retags the fence's own <pre> as <figure> and nests a fresh
 * shiki <pre> inside it. So the element that carries the block is `figure`, and
 * `pre` is the highlighted body. Both are mapped in mdx-components.tsx.
 */

/** False inside CodeTabs, where the tab bar owns the frame and copy button. */
export const CodeChromeContext = createContext(true);

/** True between <pre> and its <code>, so inline code can style itself apart. */
const InsidePreContext = createContext(false);

export function CodeFigure({ children, ...props }: ComponentProps<"figure">) {
  const chrome = useContext(CodeChromeContext);
  const ref = useRef<HTMLElement>(null);

  if (!chrome) {
    return (
      <figure ref={ref} {...props} className="m-0">
        {children}
      </figure>
    );
  }

  return (
    <figure
      ref={ref}
      {...props}
      className="mt-[18px] overflow-hidden rounded-[9px] border border-al-code-border bg-card"
      style={{ boxShadow: "0 1px 2px var(--al-shadow-sm)" }}
    >
      <div className="flex items-center justify-end border-b border-al-hairline-strong bg-al-surface-2 px-2 py-1.5">
        <CopyButton getText={() => ref.current?.querySelector("pre")?.textContent ?? ""} />
      </div>
      {children}
    </figure>
  );
}

export function CodePre({ children, ...props }: ComponentProps<"pre">) {
  return (
    <InsidePreContext.Provider value={true}>
      <pre
        {...props}
        className="m-0 overflow-x-auto px-[18px] pt-[18px] pb-5 font-mono text-[12.5px] leading-[1.75] whitespace-pre text-al-code-fg"
      >
        {children}
      </pre>
    </InsidePreContext.Provider>
  );
}

export function CodeInline({ children, ...props }: ComponentProps<"code">) {
  const insidePre = useContext(InsidePreContext);
  if (insidePre) return <code {...props}>{children}</code>;

  // No tint and no box: monospace at a muted grey is enough to mark a literal.
  // A highlighted background here reads as a link and fights the real ones.
  return (
    <code {...props} className="font-mono text-[12px] text-muted-foreground">
      {children}
    </code>
  );
}
