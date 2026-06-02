"use client";

import { motion } from "framer-motion";

/**
 * Ligne horizontale qui se dessine derrière la rangée d'icônes du Process
 * (desktop uniquement). Les icônes des étapes servent de nœuds visuels.
 * Posée en absolu, alignée sur le centre des icônes (px-[12.5%]).
 */
export function ProcessConnector() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 right-0 top-7 hidden px-[12.5%] lg:block"
    >
      <div className="relative h-px bg-border">
        <motion.div
          className="absolute inset-0 origin-left bg-primary/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
