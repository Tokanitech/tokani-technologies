import Link from "next/link";
import { Breadcrumbs, Cta, PageIntro, ProjectImage } from "../components/ui";
import { pageMetadata } from "../lib/seo";
import { caseStudies } from "../lib/content";
export const metadata = pageMetadata(
  "Tokani Products — Practical Tools for Fiji",
  "Explore Tala Leka logistics technology, Tokani Careers, Quote My Job and TravelOps. See public tools, client deployments and products in development.",
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
        <article className="product-feature tala-product-feature" id="tala-leka">
          <ProjectImage
            src={caseStudies["tala-leka"].image}
            alt="Tala Leka operations dashboard — fictional simulation data"
          />
          <div>
            <span className="status">Controlled rollout · Client deployment</span>
            <h2>Tala Leka</h2>
            <p className="lead">Connected last-mile fulfilment management.</p>
            <p>
              Logistics technology developed by Tokani for Unravel Viti, bringing
              merchant order intake, dispatch, mobile driver workflows and digital
              proof of delivery together in one operational platform.
            </p>
            <div className="two-col">
              <div><h3>For logistics operators</h3><p>Coordinate deliveries, drivers, exceptions and reporting.</p></div>
              <div><h3>For merchants</h3><p>Register orders, track delivery outcomes and review monthly statements.</p></div>
            </div>
            <p className="muted">
              Unravel Viti operates the Tala Leka fulfilment service. The platform is
              in controlled rollout, with NewWorld as its initial use case. It is not
              a public self-service subscription. All displayed examples use fictional data.
            </p>
            <Link className="button" href="/case-studies/tala-leka">Explore the system &amp; screenshots ↗</Link>
            <p><Link className="text-link" href="/contact">Discuss logistics technology with Tokani →</Link></p>
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
