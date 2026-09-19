import type { Metadata } from "next";
export const siteUrl = "https://www.tokani.com.fj";
export const preview = process.env.VERCEL_ENV === "preview";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "Tokani Technologies",
      type: "website",
      locale: "en_FJ",
      images: [
        {
          url: "/brand/Tokani_OpenGraph_1200x630.webp",
          width: 1200,
          height: 630,
          alt: "Tokani Technologies — Your friend in technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/Tokani_OpenGraph_1200x630.webp"],
    },
  };
}
