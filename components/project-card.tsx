"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/content";

/**
 * Carte projet sobre : titre + statut, description, tags et liens.
 * Léger lift au survol (Framer Motion) — désactivé si prefers-reduced-motion.
 */
export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  const titleContent = (
    <span className="inline-flex items-center gap-1.5">
      {project.title}
      {project.href ? (
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </span>
  );

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <Card className="theme-surface group h-full border-border/70 bg-card transition-[border-color,box-shadow] hover:border-foreground/20 hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-base font-medium">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  {titleContent}
                </a>
              ) : (
                titleContent
              )}
            </CardTitle>
            {project.status ? (
              <Badge variant="outline" className="shrink-0 font-normal">
                {project.status}
              </Badge>
            ) : null}
          </div>
          <CardDescription className="leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-xs text-muted-foreground">
            {project.tags.join("  ·  ")}
          </p>

          {/* Preuve concrète : lien direct vers le produit en ligne. */}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-colors hover:text-muted-foreground"
            >
              <ExternalLink className="size-3.5" />
              Voir le site en ligne
            </a>
          ) : null}

          {project.links?.length ? (
            <div className="flex flex-wrap gap-3 border-t border-border/60 pt-3 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
