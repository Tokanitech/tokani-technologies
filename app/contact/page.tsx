import ContactForm from "../contact-form";
import { Breadcrumbs, PageIntro } from "../components/ui";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Contact Tokani — Let’s Talk",
  "Contact Tokani Technologies in Suva, Fiji about websites, CRM or custom business systems. Email askme@tokani.com.fj or call +679 902 1622.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      </div>
      <PageIntro
        eyebrow="Start a conversation"
        title="What would you like to make easier?"
        description="Tell us where your business is today and what you are trying to improve. You do not need a technical brief to get started."
      />
      <section className="section wrap contact-grid compact-top">
        <div>
          <h2>
            Let’s work out
            <br />
            the next step.
          </h2>
          <p>
            Based in Suva and working with businesses and organisations across
            Fiji.
          </p>
          <div className="contact-options">
            <a href="mailto:askme@tokani.com.fj">
              <span>General enquiries</span>askme@tokani.com.fj ↗
            </a>
            <a href="tel:+6799021622">
              <span>Call</span>+679 902 1622 ↗
            </a>
            <a href="https://wa.me/6799021622" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>Start a conversation ↗
            </a>
          </div>
          <h3>What happens next?</h3>
          <p>
            We review your enquiry, clarify anything we need to understand and
            recommend a practical next step. We normally respond within one
            business day.
          </p>
          <p className="muted">
            Please do not send passwords, identity documents or sensitive
            customer records through this form.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
