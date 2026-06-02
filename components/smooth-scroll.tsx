"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

/**
 * Smooth scroll (Lenis) à l'échelle de la page. Pilote le scroll de la fenêtre
 * → compatible avec ScrollProgress (useScroll), le header au scroll et les
 * reveals (whileInView). `anchors` gère le défilement doux des liens de nav.
 * Désactivé proprement si prefers-reduced-motion (scroll natif).
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
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
