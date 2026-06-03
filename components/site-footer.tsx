import { site } from "@/lib/content";

/** Footer « biome » : wordmark à gauche, signature discrète à droite. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/biome.svg" alt={site.name} className="h-10 w-auto" />
        <span className="text-muted-foreground">
          {site.name.toUpperCase()} — Studio web
        </span>
      </div>
    </footer>
  );
}
