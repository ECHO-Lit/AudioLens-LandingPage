import type { Metadata } from "next";
import { DocsChrome } from "./docs-chrome";

export const metadata: Metadata = {
  // Each page supplies its own title; this frames it. The root layout's title
  // stays the default for everything outside /docs.
  title: {
    default: "AudioLens docs",
    template: "%s — AudioLens docs",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsChrome>{children}</DocsChrome>;
}
