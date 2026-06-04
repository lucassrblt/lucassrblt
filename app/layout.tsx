import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { JsonLd } from "@/components/json-ld";
import { site, hero } from "@/lib/content";
import { siteUrl } from "@/lib/site-url";

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
 * Titre de la page d'accueil : on garde la marque « Biome » en tête mais on
 * porte les mots-clés réellement recherchés par la cible (« création de site
 * web », « commerçants », « artisans ») — personne ne tape « studio web pour
 * commerçants ». Le template ajoute « — Biome » aux pages enfants.
 */
const homeTitle = "Biome — Création de site web pour commerçants et artisans";

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: "%s — Biome",
  },
  description: hero.subtitle,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: homeTitle,
    description: hero.subtitle,
    url: siteUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  // L'image elle-même : dépose app/opengraph-image.png (1200×630) → Next ajoute
  // automatiquement og:image. X/Twitter retombe sur cette image via la card ci-dessous.
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
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
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
