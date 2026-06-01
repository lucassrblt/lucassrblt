import { Marquee } from "@/components/marquee";
import { audiences } from "@/lib/content";

/**
 * Bandeau « Pour qui » : bloc de couleur pleine (fond noir) avec un marquee
 * des types de commerces qui défile. Casse le rythme entre hero et offres.
 */
export function Audience() {
  return (
    <section
      aria-label="Pour qui"
      className="overflow-hidden border-b-2 border-foreground bg-foreground py-5 text-background"
    >
      <Marquee
        items={audiences}
        className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl"
      />
    </section>
  );
}
