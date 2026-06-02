import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeStickerProps = {
  children: ReactNode;
  /** Variante de couleur du badge. */
  tone?: "primary" | "ink" | "accent" | "paper";
  className?: string;
};

const tones: Record<NonNullable<BadgeStickerProps["tone"]>, string> = {
  primary: "bg-primary text-primary-foreground",
  ink: "bg-foreground text-background",
  accent: "bg-accent text-accent-foreground",
  paper: "bg-card text-foreground border border-border shadow-soft",
};

/**
 * Badge « pill » sobre : capitales, posé bien droit. Sert aux accroches
 * du genre « RÉSERVATIONS 24/7 » et aux étiquettes de statut.
 */
export function BadgeSticker({
  children,
  tone = "primary",
  className,
}: BadgeStickerProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
