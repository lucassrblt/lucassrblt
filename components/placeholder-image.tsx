import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Emplacement d'image en attendant les vrais visuels.
 * POINT DE SWAP : remplacer ce composant par <Image .../> (next/image) une fois
 * les photos disponibles (les déposer dans /public et passer src/alt).
 *
 * Rend un bloc au bon ratio avec un fond doux, une icône et un label discret.
 */
export function PlaceholderImage({
  label,
  className,
  rounded = "rounded-xl",
}: {
  label?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      data-placeholder
      role="img"
      aria-label={label ? `Placeholder : ${label}` : "Placeholder image"}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden bg-muted text-muted-foreground",
        "bg-[radial-gradient(circle_at_1px_1px,rgba(21,48,46,0.07)_1px,transparent_0)] [background-size:14px_14px]",
        rounded,
        className,
      )}
    >
      {/* TODO: remplacer par next/image avec la vraie photo */}
      <ImageIcon className="size-6 opacity-50" strokeWidth={1.5} />
      {label ? (
        <span className="px-2 text-center text-[10px] font-medium uppercase tracking-wide opacity-70">
          {label}
        </span>
      ) : null}
    </div>
  );
}
