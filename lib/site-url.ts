import { site } from "@/lib/content";

/**
 * URL canonique de production, source unique pour les liens absolus :
 * metadataBase / canonical (layout), <loc> du sitemap, et Sitemap: de robots.
 *
 * On fige le domaine custom www.biomestudio.fr (défini dans `site.website`) :
 * c'est lui qui doit porter le canonical et les aperçus de partage. On n'utilise
 * PAS VERCEL_PROJECT_PRODUCTION_URL — il renvoie le domaine *.vercel.app (ou la
 * variante sans www), ce qui créerait des URLs canoniques incohérentes.
 */
export const siteUrl = site.website;
