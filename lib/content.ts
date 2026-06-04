/**
 * Contenu éditable du site « Biome » — studio web pour commerçants.
 * Tout est centralisé ici : pour faire évoluer le site, on modifie ces
 * objets/tableaux sans toucher aux composants. Voix « on / nous ».
 */

export const site = {
  name: "Biome",
  role: "Studio web pour commerçants",
  email: "biomestudio@gmail.com",
  founder: "Lucas Rimbault",
  website: "https://www.biomestudio.fr",
  location: "France",
} as const;

/**
 * Données pour les pages légales (mentions légales + confidentialité).
 *
 * ⚠️ Pages retirées tant qu'aucune entreprise n'est immatriculée (pas de SIRET).
 * Cet objet est conservé comme source prête à l'emploi : dès l'immatriculation,
 * remplir siret / address / updatedAt puis restaurer les routes depuis git
 * (`app/mentions-legales`, `app/confidentialite`, `components/legal-layout.tsx`).
 */
export const legal = {
  entityName: site.founder,
  status: "Micro-entreprise",
  siret: "À COMPLÉTER", // ← n° SIRET à renseigner dès immatriculation
  address: "À COMPLÉTER", // ← adresse complète (n°, rue, CP, ville)
  publicationDirector: site.founder,
  vatNote: "TVA non applicable, art. 293 B du CGI", // franchise en base micro
  host: {
    name: "Vercel Inc.",
    address: "340 S Lemon Avenue #4133, Walnut, CA 91789, États-Unis",
    url: "https://vercel.com",
  },
  updatedAt: "À COMPLÉTER", // ex. « juin 2026 » — date d'entrée en vigueur
} as const;

/** Données d'un mockup de site affiché dans un cadre navigateur. */
export type SitePreviewData = {
  brand: string;
  domain: string;
  nav: string[];
  navCta: string;
  headline: string;
  heroCta: string;
  imageLabel: string;
};

/** Hero — promesse, CTA, réassurance, mockup vitrine + stats flottantes. */
export const hero = {
  badge: "Plus de clients, plus de visibilité",
  title: "Votre activité a du talent. Votre site aussi.",
  subtitle:
    "On crée des sites web rapides, bien référencés sur Google (SEO), qui transforment vos visiteurs en clients.",
  ctaPrimary: { label: "Démarrer un projet", href: `mailto:${site.email}` },
  ctaSecondary: { label: "Voir nos réalisations", href: "#realisations" },
  reassurance: ["Livré en 7 jours", "Sans engagement", "Interlocuteur unique"],
} as const;

/**
 * Cartes de stats flottantes du hero — chiffres vrais sur l'offre (pas de
 * résultat client inventé).
 */
export const heroStats = [
  { to: 7, prefix: "", suffix: "", label: "jours pour être en ligne" },
  { to: 100, prefix: "", suffix: " %", label: "mobile & rapide" },
] as const;

/** Mockup de vitrine affiché dans le hero (capture du site mise en avant). */
export const heroPreview: SitePreviewData = {
  brand: "Cabinet Rimbault",
  domain: "cabinet-rimbault.fr",
  nav: ["Accueil", "Acheter", "Louer", "L'agence", "Contact"],
  navCta: "Estimer mon bien",
  headline: "Trouver chez nous, votre futur chez vous.",
  heroCta: "Voir les biens",
  imageLabel: "Capture Cabinet Rimbault",
};
export const heroImage = "/realisations/cabinet-rimbault.webp";

/** « Pour qui » — types de commerces, défilent en marquee (avec picto). */
export const audiences: string[] = [
  "Restaurants",
  "Artisans",
  "Commerces",
  "Services",
  "Hébergements",
  "Cafés & Bars",
  "Boutiques",
  "Bien-être",
  "Produits locaux",
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
      "Un site rapide, clair et efficace pour présenter votre activité et vos services.",
  },
  {
    title: "Réservation & Click-and-collect",
    description:
      "Permettez à vos clients de réserver en ligne ou de commander 24/7 en toute simplicité.",
  },
  {
    title: "Référencement local Google",
    description:
      "Soyez visible là où vos clients vous cherchent. On optimise votre présence locale.",
  },
  {
    title: "Identité & visuels",
    description:
      "Nous créons votre univers visuel : logo, couleurs, images et contenus qui racontent votre histoire.",
  },
];

