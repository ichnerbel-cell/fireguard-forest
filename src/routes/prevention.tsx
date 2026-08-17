import { createFileRoute } from "@tanstack/react-router";
import {
  Cigarette,
  Flame,
  Ban,
  Trash2,
  ShieldAlert,
  PhoneCall,
  Tractor,
  CloudLightning,
  UserX,
  Beef,
  Wind,
  DoorOpen,
  Car,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import preventionImg from "@/assets/prevention.jpg";

export const Route = createFileRoute("/prevention")({
  head: () => ({
    meta: [
      { title: "Prévention des feux de forêt — FIRE PROTECT" },
      {
        name: "description",
        content:
          "Les bons gestes, les causes des incendies et la conduite à tenir en cas de départ de feu.",
      },
      { property: "og:title", content: "Prévention des feux de forêt — FIRE PROTECT" },
      {
        property: "og:description",
        content: "Apprenez les bons gestes pour éviter les départs de feu en forêt.",
      },
    ],
  }),
  component: PreventionPage,
});

const gestures = [
  {
    icon: Cigarette,
    title: "Jamais de mégots dans la nature",
    text: "Un mégot mal éteint suffit à enflammer une végétation sèche en quelques secondes.",
  },
  {
    icon: Ban,
    title: "Pas de feu en zone interdite",
    text: "Respectez la signalisation : certaines zones sont interdites toute l'année.",
  },
  {
    icon: Beef,
    title: "Éviter les barbecues à risque",
    text: "En période de sécheresse ou de vent, reportez tout barbecue en extérieur.",
  },
  {
    icon: Trash2,
    title: "Aucun déchet inflammable",
    text: "Verre, plastique et papier abandonnés peuvent déclencher ou nourrir un feu.",
  },
  {
    icon: ShieldAlert,
    title: "Respecter les restrictions",
    text: "Consultez les arrêtés préfectoraux avant toute sortie en massif forestier.",
  },
  {
    icon: PhoneCall,
    title: "Signaler immédiatement",
    text: "Au moindre départ de feu, appelez les secours : chaque minute compte.",
  },
];

const steps = [
  { icon: PhoneCall, title: "Alerter", text: "Appelez le 18 ou le 112 et localisez précisément le feu." },
  { icon: Wind, title: "S'éloigner", text: "Fuyez dos au vent, vers une zone déjà brûlée ou dégagée." },
  { icon: DoorOpen, title: "Se confiner", text: "Dans une maison : fermez volets et portes, restez à l'intérieur." },
  { icon: Car, title: "Ne pas gêner", text: "Libérez les routes pour laisser passer les secours." },
];

const causes = [
  { icon: UserX, title: "Négligence humaine", share: "50 %" },
  { icon: Beef, title: "Barbecues & feux de camp", share: "14 %" },
  { icon: Cigarette, title: "Mégots", share: "11 %" },
  { icon: Tractor, title: "Activités agricoles", share: "9 %" },
  { icon: Flame, title: "Incendies volontaires", share: "10 %" },
  { icon: CloudLightning, title: "Causes naturelles", share: "6 %" },
];

function PreventionPage() {
  return (
    <div className="pb-10">
      <section className="relative overflow-hidden bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <span className="inline-flex rounded-full bg-accent-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              Prévention
            </span>
            <h1 className="mt-5 text-4xl font-black text-primary-deep md:text-5xl">
              9 incendies sur 10 sont d'origine humaine.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Autrement dit : 9 incendies sur 10 pourraient être évités. Voici les gestes simples qui
              protègent réellement nos forêts.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={preventionImg}
              alt="Équipe de pompiers et bénévoles en formation dans une forêt de pins"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold text-primary-deep md:text-4xl">Les bons gestes</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Six réflexes à adopter dès que vous approchez d'un espace naturel.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gestures.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <article className="card-elevated group h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                  <g.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary-deep">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-forest py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Que faire en cas d'incendie ?</h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/75">
              Quatre étapes à mémoriser. Elles sauvent des vies.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 hover:border-accent/60">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      Étape {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 rounded-2xl border border-accent/40 bg-accent/15 p-5 text-sm font-semibold">
              Numéros d'urgence : 18 (pompiers) · 112 (urgence européenne)
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold text-primary-deep md:text-4xl">Les principales causes</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Répartition indicative des départs de feu recensés (données de démonstration).
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="card-elevated flex h-full items-center gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <c.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-bold text-primary-deep">{c.title}</h3>
                    <span className="font-display text-lg font-black text-accent">{c.share}</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <span
                      className="block h-full rounded-full bg-[var(--gradient-ember)]"
                      style={{ width: c.share }}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}