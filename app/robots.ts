import type { MetadataRoute } from "next";
import { siteUrl, preview } from "./lib/seo";
export default function robots(): MetadataRoute.Robots {
  return preview
    ? { rules: { userAgent: "*", disallow: "/" } }
    : {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${siteUrl}/sitemap.xml`,
      };
}
