import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { site, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${site.name}`,
  description: `Politique de confidentialité et traitement des données du site ${site.name}.`,
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updatedAt={legal.updatedAt}
      otherHref="/mentions-legales"
      otherLabel="Mentions légales"
    >
      <section>
        <p>
          La présente politique décrit la façon dont {site.name} traite les
          données personnelles, conformément au Règlement général sur la
          protection des données (RGPD) et à la loi « Informatique et Libertés ».
        </p>
      </section>

      <section>
        <h2>Responsable du traitement</h2>
        <p>
          {legal.entityName} ({site.name}). Pour toute question relative à vos
          données : <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      {/* À METTRE À JOUR : compléter « Données collectées » et « Cookies » dès
          l’ajout d’un formulaire/Calendly (#7) et d’outils d’analytics. */}
      <section>
        <h2>Données collectées</h2>
        <p>
          À ce jour, le site ne contient ni formulaire ni traceur. Les seules
          données traitées sont celles que vous nous transmettez{" "}
          <strong>volontairement</strong> lorsque vous nous contactez par email
          (nom, adresse email, contenu de votre message).
        </p>
      </section>

      <section>
        <h2>Finalités et base légale</h2>
        <p>
          Ces données servent uniquement à répondre à votre demande et à établir
          une éventuelle relation commerciale (devis, échange). La base légale
          est l’exécution de mesures précontractuelles prises à votre demande et
          notre intérêt légitime à répondre à vos sollicitations.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>
          Vos données sont conservées le temps nécessaire au traitement de votre
          demande, puis pendant la durée légale applicable en cas de relation
          commerciale. Elles sont ensuite supprimées.
        </p>
      </section>

      <section>
        <h2>Destinataires</h2>
        <p>
          Vos données ne sont ni vendues ni transmises à des tiers à des fins
          commerciales. Le site est hébergé par {legal.host.name} (
          <a href={legal.host.url} target="_blank" rel="noreferrer">
            {legal.host.url}
          </a>
          ), susceptible d’héberger ces données dans le cadre du fonctionnement
          du site.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Le site n’utilise aucun cookie de suivi, de mesure d’audience ou
          publicitaire à ce jour.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification, d’effacement, d’opposition, de limitation et de
          portabilité de vos données. Pour les exercer, écrivez à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
            www.cnil.fr
          </a>
          ).
        </p>
      </section>
    </LegalLayout>
  );
}
