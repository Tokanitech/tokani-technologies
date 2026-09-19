import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import Navigation from "./components/navigation";
import Measurement from "./components/measurement";
import { Footer, JsonLd } from "./components/ui";
import { siteUrl, preview } from "./lib/seo";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tokani Technologies | Websites & Business Systems in Fiji",
    template: "%s | Tokani Technologies",
  },
  description:
    "Websites, CRM and custom business systems for Fiji businesses and organisations. Practical advice and thoughtful delivery from Tokani Technologies.",
  icons: { icon: "/brand/favicon.ico", apple: "/brand/apple-touch-icon.png" },
  robots: preview
    ? { index: false, follow: false }
    : { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <Measurement />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organisation`,
            name: "Tokani Technologies",
            url: siteUrl,
            logo: `${siteUrl}/brand/tokani-logo-transparent.webp`,
            email: "askme@tokani.com.fj",
            telephone: "+6799021622",
            areaServed: { "@type": "Country", name: "Fiji" },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Suva",
              addressCountry: "FJ",
            },
          }}
        />
      </body>
    </html>
  );
}
