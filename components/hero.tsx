import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { site, stack } from "@/lib/content";

/**
 * Section Présentation : pas de hero décoratif, on va droit au but
 * (nom + rôle + accroche), avec les badges de stack et un lien vers le contact.
 */
export function Hero() {
  return (
    <Section id="about" className="pt-20 sm:pt-28">
      <Reveal>
        <p className="text-sm text-muted-foreground">{site.role}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {site.tagline}
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <Link
          href="#contact"
          className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-muted-foreground"
        >
          Me contacter
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </Section>
  );
}
