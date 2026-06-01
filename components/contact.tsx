import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cta, site, socials } from "@/lib/content";

/**
 * Section Contact — appel à l'action orienté client, puis liste de liens
 * externes épurée dans l'esprit « Elsewhere » de joulse.com.
 */
export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">{cta.title}</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {cta.subtitle}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href={`mailto:${site.email}`}
          className={cn(buttonVariants({ size: "lg" }), "mt-6")}
        >
          <Mail className="size-4" />
          {site.email}
        </a>
      </Reveal>

      <RevealGroup className="mt-10 divide-y divide-border/60 border-y border-border/60">
        {socials.map((link) => (
          <RevealItem key={link.href}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between py-3.5 text-sm transition-colors hover:text-muted-foreground"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
