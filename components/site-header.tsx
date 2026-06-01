import Link from "next/link";
import { site } from "@/lib/content";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * Header minimal et translucide, façon joulse.com :
 * le nom à gauche (retour en haut), les ancres de navigation à droite.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-sm font-medium tracking-tight transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
