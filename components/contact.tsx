import type { ComponentType, SVGProps } from "react";
import { Mail, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { booking, contact, socials } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

/* lucide-react (cette version) ne fournit plus les icônes de marque : SVG inline. */
function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialIcons: Record<string, ComponentType<IconProps>> = {
  Email: Mail,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
};

/**
 * Section Contact : bloc teal foncé arrondi avec forme organique en fond,
 * gros titre, CTA (magnétique) et liens Email / Instagram / LinkedIn.
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#17403e] px-8 py-14 text-background sm:px-14 sm:py-16">
            {/* Forme organique en fond */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-primary/30"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 right-1/3 size-56 rounded-full bg-secondary/20 blur-2xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  <span aria-hidden className="h-px w-6 bg-current" />
                  Contact
                </p>
                <h2 className="max-w-xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight">
                  {contact.title}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-background/75">
                  {contact.subtitle}
                </p>

                {booking.url ? (
                  /* RDV en ligne configuré : prise de rendez-vous en CTA principal
                     (convertit mieux qu'un mailto), devis par email en repli. */
                  <div className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                      <MagneticButton
                        href={booking.url}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants(),
                          "h-12 rounded-full bg-background px-7 text-base font-bold text-foreground shadow-soft-lg hover:bg-background",
                        )}
                      >
                        <CalendarCheck className="size-5" />
                        {booking.label}
                      </MagneticButton>
                      <a
                        href={contact.cta.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-background/85 underline-offset-4 transition-colors hover:text-background hover:underline"
                      >
                        <Mail className="size-4" />
                        ou demandez un devis par email
                      </a>
                    </div>
                    <p className="text-sm text-background/60">{booking.note}</p>
                  </div>
                ) : (
                  /* Pas encore de lien RDV : on garde le devis par email. */
                  <MagneticButton
                    href={contact.cta.href}
                    className={cn(
                      buttonVariants(),
                      "mt-8 h-12 rounded-full bg-background px-7 text-base font-bold text-foreground shadow-soft-lg hover:bg-background",
                    )}
                  >
                    <Mail className="size-5" />
                    {contact.cta.label}
                  </MagneticButton>
                )}
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold lg:flex-col lg:items-end">
                {socials.map((link) => {
                  const Icon = socialIcons[link.label] ?? Mail;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-background/85 transition-colors hover:text-background"
                      >
                        <Icon className="size-4" strokeWidth={2} />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
