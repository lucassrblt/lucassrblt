# Biome — État du site & feuille de route prospection

> Studio web pour commerçants. Site en ligne : **lucassrblt.vercel.app** (déployé via Vercel).
> Objectif de ce doc : faire le point sur ce qui est fait, ce qui reste à améliorer, et **savoir
> à partir de quand démarcher des commerçants au nom de l'agence** sans se griller, en maximisant
> la conversion.

---

## 1. Ce qui est fait ✅

**Positionnement**
- Studio web ciblant les commerces de proximité (resto, boutique, artisan, salon…).
- Promesse « faire passer un cap business » : plus de clients, plus de visibilité (SEO).

**Identité & design**
- Palette teal pétrole `#2c6e6d` + accent cyan, fond clair, ton premium mais chaleureux.
- Grande typo display (Bricolage Grotesque), hero avec **capture réelle du site Cabinet Rimbault**
  + 2 cartes de stats flottantes + forme organique.

**Structure (single-page)**
Hero → bandeau « pour qui » (marquee) → Offres → **Réalisations** (4 projets cliquables avec
captures réelles) → Comment ça marche (4 étapes) → Nos engagements → **Tarifs** (socle « tout
inclus » + 3 formules « dès ») → Témoignages → Contact.

**Animations (empreinte studio)**
Reveals au scroll, boutons magnétiques, tilt 3D des cartes, compteurs animés, curseur custom,
**smooth scroll (Lenis)**, parallax. Tout respecte `prefers-reduced-motion`.

**Technique**
Next.js 16 (App Router) · Tailwind v4 · Framer Motion · Lenis. Contenu centralisé dans
`lib/content.ts` (facile à éditer). Déploiement automatique Vercel au push sur `main`.

---

## 2. Forces

- **Distinctif mais rassurant** — sort du lot des « usines à sites » (Simplébo & co) sans faire peur.
- **Réalisations réelles cliquables** — preuve par l'exemple, on voit les vrais sites.
- **Tarifs lisibles** — socle « tout inclus » + formules « à partir de » → transparence sans se brader.
- **Réassurance** — section engagements (sans engagement, 7 j, satisfait ou ajusté, interlocuteur unique).
- **Base technique saine** — rapide, éditable, déployée.

---

## 3. Ce qui peut être amélioré (priorisé)

### 🔴 Bloquant avant de prospecter (crédibilité / légal / technique)

- [x] **Témoignages = placeholders inventés** (Sophie L., Karim B., Nina R.) → **section retirée**
      (composant + data + usage supprimés). À rebrancher avec de vrais avis dès qu'on en a (Cabinet
      Rimbault, 1er client). Faux avis = perte de confiance.
- [x] **Métriques « illustratives »** (+120 %, +95 %…) → **remplacées par du vrai** : stats hero =
      faits sur l'offre (7 j, 100 % mobile), pastilles réalisations = fonctionnalité réelle
      (Réservation, Prise de RDV, Devis, Estimation). Bonus : retiré le faux « Note 5/5 » du hero.
- [x] **Réalisations = 3 démos + Cabinet Rimbault** → **badge sur chaque carte** : « Projet client »
      (Rimbault) vs « Démo » (les 3 autres). Titre de section adouci (« pensés pour convertir » au
      lieu de « résultats concrets »).
- [ ] **Domaine professionnel** : `*.vercel.app` fait « pas fini ». Prendre **biome.studio** (ou .fr)
      — c'est le signal n°1 de sérieux quand on envoie un lien.
- [~] **Nom + logo + favicon + image OG** — Nom **Biome** validé ✅. **Logo intégré** ✅ :
      `public/biome.svg` (recoloré en teal primary `#2c6e6d`) affiché dans le header et le footer,
      en remplacement du wordmark texte. Câblage OG fait : `metadataBase` pointe vers le domaine de
      prod réel + **twitter card** → l'aperçu marche dès qu'une image est posée. **Reste à fournir
      (toi)** : `app/favicon.ico` (remplacer celui de Next par défaut), `app/opengraph-image.png`
      (1200×630). Specs favicon : `icon.png` 512² + `apple-icon.png` 180².
