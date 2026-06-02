"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic";
import { site, hero } from "@/lib/content";

const navItems = [
  { id: "offres", label: "Offres" },
  { id: "realisations", label: "Réalisations" },
  { id: "tarifs", label: "Tarifs" },
  { id: "contact", label: "Contact" },
];

/**
 * Header « Biome » : wordmark bold, nav, gros bouton « Devis ».
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
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur",
      )}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-6 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="#top"
          className="justify-self-start font-display text-2xl font-extrabold lowercase tracking-tight transition-opacity hover:opacity-70"
        >
          {site.name}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-semibold md:flex md:justify-self-center">
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

        <MagneticButton
          href={hero.ctaPrimary.href}
          className={cn(
            buttonVariants(),
            "h-10 justify-self-end rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-soft hover:bg-primary",
          )}
        >
          Devis gratuit
        </MagneticButton>
      </div>
    </header>
  );
}
