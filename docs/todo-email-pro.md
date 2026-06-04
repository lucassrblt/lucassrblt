# À FAIRE — Email pro `contact@biomestudio.fr` (Cloudflare Email Routing)

> Objectif : afficher une adresse pro `contact@biomestudio.fr` sur le site, qui
> redirige vers mon Gmail perso. **Gratuit.** À faire plus tard, pas bloquant.

## Contexte (état actuel du domaine)

```
Domaine biomestudio.fr  → enregistré chez Hostinger
Nameservers             → aurora/nebula.dns-parking.com  (DNS géré par Hostinger)
Site web                → Vercel  (A apex 216.198.79.1  +  www → …vercel-dns…)
Email                   → aucun (pas de MX)
```

## Impact à retenir

- **Domaine** : reste chez Hostinger (propriété + renouvellement). On délègue juste
  la **gestion DNS** à Cloudflare. Réversible (il suffit de remettre les NS Hostinger).
- **Site web** : aucun impact **si on recopie bien les enregistrements Vercel** dans
  Cloudflare (importés automatiquement, mais à vérifier). Zéro downtime si fait correctement.
- **Limite** : Cloudflare Email Routing **reçoit/redirige seulement** (pas d'envoi).
  Je réponds depuis Gmail. Suffisant pour recevoir les demandes de prospects.

## Checklist

- [ ] Créer un compte gratuit sur **cloudflare.com** → *Add a site* → `biomestudio.fr`
- [ ] À l'import DNS, **vérifier** que ces 2 enregistrements Vercel sont présents
      et en **« DNS only » (nuage GRIS, pas orange)** :
      | Type  | Nom              | Valeur                    |
      |-------|------------------|---------------------------|
      | A     | `biomestudio.fr` | `216.198.79.1`            |
      | CNAME | `www`            | `…vercel-dns-017.com`     |
      ⚠️ NE PAS proxifier (orange) les records Vercel → boucles de redirection / erreurs SSL.
- [ ] Récupérer les **2 nameservers Cloudflare** (ex. `xxx.ns.cloudflare.com`)
- [ ] Dans **Hostinger → domaine → Nameservers** → remplacer par ceux de Cloudflare
- [ ] Attendre la propagation (souvent < 1 h, jusqu'à 24 h) → mail Cloudflare « domaine actif »
- [ ] Cloudflare → onglet **Email → Email Routing** → *Get started*
- [ ] Créer la règle `contact@biomestudio.fr` → **mon Gmail perso**
- [ ] **Vérifier** via le lien reçu sur le Gmail (Cloudflare ajoute MX + SPF tout seul)
- [ ] Tester : m'envoyer un mail à `contact@biomestudio.fr` → vérifier réception sur Gmail
- [ ] (Optionnel) Gmail → *Paramètres → Comptes → « Envoyer en tant que »* pour répondre
      depuis `contact@biomestudio.fr` (nécessite un SMTP tiers)
- [ ] **Une fois la réception testée** → demander à Claude de basculer `site.email`
      sur `contact@biomestudio.fr` dans `lib/content.ts`

## Alternatives (si je ne veux PAS changer les nameservers)

On ajoute juste 2 MX + 1 TXT **dans le DNS Hostinger actuel**, sans toucher aux NS :
- **ImprovMX** (gratuit) → redirection pure, comme Cloudflare mais sans bouger les NS.
- **Zoho Mail** (tier gratuit) → vraie boîte (envoi + réception depuis `contact@…`),
  config DNS un peu plus longue (MX + SPF + DKIM).
