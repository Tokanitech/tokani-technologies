import { Breadcrumbs, Cta, PageIntro } from "../components/ui";
import ProjectCard from "../components/project-card";
import { projects } from "../lib/content";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Our Work — Fiji Websites & Digital Products",
  "Explore Tokani’s website projects, client case studies, community tools and demonstrations, including Unravel Viti, Vatudei, DFC and JAD.",
  "/our-work",
);
export default function Work() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Our work", href: "/our-work" }]} />
      </div>
      <PageIntro
        eyebrow="The work behind the words"
        title="Built with purpose."
        description="Client websites, Tokani products and focused demonstrations. Each project is labelled so you can see what has been built and where it stands."
      />
      <section className="section wrap compact-top">
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
