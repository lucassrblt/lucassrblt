/**
 * Contenu éditable du site « Biome » — studio web pour commerçants.
 * Tout est centralisé ici : pour faire évoluer le site, on modifie ces
 * objets/tableaux sans toucher aux composants. Voix « on / nous ».
 */

export const site = {
  name: "Biome",
  role: "Studio web pour commerçants",
  email: "lrimbault92@gmail.com",
  founder: "Lucas Rimbault",
  website: "https://biome.studio",
  location: "France",
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
  reassurance: ["Livré en 7 jours", "Sans engagement", "Note 5/5"],
} as const;

/** Cartes de stats flottantes du hero. */
export const heroStats = [
  { to: 120, prefix: "+", suffix: "%", label: "de visites en 3 mois" },
  { to: 65, prefix: "+", suffix: "%", label: "de contacts en moyenne" },
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
export const heroImage = "/realisations/cabinet-rimbault.png";

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
  /** Lien vers le site en ligne. */
  href: string;
  /**
   * Capture du hero du site, dans /public.
   * À FOURNIR : déposer le fichier puis renseigner ce chemin
   * (ex. "/realisations/maison-lavigne.png"). Tant que vide → placeholder.
   */
  image?: string;
  /** Résultat mis en avant (pastille) — illustratif pour l'instant. */
  metric: { to: number; prefix?: string; suffix?: string; label: string };
  /** Cas vedette (carte large). */
  featured?: boolean;
  /** Contenu du mockup de site. */
  preview: SitePreviewData;
};

export const projects: Project[] = [
  {
    title: "Maison Lavigne",
    sector: "Bistrot de marché",
    href: "https://maison-lavigne.vercel.app",
    image: "/realisations/maison-lavigne.png",
    metric: { to: 120, prefix: "+", suffix: "%", label: "de réservations en 4 mois" },
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
    href: "https://atelier-brut-pink.vercel.app",
    image: "/realisations/atelier-brut.png",
    metric: { to: 85, prefix: "+", suffix: "%", label: "de prises de RDV en ligne" },
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
    href: "https://atelier-vernier.vercel.app",
    image: "/realisations/atelier-vernier.png",
    metric: { to: 70, prefix: "+", suffix: "%", label: "de demandes de devis" },
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
    href: "https://cabinet-rimbault.fr?preview=lucas",
    image: "/realisations/cabinet-rimbault.png",
    metric: { to: 60, prefix: "+", suffix: "%", label: "de contacts qualifiés" },
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

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/**
 * Témoignages — placeholders réalistes, à remplacer par de vrais retours.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Depuis la mise en ligne, nos réservations ont doublé le week-end. Le site nous ressemble et nos clients adorent !",
    author: "Sophie L.",
    role: "Restauratrice",
  },
  {
    quote:
      "Un site moderne, rapide et facile à gérer. On reçoit beaucoup plus d'appels et de nouveaux clients.",
    author: "Karim B.",
    role: "Coiffeur",
  },
  {
    quote:
      "L'équipe a compris notre univers et l'a parfaitement retranscrit. Je recommande à 100 % !",
    author: "Nina R.",
    role: "Boutique",
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
