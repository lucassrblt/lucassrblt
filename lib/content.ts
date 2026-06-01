/**
 * Contenu éditable du site « Enseigne » — studio web pour commerçants.
 * Tout est centralisé ici : pour faire évoluer le site, on modifie ces
 * objets/tableaux sans toucher aux composants.
 */

export const site = {
  name: "Enseigne",
  role: "Studio web pour commerçants",
  email: "lrimbault92@gmail.com",
  founder: "Lucas Rimbault",
  website: "https://enseigne.studio",
  location: "France",
} as const;

/** Hero — la promesse, en clair, pour un commerçant. */
export const hero = {
  title: "On crée le site qui fait venir des clients dans votre commerce.",
  subtitle:
    "Site vitrine, réservation en ligne et référencement Google — pensés pour les restaurants, boutiques et artisans.",
  ctaPrimary: { label: "Demander un devis", href: `mailto:${site.email}` },
  ctaSecondary: { label: "Voir nos réalisations", href: "#realisations" },
  reassurance: ["Livré en 7 jours", "Sans engagement", "Noté 5/5"],
} as const;

/** Badges/stickers inclinés qui flottent autour du hero et des sections. */
export const stickers: string[] = [
  "RÉSERVATIONS 24/7",
  "LIVRÉ EN 7 JOURS",
  "SEO GOOGLE",
  "+ DE CLIENTS",
  "CLICK & COLLECT",
  "MOBILE D'ABORD",
];

/** « Pour qui » — types de commerces, affichés en marquee défilant. */
export const audiences: string[] = [
  "Restaurants",
  "Boutiques",
  "Salons & instituts",
  "Cafés & bars",
  "Artisans",
  "Hôtels & gîtes",
];

export type Offer = {
  title: string;
  description: string;
};

/** Les 4 offres principales du studio. */
export const offers: Offer[] = [
  {
    title: "Site vitrine",
    description:
      "Un site qui inspire confiance, en ligne en quelques jours. Photos, menu, horaires, contact : l'essentiel, soigné.",
  },
  {
    title: "Réservation & Click-and-collect",
    description:
      "Vos clients réservent une table et commandent en ligne, 24/7 — sans appel, sans friction.",
  },
  {
    title: "Référencement local Google",
    description:
      "Visible sur Google et Maps près de chez vous, pour capter les clients qui cherchent à côté.",
  },
  {
    title: "Identité & visuels",
    description:
      "Logo, photos, couleurs : une image pro et cohérente, en ligne comme en vitrine.",
  },
];

export type Project = {
  title: string;
  /** Type de commerce + nature du projet. */
  category: string;
  description: string;
  /** Statut affiché : « En ligne », « Démo »… */
  status: string;
  href?: string;
  /** Étiquette de l'URL affichée dans le mockup navigateur. */
  domain: string;
  /** Type de mockup à rendre. */
  kind: "immo" | "resto" | "fleuriste";
};

export const projects: Project[] = [
  {
    title: "Cabinet Rimbault",
    category: "Immobilier",
    description:
      "Plateforme web complète pour une agence immobilière : vitrine, annonces et back-office.",
    status: "En ligne",
    href: "https://cabinet-rimbault.fr",
    domain: "cabinet-rimbault.fr",
    kind: "immo",
  },
  {
    title: "La Table d'Olivier",
    category: "Restaurant · site + réservation",
    description:
      "Site vitrine gourmand avec réservation de table en ligne et carte du jour.",
    status: "Démo",
    domain: "latabledolivier.fr",
    kind: "resto",
  },
  {
    title: "Atelier Léa",
    category: "Fleuriste · vitrine + click-and-collect",
    description:
      "Boutique en ligne légère : bouquets à composer, retrait en magasin en 2 clics.",
    status: "Démo",
    domain: "atelier-lea.fr",
    kind: "fleuriste",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

/** Comment ça marche — 4 étapes concrètes. */
export const process: Step[] = [
  {
    number: "01",
    title: "Échange",
    description:
      "On discute de votre commerce, vos clients et vos objectifs. Gratuit, sans engagement.",
  },
  {
    number: "02",
    title: "Maquette",
    description:
      "On vous présente une maquette de votre futur site. Vous validez, on ajuste.",
  },
  {
    number: "03",
    title: "Mise en ligne",
    description:
      "On développe, on connecte réservation et Google, et on publie en ligne.",
  },
  {
    number: "04",
    title: "Suivi",
    description:
      "On reste là : mises à jour, contenus, et un coup de main quand vous en avez besoin.",
  },
];

export type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  popular?: boolean;
};

/** Tarifs — 3 formules, « Pro » mise en avant. */
export const plans: Plan[] = [
  {
    name: "Vitrine",
    price: "dès 690 €",
    features: [
      "Une page soignée",
      "100 % mobile",
      "Formulaire de contact",
      "Mise en ligne incluse",
    ],
  },
  {
    name: "Pro",
    price: "dès 1 290 €",
    popular: true,
    features: [
      "Site multi-pages",
      "Réservation / click-and-collect",
      "Référencement local (SEO)",
      "Fiche Google Business",
    ],
  },
  {
    name: "Sur-mesure",
    price: "sur devis",
    features: [
      "Boutique e-commerce",
      "Intégrations (caisse, livraison…)",
      "Fonctionnalités spécifiques",
      "Accompagnement dédié",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  business: string;
};

/**
 * Témoignages — placeholders réalistes, à remplacer par de vrais retours.
 * Éditez librement le tableau ci-dessous.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Deux fois plus de réservations le week-end depuis le nouveau site.",
    author: "Olivier M.",
    business: "Restaurant",
  },
  {
    quote:
      "Mes clients commandent en ligne et passent récupérer. Un vrai gain de temps.",
    author: "Léa D.",
    business: "Fleuriste",
  },
  {
    quote:
      "On apparaît enfin sur Google Maps. Les nouveaux clients nous trouvent tout seuls.",
    author: "Karim B.",
    business: "Salon de coiffure",
  },
];

/** Bloc d'appel à l'action de la section contact. */
export const contact = {
  title: "Parlons de votre commerce",
  subtitle:
    "Un projet, une question, une envie de changer de site ? On vous répond sous 24 h.",
  cta: { label: "Demander un devis gratuit", href: `mailto:${site.email}` },
} as const;

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Instagram", href: "https://instagram.com/enseigne.studio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-rimbault/" },
];
