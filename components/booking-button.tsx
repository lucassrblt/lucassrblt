import type { ReactNode } from "react";
import { MagneticButton } from "@/components/magnetic";
import { booking, site } from "@/lib/content";

/**
 * Bouton de réservation unique pour TOUS les CTA du site (« Démarrer un projet »,
 * « Devis gratuit », « Réserver un appel »…). Ouvre la réservation Cal.com en
 * **popup** au clic (via `data-cal-link` + l'embed chargé par <CalEmbed/>).
 *
 * - `href` = lien Cal.com direct → repli si le JS d'embed n'a pas chargé.
 * - Si `booking.calLink` est vide, on retombe sur le devis par email (mailto),
 *   sans popup : aucun clic mort pendant la mise en place.
 * - `magnetic` reprend l'effet d'attraction (hero, header) ; sinon simple <a>.
 */
export function BookingButton({
  className,
  children,
  magnetic = false,
}: {
  className?: string;
  children: ReactNode;
  magnetic?: boolean;
}) {
  const enabled = Boolean(booking.calLink);
  const href = enabled ? `${booking.calOrigin}/${booking.calLink}` : `mailto:${site.email}`;
  const calProps = enabled
    ? { "data-cal-link": booking.calLink, "data-cal-config": '{"layout":"month_view"}' }
    : {};
  const target = enabled ? "_blank" : undefined;
  const rel = enabled ? "noreferrer" : undefined;

  if (magnetic) {
    return (
      <MagneticButton href={href} target={target} rel={rel} className={className} {...calProps}>
        {children}
      </MagneticButton>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={className} {...calProps}>
      {children}
    </a>
  );
}
