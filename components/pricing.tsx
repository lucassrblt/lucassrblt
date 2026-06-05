import { Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { BadgeSticker } from "@/components/badge-sticker";
import { BookingButton } from "@/components/booking-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans, includedAll } from "@/lib/content";

/**
 * Section Tarifs : un socle « tout inclus » commun, puis 3 formules qui ne
 * diffèrent que sur le périmètre (effet d'escalier). « Pro » mise en avant.
 */
export function Pricing() {
  return (
    <Section
      id="tarifs"
      eyebrow="Tarifs"
      title="Des formules transparentes, adaptées à tous les budgets."
      lead="Des points de départ clairs — on adapte le périmètre à votre budget, jamais le soin apporté au site. Le tarif final dépend de votre projet, et chaque devis est gratuit et sans engagement."
      width="wide"
    >
      {/* Socle « inclus dans toutes les formules » */}
      <Reveal>
        <div className="mb-8 rounded-2xl border border-border bg-muted/50 p-5 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Inclus dans toutes les formules
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
            {includedAll.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-4 shrink-0 text-primary" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <RevealGroup className="grid items-start gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <RevealItem key={plan.name} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl p-6 shadow-soft",
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-soft-lg md:-translate-y-3"
                  : "border border-border bg-card text-foreground",
              )}
            >
              {plan.popular ? (
                <BadgeSticker
                  tone="ink"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px]"
                >
                  Populaire
                </BadgeSticker>
              ) : null}

              <h3 className="text-sm font-bold uppercase tracking-wide">
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground",
                )}
              >
                {plan.tagline}
              </p>
              <p className="mt-4 font-display text-3xl font-extrabold tracking-tight">
                {plan.price}
              </p>

              {plan.inherits ? (
                <p
                  className={cn(
                    "mt-6 text-xs font-bold uppercase tracking-wide",
                    plan.popular ? "text-primary-foreground/80" : "text-primary",
                  )}
                >
                  {plan.inherits}
                </p>
              ) : null}

              <ul
                className={cn(
                  "flex-1 space-y-3 text-sm",
                  plan.inherits ? "mt-3" : "mt-6",
                  plan.popular ? "text-primary-foreground/90" : "text-foreground/80",
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.popular ? "text-primary-foreground" : "text-primary",
                      )}
                      strokeWidth={3}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <BookingButton
                magnetic
                className={cn(
                  buttonVariants(),
                  "mt-8 h-11 rounded-full px-5 text-sm font-bold",
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background"
                    : "bg-primary text-primary-foreground shadow-soft hover:bg-primary",
                )}
              >
                Demander un devis
              </BookingButton>
              <p
                className={cn(
                  "mt-3 text-center text-xs",
                  plan.popular ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                Devis gratuit · sans engagement
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
