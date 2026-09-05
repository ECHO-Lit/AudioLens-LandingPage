import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentProps } from "react";
import { CodeFigure, CodeInline, CodePre } from "@/app/docs/components/mdx/code-block";
import { CodeTabs } from "@/app/docs/components/mdx/code-tabs";
import { Callout } from "@/app/docs/components/mdx/callout";
import { Card, CardGrid } from "@/app/docs/components/mdx/cards";
import { Step, Steps } from "@/app/docs/components/mdx/steps";
import { Badges, Lead, Status } from "@/app/docs/components/mdx/misc";

// h1 is deliberately absent: the page hero in app/docs/[slug]/page.tsx renders
// the only h1, from the nav entry. Content starts at h2.
const headingBase = "scroll-mt-[92px] font-semibold tracking-[-0.015em]";

function Anchor({ href = "", ...props }: ComponentProps<"a">) {
  const external = /^https?:\/\//.test(href);
  const className =
    "text-[#1e4fd8] underline decoration-[rgba(30,79,216,0.35)] underline-offset-2 hover:decoration-[#1e4fd8] focus-visible:ring-2 focus-visible:ring-[#1e4fd8] focus-visible:outline-none";

  if (external || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  }
  return <Link href={href} className={className} {...props} />;
}

const components: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      className={`${headingBase} mt-11 border-b border-[rgba(20,23,28,0.1)] pb-2.5 text-[21px]`}
    />
  ),
  h3: (props) => <h3 {...props} className={`${headingBase} mt-8 text-[16.5px]`} />,
  h4: (props) => <h4 {...props} className={`${headingBase} mt-6 text-[14.5px]`} />,
  // No reading-measure cap: prose spans the full content column so it shares a
  // right edge with tables, code blocks and card grids.
  p: (props) => <p {...props} className="mt-4 text-[14.5px] leading-[1.65] text-[#4b5563]" />,
  ul: (props) => (
    <ul
      {...props}
      className="mt-4 list-disc space-y-1.5 pl-5 text-[14.5px] leading-[1.65] text-[#4b5563] marker:text-[#9ca3af]"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mt-4 list-decimal space-y-1.5 pl-5 text-[14.5px] leading-[1.65] text-[#4b5563] marker:text-[#9ca3af]"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-5 border-l-2 border-[rgba(30,79,216,0.3)] pl-4 text-[14.5px] leading-[1.65] text-[#5b6472] italic"
    />
  ),
  hr: (props) => <hr {...props} className="mt-9 border-t border-[rgba(20,23,28,0.1)]" />,
  a: Anchor,

  // GFM tables. The wrapper scrolls on its own so a wide table never makes the
  // page scroll sideways.
  // First column names the row (service, variable, flag), so it carries the
  // same medium weight the hand-built endpoints table used.
  table: (props) => (
    <div className="mt-[18px] overflow-x-auto rounded-[9px] border border-[rgba(20,23,28,0.11)] bg-white">
      <table
        {...props}
        className="w-full border-collapse text-left [&_td:first-child]:font-medium"
      />
    </div>
  ),
  thead: (props) => <thead {...props} className="bg-[#f7f7f6]" />,
  th: (props) => (
    <th
      {...props}
      className="border-b border-[rgba(20,23,28,0.1)] px-4 py-[9px] font-mono text-[10px] font-normal tracking-[0.09em] text-[#9ca3af] uppercase"
    />
  ),
  td: (props) => (
    <td
      {...props}
      className="border-b border-[rgba(20,23,28,0.07)] px-4 py-[11px] align-middle text-[13px] [overflow-wrap:anywhere]"
    />
  ),

  // rehype-pretty-code retags the fence's <pre> as <figure> and nests the
  // highlighted <pre> inside it -- see code-block.tsx.
  figure: CodeFigure,
  pre: CodePre,
  code: CodeInline,

  Callout,
  CodeTabs,
  CardGrid,
  Card,
  Steps,
  Step,
  Badges,
  Lead,
  Status,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
