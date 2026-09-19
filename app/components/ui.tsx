import Link from "next/link";
import Image from "next/image";
import { siteUrl } from "../lib/seo";
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        {all.map((item, i) => (
          <span key={item.href}>
            {i > 0 ? <span aria-hidden="true"> / </span> : null}
            {i === all.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: `${siteUrl}${item.href}`,
          })),
        }}
      />
    </>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
      {children}
    </section>
  );
}
export function Cta({
  title = "What are you trying to make easier?",
}: {
  title?: string;
}) {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <p className="eyebrow">A conversation is a good place to start</p>
          <h2>{title}</h2>
          <p>
            Tell us how your business works. We’ll help you find the most useful
            next step.
          </p>
        </div>
        <Link className="button button-white" href="/contact">
          Talk to Tokani <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
export function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`project-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 600px"
        priority={priority}
      />
    </div>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Image
            src="/brand/tokani-logo-transparent.webp"
            alt="Tokani Technologies"
            width={2019}
            height={779}
            sizes="180px"
            className="footer-logo"
          />
          <p>Your friend in technology.</p>
          <p className="muted">
            Built in Fiji. Built for the way we do business.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/our-work">Our work</Link>
          <Link href="/about">Our story & approach</Link>
        </nav>
        <div>
          <a href="mailto:askme@tokani.com.fj">askme@tokani.com.fj</a>
          <a href="tel:+6799021622">+679 902 1622</a>
          <p>Suva, Fiji</p>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <small>
          © {new Date().getFullYear()} Tokani Technologies Pte Limited.
        </small>
        <span>Understand. Simplify. Build.</span>
      </div>
    </footer>
  );
}
