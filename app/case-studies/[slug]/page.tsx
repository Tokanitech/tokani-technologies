import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  Cta,
  JsonLd,
  PageIntro,
  ProjectImage,
} from "../../components/ui";
import { caseStudies } from "../../lib/content";
import { pageMetadata, siteUrl } from "../../lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = caseStudies[slug];
  return p
    ? pageMetadata(`${p.name} — Case Study`, p.intro, `/case-studies/${slug}`)
    : {};
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = caseStudies[slug];
  if (!p) notFound();
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Our work", href: "/our-work" },
            { label: p.name, href: `/case-studies/${slug}` },
          ]}
        />
      </div>
      <PageIntro
        eyebrow={`${p.name} · ${p.status}`}
        title={p.title}
        description={p.intro}
      />
      <div
        className={`wrap case-hero ${slug === "unravel-viti" ? "unravel-screenshots" : ""}`}
      >
        <ProjectImage
          src={p.image}
          alt={`${p.name} ${"website developed by Tokani"}`}
          priority
        />
      </div>
      {slug === "unravel-viti" && (
        <figure className="wrap case-screenshot">
          <Image
            src="/portfolio/unravel-experiences-20260920.jpg"
            alt="Current Unravel Viti experiences page featuring Fiji cultural tours from Suva"
            width={1348}
            height={926}
            sizes="(max-width: 760px) 100vw, 1200px"
          />
          <figcaption>Homepage and experiences page, captured from the Unravel Viti build on 20 September 2026.</figcaption>
        </figure>
      )}
      <section className="section wrap case-body">
        <div className="split">
          <p className="eyebrow">The challenge</p>
          <div>
            <h2>A clear starting point.</h2>
            <p>{p.challenge}</p>
          </div>
        </div>
        <div className="split">
          <p className="eyebrow">What Tokani built</p>
          <ul className="outcome-list">
            {p.work.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div className="split">
          <p className="eyebrow">Delivery outcome</p>
          <div>
            <h2>Something useful to build on.</h2>
            <p>{p.outcome}</p>
            <div className="notice">
              <h3>Project status</h3>
              <p>{p.boundary}</p>
            </div>
            {p.url ? (
              <a
                className="text-link"
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >
                View the current website{" "}
                <span className="sr-only">(opens in a new tab)</span> ↗
              </a>
            ) : null}
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${p.name}: ${p.title}`,
          description: p.intro,
          mainEntityOfPage: `${siteUrl}/case-studies/${slug}`,
          image: `${siteUrl}${p.image}`,
          author: { "@id": `${siteUrl}/#organisation` },
          publisher: { "@id": `${siteUrl}/#organisation` },
        }}
      />
      <Cta title="Your business deserves the same level of thought." />
    </>
  );
}
