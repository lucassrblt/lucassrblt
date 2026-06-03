"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

/** Hauteur du header sticky (h-16 = 64px) + respiration → les ancres ne
 *  s'arrêtent plus sous le header. */
const ANCHOR_OFFSET = -88;

/** Easing « expo-out » : départ vif, arrivée tout en douceur (empreinte studio). */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Smooth scroll (Lenis) à l'échelle de la page. Pilote le scroll de la fenêtre
 * → compatible avec ScrollProgress (useScroll), le header au scroll et les
 * reveals (whileInView). `anchors` gère le défilement doux des liens de nav,
 * avec un offset qui compense le header sticky et un easing soigné.
 * Désactivé proprement si prefers-reduced-motion (saut immédiat, mais offset
 * conservé pour ne pas masquer le titre sous le header).
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: reduced ? 1 : 0.1,
        smoothWheel: !reduced,
        anchors: {
          offset: ANCHOR_OFFSET,
          duration: reduced ? 0 : 1.1,
          easing: easeOutExpo,
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
