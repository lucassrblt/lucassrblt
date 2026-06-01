import { Star } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { testimonials } from "@/lib/content";

/**
 * Section Témoignages : 3 cartes « affiche » avec 5 étoiles et citation.
 * Contenu placeholder réaliste, éditable dans lib/content.ts.
 */
export function Testimonials() {
  return (
    <Section id="temoignages" eyebrow="Ils en parlent" width="wide">
      <Reveal>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] font-extrabold tracking-tight">
          Des commerçants <span className="text-primary">contents</span>.
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.author}>
            <figure className="flex h-full flex-col rounded-2xl border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)]">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-xl font-bold leading-snug tracking-tight">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold">
                {t.author}
                <span className="font-normal text-muted-foreground"> — {t.business}</span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
