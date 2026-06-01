import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

/** Section Projets : grille sobre de cartes alimentée par lib/content.ts. */
export function Projects() {
  return (
    <Section id="projects" eyebrow="Projets">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
