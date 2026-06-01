import { cn } from "@/lib/utils";

/**
 * Marquee horizontal infini en CSS : duplique les items et les fait défiler.
 * Respecte prefers-reduced-motion via le bloc global (animation coupée).
 */
export function Marquee({
  items,
  className,
  separator = "✦",
  fast = false,
}: {
  items: string[];
  className?: string;
  separator?: string;
  fast?: boolean;
}) {
  return (
    <div className={cn("flex w-max", fast ? "animate-marquee-fast" : "animate-marquee")}>
      {[0, 1].map((dup) => (
        <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
          {items.map((item) => (
            <li key={item} className="flex items-center">
              <span className={className}>{item}</span>
              <span className="mx-6 text-primary" aria-hidden>
                {separator}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
