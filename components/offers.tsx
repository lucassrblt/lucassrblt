import { Store, CalendarCheck, MapPin, Palette, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { offers } from "@/lib/content";

const icons: LucideIcon[] = [Store, CalendarCheck, MapPin, Palette];

/**
 * Section Offres : 4 cartes franches, bord épais et ombre portée « affiche ».
 * Survol = léger lift + bascule de couleur de l'icône.
 */
export function Offers() {
  return (
    <Section id="offres" eyebrow="Nos offres" width="wide">
      <Reveal>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] font-extrabold tracking-tight">
          Tout ce qu&apos;il faut pour <span className="text-primary">vendre en ligne</span>.
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
        {offers.map((offer, i) => {
          const Icon = icons[i] ?? Store;
          return (
            <RevealItem key={offer.title}>
              <div className="group h-full rounded-2xl border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-1 hover:-rotate-1">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border-2 border-foreground bg-accent text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                  {offer.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
