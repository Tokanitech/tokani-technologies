"use client";
import { Analytics, track } from "@vercel/analytics/react";
import { useEffect } from "react";
export function recordEnquiry(confirmationSent: boolean) {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true")
    track("enquiry_delivered", { confirmationSent });
}
export default function Measurement() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
  useEffect(() => {
    if (!enabled) return;
    function clicked(event: MouseEvent) {
      const link =
        event.target instanceof Element ? event.target.closest("a") : null;
      const href = link?.getAttribute("href") || "";
      const channel = href.startsWith("mailto:")
        ? "email"
        : href.startsWith("tel:")
          ? "phone"
          : href.startsWith("https://wa.me/")
            ? "whatsapp"
            : null;
      if (channel) track("contact_link_clicked", { channel });
    }
    document.addEventListener("click", clicked);
    return () => document.removeEventListener("click", clicked);
  }, [enabled]);
  return enabled ? (
    <Analytics
      beforeSend={(event) => ({
        ...event,
        url: event.url.split("?")[0].split("#")[0],
      })}
    />
  ) : null;
}
