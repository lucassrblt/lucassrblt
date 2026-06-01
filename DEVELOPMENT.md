# lucasrblt.me — Portfolio

Site de présentation personnel de **Lucas Rimbault**, développeur full-stack.
Single page minimaliste (présentation · services · projets · contact), inspirée
des codes épurés de [joulse.com](https://www.joulse.com/).

> Le code du site vit dans ce dépôt ; le `README.md` reste le **profil GitHub**.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **shadcn/ui** (base color neutral)
- **Framer Motion** pour les animations « smooth »
- **next-themes** pour le thème clair/sombre

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Commande        | Rôle                          |
| --------------- | ----------------------------- |
| `npm run dev`   | Serveur de développement      |
| `npm run build` | Build de production           |
| `npm run start` | Sert le build de production   |
| `npm run lint`  | Lint ESLint                   |

## Structure

```
app/
  layout.tsx          # métadonnées SEO, police, lang fr
  page.tsx            # assemble les sections (single page)
  globals.css         # thème shadcn (clair, neutral)
components/
  site-header.tsx     # header (scroll + section active) + toggle thème
  theme-provider.tsx  # provider next-themes
  theme-toggle.tsx    # bascule clair/sombre animée
  scroll-progress.tsx # barre de progression de lecture
  hero.tsx            # section Présentation (+ pastille de dispo)
  services.tsx        # section « Ce que je fais »
  projects.tsx        # section Projets
  project-card.tsx    # carte projet (lift au survol)
  contact.tsx         # section Contact (CTA + liens)
  site-footer.tsx     # footer
  section.tsx         # conteneur de section réutilisable
  reveal.tsx          # apparitions Framer Motion (+ cascade)
lib/
  content.ts          # ← contenu éditable (nom, stack, services, projets, liens)
```

## Éditer le contenu

Tout le texte (présentation, projets, liens) est centralisé dans
[`lib/content.ts`](./lib/content.ts) — il suffit d'y modifier les objets/tableaux.
