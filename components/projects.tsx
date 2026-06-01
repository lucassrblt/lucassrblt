import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

/** Section Réalisations : grille de cartes avec mockups CSS. */
export function Projects() {
  return (
    <Section id="realisations" eyebrow="Réalisations" width="wide">
      <Reveal>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] font-extrabold tracking-tight">
          Des sites qui <span className="text-primary">travaillent</span> pour leurs commerçants.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
