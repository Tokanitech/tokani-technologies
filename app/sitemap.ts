import type { MetadataRoute } from "next";
import { services, caseStudies } from "./lib/content";
import { siteUrl, preview } from "./lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (preview) return [];
  return [
    "",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/products",
    "/our-work",
    "/about",
    "/contact",
    "/privacy",
    ...Object.keys(caseStudies).map((s) => `/case-studies/${s}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
