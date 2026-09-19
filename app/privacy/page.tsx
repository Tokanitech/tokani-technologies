import { Breadcrumbs, PageIntro } from "../components/ui";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Privacy — Website Enquiries",
  "How Tokani Technologies handles information provided through this website, enquiry delivery and optional website measurement.",
  "/privacy",
);
export default function Privacy() {
  const analytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Privacy", href: "/privacy" }]} />
      </div>
      <PageIntro
        eyebrow="Clear and practical"
        title="Your enquiry. Handled with care."
        description="This notice describes how information is handled on the Tokani Technologies website."
      />
      <article className="wrap prose section compact-top">
        <h2>What you provide</h2>
        <p>
          The enquiry form asks for your name, email, phone or WhatsApp number,
          service interest, preferred contact method and project details.
          Business name is optional. Please avoid including sensitive documents,
          passwords or information about other people.
        </p>
        <h2>Why we use it</h2>
        <p>
          We use these details to receive and respond to your enquiry, clarify
          your needs and discuss potential work. Submitting this form does not
          subscribe you to a marketing list. We do not sell enquiry information.
        </p>
        <h2>How it is delivered</h2>
        <p>
          The website is hosted on Vercel. Enquiries and confirmation messages
          are sent through Resend to the relevant email inboxes. Hosting and
          email providers process information needed to operate these services
          and may do so outside Fiji. Technical request information may be
          processed for service operation and security.
        </p>
        <h2>Website measurement</h2>
        {analytics ? (
          <p>
            Vercel Web Analytics is enabled to help us understand page visits,
            successful enquiry submissions and clicks on email, phone and
            WhatsApp links. Our custom events contain the contact channel or
            delivery status, not your name, contact details or message. Query
            strings are removed from analytics page URLs.
          </p>
        ) : (
          <p>
            Optional website analytics is currently disabled in this version.
            Hosting providers may still process technical service logs. If
            analytics is enabled, this notice will describe it.
          </p>
        )}
        <h2>Access and retention</h2>
        <p>
          Enquiries are accessible to the people and service providers involved
          in handling them. Correspondence may remain in business email records
          while needed for the enquiry, subsequent work or applicable
          record-keeping requirements. Contact us to request correction or
          deletion; we will explain any information we need to retain.
        </p>
        <h2>Other websites</h2>
        <p>
          Portfolio links and WhatsApp open third-party services with their own
          privacy arrangements.
        </p>
        <h2>Questions or requests</h2>
        <p>
          Email <a href="mailto:askme@tokani.com.fj">askme@tokani.com.fj</a>{" "}
          with any question about your information.
        </p>
      </article>
    </>
  );
}
