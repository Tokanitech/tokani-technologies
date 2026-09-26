import type { MetadataRoute } from "next";
import { services, caseStudies } from "./lib/content";
import { siteUrl, preview } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (preview) return [];

  const corePaths = [
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/products",
    "/our-work",
    "/case-studies",
    "/about",
    "/contact",
    "/privacy",
  ];

  const coreEntries: MetadataRoute.Sitemap = corePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "/privacy" ? "yearly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/services" || path === "/case-studies"
          ? 0.9
          : path === "/privacy"
            ? 0.3
            : 0.8,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = Object.entries(
    caseStudies,
  ).map(([slug, study]) => ({
    url: `${siteUrl}/case-studies/${slug}`,
    lastModified: new Date(study.dateModified),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...coreEntries, ...caseStudyEntries];
}
