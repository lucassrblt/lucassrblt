import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BadgeSticker } from "@/components/badge-sticker";
import { BrowserMockup } from "@/components/browser-mockup";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hero } from "@/lib/content";

/**
 * Hero « Enseigne » : typographie massive qui casse la grille, gros CTA en
 * pill, réassurance, et un mockup de site (navigateur + téléphone CSS) entouré
 * de stickers inclinés qui flottent.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-foreground"
    >
      {/* Pastille décorative orange en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/15 blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Colonne texte */}
        <div>
          <Reveal>
            <BadgeSticker tone="ink" className="rotate-[-4deg]" wiggle>
              Studio web pour commerçants
            </BadgeSticker>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-tight">
              On crée le site qui fait venir des{" "}
              <span className="relative inline-block text-primary">
                clients
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 bg-primary/30"
                />
              </span>{" "}
              dans votre commerce.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={hero.ctaPrimary.href}
                className={cn(
                  buttonVariants(),
                  "h-12 rounded-full border-2 border-foreground bg-primary px-7 text-base font-extrabold text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 hover:bg-primary",
                )}
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="size-5" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full border-2 border-foreground bg-background px-7 text-base font-bold text-foreground transition-transform hover:-translate-y-0.5",
                )}
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {hero.reassurance.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Colonne visuel : mockup + stickers flottants */}
        <Reveal delay={0.16} className="relative">
          <div className="relative">
            <BrowserMockup
              domain="latabledolivier.fr"
              kind="resto"
              className="rotate-1"
            />

            {/* Mini-téléphone superposé */}
            <div
              aria-hidden
              className="absolute -bottom-8 -left-6 w-24 -rotate-6 overflow-hidden rounded-[1.25rem] border-2 border-foreground bg-card p-1.5 shadow-[4px_4px_0_0_var(--foreground)] sm:w-28"
            >
              <div className="mx-auto mb-1 h-1 w-6 rounded-full bg-foreground/30" />
              <div className="space-y-1.5 rounded-xl bg-primary p-2">
                <div className="h-1.5 w-3/4 rounded-full bg-white/85" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/55" />
                <div className="mt-1 rounded-full bg-white py-1 text-center text-[7px] font-extrabold uppercase text-foreground">
                  Réserver
                </div>
              </div>
            </div>

            {/* Stickers flottants */}
            <BadgeSticker
              tone="orange"
              className="absolute -top-5 -left-4 rotate-[-8deg] animate-float text-[10px]"
            >
              Réservations 24/7
            </BadgeSticker>
            <BadgeSticker
              tone="cobalt"
              className="absolute -right-3 top-1/3 rotate-6 animate-float text-[10px] [animation-delay:1s]"
            >
              SEO Google
            </BadgeSticker>
            <BadgeSticker
              tone="paper"
              className="absolute -bottom-4 right-6 rotate-3 animate-float text-[10px] [animation-delay:0.5s]"
            >
              + de clients
            </BadgeSticker>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
