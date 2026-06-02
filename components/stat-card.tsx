import { cn } from "@/lib/utils";
import { CountUp } from "@/components/count-up";

/**
 * Petite carte de statistique (flottante dans le hero) : gros chiffre teal
 * animé (compteur), label, et une mini-courbe ascendante. Style unifié avec
 * les pastilles de résultat des réalisations.
 */
export function StatCard({
  to,
  prefix = "+",
  suffix = "%",
  label,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft-lg",
        className,
      )}
    >
      <div>
        <p className="font-display text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
          <CountUp to={to} prefix={prefix} suffix={suffix} />
        </p>
        <p className="mt-0.5 max-w-[7.5rem] text-xs leading-tight text-muted-foreground">
          {label}
        </p>
      </div>
      {/* Mini-courbe ascendante */}
      <svg
        aria-hidden
        viewBox="0 0 48 28"
        fill="none"
        className="h-7 w-12 shrink-0 text-primary"
      >
        <path
          d="M2 24 L14 16 L26 19 L46 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="46" cy="4" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );
}
