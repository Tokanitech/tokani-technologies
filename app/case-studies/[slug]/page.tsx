import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  Cta,
  JsonLd,
  PageIntro,
  ProjectImage,
} from "../../components/ui";
import { caseStudies } from "../../lib/content";
import { jadComparisons } from "../../lib/jad-comparisons";
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
    ? pageMetadata(
        p.seoTitle,
        p.seoDescription,
        `/case-studies/${slug}`,
        p.image,
        "article",
      )
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

  const relatedCaseStudies = Object.entries(caseStudies)
    .filter(([relatedSlug]) => relatedSlug !== slug)
    .slice(0, 3);
  const updatedLabel = new Intl.DateTimeFormat("en-FJ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Pacific/Fiji",
  }).format(new Date(p.dateModified));

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
      >
        <p className="case-updated">
          Case study updated <time dateTime={p.dateModified}>{updatedLabel}</time>
        </p>
      </PageIntro>

      <div
        className={`wrap case-hero ${slug === "unravel-viti" ? "unravel-screenshots" : ""}`}
      >
        <ProjectImage
          src={p.image}
          alt={`${p.name} website developed by Tokani`}
          priority
        />
      </div>

      {slug === "jad" && (
        <>
          <p className="wrap case-hero-caption">
            <strong>Current JAD website:</strong> the second-generation revamp
            builds on Tokani’s original custom website rather than replacing a
            third-party or inherited site.
          </p>

          <section className="wrap jad-comparisons" aria-labelledby="jad-comparison-heading">
            <div className="case-visual-heading">
              <p className="eyebrow">Original website and revamp</p>
              <h2 id="jad-comparison-heading">See what changed, and why.</h2>
              <p>
                Five matching pages show how Tokani refined its original JAD website.
                Each comparison explains the design decision and the intended customer benefit.
              </p>
              <p className="jad-evidence-note">
                Before: original-site screenshots supplied for this review on 6 October 2026.
                After: captures from the revamped build on the same date.
                The supplied captures use different viewport sizes; these comparisons show
                content and layout decisions, rather than a controlled performance test.
                Select any screenshot to inspect it at full size.
              </p>
            </div>
            {jadComparisons.map((comparison) => (
              <article className="jad-comparison" key={comparison.slug} aria-labelledby={`jad-${comparison.slug}-heading`}>
                <p className="eyebrow">{comparison.name}</p>
                <h3 id={`jad-${comparison.slug}-heading`}>{comparison.title}</h3>
                <div className="jad-comparison-grid">
                  {(["before", "after"] as const).map((stage) => {
                    const src = `/portfolio/jad-comparison/${comparison.slug}-${stage}.${stage === "before" ? "webp" : "jpg"}`;
                    return (
                      <figure className="jad-comparison-figure" key={stage}>
                        <figcaption className="jad-stage-label">{stage === "before" ? "Before · Original website" : "After · Tokani revamp"}</figcaption>
                        <a className="jad-screen-frame" href={src} target="_blank" rel="noreferrer" aria-label={`Open ${comparison.name} ${stage} screenshot at full size (opens in a new tab)`}>
                          <Image src={src} alt={`JAD Travel ${comparison.name.toLowerCase()} page ${stage === "before" ? "before the revamp, supplied by the owner" : "after the revamp, captured on 6 October 2026"}`} fill sizes="(max-width: 760px) 100vw, 600px" />
                        </a>
                        <p>{comparison[stage]}</p>
                      </figure>
                    );
                  })}
                </div>
                <div className="jad-comparison-reasons">
                  <p><strong>Why we changed it</strong>{comparison.reason}</p>
                  <p><strong>Intended customer benefit</strong>{comparison.benefit}</p>
                </div>
              </article>
            ))}
            <aside className="notice jad-availability" aria-labelledby="jad-availability-heading">
              <h3 id="jad-availability-heading">Groups and Visa: current pages, without an old-page comparison.</h3>
              <p>
                During the original-site review, the Groups and Visa pages were reported as unavailable.
                No usable before screenshots were supplied for those pages. The revamped build has accessible
                Group Travel and Visa Assistance pages, shown below; this records the current experience
                without claiming we independently diagnosed the old failures.
              </p>
              <div className="jad-comparison-grid">
                {[{ slug: "group", name: "Group Travel" }, { slug: "visa", name: "Visa Assistance" }].map((page) => (
                  <figure className="jad-comparison-figure" key={page.slug}>
                    <figcaption className="jad-stage-label">{page.name} · Revamped page</figcaption>
                    <a className="jad-screen-frame" href={`/portfolio/jad-comparison/${page.slug}-after.jpg`} target="_blank" rel="noreferrer" aria-label={`Open current ${page.name} screenshot at full size (opens in a new tab)`}>
                      <Image src={`/portfolio/jad-comparison/${page.slug}-after.jpg`} alt={`JAD Travel revamped ${page.name.toLowerCase()} page captured on 6 October 2026`} fill sizes="(max-width: 760px) 100vw, 600px" />
                    </a>
                  </figure>
                ))}
              </div>
            </aside>
          </section>

          <section
            className="wrap case-visual-story"
            aria-labelledby="jad-visual-heading"
          >
            <div className="case-visual-heading">
              <p className="eyebrow">Visual evidence</p>
              <h2 id="jad-visual-heading">What changed beyond the interface.</h2>
              <p>
                The revamp uses JAD’s real people and physical presence to make
                the digital experience feel connected to the business customers
                actually deal with.
              </p>
            </div>

            <div className="case-photo-grid">
              <figure className="case-photo-card">
                <div className="case-photo-frame">
                  <Image
                    src="/portfolio/jad-team-current.webp"
                    alt="Current JAD Travel team used as authentic website photography"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <strong>Real people, not generic travel imagery.</strong>
                  Consultants and their expertise were brought forward across
                  the site so customers can see who sits behind the service.
                </figcaption>
              </figure>

              <figure className="case-photo-card">
                <div className="case-photo-frame">
                  <Image
                    src="/portfolio/jad-storefront.jpg"
                    alt="JAD Travel storefront in Suva used as authentic website photography"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <strong>A real Fiji business with a visible local presence.</strong>
                  Storefront photography grounds the website in JAD’s actual
                  Suva operation rather than presenting an anonymous online
                  travel brand.
                </figcaption>
              </figure>
            </div>
          </section>
        </>
      )}

      {slug === "unravel-viti" && (
        <figure className="wrap case-screenshot">
          <Image
            src="/portfolio/unravel-experiences-20260920.jpg"
            alt="Current Unravel Viti experiences page featuring Fiji cultural tours from Suva"
            width={1348}
            height={926}
            sizes="(max-width: 760px) 100vw, 1200px"
          />
          <figcaption>
            Homepage and experiences page, captured from the Unravel Viti build
            on 20 September 2026.
          </figcaption>
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

        <div className="split case-capabilities">
          <p className="eyebrow">Capabilities applied</p>
          <div>
            <h2>What the project required.</h2>
            <div className="capability-grid">
              {p.capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
            <div className="related-services">
              <p className="eyebrow">Related Tokani services</p>
              <div className="related-service-links">
                {p.relatedServices.map((service) => (
                  <Link
                    className="text-link"
                    href={service.href}
                    key={service.href}
                  >
                    {service.label} ↗
                  </Link>
                ))}
              </div>
            </div>
          </div>
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

      <section className="section wrap related-case-studies" aria-labelledby="related-work-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Related case studies</p>
            <h2 id="related-work-heading">More work from Fiji businesses.</h2>
          </div>
          <Link className="text-link" href="/case-studies">
            View all case studies →
          </Link>
        </div>
        <div className="related-case-grid">
          {relatedCaseStudies.map(([relatedSlug, related]) => (
            <article key={relatedSlug} className="related-case-card">
              <p className="eyebrow">{related.name}</p>
              <h3>{related.title}</h3>
              <p>{related.intro}</p>
              <Link className="text-link" href={`/case-studies/${relatedSlug}`}>
                Read the {related.name} case study →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.seoTitle,
          description: p.seoDescription,
          url: `${siteUrl}/case-studies/${slug}`,
          mainEntityOfPage: `${siteUrl}/case-studies/${slug}`,
          image: `${siteUrl}${p.image}`,
          dateModified: p.dateModified,
          inLanguage: "en-FJ",
          articleSection: "Client case studies",
          about: p.capabilities.map((name) => ({ "@type": "Thing", name })),
          isPartOf: {
            "@type": "CollectionPage",
            "@id": `${siteUrl}/case-studies/#collection`,
            name: "Tokani Technologies case studies",
          },
          author: {
            "@id": `${siteUrl}/#organisation`,
            "@type": "Organization",
            name: "Tokani Technologies",
            url: siteUrl,
          },
          publisher: { "@id": `${siteUrl}/#organisation` },
        }}
      />

      <Cta title="Your business deserves the same level of thought." />
    </>
  );
}

