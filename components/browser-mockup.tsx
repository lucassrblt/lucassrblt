import { cn } from "@/lib/utils";

type MockupKind = "immo" | "resto" | "fleuriste";

const palettes: Record<MockupKind, { bar: string; accent: string; tag: string }> = {
  immo: { bar: "bg-secondary", accent: "bg-secondary", tag: "À vendre" },
  resto: { bar: "bg-primary", accent: "bg-primary", tag: "Réserver" },
  fleuriste: { bar: "bg-[#c0397a]", accent: "bg-[#c0397a]", tag: "Commander" },
};

/**
 * Mockup de site en CSS pur : cadre navigateur avec une fausse page de
 * commerce (hero + grille de cartes). Décoratif, aria-hidden.
 */
export function BrowserMockup({
  domain,
  kind,
  className,
}: {
  domain: string;
  kind: MockupKind;
  className?: string;
}) {
  const p = palettes[kind];

  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden rounded-xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)]",
        className,
      )}
    >
      {/* Barre du navigateur */}
      <div className="flex items-center gap-2 border-b-2 border-foreground bg-muted px-3 py-2">
        <span className="size-2.5 rounded-full bg-primary" />
        <span className="size-2.5 rounded-full bg-secondary" />
        <span className="size-2.5 rounded-full bg-foreground/30" />
        <span className="ml-2 flex-1 truncate rounded-full bg-background px-3 py-1 text-[10px] font-semibold text-muted-foreground">
          {domain}
        </span>
      </div>

      {/* Faux contenu du site */}
      <div className="space-y-3 p-3">
        {/* Hero du faux site */}
        <div className={cn("relative overflow-hidden rounded-lg p-3", p.bar)}>
          <div className="h-1.5 w-2/3 rounded-full bg-white/85" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/55" />
          <div className="mt-2.5 inline-block rounded-full bg-white px-2 py-1 text-[8px] font-extrabold uppercase text-foreground">
            {p.tag}
          </div>
        </div>

        {/* Grille de cartes du faux site */}
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="space-y-1.5 rounded-md border border-border bg-background p-1.5"
            >
              <div className="h-8 rounded bg-muted" />
              <div className="h-1 w-full rounded-full bg-foreground/20" />
              <div className="h-1 w-2/3 rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
