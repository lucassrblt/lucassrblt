import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

/**
 * sitemap.xml généré (convention Next : app/sitemap.ts).
 * On ne liste QUE les pages indexables. Les pages légales sont en noindex
 * (cf. leur metadata) → volontairement absentes pour ne pas envoyer de signal
 * contradictoire. À enrichir dès que des pages dédiées (services, réalisations,
 * blog) sont créées.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
