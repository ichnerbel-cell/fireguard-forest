import { createFileRoute, Link } from "@tanstack/react-router";
import { TreePine, Flame, Sprout, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero-forest.jpg";
import canopy from "@/assets/forest-canopy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIRE PROTECT — Protégeons nos forêts avant qu'il ne soit trop tard" },
      {
        name: "description",
        content:
          "FIRE PROTECT agit pour la prévention des feux de forêt, la sensibilisation du public et la reforestation des massifs brûlés.",
      },
      {
        property: "og:title",
        content: "FIRE PROTECT — Protégeons nos forêts avant qu'il ne soit trop tard",
      },
      {
        property: "og:description",
        content: "La prévention aujourd'hui, c'est la forêt de demain.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: TreePine,
    emoji: "🌲",
    title: "Prévenir",
    text: "Apprendre les bons gestes pour éviter les départs de feu.",
    to: "/prevention" as const,
  },
  {
    icon: Flame,
    emoji: "🔥",
    title: "Comprendre",
    text: "Découvrir les causes et les conséquences des incendies.",
    to: "/prevention" as const,
  },
  {
    icon: Sprout,
    emoji: "🌱",
    title: "Agir",
    text: "Découvrir comment chacun peut contribuer à protéger les forêts.",
    to: "/agir" as const,
  },
  {
    icon: HeartHandshake,
    emoji: "🧡",
    title: "Soutenir",
    text: "Participer à la protection et à la reforestation.",
    to: "/don" as const,
  },
];

const stats = [
  { value: 12543, label: "arbres plantés" },
  { value: 3218, label: "hectares protégés" },
  { value: 8756, label: "personnes sensibilisées" },
  { value: 1045, label: "départs de feu évités" },
];

function Index() {
  return (
    <div className="pb-10">
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Forêt de pins vue du ciel, moitié verte et intacte, moitié ravagée par un incendie"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(0.2_0.05_152/0.92),oklch(0.2_0.05_152/0.55),oklch(0.2_0.05_152/0.25))]" />
        <div className="mx-auto max-w-6xl px-5 py-28 md:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Flame className="h-3.5 w-3.5 text-accent" /> Association de protection des forêts
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] md:text-6xl">
              Ensemble, protégeons nos forêts avant qu'il ne soit trop tard.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
              La prévention aujourd'hui, c'est la forêt de demain.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild variant="glass" size="xl" className="rounded-full">
                <Link to="/prevention">En savoir plus</Link>
              </Button>
              <Button asChild variant="hero" size="xl" className="rounded-full">
                <Link to="/agir">
                  Agir maintenant <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold text-primary-deep md:text-4xl">
            Quatre manières de faire reculer le feu
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link to={p.to} className="block h-full">
                <article className="card-elevated group flex h-full flex-col p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-soft group-hover:text-accent">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-primary-deep">
                    {p.emoji} {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Découvrir
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <img
          src={canopy}
          alt=""
          aria-hidden
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,oklch(0.25_0.06_152/0.94),oklch(0.25_0.06_152/0.88))]" />
        <div className="mx-auto max-w-6xl px-5 text-primary-foreground">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Notre impact</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/75">
              Des chiffres de démonstration, mais une ambition bien réelle : que plus aucune forêt ne
              parte en fumée par négligence.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60">
                  <p className="font-display text-4xl font-black text-accent md:text-5xl">
                    <Counter to={s.value} />
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/70">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-black text-primary-deep md:text-4xl">
            Un mégot. Une étincelle. Des siècles de forêt perdus.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Neuf incendies sur dix sont d'origine humaine. Cela veut dire que neuf incendies sur dix
            peuvent être évités.
          </p>
          <Button asChild variant="forest" size="xl" className="mt-8 rounded-full">
            <Link to="/don">Soutenir la reforestation</Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