export type Project = {
  title: string;
  /** Métier · ville, affiché en légende. */
  sector: string;
  /** Honnêteté : vrai projet client vs démo de démonstration. */
  kind: "client" | "demo";
  /** Lien vers le site en ligne. */
  href: string;
  /**
   * Capture du hero du site, dans /public.
   * À FOURNIR : déposer le fichier puis renseigner ce chemin
   * (ex. "/realisations/maison-lavigne.png"). Tant que vide → placeholder.
   */
  image?: string;
  /**
   * Fonctionnalité réelle mise en avant (pastille) — décrit ce que la maquette
   * propose vraiment, sans résultat chiffré inventé.
   */
  feature: string;
  /** Cas vedette (carte large). */
  featured?: boolean;
  /** Contenu du mockup de site. */
  preview: SitePreviewData;
};

export const projects: Project[] = [
  {
    title: "Maison Lavigne",
    sector: "Bistrot de marché",
    kind: "demo",
    href: "https://maison-lavigne.vercel.app",
    image: "/realisations/maison-lavigne.webp",
    feature: "Réservation en ligne",
    featured: true,
    preview: {
      brand: "Maison Lavigne",
      domain: "maison-lavigne.fr",
      nav: ["La carte", "La maison", "Ambiance", "Avis", "Réserver"],
      navCta: "Réserver une table",
      headline: "On cuisine ce que le marché donne.",
      heroCta: "Réserver une table",
      imageLabel: "Hero Maison Lavigne — déposer maison-lavigne.png",
    },
  },
  {
    title: "Atelier Brut",
    sector: "Barbier",
    kind: "demo",
    href: "https://atelier-brut-pink.vercel.app",
    image: "/realisations/atelier-brut.webp",
    feature: "Prise de RDV en ligne",
    preview: {
      brand: "Atelier Brut",
      domain: "atelier-brut.fr",
      nav: ["Prestations", "L'équipe", "Réalisations", "Avis", "Réserver"],
      navCta: "Réserver un créneau",
      headline: "Coupe nette, barbe sculptée, rasage au coupe-chou.",
      heroCta: "Réserver un créneau",
      imageLabel: "Hero Atelier Brut — déposer atelier-brut.png",
    },
  },
  {
    title: "Atelier Vernier",
    sector: "Menuiserie sur-mesure",
    kind: "demo",
    href: "https://atelier-vernier.vercel.app",
    image: "/realisations/atelier-vernier.webp",
    feature: "Devis en ligne",
    preview: {
      brand: "Atelier Vernier",
      domain: "atelier-vernier.fr",
      nav: ["Savoir-faire", "Réalisations", "Méthode", "Avis", "Devis"],
      navCta: "Devis gratuit",
      headline: "Le bois, façonné pour durer.",
      heroCta: "Estimer mon projet",
      imageLabel: "Hero Atelier Vernier — déposer atelier-vernier.png",
    },
  },
  {
    title: "Cabinet Rimbault",
    sector: "Immobilier",
    kind: "client",
    href: "https://cabinet-rimbault.fr?preview=lucas",
    image: "/realisations/cabinet-rimbault.webp",
    feature: "Estimation en ligne",
    preview: {
      brand: "Cabinet Rimbault",
      domain: "cabinet-rimbault.fr",
      nav: ["Accueil", "Biens", "À propos", "Contact"],
      navCta: "Estimer mon bien",
      headline: "Votre partenaire immobilier de confiance.",
      heroCta: "Voir les biens",
      imageLabel: "Hero Cabinet Rimbault — déposer cabinet-rimbault.png",
    },
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
    description: "On discute de votre activité, de vos objectifs et de vos besoins réels.",
  },
  {
    number: "02",
    title: "Conception",
    description: "On crée un site sur-mesure, moderne et efficace, à votre image.",
  },
  {
    number: "03",
    title: "Lancement",
    description: "On met en ligne votre site, prêt à accueillir vos premiers clients.",
  },
  {
    number: "04",
    title: "Accompagnement",
    description: "On vous aide à prendre en main votre site et à en tirer le meilleur.",
  },
];

