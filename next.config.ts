import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

// Plugins are named as strings, not imported. Turbopack runs the MDX pipeline
// in Rust and cannot receive JavaScript functions, so anything with a
// non-serializable option is unusable here. This is also why the docs search
// index and TOC are produced by scripts/build-docs-index.mjs instead of a
// custom plugin in this pipeline.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      // Heading ids. build-docs-index.mjs slugs with the same github-slugger,
      // so generated TOC anchors match the rendered DOM by construction.
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: "github-light",
          // Let our own CSS own the block background; the theme only colors tokens.
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
