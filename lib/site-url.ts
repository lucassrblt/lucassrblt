import { site } from "@/lib/content";

/**
 * URL canonique de production, source unique pour les liens absolus :
 * metadataBase / canonical (layout), <loc> du sitemap, et Sitemap: de robots.
 *
 * En prod Vercel on prend le domaine de production réel (vercel.app aujourd'hui,
 * biome.studio dès qu'il est branché) → aperçus de partage et URLs indexées
 * cohérents tout de suite. Fallback hors Vercel : site.website.
 */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : site.website;
