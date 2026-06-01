import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  /** Petit intitulé en capitales au-dessus du contenu. */
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  /** Largeur du conteneur interne. */
  width?: "default" | "wide";
};

/**
 * Conteneur de section : padding vertical généreux, conteneur centré et
 * intitulé optionnel. Les blocs de couleur pleine (fond orange / noir) sont
 * posés via `className` au niveau de la section ; le contenu reste centré.
 */
export function Section({
  id,
  eyebrow,
  children,
  className,
  width = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div
        className={cn(
          "mx-auto w-full px-6",
          width === "wide" ? "max-w-6xl" : "max-w-5xl",
        )}
      >
        {eyebrow ? (
          <p className="mb-4 inline-block -rotate-1 rounded-full border-2 border-current px-3 py-1 text-xs font-extrabold tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
