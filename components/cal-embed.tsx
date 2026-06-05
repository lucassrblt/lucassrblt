"use client";

import Script from "next/script";
import { booking } from "@/lib/content";

/**
 * Charge l'embed Cal.com **une seule fois** pour tout le site (placé dans le
 * layout racine). Une fois initialisé, n'importe quel élément portant
 * `data-cal-link="compte/event"` ouvre la réservation en **popup** au clic —
 * géré par Cal.com via délégation d'événements, donc valable aussi pour les
 * boutons rendus par React. Le `href` des boutons reste un repli sans JS.
 *
 * Snippet officiel Cal.com (loader IIFE + init). L'origine et le script sont
 * dérivés de `booking.calOrigin` pour coller à la région du compte (EU vs US) :
 * cal.eu → app.cal.eu/embed/embed.js. Stratégie `lazyOnload` : la résa n'est
 * pas sur le chemin critique du rendu.
 */
export function CalEmbed() {
  const origin = booking.calOrigin;
  const embedJs = `${origin.replace("https://", "https://app.")}/embed/embed.js`;
  return (
    <Script id="cal-embed" strategy="lazyOnload">
      {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "${embedJs}", "init");
Cal("init", { origin: "${origin}" });
Cal("ui", { hideEventTypeDetails: false, layout: "month_view" });`}
    </Script>
  );
}
