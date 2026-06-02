import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id?: string;
  /** Petit intitulé en capitales au-dessus du titre. */
  eyebrow?: string;
  /** Titre de section (les mots à surligner passent en <span className="text-primary">). */
  title?: ReactNode;
  /** Phrase d'accroche sous le titre. */
  lead?: ReactNode;
  /** Élément aligné à droite du titre (ex. bouton « Voir tout ») — mode non-split. */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Largeur du conteneur interne. */
  width?: "default" | "wide";
  /**
   * Layout v4 : titre dans une colonne de gauche, contenu à droite.
   * Sinon : header (titre + action) puis contenu pleine largeur dessous.
   */
  split?: boolean;
  /** Section sur fond foncé : adapte la couleur de l'intitulé. */
  dark?: boolean;
};

function Heading({
  eyebrow,
  title,
  lead,
  dark,
}: Pick<SectionProps, "eyebrow" | "title" | "lead" | "dark">) {
  return (
    <div>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase",
            dark ? "text-accent" : "text-primary",
          )}
        >
          <span aria-hidden className="h-px w-6 bg-current" />
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-balance">
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Conteneur de section : padding vertical généreux (respiration v4), avec deux
 * dispositions — `split` (titre à gauche / contenu à droite) ou empilée (titre +
 * action en haut, contenu pleine largeur dessous).
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  action,
  children,
  className,
  width = "default",
  split = false,
  dark = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-24 sm:py-32", className)}>
      <div
        className={cn(
          "mx-auto w-full px-6",
          width === "wide" ? "max-w-6xl" : "max-w-5xl",
        )}
      >
        {split ? (
          <div className="grid gap-10 lg:grid-cols-[17rem_1fr] lg:gap-16">
            <Reveal>
              <Heading eyebrow={eyebrow} title={title} lead={lead} dark={dark} />
            </Reveal>
            <div>{children}</div>
          </div>
        ) : (
          <>
            {eyebrow || title || action ? (
              <Reveal className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <Heading
                  eyebrow={eyebrow}
                  title={title}
                  lead={lead}
                  dark={dark}
                />
                {action ? <div className="shrink-0">{action}</div> : null}
              </Reveal>
            ) : null}
            {children}
          </>
        )}
      </div>
    </section>
  );
}
