/**
 * Site-level links in the docs header and mobile drawer.
 *
 * These mirror components/site-header.tsx so the two headers cannot drift.
 * The previous Guides / API / Changelog entries pointed at "#" -- no such
 * pages exist -- and have been replaced with the routes that do.
 */
export const SITE_LINKS = [
  { label: "Features", href: "/#features", external: false },
  { label: "Research", href: "/research", external: false },
  { label: "GitHub", href: "https://github.com/ECHO-Lit/ECHO-LIT", external: true },
] as const;

/** Matches the sitewide CTA, which has no destination yet. */
export const DASHBOARD_HREF = "#";
