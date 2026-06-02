import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Marquee horizontal infini en CSS : duplique les items et les fait défiler.
 * Respecte prefers-reduced-motion via le bloc global (animation coupée).
 * Les items sont des nœuds React (texte + picto, par ex.).
 */
export function Marquee({
  items,
  className,
  separator = "✦",
  fast = false,
}: {
  items: ReactNode[];
  className?: string;
  separator?: ReactNode;
  fast?: boolean;
}) {
  return (
    <div className={cn("flex w-max", fast ? "animate-marquee-fast" : "animate-marquee")}>
      {[0, 1].map((dup) => (
        <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className={className}>{item}</span>
              <span className="mx-6 text-accent" aria-hidden>
                {separator}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
