"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { BrowserMockup } from "@/components/browser-mockup";
import { BadgeSticker } from "@/components/badge-sticker";
import type { Project } from "@/lib/content";

/**
 * Carte réalisation « affiche » : mockup CSS du site en haut, infos en bas,
 * sticker de statut incliné. Lift au survol (off si prefers-reduced-motion).
 */
export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]"
    >
      {/* Sticker de statut */}
      <BadgeSticker
        tone={project.status === "En ligne" ? "orange" : "cobalt"}
        className="absolute right-4 top-4 z-10 rotate-6 text-[10px]"
      >
        {project.status}
      </BadgeSticker>

      <div className="bg-muted p-5">
        <BrowserMockup domain={project.domain} kind={project.kind} />
      </div>

      <div className="border-t-2 border-foreground p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-primary">
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              {project.title}
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
