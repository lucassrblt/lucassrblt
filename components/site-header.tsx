"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/content";

const navItems = [
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

/**
 * Header minimal translucide, façon joulse.com.
 * Client component : une ombre apparaît au scroll et un indicateur glisse
 * sous la section active (transition partagée via layoutId).
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-colors",
        scrolled
          ? "border-border/60 bg-background/80 shadow-sm"
          : "border-transparent bg-background/40",
      )}
    >
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-sm font-medium tracking-tight transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative rounded-full px-3 py-1.5 transition-colors",
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active === item.id ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-muted"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-4 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
