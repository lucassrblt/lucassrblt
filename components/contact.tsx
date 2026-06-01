import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { BadgeSticker } from "@/components/badge-sticker";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contact, socials } from "@/lib/content";

/**
 * Section Contact : bloc de couleur pleine (fond orange), gros titre, CTA en
 * pill noir et liens Email / Instagram / LinkedIn.
 */
export function Contact() {
  return (
    <Section
      id="contact"
      width="wide"
      className="border-t-2 border-foreground bg-primary text-primary-foreground"
    >
      <Reveal className="flex justify-center">
        <BadgeSticker tone="ink" wiggle>
          Devis gratuit
        </BadgeSticker>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mx-auto mt-6 max-w-3xl text-center font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] font-extrabold tracking-tight">
          {contact.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-primary-foreground/90">
          {contact.subtitle}
        </p>
      </Reveal>

      <Reveal delay={0.12} className="mt-8 flex justify-center">
        <a
          href={contact.cta.href}
          className={cn(
            buttonVariants(),
            "h-12 rounded-full border-2 border-foreground bg-foreground px-7 text-base font-extrabold text-background shadow-[4px_4px_0_0_var(--background)] transition-transform hover:-translate-y-0.5 hover:bg-foreground",
          )}
        >
          <Mail className="size-5" />
          {contact.cta.label}
        </a>
      </Reveal>

      <Reveal delay={0.18}>
        <ul className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-3 text-sm font-bold">
          {socials.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1 rounded-full border-2 border-foreground bg-background px-4 py-2 text-foreground transition-transform hover:-translate-y-0.5"
              >
                {link.label}
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
