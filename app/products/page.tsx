import Link from "next/link";
import { Breadcrumbs, Cta, PageIntro, ProjectImage } from "../components/ui";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Tokani Products — Practical Tools for Fiji",
  "Explore Tokani Careers, Quote My Job and the TravelOps development programme. See what is public and what is still being built.",
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
        description="Our products tackle specific problems in Fiji. We distinguish public tools from products still in development, so you know what to expect."
      />
      <section className="section wrap compact-top">
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
