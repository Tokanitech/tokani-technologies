import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Cta, JsonLd, PageIntro } from "../../components/ui";
import { caseStudies, services } from "../../lib/content";
import { pageMetadata, siteUrl } from "../../lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? pageMetadata(s.title, s.description, `/services/${s.slug}`) : {};
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();

  const relatedCaseSlugs =
    slug === "website-development"
      ? ["jad", "unravel-viti", "vatudei"]
      : slug === "custom-systems"
        ? ["dfc"]
        : [];

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: s.stage, href: `/services/${s.slug}` },
          ]}
        />
      </div>
      <PageIntro
        eyebrow={`${s.stage} — ${s.meaning}`}
        title={s.title}
        description={s.description}
      >
        <div className="actions">
          <Link href="/contact" className="button">
            Discuss your project ↗
          </Link>
          <span className="price-inline">{s.price}</span>
        </div>
      </PageIntro>
      <section className="section wrap compact-top">
        <div className="split">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2>{s.short}</h2>
            <p>{s.fit}</p>
          </div>
          <ul className="outcome-list">
            {s.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
        <div className="detail-grid">
          {s.deliverables.map(([title, copy], i) => (
            <article key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="notice">
          <h3>A clear scope comes first.</h3>
          <p>{s.boundary}</p>
          <p>
            Included hosting and software licences apply for the first 12
            months; renewals are quoted separately.
          </p>
        </div>
        {relatedCaseSlugs.length > 0 ? (
          <div className="service-case-links">
            <p className="eyebrow">Related case studies</p>
            {relatedCaseSlugs.map((caseSlug) => (
              <Link
                href={`/case-studies/${caseSlug}`}
                className="section-link"
                key={caseSlug}
              >
                {caseStudies[caseSlug].name}: {caseStudies[caseSlug].title} →
              </Link>
            ))}
            <Link href="/case-studies" className="text-link">
              Browse all Tokani case studies →
            </Link>
          </div>
        ) : (
          <Link href="/our-work" className="section-link">
            Explore related Tokani work →
          </Link>
        )}
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${siteUrl}/services/${s.slug}`,
          provider: { "@id": `${siteUrl}/#organisation` },
          areaServed: { "@type": "Country", name: "Fiji" },
          offers: {
            "@type": "Offer",
            priceCurrency: "FJD",
            price:
              s.slug === "website-development"
                ? "500"
                : s.slug === "crm-workflows"
                  ? "1650"
                  : "2500",
            url: `${siteUrl}/services/${s.slug}`,
          },
        }}
      />

      <Cta />
    </>
  );
}
