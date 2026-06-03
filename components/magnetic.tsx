"use client";

import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Bouton « magnétique » : l'élément se décale légèrement vers le curseur quand
 * on l'approche, puis revient à sa place (ressort). Rendu comme un lien <a>.
 * Désactivé si prefers-reduced-motion.
 */
export function MagneticButton({
  href,
  className,
  children,
  strength = 0.4,
  target,
  rel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  /** Intensité de l'attraction (0–1). */
  strength?: number;
  target?: string;
  rel?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={className}
      data-cursor="lg"
    >
      {children}
    </motion.a>
  );
}
