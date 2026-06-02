"use client";

import type { MouseEvent } from "react";
import { useRef } from "react";
import { Wheat, Heart, ShoppingBag } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { SitePreview } from "@/components/site-preview";
import { StatCard } from "@/components/stat-card";
import { heroPreview, heroStats, heroImage } from "@/lib/content";

/** Réassurance affichée dans le faux site (avec pictos, donc côté composant). */
const previewFeatures = [
  { icon: Wheat, title: "Produits frais", sub: "Chaque jour" },
  { icon: Heart, title: "Fait maison", sub: "Avec passion" },
  { icon: ShoppingBag, title: "Retrait en boutique", sub: "Commandé en ligne" },
];

/**
 * Visuel du hero : un mockup de vitrine soigné + 2 cartes de stats flottantes,
 * posés sur une forme organique teal, avec un parallax léger à la souris.
 * Tout est neutralisé si prefers-reduced-motion.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Parallax au scroll : le mockup dérive légèrement vers le haut au défilement.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [42, -42]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18 });
  const smy = useSpring(my, { stiffness: 120, damping: 18 });
  const mockX = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const mockY = useTransform(smy, [-0.5, 0.5], [-8, 8]);
  const cardX = useTransform(smx, [-0.5, 0.5], [18, -18]);
  const cardY = useTransform(smy, [-0.5, 0.5], [14, -14]);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto max-w-xl lg:mr-0 lg:scale-[1.12] lg:origin-right"
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {/* Forme organique teal en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 -z-10 size-80 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-primary/90 lg:size-[26rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-16 -bottom-10 -z-10 size-40 rounded-full bg-secondary/40 blur-2xl"
      />

      {/* Mockup principal (capture du site mis en avant) — parallax scroll + souris */}
      <motion.div style={reduce ? undefined : { y: scrollY }}>
        <motion.div style={reduce ? undefined : { x: mockX, y: mockY }}>
          <SitePreview
            data={{ ...heroPreview, features: previewFeatures }}
            image={heroImage}
          />
        </motion.div>
      </motion.div>

      {/* Carte stat haut-droite */}
      <motion.div
        style={reduce ? undefined : { x: cardX, y: cardY }}
        className="absolute -right-4 top-10 w-44 sm:-right-8"
      >
        <StatCard
          to={heroStats[0].to}
          prefix={heroStats[0].prefix}
          suffix={heroStats[0].suffix}
          label={heroStats[0].label}
        />
      </motion.div>

      {/* Carte stat bas-droite */}
      <motion.div
        style={reduce ? undefined : { x: cardX, y: cardY }}
        className="absolute -right-4 -bottom-8 w-44 sm:-right-6"
      >
        <StatCard
          to={heroStats[1].to}
          prefix={heroStats[1].prefix}
          suffix={heroStats[1].suffix}
          label={heroStats[1].label}
        />
      </motion.div>
    </div>
  );
}
