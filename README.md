# lucasrblt.me — Portfolio

Site de présentation personnel de **Lucas Rimbault**, développeur full-stack.
Single page minimaliste (présentation · projets · contact), inspirée des codes
épurés de [joulse.com](https://www.joulse.com/).

> Branche `feat/portfolio-site`. Le profil GitHub (README affiché sur `main`) est
> conservé dans [`PROFILE.md`](./PROFILE.md).

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **shadcn/ui** (base color neutral)
- **Framer Motion** pour les apparitions « smooth »

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
  site-header.tsx     # header minimal translucide
  hero.tsx            # section Présentation
  projects.tsx        # section Projets
  project-card.tsx    # carte projet réutilisable
  contact.tsx         # section Contact (liens externes)
  site-footer.tsx     # footer
  section.tsx         # conteneur de section réutilisable
  reveal.tsx          # animation d'apparition (Framer Motion)
lib/
  content.ts          # ← contenu éditable (nom, stack, projets, liens)
```

## Éditer le contenu

Tout le texte (présentation, projets, liens) est centralisé dans
[`lib/content.ts`](./lib/content.ts) — il suffit d'y modifier les objets/tableaux.
