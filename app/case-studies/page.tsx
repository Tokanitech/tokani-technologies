import { Breadcrumbs, Cta, JsonLd, PageIntro } from "../components/ui";
import ProjectCard from "../components/project-card";
import { caseStudies, projects } from "../lib/content";
import { pageMetadata, siteUrl } from "../lib/seo";

export const metadata = pageMetadata(
  "Fiji Website & Digital Case Studies",
  "Detailed Tokani case studies covering Fiji website development, travel-industry UX, local SEO, interactive tools and practical digital systems.",
  "/case-studies",
);

export default function CaseStudiesPage() {
  const caseStudyProjects = projects.filter((project) =>
    Object.prototype.hasOwnProperty.call(caseStudies, project.slug),
  );

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[{ label: "Case studies", href: "/case-studies" }]}
        />
      </div>

      <PageIntro
        eyebrow="Client case studies"
        title="Fiji businesses. Real digital work."
        description="Detailed examples of how Tokani approaches website development, travel-industry UX, search foundations and practical digital tools around the way each business actually works."
      />

      <section className="section wrap compact-top">
        <div className="project-grid">
          {caseStudyProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${siteUrl}/case-studies/#collection`,
          name: "Tokani Technologies case studies",
          description:
            "Fiji website development and digital project case studies from Tokani Technologies.",
          url: `${siteUrl}/case-studies`,
          inLanguage: "en-FJ",
          hasPart: caseStudyProjects.map((project) => ({
            "@type": "Article",
            name: caseStudies[project.slug].seoTitle,
            url: `${siteUrl}/case-studies/${project.slug}`,
          })),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: caseStudyProjects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: caseStudies[project.slug].name,
              url: `${siteUrl}/case-studies/${project.slug}`,
            })),
          },
        }}
      />

      <Cta title="What should your next digital project make easier?" />
    </>
  );
}
