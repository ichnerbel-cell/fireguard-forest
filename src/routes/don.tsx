import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Sprout, TreePine, Users, ShieldCheck, Info } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import canopy from "@/assets/forest-canopy.jpg";

export const Route = createFileRoute("/don")({
  head: () => ({
    meta: [
      { title: "Faire un don — FIRE PROTECT" },
      {
        name: "description",
        content:
          "Chaque don symbolique finance la prévention et la reforestation. Prototype de démonstration, aucune transaction réelle.",
      },
      { property: "og:title", content: "Faire un don — FIRE PROTECT" },
      {
        property: "og:description",
        content: "Aidez-nous à faire grandir la forêt, pas les flammes. Chaque don = un arbre planté.",
      },
    ],
  }),
  component: DonPage;
});

const AMOUNTS = [5, 10, 25, 50, 100];
const GOAL = 75000;
const RAISED = 48620;

function DonPage() {
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom] = useState("");

  const amount = useMemo(() => {
    if (custom.trim() !== "") return Math.max(0, Number(custom.replace(",", ".")) || 0);
    return selected ?? 0;
  }, [custom, selected]);

  const trees = Math.max(amount > 0 ? 1 : 0, Math.floor(amount / 5));
  const progress = Math.min(100, (RAISED / GOAL) * 100);

  const handleDonate = () => {
    if (amount <= 0) {
      toast.error("Choisissez d'abord un montant.");
      return;
    }
    toast.success("Merci pour votre soutien ! 🌱", {
      description: `Votre don symbolique de ${amount} € permettra de planter ${trees} arbre${
        trees > 1 ? "s" : ""
      }.`,
    });
  };

  return (
    <div className="pb-10">
      <section className="relative overflow-hidden">
        <img
          src={canopy}
          alt="Vue aérienne d'une canopée forestière dense au lever du soleil"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.25_0.06_152/0.88),oklch(0.25_0.06_152/0.7))]" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center text-primary-foreground md:py-28">
          <Reveal>
            <h1 className="font-display text-4xl font-black leading-tight md:text-5xl">
              Aidez-nous à faire grandir la forêt, pas les flammes.
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Chaque don contribue à nos actions de prévention et de reforestation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto -mt-14 grid max-w-6xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="card-elevated p-7 md:p-9">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-display text-4xl font-black text-primary-deep">
                  {RAISED.toLocaleString("fr-FR")} €
                </p>
                <p className="text-sm text-muted-foreground">
                  collectés sur un objectif de {GOAL.toLocaleString("fr-FR")} €
                </p>
              </div>
              <span className="rounded-full bg-accent-soft px-4 py-1.5 text-sm font-bold text-accent">
                {Math.round(progress)} % atteint
              </span>
            </div>
            <div className="mt-5 h-3.5 w-full overflow-hidden rounded-full bg-secondary">
              <span
                className="block h-full rounded-full bg-[var(--gradient-ember)] transition-[width] duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: TreePine, value: "9 724", label: "arbres financés" },
                { icon: Users, value: "2 381", label: "donateurs" },
                { icon: ShieldCheck, value: "27", label: "massifs suivis" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-secondary/70 p-4">
                  <s.icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 font-display text-xl font-black text-primary-deep">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-9 text-xl font-bold text-primary-deep">Choisissez votre montant</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {AMOUNTS.map((a) => {
                const active = custom.trim() === "" && selected === a;
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      setSelected(a);
                      setCustom("");
                    }}
                    className={`rounded-xl border py-3 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                      active
                        ? "border-accent bg-accent-soft text-accent shadow-[var(--shadow-ember)]"
                        : "border-border bg-card text-primary-deep hover:border-accent/60"
                    }`}
                  >
                    {a} €
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <label
                htmlFor="custom-amount"
                className="text-sm font-semibold text-muted-foreground"
              >
                Montant personnalisé
              </label>
              <div className="relative mt-2">
                <Input
                  id="custom-amount"
                  inputMode="decimal"
                  placeholder="Ex : 75"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setSelected(null);
                  }}
                  className="h-12 rounded-xl pr-10 text-base"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  €
                </span>
              </div>
            </div>

            <div
              key={trees}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-primary/20 bg-secondary/70 p-4"
              style={{ animation: "reveal-up 0.45s ease" }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Sprout className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-primary-deep">
                {amount > 0
                  ? `🌱 Votre don permettra de planter ${trees} arbre${trees > 1 ? "s" : ""}.`
                  : "🌱 Sélectionnez un montant pour voir votre impact."}
              </p>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="mt-6 w-full rounded-2xl text-lg"
              onClick={handleDonate}
            >
              Faire un don {amount > 0 ? `· ${amount} €` : ""}
            </Button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5" />
              Prototype — aucune transaction réelle n'est effectuée.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <aside className="card-elevated h-full bg-gradient-forest p-8 text-primary-foreground">
            <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              Notre engagement
            </span>
            <h2 className="mt-5 font-display text-3xl font-black">Chaque don = un arbre planté 🌱</h2>
            <p className="mt-4 text-primary-foreground/80">
              Pour chaque don effectué sur cette plateforme, un arbre est symboliquement planté afin
              de contribuer à la reforestation des massifs touchés par les incendies.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-primary-foreground/85">
              {[
                "5 € — un jeune plant et sa protection",
                "25 € — une journée de sensibilisation scolaire",
                "50 € — l'entretien d'un pare-feu sur 100 m",
                "100 € — un chantier de replantation participatif",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-4 text-xs text-primary-foreground/70">
              Aucune information bancaire n'est demandée : ce site est une maquette de démonstration.
            </p>
          </aside>
        </Reveal>
      </section>
    </div>
  );
}