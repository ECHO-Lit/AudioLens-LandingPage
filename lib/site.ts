/**
 * Absolute origin for canonical URLs, OG tags and the sitemap.
 * Vercel sets VERCEL_PROJECT_PRODUCTION_URL on deployments; override with
 * NEXT_PUBLIC_SITE_URL for a custom domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
