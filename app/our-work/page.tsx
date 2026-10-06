import Link from "next/link";
import { Breadcrumbs, Cta, PageIntro } from "../components/ui";
import ProjectCard from "../components/project-card";
import { projects } from "../lib/content";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Our Work — Fiji Websites & Digital Products",
  "Explore Tokani’s client websites and integrations, public tools, work in development and demonstrations. Start with JAD Travel, DFC and Unravel Viti.",
  "/our-work",
);

const workGroups = [
  {
    id: "client-websites",
    title: "Client websites & integrations",
    description: "Business websites, customer enquiry journeys and custom features. Explore the case studies to see what changed and why.",
    slugs: ["jad", "dfc", "unravel-viti", "macquarie"],
  },
  {
    id: "public-tools",
    title: "Public tools",
    description: "Tokani tools you can explore today, built around practical needs in Fiji.",
    slugs: ["quote-my-job", "careers"],
  },
  {
    id: "in-development",
    title: "Work in development",
    description: "Client work still being developed. The project details explain its scope and current stage.",
    slugs: ["vatudei"],
  },
  {
    id: "demonstrations",
    title: "Demonstrations",
    description: "Examples of an approach or capability, with their demonstration status clearly identified.",
    slugs: ["fnu"],
  },
];

export default function Work() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Our work", href: "/our-work" }]} />
      </div>
      <PageIntro
        eyebrow="The work behind the words"
        title="Built with purpose."
        description="Start with our client websites and integrations, then explore public tools, work in development and demonstrations. Each project shows its current status."
      >
        <nav className="work-category-links" aria-label="Work categories">
          {workGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>{group.title} <span>({group.slugs.length})</span></a>
          ))}
        </nav>
      </PageIntro>
      {workGroups.map((group, index) => (
        <section key={group.id} className={`section wrap work-category${index === 0 ? " compact-top" : ""}`} aria-labelledby={group.id}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} · {group.slugs.length} {group.slugs.length === 1 ? "project" : "projects"}</p>
              <h2 id={group.id}>{group.title}</h2>
              <p>{group.description}</p>
            </div>
            {index === 0 && <Link className="text-link" href="/case-studies">Browse detailed case studies →</Link>}
          </div>
          <div className="project-grid">
            {group.slugs.map((slug) => {
              const project = projects.find((project) => project.slug === slug);
              return project ? <ProjectCard key={project.slug} project={project} /> : null;
            })}
          </div>
        </section>
      ))}
      <Cta />
    </>
  );
}
