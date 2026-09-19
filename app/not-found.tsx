import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">Page not found</p>
      <h1>Let’s get you back on track.</h1>
      <p className="lead">
        This page may have moved. Explore our services or get in touch.
      </p>
      <div className="actions">
        <Link className="button" href="/services">
          Explore services ↗
        </Link>
        <Link href="/contact" className="text-link">
          Contact Tokani →
        </Link>
      </div>
    </section>
  );
}
