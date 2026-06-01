/**
 * Contenu éditable du portfolio.
 * Centralisé ici pour que le squelette soit facile à faire évoluer :
 * il suffit de modifier ces tableaux/objets, sans toucher aux composants.
 */

export const site = {
  name: "Lucas Rimbault",
  role: "Développeur full-stack",
  // Petite phrase d'accroche, façon joulse.com : courte, directe.
  tagline:
    "Je conçois et livre des applications web modernes en TypeScript / Next.js — du front public à l'API, la base de données et le déploiement.",
  location: "France",
  email: "lrimbault92@gmail.com",
  website: "https://lucasrblt.me",
  // Signal de confiance affiché dans le hero.
  availability: "Disponible pour de nouveaux projets",
} as const;

/** Bloc d'appel à l'action de la section contact (orienté client). */
export const cta = {
  title: "Travaillons ensemble",
  subtitle:
    "Un projet web à concrétiser ou une équipe à renforcer ? Parlons-en — réponse sous 24 h.",
} as const;

export type Service = {
  title: string;
  description: string;
};

/**
 * « Ce que je fais » — clarifie l'offre pour rassurer un client,
 * en trois points concis (on reste minimaliste).
 */
export const services: Service[] = [
  {
    title: "Applications web",
    description:
      "Interfaces rapides et soignées en Next.js / React, du prototype à la production.",
  },
  {
    title: "APIs & back-end",
    description:
      "Logique métier, bases de données et APIs robustes (Node.js, Prisma, PostgreSQL).",
  },
  {
    title: "Déploiement & infra",
    description:
      "Mise en ligne, CI/CD et suivi — un produit livré, stable et maintenable.",
  },
];

/** Stack affichée sous forme de badges dans la section présentation. */
export const stack: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Vercel",
];

export type Project = {
  title: string;
  description: string;
  /** Statut affiché : projet en production, en cours, etc. */
  status?: string;
  tags: string[];
  href?: string;
  /** Liens secondaires (repos, services…). */
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Cabinet Rimbault",
    description:
      "Plateforme web complète pour une agence immobilière, en architecture découplée à 3 services — la vitrine publique reste en ligne indépendamment des déploiements du back-office.",
    status: "En production",
    tags: ["Next.js", "Prisma", "PostgreSQL", "React Query", "Resend"],
    href: "https://cabinet-rimbault.fr",
    links: [
      {
        label: "Vitrine",
        href: "https://github.com/lucassrblt/cabinet-rimbault-vitrine",
      },
      {
        label: "API",
        href: "https://github.com/lucassrblt/cabinet-rimbault-api",
      },
      {
        label: "Admin",
        href: "https://github.com/lucassrblt/cabinet-rimbault-admin",
      },
    ],
  },
  {
    title: "Projet à venir",
    description:
      "Un nouveau produit en cours de conception. Cette carte sert de gabarit : duplique-la et remplis le contenu dans lib/content.ts.",
    status: "En cours",
    tags: ["TypeScript", "Next.js"],
  },
];

export type SocialLink = { label: string; href: string };

/** Section « Contact » / liens externes, façon « Elsewhere » de joulse.com. */
export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:lrimbault92@gmail.com" },
  { label: "GitHub", href: "https://github.com/lucassrblt" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-rimbault/" },
  { label: "Site", href: "https://lucasrblt.me" },
];
