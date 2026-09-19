import Link from "next/link";
import { ProjectImage } from "./ui";
import { projects } from "../lib/content";
export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="project-card">
      <Link
        href={project.href}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noreferrer" : undefined}
        aria-label={`${project.label}: ${project.name}${project.external ? " (opens in a new tab)" : ""}`}
      >
        <ProjectImage
          src={project.image}
          alt={`${project.name} website project`}
        />
        <div className="project-meta">
          <span className="eyebrow">{project.category}</span>
          <span className="status">{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <span className="text-link">
          {project.label} <span aria-hidden="true">↗</span>
        </span>
      </Link>
    </article>
  );
}