/** Socle « tout inclus » commun à toutes les formules (le « on s'occupe de tout »). */
export const includedAll: string[] = [
  "Nom de domaine + hébergement",
  "Certificat SSL (HTTPS)",
  "Email professionnel",
  "Référencement local (SEO) géré",
  "6 mois de maintenance",
  "Astreinte en cas de pépin",
];

export type Plan = {
  name: string;
  /** Ligne de positionnement « pour qui ». */
  tagline: string;
  price: string;
  /** Label d'escalier (ex. « Tout l'Essentiel, plus : »). */
  inherits?: string;
  features: string[];
  popular?: boolean;
};

/** Tarifs — 3 formules en valeur, ancrage « à partir de », « Pro » mise en avant. */
export const plans: Plan[] = [
  {
    name: "Essentiel",
    tagline: "Pour se lancer vite et bien",
    price: "dès 690 €",
    features: [
      "Site vitrine 1 page, design sur-mesure",
      "100 % mobile & rapide",
      "Formulaire de contact",
      "Fiche Google Business",
    ],
  },
  {
    name: "Pro",
    tagline: "Pour attirer et convertir plus",
    price: "dès 1 290 €",
    popular: true,
    inherits: "Tout l'Essentiel, plus :",
    features: [
      "Site multi-pages",
      "Réservation / Click & collect",
      "Formation à la prise en main",
      "Rapport de perf à 3 mois",
      "Avis Google & réseaux sociaux",
    ],
  },
  {
    name: "Sur-mesure",
    tagline: "Pour les projets ambitieux",
    price: "Sur devis",
    inherits: "Tout le Pro, plus :",
    features: [
      "E-commerce / fonctionnalités spécifiques",
      "Intégrations métier (caisse, livraison, agenda…)",
      "Site multilingue",
      "Accompagnement dédié",
    ],
  },
];

export type Guarantee = { title: string; description: string };

/** « Nos engagements » — réassurance pour lever les freins. */
export const guarantees: Guarantee[] = [
  {
    title: "Sans engagement",
    description: "On commence par un échange gratuit, vous décidez ensuite.",
  },
  {
    title: "Livré en 7 jours",
    description: "Un site en ligne vite, sans vous faire patienter des mois.",
  },
  {
    title: "Satisfait ou ajusté",
    description: "On affine ensemble jusqu'à ce que le rendu vous ressemble.",
  },
  {
    title: "Un interlocuteur unique",
    description: "Toujours la même personne, du premier contact au suivi.",
  },
];

/**
 * Prise de RDV. Colle ici l'URL de ton lien de réservation — fonctionne avec
 * **Calendly** (ex. "https://calendly.com/biome/15min") OU **Google Agenda**
 * (« plages de rendez-vous » → page publique qui crée un lien Meet auto).
 * Laisse vide ("") tant que le compte n'est pas prêt : le site retombe alors
 * proprement sur le bouton « devis par email », rien ne casse.
 */
export const booking = {
  url: "", // ← URL Calendly ou Google « plages de RDV »
  label: "Réserver un appel gratuit",
  note: "15 min, sans engagement — on parle de votre projet.",
} as const;

/** Bloc d'appel à l'action de la section contact. */
export const contact = {
  title: "Parlons de votre commerce",
  subtitle:
    "Un projet, une question, une envie de changer de site ? On vous répond sous 24h.",
  cta: { label: "Démarrer un devis gratuit", href: `mailto:${site.email}` },
} as const;

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Instagram", href: "https://instagram.com/biome.studio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-rimbault/" },
];

