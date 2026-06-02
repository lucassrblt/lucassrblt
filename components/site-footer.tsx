import { site } from "@/lib/content";

/** Footer « biome » : wordmark à gauche, signature discrète à droite. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row">
        <span className="font-display text-xl font-extrabold lowercase tracking-tight">
          {site.name}
          <span className="text-primary">.</span>
        </span>
        <span className="text-muted-foreground">
          {site.name.toUpperCase()} — Studio web
        </span>
      </div>
    </footer>
  );
}
