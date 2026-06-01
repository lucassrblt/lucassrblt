import { site } from "@/lib/content";

/** Footer minimal. L'année est statique (squelette) — à rendre dynamique si besoin. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8 text-xs text-muted-foreground">
        <span>
          © {site.name}
        </span>
        <span>Conçu avec Next.js &amp; Tailwind</span>
      </div>
    </footer>
  );
}
