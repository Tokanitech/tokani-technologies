import type { Metadata } from "next";

export const siteUrl = "https://www.tokani.com.fj";
export const preview = process.env.VERCEL_ENV === "preview";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/brand/Tokani_OpenGraph_1200x630.webp",
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
          url: image,
          alt:
            image === "/brand/Tokani_OpenGraph_1200x630.webp"
              ? "Tokani Technologies — Your friend in technology"
              : `${title} — Tokani Technologies case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
