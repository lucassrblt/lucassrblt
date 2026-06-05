import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // L'ancienne landing « pas cher » a été repositionnée (qualité / tous budgets)
  // et son URL a changé : on redirige l'ancien chemin en 308 (permanent) pour
  // ne pas perdre les éventuels liens / l'indexation Google déjà acquise.
  async redirects() {
    return [
      {
        source: "/offres/site-internet-pas-cher",
        destination: "/offres/site-internet-tous-budgets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
