import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/content";

/** Carte projet sobre : titre + statut, description, tags et liens secondaires. */
export function ProjectCard({ project }: { project: Project }) {
  const titleContent = (
    <span className="inline-flex items-center gap-1.5">
      {project.title}
      {project.href ? (
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </span>
  );

  return (
    <Card className="group h-full border-border/70 bg-card transition-colors hover:border-foreground/20">
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
        {project.links?.length ? (
          <div className="flex flex-wrap gap-3 text-sm">
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
  );
}
