import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { navItems } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 bg-gradient-forest text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold">
            FIRE<span className="text-accent">PROTECT</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/75">
            « Préserver aujourd'hui, protéger demain. » Association fictive dédiée à la prévention
            des feux de forêt et à la reforestation.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:bg-accent/20"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Informations</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
            <li>contact@fireprotect.demo</li>
            <li>+33 4 00 00 00 00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} FIRE PROTECT — Prototype de démonstration, aucune transaction
        réelle n'est effectuée.
      </div>
    </footer>
  );
}