/* ------------------------------------------------------------------ *
 * Landing pages SEO (route /offres/[slug])
 *
 * Pages d'entrée Google HORS de la nav one-page : invisibles pour le visiteur
 * du scroll, mais accessibles et indexables pour qui arrive depuis une
 * recherche. Chacune a un H1 + une intro + une FAQ UNIQUES (garde-fou
 * anti-contenu-dupliqué / doorway) et ne réutilise que quelques sections du
 * one-page, dans un ordre qui sert son intention.
 *
 * Pour ajouter une page : un objet de plus ici, c'est tout (route + sitemap +
 * liens footer se mettent à jour automatiquement).
 * ------------------------------------------------------------------ */

/** Sections du one-page réutilisables dans une landing page. */
export type LandingSection =
  | "offers"
  | "pricing"
  | "process"
  | "guarantees"
  | "projects";

export type LandingFaqItem = { question: string; answer: string };

export type LandingPage = {
  /** Segment d'URL : /offres/<slug>. Doit contenir le mot-clé. */
  slug: string;
  /** <title> (le template «  — Biome » est ajouté automatiquement). */
  metaTitle: string;
  metaDescription: string;
  /** Petit intitulé en capitales au-dessus du H1. */
  eyebrow: string;
  /** H1 unique, porteur du mot-clé. */
  h1: string;
  /** Accroche sous le H1 (1-2 phrases). */
  intro: string;
  /** Libellé court pour les liens internes (footer). */
  navLabel: string;
  /** Sections du one-page à réafficher, dans l'ordre. */
  sections: LandingSection[];
  /** FAQ unique → contenu propre + schéma FAQPage (résultats enrichis). */
  faq: LandingFaqItem[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "site-internet-pas-cher",
    metaTitle: "Site internet pas cher pour artisans et commerçants",
    metaDescription:
      "Un site web professionnel à petit prix, livré en 7 jours. Dès 690 €, tout inclus et sans abonnement caché — pensé pour les artisans, commerçants et indépendants.",
    eyebrow: "Petit budget",
    h1: "Un site internet pas cher, mais pas au rabais",
    intro:
      "Pas besoin d'un gros budget pour avoir un site qui inspire confiance. On crée des sites vitrines soignés dès 690 €, tout compris : nom de domaine, hébergement, email pro et référencement. Idéal quand on se lance et qu'on veut maîtriser ses dépenses.",
    navLabel: "Site pas cher",
    sections: ["pricing", "offers", "guarantees"],
    faq: [
      {
        question: "Combien coûte un site internet pas cher ?",
        answer:
          "Nos sites vitrines démarrent à 690 € en formule Essentiel, tout inclus. Le tarif final dépend du nombre de pages et des fonctionnalités, mais le devis est toujours gratuit et sans surprise.",
      },
      {
        question: "« Pas cher », ça veut dire de mauvaise qualité ?",
        answer:
          "Non. Le prix est bas parce qu'on travaille en direct, sans intermédiaire, avec des outils modernes et un site livré en 7 jours. Le design reste sur-mesure, rapide et 100 % adapté au mobile.",
      },
      {
        question: "Y a-t-il un abonnement mensuel caché ?",
        answer:
          "Non. Le prix annoncé couvre la création du site, le nom de domaine, l'hébergement, le certificat SSL, un email professionnel et 6 mois de maintenance. Aucun frais surprise.",
      },
      {
        question: "Le nom de domaine et l'hébergement sont-ils compris ?",
        answer:
          "Oui, ils sont inclus dans toutes les formules, avec le certificat SSL (HTTPS) et un email professionnel. On s'occupe de tout, vous n'avez rien à gérer techniquement.",
      },
      {
        question: "En combien de temps mon site est-il en ligne ?",
        answer:
          "Comptez environ 7 jours entre notre premier échange et la mise en ligne, une fois vos contenus réunis.",
      },
    ],
  },
  {
    slug: "prix-site-internet",
    metaTitle: "Prix d'un site internet : combien ça coûte vraiment ?",
    metaDescription:
      "Le prix d'un site internet professionnel expliqué simplement. Formules dès 690 €, devis gratuit et sans engagement, et ce qui fait réellement varier le tarif.",
    eyebrow: "Tarifs transparents",
    h1: "Combien coûte un site internet ?",
    intro:
      "Le prix d'un site internet varie surtout selon le nombre de pages, les fonctionnalités (réservation, e-commerce…) et le contenu à produire. Chez nous, les repères sont clairs : des formules à partir de 690 €, tout inclus, et un devis gratuit adapté à votre projet.",
    navLabel: "Prix",
    sections: ["pricing", "process", "guarantees"],
    faq: [
      {
        question: "Quel est le prix d'un site vitrine ?",
        answer:
          "Un site vitrine démarre à 690 € (formule Essentiel) et autour de 1 290 € pour une formule Pro multi-pages avec réservation. Le prix exact dépend de votre projet — le devis est gratuit.",
      },
      {
        question: "Pourquoi les prix varient autant d'une agence à l'autre ?",
        answer:
          "Parce que le périmètre change : nombre de pages, fonctionnalités, création de contenu et de visuels, et surtout les frais de structure de l'agence. En travaillant en direct, on garde des tarifs serrés.",
      },
      {
        question: "Faut-il payer chaque mois ?",
        answer:
          "Non. Vous payez la création du site une fois. Le nom de domaine, l'hébergement et 6 mois de maintenance sont compris ; au-delà, la maintenance reste optionnelle.",
      },
      {
        question: "Le devis est-il payant ?",
        answer:
          "Non, le devis est gratuit et sans engagement. On commence par un échange pour cerner votre besoin, puis on vous propose un tarif clair.",
      },
      {
        question: "Qu'est-ce qui fait monter le prix ?",
        answer:
          "Principalement les fonctionnalités avancées (e-commerce, prise de rendez-vous, intégrations métier, multilingue) et le volume de contenu à créer. Tout est détaillé dans le devis.",
      },
    ],
  },
  {
    slug: "creer-site-internet-commerce",
    metaTitle: "Créer un site internet pour son commerce",
    metaDescription:
      "Vous voulez créer un site internet pour votre commerce ? On s'occupe de tout, de A à Z, en 7 jours : design sur-mesure, mobile, bien référencé sur Google.",
    eyebrow: "Votre présence en ligne",
    h1: "Créer le site internet de votre commerce, sans prise de tête",
    intro:
      "Vous avez un commerce et vous voulez (enfin) un vrai site internet ? On s'occupe de tout, de la conception à la mise en ligne : un site moderne, rapide, pensé pour vos clients et bien référencé sur Google. Vous gardez votre métier, on gère le web.",
    navLabel: "Créer mon site",
    sections: ["process", "offers", "projects"],
    faq: [
      {
        question: "Comment créer un site internet pour mon commerce ?",
        answer:
          "Le plus simple : on en discute. On part de votre activité et de vos objectifs, on conçoit le site, on le met en ligne et on vous accompagne pour le prendre en main. Vous n'avez rien de technique à gérer.",
      },
      {
        question: "Ai-je besoin de compétences techniques ?",
        answer:
          "Aucune. On s'occupe du nom de domaine, de l'hébergement, du design et de la mise en ligne. Vous nous fournissez les infos sur votre commerce, on fait le reste.",
      },
      {
        question: "Pourrai-je modifier mon site moi-même ensuite ?",
        answer:
          "Oui, on vous forme à la prise en main pour les modifications courantes, et on reste disponible en cas de besoin grâce à l'astreinte et à la maintenance incluse.",
      },
      {
        question: "Mon site sera-t-il visible sur Google ?",
        answer:
          "Oui. Le référencement local est intégré : on optimise votre fiche Google Business et les bases SEO pour que vos clients vous trouvent là où ils cherchent.",
      },
      {
        question: "Faut-il déjà avoir un logo et des photos ?",
        answer:
          "Ce n'est pas obligatoire. On peut créer votre identité visuelle (logo, couleurs) et vous conseiller sur les visuels si vous n'en avez pas encore.",
      },
    ],
  },
];
