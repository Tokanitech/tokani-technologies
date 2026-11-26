import Link from "next/link";
import { Breadcrumbs, Cta, PageIntro, ProjectImage } from "../components/ui";
import { pageMetadata } from "../lib/seo";
import { caseStudies } from "../lib/content";
export const metadata = pageMetadata(
  "Tokani Products — Practical Tools for Fiji",
  "Explore logistics and fulfilment management software, Tokani Careers, Quote My Job and TravelOps. See public tools, client deployments and products in development.",
  "/products",
);
export default function Products() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Products", href: "/products" }]} />
      </div>
      <PageIntro
        eyebrow="Built around local needs"
        title="Useful tools. Room to grow."
        description="Our products and platforms tackle specific problems in Fiji. We distinguish public tools, client deployments and products in development, so you know what to expect."
      />
      <section className="section wrap compact-top">
        <article className="product-feature tala-product-feature" id="logistics-fulfilment">
          <div>
            <span className="status">Business platform · Controlled rollout</span>
            <h2>Logistics &amp; Fulfilment Management System</h2>
            <p className="lead">Every order channel. One delivery operation.</p>
            <p>
              A last-mile delivery management platform for businesses that need
              to organise, dispatch, track and document deliveries, whether they
              operate their own fleet or fulfil orders for multiple merchants.
            </p>
            <p>
              Orders can be registered from online stores, phone calls, emails,
              social media, messaging apps or in-store sales. An e-commerce
              website is not required.
            </p>
            <div className="two-col">
              <div><h3>Delivery businesses</h3><p>Manage merchant accounts, delivery assignments, drivers, exceptions and reconciliation.</p></div>
              <div><h3>Retailers &amp; other businesses</h3><p>Register orders, follow delivery outcomes and access delivery evidence and statements.</p></div>
            </div>
            <p className="muted">Orders are registered through structured intake. Direct integration with third-party sales channels is not implied and would require separate scoping.</p>
            <Link className="button" href="/contact">Discuss your delivery requirements ↗</Link>
          </div>
          <div className="logistics-product-visual">
            <div className="logistics-channel-flow" aria-label="Order channels feed a common delivery management workflow">
              <p className="eyebrow">Orders from any channel</p>
              <div className="logistics-channels">
                {["Online stores", "Phone calls", "Email", "Social media", "Messaging apps", "In-store sales"].map(channel => <span key={channel}>{channel}</span>)}
              </div>
              <span className="logistics-flow-arrow" aria-hidden="true">↓</span>
              <strong className="logistics-intake">Structured order intake</strong>
              <span className="logistics-flow-arrow" aria-hidden="true">↓</span>
              <ol className="logistics-flow-steps">
                {["Dispatch & driver assignment", "Collection & last-mile delivery", "Digital proof of delivery", "Reporting & reconciliation"].map(step => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
          <div className="logistics-client-example">
            <figure>
              <ProjectImage src={caseStudies["tala-leka"].image} alt="Tala Leka operations dashboard — fictional simulation data" />
              <figcaption>First client implementation · Simulation data</figcaption>
            </figure>
            <div>
              <p className="eyebrow">The product in practice</p>
              <h3>Tala Leka Logistics — Unravel Viti</h3>
              <p>The first client implementation was developed for Unravel Viti, with NewWorld as its initial use case. Unravel Viti operates the Tala Leka fulfilment service; Tokani developed the underlying technology.</p>
              <p className="muted">The platform is in controlled rollout, not a public self-service subscription. Wider deployment is subject to scope, readiness and commercial arrangements.</p>
              <Link className="text-link" href="/case-studies/tala-leka">Explore the client case study &amp; screenshots ↗</Link>
            </div>
          </div>
        </article>
        <article className="product-feature travelops-feature" id="travelops">
          <div>
            <span className="status">In development</span>
            <h2>TravelOps</h2>
            <p className="lead">Bring the transport workflow together.</p>
            <p>
              A product being developed around transport requests, bookings,
              scheduling, dispatch and completion records.
            </p>
            <div className="two-col">
              <div>
                <h3>For Operators</h3>
                <p>Transfers, corporate transport and tours.</p>
              </div>
              <div>
                <h3>For Organisations</h3>
                <p>
                  Internal transport requests, approvals and fleet coordination.
                </p>
              </div>
            </div>
            <p className="muted">
              Development scope is not a promise that every feature is ready.
              Contact us to discuss your workflow and the current stage of the
              product.
            </p>
            <Link className="button" href="/contact">
              Discuss TravelOps ↗
            </Link>
          </div>
          <div
            className="workflow-visual"
            aria-label="TravelOps planned workflow"
          >
            <p className="eyebrow">The operational journey</p>
            {[
              "Request & booking",
              "Schedule & dispatch",
              "Driver & vehicle",
              "Completion & reporting",
            ].map((t, i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <strong>{t}</strong>
              </div>
            ))}
            <small>Product direction · In development</small>
          </div>
        </article>
        <article className="product-feature" id="careers">
          <ProjectImage
            src="/portfolio/portfolio-careers.jpg"
            alt="Tokani Careers interface"
          />
          <div>
            <span className="status">Public platform</span>
            <h2>Tokani Careers</h2>
            <p>
              A free Fiji-focused tool for exploring subjects, interests,
              careers and study pathways. Designed to help students, parents and
              teachers start a more informed conversation.
            </p>
            <p className="muted">
              Programme availability and admission requirements should be
              checked with the relevant institution. This is guidance, not an
              admission decision.
            </p>
            <a
              className="text-link"
              href="https://careers.tokani.com.fj"
              target="_blank"
              rel="noreferrer"
            >
              Explore Tokani Careers ↗
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </article>
        <article className="product-feature">
          <ProjectImage
            src="/portfolio/portfolio-quote-my-job.svg"
            alt="Quote My Job costing tool"
          />
          <div>
            <span className="status">Public tool</span>
            <h2>Quote My Job</h2>
            <p>
              A practical job-costing and pricing tool for builders and
              tradespeople. Bring the cost of a job into one calculation before
              deciding what to charge.
            </p>
            <p className="muted">
              Results depend on the figures you enter. Check your costs and
              commercial assumptions before issuing a quote.
            </p>
            <a
              className="text-link"
              href="https://quotemyjob.tokani.com.fj"
              target="_blank"
              rel="noreferrer"
            >
              Explore Quote My Job ↗
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </article>
        <aside className="notice">
          <h3>Demonstrations are labelled separately.</h3>
          <p>
            The FNU Programme Finder is a Tokani demonstration, not an official
            FNU platform. See our portfolio for its current context.
          </p>
          <Link href="/our-work" className="text-link">
            View our work →
          </Link>
        </aside>
      </section>
      <Cta />
    </>
  );
}
