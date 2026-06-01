import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  /** Petit intitulé en capitales au-dessus du contenu (ex. « Projets »). */
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Conteneur de section réutilisable : largeur contrainte, espacement
 * vertical généreux et intitulé optionnel — pour un rythme cohérent
 * entre Présentation / Projets / Contact.
 */
export function Section({ id, eyebrow, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-24", className)}
    >
      {eyebrow ? (
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      {children}
    </section>
  );
}
