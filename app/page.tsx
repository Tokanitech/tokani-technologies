import Link from "next/link";
import { Cta, ProjectImage } from "./components/ui";
import ProjectCard from "./components/project-card";
import { projects, services } from "./lib/content";
import { pageMetadata } from "./lib/seo";
export const metadata = pageMetadata(
  "Websites & Business Systems in Fiji",
  "Websites, CRM and custom business systems for Fiji businesses. Meet Tokani Technologies, explore our work and find a practical place to start.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="home-hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Built in Fiji · Your friend in technology</p>
          <h1>
            Good technology.
            <br />
            <span>Built around you.</span>
          </h1>
          <p className="lead">
            Websites, CRM and practical business systems for the way Fiji works.
          </p>
          <p className="hero-description">
            Start with what your business needs today. We’ll help you make the
            next step clearer.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              Let’s talk about your business ↗
            </Link>
            <Link className="text-link" href="/our-work">
              Explore our work →
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-label">
            <span>From a business idea</span>
            <span>to something useful ↘</span>
          </div>
          <ProjectImage
            src="/portfolio/portfolio-unravel.jpg"
            alt="Unravel Viti website developed by Tokani"
            priority
          />
          <div className="hero-caption">
            <div>
              <span className="eyebrow">Selected work</span>
              <strong>Unravel Viti</strong>
              <span>Community-led tourism & transport</span>
            </div>
            <Link
              href="/case-studies/unravel-viti"
              aria-label="Read the Unravel Viti case study"
            >
              ↗
            </Link>
          </div>
        </div>
      </section>
      <div className="principle-strip">
        <div className="wrap">
          <p>Understand the problem.</p>
          <p>Keep the solution practical.</p>
          <p>Build something useful.</p>
        </div>
      </div>
      <section className="section wrap" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Yavu. Tubu. Qaqa.</p>
            <h2>
              A friend for
              <br />
              every stage.
            </h2>
          </div>
          <p>
            A strong foundation. More organised follow-up. A system built around
            your organisation. Start where you are.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <article className={`service-card stage-${s.number}`} key={s.slug}>
              <div className="card-top">
                <span>{s.number}</span>
                <span>{s.meaning}</span>
              </div>
              <h3>{s.stage}</h3>
              <h4>{s.short}</h4>
              <p>{s.includes.slice(0, 2).join(". ")}.</p>
              <Link href={`/services/${s.slug}`} className="text-link">
                {s.number === "01"
                  ? "Websites & digital foundations"
                  : s.number === "02"
                    ? "CRM & business workflows"
                    : "Custom systems & applications"}{" "}
                ↗
              </Link>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/services">
          Compare services and starting prices →
        </Link>
      </section>
      <section className="section work-band" id="work">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Local businesses.
                <br />
                Thoughtful digital work.
              </h2>
            </div>
            <Link className="text-link" href="/our-work">
              View the portfolio ↗
            </Link>
          </div>
          <div id="case-studies" className="project-grid home-projects">
            {[projects[1], projects[2], projects[3]].map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap product-summary" id="platforms">
        <div>
          <p className="eyebrow">Tokani products</p>
          <h2>
            Practical tools.
            <br />
            Real local context.
          </h2>
          <p className="lead">
            From career exploration to managing transport, our own products
            begin with the same question: what would make this easier?
          </p>
          <Link className="text-link" href="/products">
            Explore products and their status ↗
          </Link>
        </div>
        <div className="product-list">
          <Link href="/products#travelops">
            <span className="status">In development</span>
            <h3>TravelOps</h3>
            <p>Transport operations for operators and organisations.</p>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/products#careers" id="education-case">
            <span className="status">Public platform</span>
            <h3>Tokani Careers</h3>
            <p>Explore Fiji study and career pathways.</p>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="about-band" id="story">
        <div className="wrap about-summary" id="approach">
          <div>
            <p className="eyebrow">Tokani means friend</p>
            <h2>
              We begin with
              <br />
              the business.
            </h2>
          </div>
          <div>
            <p>
              You should not have to become a technology expert to make a good
              decision. We listen, explain the options and recommend what makes
              sense—even when that means keeping things simple.
            </p>
            <Link className="text-link" href="/about">
              Our story and how we work ↗
            </Link>
          </div>
        </div>
      </section>
      <div id="contact">
        <Cta />
      </div>
    </>
  );
}
