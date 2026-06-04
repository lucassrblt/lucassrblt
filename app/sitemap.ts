import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
import { landingPages } from "@/lib/content";

/**
 * sitemap.xml généré (convention Next : app/sitemap.ts).
 * On ne liste QUE les pages indexables : l'accueil + les landing pages SEO.
 * Les pages légales sont en noindex (cf. leur metadata) → volontairement
 * absentes pour ne pas envoyer de signal contradictoire.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...landingPages.map((page) => ({
      url: `${siteUrl}/offres/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
