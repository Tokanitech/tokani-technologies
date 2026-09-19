import Link from "next/link";
import { Breadcrumbs, Cta, PageIntro } from "../components/ui";
import { services } from "../lib/content";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Websites, CRM & Custom Systems",
  "Compare Tokani’s Yavu, Tubu and Qaqa services for Fiji businesses: websites, CRM, workflows and custom applications.",
  "/services",
);
export default function Services() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      </div>
      <PageIntro
        eyebrow="One journey. One Tokani."
        title="Start where you are."
        description="Choose a useful starting point. We will help you work out the scope before you commit."
      />
      <section className="wrap section compact-top">
        <div className="service-grid">
          {services.map((s) => (
            <article className={`service-card stage-${s.number}`} key={s.slug}>
              <div className="card-top">
                <span>{s.number}</span>
                <span>{s.meaning}</span>
              </div>
              <h2>{s.stage}</h2>
              <h3 className="service-subtitle">{s.short}</h3>
              <ul>
                {s.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="price">{s.price}</p>
              <p className="muted">{s.priceNote}</p>
              <Link className="text-link" href={`/services/${s.slug}`}>
                Explore {s.stage} ↗
              </Link>
            </article>
          ))}
        </div>
        <div className="notice">
          <h3>Know what is included before you start.</h3>
          <p>
            Included hosting and software licences apply for the first 12
            months. Your written quotation confirms the exact scope, domain and
            email arrangements, licence allowances, support and renewal costs.
            Renewals and additional work are quoted separately.
          </p>
        </div>
      </section>
      <Cta title="Not sure which stage fits?" />
    </>
  );
}
