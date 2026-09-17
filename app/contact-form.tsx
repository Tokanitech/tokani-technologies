"use client";

import { FormEvent, useState } from "react";

const recipient = "desmond@tokani.com.fj";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "sent_no_confirmation" | "fallback" | "error">("idle");

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const business = String(form.get("business") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const service = String(form.get("service") || "").trim();
    const contact = String(form.get("contact") || "").trim();
    const details = String(form.get("details") || "").trim();
    const subject = `New Tokani enquiry — ${business || name} — ${service}`;
    const body = ["Bula Tokani,", "", "I would like to discuss a project.", "", `Name: ${name}`, `Business: ${business || "Not provided"}`, `Email: ${email}`, `Phone / WhatsApp: ${phone}`, `Service: ${service}`, `Preferred contact: ${contact}`, "", "Project details:", details].join("\n");

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, business, email, phone, service, contact, details, website: form.get("website") }),
      });
      if (response.ok) {
        const result = await response.json().catch(() => ({}));
        setStatus(result?.confirmationSent === false ? "sent_no_confirmation" : "sent");
        formElement.reset();
        return;
      }
      const result = await response.json().catch(() => ({}));
      if (response.status === 503 && result?.fallback === true) {
        setStatus("fallback");
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submitEnquiry}>
      <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" required /></label><label>Business name<input name="business" autoComplete="organization" /></label></div>
      <div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>Phone or WhatsApp<input name="phone" type="tel" autoComplete="tel" required /></label></div>
      <div className="form-row"><label>What do you need?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Yavu — Website foundation</option><option>Tubu — Website and CRM</option><option>Qaqa — Custom system</option><option>Not sure yet</option></select></label><label>Preferred contact<select name="contact" required defaultValue="Email"><option>Email</option><option>Phone call</option><option>WhatsApp</option></select></label></div>
      <label>Tell us about the project<textarea name="details" rows={5} placeholder="What would you like to make easier?" required /></label>
      <div className="form-submit"><button className="button button-light" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my enquiry"} <span aria-hidden="true">→</span></button><p>We normally respond within one business day.</p></div>
      <p className="form-privacy">Your information will only be used to respond to your enquiry. Tokani does not sell or share enquiry information.</p>
      <div aria-live="polite">
        {status === "sent" && <p className="form-status success" role="status"><strong>Vinaka—your enquiry has been sent.</strong> We&apos;ve also emailed you a confirmation. We&apos;ll respond within one business day.</p>}
        {status === "sent_no_confirmation" && <p className="form-status success" role="status"><strong>Vinaka—your enquiry has been sent.</strong> We couldn&apos;t send the confirmation email, but your enquiry reached us and we&apos;ll respond within one business day.</p>}
        {status === "fallback" && <p className="form-status" role="status">Your email app has been opened with the enquiry ready. Please press send.</p>}
        {status === "error" && <p className="form-status error" role="alert">We couldn&apos;t send that enquiry. Please email <a href={`mailto:${recipient}`}>{recipient}</a> or call us on <a href="tel:+6799021622">+679 902 1622</a>.</p>}
      </div>
    </form>
  );
}
