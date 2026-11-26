import ContactForm from "../contact-form";
import { Breadcrumbs, PageIntro } from "../components/ui";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Contact Tokani — Let’s Talk",
  "Contact Tokani Technologies in Fiji about our products, logistics and fulfilment software, TravelOps, TripFlow, Tokani Careers, SME websites and custom solutions.",
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
        title="Let’s talk about what your business needs."
        description="Ask about a Tokani product, discuss a website or custom system, request a demonstration or get in touch about an existing project. No technical brief needed."
      />
      <section className="section wrap contact-grid compact-top">
        <div>
          <h2>
            Let’s work out
            <br />
            the next step.
          </h2>
          <p>
            Based in Suva, supporting businesses and organisations across Fiji
            and the Pacific.
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
          <h3>Products &amp; solutions</h3>
          <p>
            Enquire about Logistics &amp; Fulfilment Management, TravelOps,
            TripFlow, Tokani Careers or Quote My Job. We also help with
            websites, SME digitisation, business systems and integrations.
          </p>
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
