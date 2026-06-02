import { Star } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { testimonials } from "@/lib/content";

/**
 * Section Témoignages (layout split) : titre à gauche, 3 cartes à droite —
 * avatar (placeholder) + nom + métier + citation + 5 étoiles.
 */
export function Testimonials() {
  return (
    <Section
      id="temoignages"
      eyebrow="Témoignages"
      title="Des commerçants satisfaits, des résultats qui parlent."
      width="wide"
    >
      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.author} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                {/* TODO: remplacer par la vraie photo (next/image) */}
                <PlaceholderImage
                  rounded="rounded-full"
                  className="size-11 shrink-0"
                />
                <figcaption>
                  <p className="text-sm font-bold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                « {t.quote} »
              </blockquote>
              <div className="mt-5 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
