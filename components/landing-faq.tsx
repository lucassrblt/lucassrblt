import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import type { LandingFaqItem } from "@/lib/content";

/**
 * FAQ d'une landing page : contenu toujours visible (meilleur pour le crawl)
 * + données structurées FAQPage (éligibilité aux résultats enrichis Google).
 * Le contenu de chaque page étant unique, le schéma l'est aussi.
 */
export function LandingFaq({ items }: { items: LandingFaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section id="faq" eyebrow="FAQ" title="Questions fréquentes">
      {/* Données = <script> natif ; on échappe « < » pour neutraliser le XSS. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Reveal>
        <dl className="divide-y divide-border">
          {items.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-display text-lg font-bold tracking-tight">
                {item.question}
              </dt>
              <dd className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
