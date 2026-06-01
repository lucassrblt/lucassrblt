import { AppWindow, Database, Rocket } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { services } from "@/lib/content";

// Icône associée à chaque service (même ordre que lib/content.ts).
const icons = [AppWindow, Database, Rocket];

/**
 * Mini-section « Ce que je fais » : clarifie l'offre pour rassurer un client,
 * en trois points concis et révélés en cascade. Reste minimaliste.
 */
export function Services() {
  return (
    <Section id="services" eyebrow="Ce que je fais">
      <RevealGroup className="grid gap-8 sm:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[i] ?? AppWindow;
          return (
            <RevealItem key={service.title}>
              <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="mt-3 text-sm font-medium">{service.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
