import { RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

/**
 * Section Réalisations : grille uniforme des projets (2×2 sur desktop), chaque
 * carte montrant la capture du site conçu + son résultat, cliquable vers le live.
 */
export function Projects() {
  return (
    <Section
      id="realisations"
      eyebrow="Réalisations"
      title={
        <>
          Des sites qui génèrent
          <br className="hidden sm:block" /> des{" "}
          <span className="text-primary">résultats concrets</span>.
        </>
      }
      width="wide"
    >
      <RevealGroup className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.title} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
