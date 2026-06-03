import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

/**
 * Coquille des pages légales (mentions légales, confidentialité). Volontairement
 * sobre et autonome : ces pages sont « cachées » (accessibles par URL directe,
 * non liées dans le header/footer du site). Un lien « Retour à l’accueil » en
 * haut + un lien croisé vers l’autre page légale en bas suffisent à la navigation.
 * Typographie calée sur les tokens du site (pas de plugin prose).
 */
export function LegalLayout({
  title,
  updatedAt,
  children,
  otherHref,
  otherLabel,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
  otherHref: string;
  otherLabel: string;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Retour à l’accueil
      </Link>

      <header className="mt-8">
        <p className="font-display text-xl font-extrabold lowercase tracking-tight">
          {site.name}
          <span className="text-primary">.</span>
        </p>
        <h1 className="mt-3 font-display text-[clamp(1.9rem,3.8vw,2.6rem)] font-extrabold leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Dernière mise à jour : {updatedAt}
        </p>
      </header>

      {/* Contenu : sections en h2 font-display, corps en muted-foreground */}
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a:hover]:underline [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>

      <footer className="mt-16 border-t border-border pt-6">
        <Link
          href={otherHref}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          {otherLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </footer>
    </main>
  );
}
