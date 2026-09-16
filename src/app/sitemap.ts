import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const baseUrl = "https://linwoodguardian.com";

/**
 * Last substantive change per route, maintained by hand. Bump a date only when
 * that page's content changes. The previous version stamped `new Date()` on
 * every URL, which told crawlers every page changed on every request; that is
 * a signal they learn to ignore, and AI search retrieval leans on freshness.
 *
 * 2026-09-15: skyline hero backgrounds landed on every page with a hero.
 * 2026-09-16: commercial auto appetite copy and FAQ (property-casualty),
 *             business insurance index card wording, quote form screening
 *             (contact).
 */
const STATIC_ROUTES: { path: string; updated: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", updated: "2026-09-15", priority: 1, changeFrequency: "monthly" },
  { path: "/about", updated: "2026-09-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-insurance", updated: "2026-09-16", priority: 0.9, changeFrequency: "monthly" },
  { path: "/business-insurance/property-casualty", updated: "2026-09-16", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-insurance/professional-liability", updated: "2026-09-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-insurance/management-liability", updated: "2026-09-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-insurance/workers-comp", updated: "2026-09-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-insurance/bonds", updated: "2026-09-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/personal-insurance", updated: "2026-09-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", updated: "2026-09-15", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", updated: "2026-09-16", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_ROUTES.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: new Date(r.updated),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
