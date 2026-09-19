import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Cta, PageIntro } from "../../components/ui";
import { services } from "../../lib/content";
import { pageMetadata } from "../../lib/seo";
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
        {s.example ? (
          <Link href={`/case-studies/${s.example}`} className="section-link">
            See the Unravel Viti project →
          </Link>
        ) : (
          <Link href="/our-work" className="section-link">
            Explore related Tokani work →
          </Link>
        )}
      </section>
      <Cta />
    </>
  );
}
