import type { MetadataRoute } from "next";
import { docsHref, flatNav } from "@/app/docs/docs-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/research`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...flatNav().map((item) => ({
      url: `${SITE_URL}${docsHref(item.id)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: item.id === "quickstart" ? 0.9 : 0.7,
    })),
  ];
}
