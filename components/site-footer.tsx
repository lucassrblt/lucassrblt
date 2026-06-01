import { site } from "@/lib/content";

/** Footer « Enseigne » : wordmark + signature discrète du fondateur. */
export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row">
        <span className="font-display text-xl font-extrabold lowercase tracking-tight">
          {site.name}
          <span className="text-primary">.</span>
        </span>
        <span className="text-muted-foreground">
          {site.name} — studio web · fondé par {site.founder}
        </span>
      </div>
    </footer>
  );
}
