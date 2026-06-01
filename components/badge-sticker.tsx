import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeStickerProps = {
  children: ReactNode;
  /** Variante de couleur du sticker. */
  tone?: "orange" | "ink" | "cobalt" | "paper";
  className?: string;
  /** Active le léger wiggle (off par défaut pour les usages statiques). */
  wiggle?: boolean;
};

const tones: Record<NonNullable<BadgeStickerProps["tone"]>, string> = {
  orange: "bg-primary text-primary-foreground border-foreground",
  ink: "bg-foreground text-background border-foreground",
  cobalt: "bg-secondary text-secondary-foreground border-foreground",
  paper: "bg-card text-foreground border-foreground",
};

/**
 * Badge/sticker incliné « affiche » : bord épais, rounded-full, légèrement
 * tourné. Sert à coller des accroches du genre « RÉSERVATIONS 24/7 ».
 */
export function BadgeSticker({
  children,
  tone = "orange",
  className,
  wiggle = false,
}: BadgeStickerProps) {
  return (
    <span
      className={cn(
        "inline-flex -rotate-6 items-center rounded-full border-2 px-4 py-1.5 text-xs font-extrabold tracking-wide uppercase shadow-[3px_3px_0_0_var(--foreground)]",
        tones[tone],
        wiggle && "animate-wiggle",
        className,
      )}
    >
      {children}
    </span>
  );
}
