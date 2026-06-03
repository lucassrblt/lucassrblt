import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site, hero } from "@/lib/content";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

/**
 * URL canonique pour les liens absolus (og:image…). En prod Vercel on prend le
 * domaine de production réel (vercel.app aujourd'hui, biome.studio dès qu'il est
 * branché) → l'aperçu au partage fonctionne tout de suite. Fallback : site.website.
 */
const canonicalUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : site.website;

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: hero.subtitle,
  metadataBase: new URL(canonicalUrl),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: hero.subtitle,
    url: canonicalUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  // L'image elle-même : dépose app/opengraph-image.png (1200×630) → Next ajoute
  // automatiquement og:image. X/Twitter retombe sur cette image via la card ci-dessous.
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: hero.subtitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
