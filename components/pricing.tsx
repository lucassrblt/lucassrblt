import { Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { BadgeSticker } from "@/components/badge-sticker";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans, hero } from "@/lib/content";

/**
 * Section Tarifs : 3 formules. La formule « populaire » est mise en avant
 * (fond orange, sticker incliné, lift permanent).
 */
export function Pricing() {
  return (
    <Section id="tarifs" eyebrow="Tarifs" width="wide">
      <Reveal>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] font-extrabold tracking-tight">
          Des prix clairs, <span className="text-primary">sans surprise</span>.
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <RevealItem key={plan.name}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border-2 border-foreground p-6 shadow-[5px_5px_0_0_var(--foreground)]",
                plan.popular
                  ? "bg-primary text-primary-foreground md:-translate-y-3"
                  : "bg-card text-foreground",
              )}
            >
              {plan.popular ? (
                <BadgeSticker
                  tone="ink"
                  className="absolute -right-3 -top-4 rotate-6 text-[10px]"
                >
                  Le + choisi
                </BadgeSticker>
              ) : null}

              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                {plan.name}
              </h3>
              <p className="mt-2 font-display text-3xl font-extrabold">
                {plan.price}
              </p>

              <ul
                className={cn(
                  "mt-6 flex-1 space-y-3 text-sm",
                  plan.popular ? "text-primary-foreground/90" : "text-muted-foreground",
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-current",
                        plan.popular ? "bg-primary-foreground text-primary" : "bg-foreground text-background",
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={hero.ctaPrimary.href}
                className={cn(
                  buttonVariants(),
                  "mt-8 h-11 rounded-full border-2 border-foreground px-5 text-sm font-extrabold transition-transform hover:-translate-y-0.5",
                  plan.popular
                    ? "bg-foreground text-background hover:bg-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary",
                )}
              >
                Demander un devis
              </a>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
