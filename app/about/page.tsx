import { Breadcrumbs, Cta, PageIntro } from "../components/ui";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "About Tokani — Your Friend in Technology",
  "Meet Fiji-based Tokani Technologies and founder Desmond Bale. Learn how we approach websites, CRM and business systems by listening first.",
  "/about",
);
const steps = [
  [
    "Listen",
    "We start with your business, your customers and the way things work today.",
  ],
  [
    "Understand",
    "We find the friction: enquiries, follow-ups, records, bookings or workflow.",
  ],
  [
    "Recommend",
    "We suggest a focused solution and explain the scope, costs and trade-offs.",
  ],
  [
    "Build & grow",
    "We implement, check the work, hand over clearly and agree the next stage of support.",
  ],
];
export default function About() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      </div>
      <PageIntro
        eyebrow="Tokani means friend"
        title="Technology should feel more human."
        description="A good technology partner listens, gives honest advice and helps you move forward without pushing you into things you do not need."
      />
      <section className="section wrap compact-top">
        <div className="split">
          <h2>
            We begin with
            <br />
            the business.
          </h2>
          <div>
            <p>
              Tokani began with a simple idea: technology should feel less
              complicated, more practical and more human.
            </p>
            <p>
              Sometimes the next step is a professional website and business
              email. Sometimes it is better customer follow-up or a workflow
              built around the organisation. Sometimes the best advice is to
              wait.
            </p>
            <p>
              Our goal is to help you use the right technology at the right
              time.
            </p>
          </div>
        </div>
        <div className="founder-card">
          <div>
            <p className="eyebrow">Meet the founder</p>
            <h2>Desmond Bale</h2>
            <p className="founder-role">Founder · Tokani Technologies</p>
          </div>
          <div>
            <p>
              Desmond brings a practical understanding of corporate sales,
              travel and customer service to Tokani’s work. His focus is on
              technology that fits how Fiji businesses operate, with clear
              commercial purpose and room to grow.
            </p>
            <p>
              Based in Suva, he works with clients to understand the problem,
              define a useful first step and keep delivery grounded in the
              business.
            </p>
            <a className="text-link" href="mailto:desmond@tokani.com.fj">
              Contact Desmond directly ↗
            </a>
          </div>
        </div>
        <div className="section-heading" id="approach">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>
              A clear next step.
              <br />
              At every stage.
            </h2>
          </div>
        </div>
        <ol className="process-grid">
          {steps.map(([title, copy], i) => (
            <li key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <div className="values-grid">
          {[
            [
              "We care deeply",
              "About the customer, the business outcome and the quality of our work.",
            ],
            [
              "We listen first",
              "Advice begins with understanding how the business actually works.",
            ],
            [
              "We keep it practical",
              "Clear explanations and technology with a useful job to do.",
            ],
            [
              "We grow together",
              "A relationship that can develop as your needs change.",
            ],
          ].map(([t, p]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
