import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { site, socials } from "@/lib/content";

/**
 * Section Contact, dans l'esprit « Elsewhere » de joulse.com :
 * une phrase d'invitation + une liste de liens externes épurée.
 */
export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <Reveal>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Un projet, une opportunité ou simplement envie d&apos;échanger ?
          Écrivez-moi à{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
          {socials.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between py-3.5 text-sm transition-colors hover:text-muted-foreground"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
