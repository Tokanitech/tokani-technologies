"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ProjectImage } from "./ui";

type WorkExample = { slug: string; name: string; image: string; summary: string; href: string };

export default function WorkShowcase({ examples }: { examples: WorkExample[] }) {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const project = examples[selected];

  return (
    <div className="hero-visual work-showcase">
      <div className="hero-visual-label">
        <span>Built around real businesses</span>
        <span>Take a closer look ↘</span>
      </div>
      <div className="showcase-controls" role="group" aria-label="Choose a project to preview">
        {examples.map((example, index) => (
          <button
            key={example.slug}
            type="button"
            aria-pressed={selected === index}
            aria-controls={panelId}
            onClick={() => setSelected(index)}
          >
            {example.name === "Discount Flight Centre" ? "DFC" : example.name}
          </button>
        ))}
      </div>
      <div id={panelId}>
        <div key={project.slug} className="showcase-enter">
          <ProjectImage src={project.image} alt={project.slug === "tala-leka" ? "Tala Leka operations dashboard — simulation data" : `${project.name} website developed by Tokani`} priority={selected === 0} />
          <div className="hero-caption">
            <div aria-live="polite" aria-atomic="true">
              <span className="eyebrow">Selected work</span>
              <strong>{project.name}</strong>
              <span>{project.summary}</span>
            </div>
            <Link href={project.href} aria-label={`Read the ${project.name} case study`}>↗</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
