import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { process } from "@/lib/content";

/**
 * Section « Comment ça marche » : bloc de couleur pleine (fond noir, texte
 * clair). 4 étapes numérotées en gros chiffres orange.
 */
export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Comment ça marche"
      width="wide"
      className="border-y-2 border-foreground bg-foreground text-background"
    >
      <Reveal>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] font-extrabold tracking-tight">
          De l&apos;idée au site en ligne, <span className="text-primary">en 4 étapes</span>.
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step) => (
          <RevealItem key={step.number}>
            <div className="h-full rounded-2xl border-2 border-background/30 bg-background/5 p-6">
              <span className="font-display text-5xl font-extrabold text-primary">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">
                {step.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
