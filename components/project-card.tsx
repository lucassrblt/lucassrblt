import { ArrowUpRight } from "lucide-react";
import { SitePreview } from "@/components/site-preview";
import { TiltCard } from "@/components/tilt-card";
import { CountUp } from "@/components/count-up";
import type { Project } from "@/lib/content";

/**
 * Carte réalisation (taille uniforme) : capture du site conçu (SitePreview) +
 * pastille de résultat + légende. Toute la carte mène au site en ligne.
 * Léger tilt 3D au survol.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { metric } = project;

  return (
    <div className="group flex h-full flex-col">
      <TiltCard max={4} className="relative">
        <SitePreview data={project.preview} image={project.image} />

        {/* Lien superposé : toute la preview mène au site */}
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Voir le site ${project.title} (nouvel onglet)`}
          className="absolute inset-0 z-10 rounded-2xl"
        />

        {/* Pastille de résultat (décorative) */}
        <div className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-soft-lg">
          <p className="font-display text-2xl font-extrabold leading-none tracking-tight">
            <CountUp to={metric.to} prefix={metric.prefix} suffix={metric.suffix} />
          </p>
          <p className="mt-1 max-w-[8rem] text-[11px] leading-tight text-primary-foreground/90">
            {metric.label}
          </p>
        </div>
      </TiltCard>

      {/* Légende */}
      <div className="mt-5">
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-display text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          {project.title}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <p className="text-sm text-muted-foreground">{project.sector}</p>
      </div>
    </div>
  );
}
