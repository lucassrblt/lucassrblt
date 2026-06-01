"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { site, hero } from "@/lib/content";

const navItems = [
  { id: "offres", label: "Offres" },
  { id: "realisations", label: "Réalisations" },
  { id: "tarifs", label: "Tarifs" },
  { id: "contact", label: "Contact" },
];

/**
 * Header « Enseigne » : wordmark bold, nav, gros bouton « Devis ».
 * Une bordure franche apparaît au scroll. Pas de theme-toggle (thème clair).
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled
          ? "border-b-2 border-foreground bg-background/95 backdrop-blur-md"
          : "border-b-2 border-transparent bg-background/70 backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-display text-2xl font-extrabold lowercase tracking-tight transition-transform hover:-rotate-2"
        >
          {site.name}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={hero.ctaPrimary.href}
          className={cn(
            buttonVariants(),
            "h-10 rounded-full border-2 border-foreground bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 hover:bg-primary",
          )}
        >
          Devis
        </a>
      </div>
    </header>
  );
}
