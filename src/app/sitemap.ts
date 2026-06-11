import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://linwoodguardian.com";

  const staticPages = [
    "",
    "/about",
    "/business-insurance",
    "/business-insurance/property-casualty",
    "/business-insurance/professional-liability",
    "/business-insurance/management-liability",
    "/business-insurance/workers-comp",
    "/business-insurance/bonds",
    "/personal-insurance",
    "/blog",
    "/contact",
  ];

  const blogSlugs = getAllSlugs();

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/business-insurance" ? 0.9 : 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
