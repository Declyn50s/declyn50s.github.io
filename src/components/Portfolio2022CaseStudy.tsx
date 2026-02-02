import { useMemo } from "react";
import { motion } from "framer-motion";
import LegacyPreview from "./LegacyPreview";

type Props = {
  isDark: boolean;
  isFR: boolean;
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio2022CaseStudy({ isDark, isFR }: Props) {
  const t = useMemo(() => {
    const fr = {
      kicker: "Portfolio — 2022",
      title: "Portfolio 2022 — Expérience interactive",
      subtitle:
        "Deuxième itération : une version ‘showcase créatif’ avec popups, sliders et effets visuels pour explorer l’interaction et renforcer l’identité digitale.",
      chips: ["UI", "Interaction", "Showcase", "Exploration"],
      contextTitle: "🎯 Contexte",
      contextBody:
        "Je voulais aller plus loin que la V1 (structure) : tester des micro-interactions, rendre le portfolio plus vivant et donner un ressenti ‘digital’ plus fort.",
      goalsTitle: "✅ Objectifs",
      goals: [
        "Ajouter des interactions (popups / overlays)",
        "Mettre en scène mes projets",
        "Créer un univers visuel plus affirmé",
        "Tester des composants (slider, animations)",
      ],
      solutionTitle: "✨ Ce que j’ai construit",
      solution: [
        "Popups (ouvrir/fermer) pour afficher du contenu sans quitter la page",
        "Sliders/carrousels pour présenter des sections de manière dynamique",
        "Effets visuels (ex: background animé) pour la personnalité",
        "Structure plus ‘immersive’ orientée exploration",
      ],
      learnTitle: "🧠 Ce que j’ai appris",
      learn: [
        "Trop d’effets peut nuire à la lisibilité : il faut doser.",
        "Les interactions doivent servir un objectif (preuve, compréhension, contact).",
        "La performance et la maintenance deviennent un enjeu avec beaucoup de librairies.",
      ],
      previewTitle: "Aperçu du site (Portfolio 2022)",
    };

    const en = {
      kicker: "Portfolio — 2022",
      title: "Portfolio 2022 — Interactive experience",
      subtitle:
        "Second iteration: a more ‘creative showcase’ version with popups, sliders and visual effects to explore interaction and strengthen the digital identity.",
      chips: ["UI", "Interaction", "Showcase", "Exploration"],
      contextTitle: "🎯 Context",
      contextBody:
        "I wanted to go beyond V1 (structure): test micro-interactions, make the portfolio feel more alive, and build a stronger ‘digital’ vibe.",
      goalsTitle: "✅ Goals",
      goals: [
        "Add interactions (popups / overlays)",
        "Stage projects in a more engaging way",
        "Create a more distinctive visual universe",
        "Experiment with UI components (slider, animations)",
      ],
      solutionTitle: "✨ What I built",
      solution: [
        "Popups (open/close) to show content without leaving the page",
        "Sliders/carousels for dynamic storytelling",
        "Visual effects (e.g., animated background) to add personality",
        "A more immersive structure oriented toward exploration",
      ],
      learnTitle: "🧠 What I learned",
      learn: [
        "Too many effects can hurt readability — balance is key.",
        "Interactions must support an objective (proof, clarity, contact).",
        "Performance and maintenance become critical with many libraries.",
      ],
      previewTitle: "Live preview (Portfolio 2022)",
    };

    return isFR ? fr : en;
  }, [isFR]);

  return (
    <div className="space-y-8">
      <motion.header initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.35 }} className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-500">{t.kicker}</p>
        <h1 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-slate-50" : "text-slate-900"}`}>{t.title}</h1>
        <p className={`${isDark ? "text-slate-200" : "text-slate-700"}`}>{t.subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {t.chips.map((c) => (
            <span
              key={c}
              className={`text-xs px-2.5 py-1 rounded-full border ${
                isDark ? "bg-slate-900/40 border-slate-700 text-slate-200" : "bg-white border-violet-100 text-slate-600"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </motion.header>

      <div className="grid md:grid-cols-2 gap-4">
        <Card isDark={isDark} title={t.contextTitle}>
          <p className={`${isDark ? "text-slate-200" : "text-slate-700"}`}>{t.contextBody}</p>
        </Card>

        <Card isDark={isDark} title={t.goalsTitle}>
          <ul className={`list-disc pl-5 space-y-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            {t.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card isDark={isDark} title={t.solutionTitle}>
          <ul className={`list-disc pl-5 space-y-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            {t.solution.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Card>

        <Card isDark={isDark} title={t.learnTitle}>
          <ul className={`list-disc pl-5 space-y-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            {t.learn.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Card>
      </div>

      <LegacyPreview
        title={t.previewTitle}
        src="portfolio/declyn50s.github.io-main/page/Portfolio/index.html"
        height={820}
      />
    </div>
  );
}

function Card({
  isDark,
  title,
  children,
}: {
  isDark: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border shadow-sm p-5 ${
        isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-violet-100"
      }`}
    >
      <p className={`font-semibold mb-2 ${isDark ? "text-slate-50" : "text-slate-900"}`}>{title}</p>
      {children}
    </div>
  );
}
