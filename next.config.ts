import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'self' https://vercel.live",
  "img-src 'self' data: blob: https://vercel.live",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://vitals.vercel-insights.com https://vercel.live",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { remotePatterns: [
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com",
    "port": "",
    "pathname": "/gbsz4bq3/image/upload/v1795688723/tala-leka/simulation-operations-2026.png",
    "search": ""
  },
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com",
    "port": "",
    "pathname": "/gbsz4bq3/image/upload/v1795688741/tala-leka/simulation-1440-new-delivery-2026.png",
    "search": ""
  },
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com",
    "port": "",
    "pathname": "/gbsz4bq3/image/upload/v1795688747/tala-leka/simulation-390-driver-2026.png",
    "search": ""
  },
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com",
    "port": "",
    "pathname": "/gbsz4bq3/image/upload/v1795688752/tala-leka/simulation-1440-merchant-2026.png",
    "search": ""
  },
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com",
    "port": "",
    "pathname": "/gbsz4bq3/image/upload/v1795689794/tala-leka/reports/unravel-viti-generic-mock-statement-2026.png",
    "search": ""
  },
  {
    "protocol": "https",
    "hostname": "res.cloudinary.com",
    "port": "",
    "pathname": "/gbsz4bq3/image/upload/v1795689214/tala-leka/reports/pod-synthetic-2026.png.png",
    "search": ""
  }
] },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/solutions.html", destination: "/services", permanent: true },
      { source: "/story.html", destination: "/about", permanent: true },
      {
        source: "/how-we-work.html",
        destination: "/about#approach",
        permanent: true,
      },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