- [x] **Pages légales** créées (cachées, `noindex`, non liées header/footer) : `/mentions-legales`
      + `/confidentialite` (RGPD). Données centralisées dans `lib/content.ts` (objet `legal`).
      **Reste à remplir (toi)** : `legal.siret`, `legal.address`, `legal.updatedAt`. La conf' est à
      mettre à jour quand on ajoutera formulaire/Calendly (#7) + analytics.
- [ ] **Contact fiable** : aujourd'hui simple `mailto:`. Ajouter un **formulaire** (ou **Calendly**
      pour booker un appel direct) — réduit énormément la friction.
- [ ] **Meta / SEO de base** : titre, description, OG image (pour le partage et Google).

### 🟠 Important (conversion / pro)

- [ ] **FAQ** (prix, délais, « et si je n'ai pas de logo / photos ? ») — désamorce les objections.
- [ ] **Email professionnel** (contact@biome.studio) plutôt qu'un gmail perso.
- [ ] **Analytics** (Plausible / Vercel Analytics) — mesurer visites et clics « devis ».
- [ ] **Perf** : les captures sont en PNG (~20 Mo cumulés) → convertir en **webp**, alléger.
- [ ] **QA mobile + accessibilité** : tester sur un vrai téléphone, contrastes, navigation clavier.

### 🟢 Plus tard

- [ ] Plus de vraies réalisations · une **étude de cas** détaillée (avant/après, vrais chiffres).
- [ ] Blog / contenu SEO local. · Brancher `lucasrblt.me` si pertinent.

---

## 4. Quand lancer la prospection ? (GO / NO-GO)

**Le principe à retenir** : en démarchage (outbound), tu vas vers le prospect — le site ne te trouve
pas, il **confirme** ta crédibilité quand le prospect clique ton lien. Il n'a donc **pas besoin d'être
parfait**, il doit **survivre au clic sans red flag**. Un commerçant qui voit un faux avis, une URL
`vercel.app` ou un formulaire cassé referme l'onglet. La perfection, elle, vient avec les retours réels.

**Minimum crédible pour démarrer (tous ces points = GO) :**
- [ ] Aucun **faux avis / chiffre inventé** visible (retirés ou étiquetés « démo »).
- [ ] **Domaine pro** + nom + logo/favicon + **aperçu OG** propre au partage.
- [ ] **Contact qui marche** (form ou Calendly testé de bout en bout).
- [ ] **Pages légales** présentes.
- [ ] **Impeccable sur mobile** (la majorité ouvriront le lien sur téléphone).
- [ ] Réalisations honnêtes (démo = démo).

**Tu peux prospecter même s'il manque** : la FAQ, l'analytics avancée, le blog, des réalisations
supplémentaires, l'optimisation perf fine. → Ne pas attendre ça pour commencer.

**Verdict** : dès que les 6 cases « minimum crédible » sont cochées, **lance**. La prospection elle-même
te dira quoi améliorer ensuite (les objections réelles > les suppositions).

---

## 5. Leviers de conversion à prioriser

1. **Preuve sociale réelle** — 1 vrai client / 1 vrai avis vaut 10 placeholders.
2. **Prise de RDV directe** (Calendly) — « réserver un appel de 15 min » convertit mieux qu'un mailto.
3. **FAQ** — lève les freins prix/délai avant qu'ils bloquent.
4. **Un seul CTA clair**, répété (« Demander un devis gratuit »).
5. **Discours résultats** cohérent (clients / visibilité), pas « features techniques ».

---

## 6. Ordre d'attaque conseillé

1. **Semaine 1 (les 🔴)** : domaine + logo/favicon/OG → honnêteté témoignages/chiffres → pages légales
   → formulaire ou Calendly → meta SEO. **→ GO prospection dès que c'est fait.**
2. **En parallèle (les 🟠)** : FAQ, email pro, analytics, webp, QA mobile.
3. **Au fil de l'eau (les 🟢)** : vraies réalisations & études de cas à mesure que les clients arrivent.

> Règle d'or : **lancer imparfait mais crédible**, puis itérer avec les vrais retours commerçants.
> C'est exactement ce qu'on a fait pour le site — on continue pareil pour l'offre.
