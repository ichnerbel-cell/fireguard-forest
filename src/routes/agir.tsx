import { createFileRoute, Link } from "@tanstack/react-router";
import { Megaphone, Trash2, TreePine, Eye, HeartHandshake, Sprout, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import plantingImg from "@/assets/planting.jpg";

export const Route = createFileRoute("/agir")({
  head: () => ({
    meta: [
      { title: "Agir pour les forêts — FIRE PROTECT" },
      {
        name: "description",
        content:
          "Six façons concrètes de participer à la protection des forêts : sensibiliser, nettoyer, planter, signaler, donner.",
      },
      { property: "og:title", content: "Agir pour les forêts — FIRE PROTECT" },
      {
        property: "og:description",
        content: "Protéger une forêt commence par un petit geste. Découvrez comment agir.",
      },
    ],
  }),
  component: AgirPage,
});

const actions = [
  {
    icon: Megaphone,
    title: "Sensibiliser son entourage",
    text: "Partagez les bons gestes autour de vous : famille, amis, collègues, voisins.",
  },
  {
    icon: Trash2,
    title: "Participer aux nettoyages",
    text: "Rejoignez une opération de ramassage de déchets en forêt près de chez vous.",
  },
  {
    icon: TreePine,
    title: "Planter des arbres",
    text: "Une matinée de plantation, ce sont des dizaines d'arbres qui repartent.",
  },
  {
    icon: Eye,
    title: "Signaler les comportements dangereux",
    text: "Feu non autorisé, dépôt sauvage : prévenez les autorités compétentes.",
  },
  {
    icon: HeartHandshake,
    title: "Faire un don",
    text: "Chaque contribution finance du matériel, des actions et des plantations.",
  },
  {
    icon: Sprout,
    title: "Rejoindre la reforestation",
    text: "Suivez nos chantiers saisonniers de replantation des massifs brûlés.",
  },
];

function AgirPage() {
  return (
    <div className="pb-10">
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <span className="inline-flex rounded-full bg-accent-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              Agir
            </span>
            <h1 className="mt-5 text-4xl font-black text-primary-deep md:text-5xl">
              Chaque geste compte
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Vous n'avez pas besoin d'être pompier pour protéger une forêt. Voici six manières
              concrètes de contribuer, dès aujourd'hui.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <article className="card-elevated group h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-soft group-hover:text-accent">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary-deep">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={plantingImg}
              alt="Deux paires de mains plantant un jeune arbre dans la terre d'une forêt"
              width={1200}
              height={800}
              loading="lazy"
              className="h-[26rem] w-full object-cover md:h-[32rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.06_152/0.92),oklch(0.25_0.06_152/0.45))]" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-8 text-primary-foreground md:px-14">
                <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">
                  « Protéger une forêt commence par un petit geste. »
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Un mégot ramassé, un ami sensibilisé, un arbre planté. Mis bout à bout, ces gestes
                  deviennent une forêt entière.
                </p>
                <Button asChild variant="hero" size="xl" className="mt-8 rounded-full">
                  <Link to="/don">
                    Je veux aider <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}