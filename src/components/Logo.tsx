import { Flame } from "lucide-react";

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-forest shadow-[var(--shadow-soft)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 3c-9 0-15 4.5-15 12 0 1.4.2 2.6.6 3.7L3 21.3 4.4 22.7l2.6-2.6C8.2 20.6 9.5 21 11 21c7 0 9-6.4 9-18Z"
            opacity="0.9"
          />
        </svg>
        <Flame className="absolute h-3.5 w-3.5 translate-x-[1px] translate-y-[1px] text-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-primary-deep">
          FIRE<span className="text-accent">PROTECT</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Association forêt
        </span>
      </span>
    </span>
  );
}