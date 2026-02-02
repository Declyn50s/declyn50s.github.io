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

export default function Portfolio2021CaseStudy({ isDark, isFR }: Props) {
  const t = useMemo(() => {
    const fr = {
      kicker: "Portfolio — 2021",
      title: "Portfolio 2021 — Fondations (responsive + dark mode)",
      subtitle:
        "Première version : un portfolio structuré et lisible, pensé pour fonctionner sur mobile, avec un mode sombre et une navigation par sections.",
      chips: ["Structure", "Responsive", "Dark mode", "Base"],
      contextTitle: "🎯 Contexte",
      contextBody:
        "C’était mon premier vrai portfolio ‘publiable’. Mon objectif était simple : être clair, propre, et utilisable partout (desktop/mobile).",
      goalsTitle: "✅ Objectifs",
      goals: [
        "Structurer le contenu (Home / About / Skills / Portfolio / Contact)",
        "Navigation simple + menu mobile",
        "Ajouter un mode sombre (préférence utilisateur)",
        "Montrer mes premiers projets et compétences",
      ],
      solutionTitle: "✨ Ce que j’ai construit",
      solution: [
        "Sections claires + ancrages",
        "Menu burger (mobile)",
        "Dark mode avec persistance (localStorage)",
        "Animations légères au scroll",
      ],
      learnTitle: "🧠 Ce que j’ai appris",
      learn: [
        "Une base solide (IA + responsive) fait gagner du temps pour itérer.",
        "Le dark mode, c’est simple mais ça donne une impression ‘produit’.",
        "La clarté est plus importante que la déco.",
      ],
      previewTitle: "Aperçu du site (Portfolio 2021)",
    };

    const en = {
      kicker: "Portfolio — 2021",
      title: "Portfolio 2021 — Foundations (responsive + dark mode)",
      subtitle:
        "First version: a structured and readable portfolio, designed to work well on mobile, with a dark mode and section-based navigation.",
      chips: ["Structure", "Responsive", "Dark mode", "Foundation"],
      contextTitle: "🎯 Context",
      contextBody:
        "It was my first ‘publishable’ portfolio. The goal was straightforward: clear, clean, and usable everywhere (desktop/mobile).",
      goalsTitle: "✅ Goals",
      goals: [
        "Structure the content (Home / About / Skills / Portfolio / Contact)",
        "Simple navigation + mobile menu",
        "Add dark mode (user preference)",
        "Show my early projects and skills",
      ],
      solutionTitle: "✨ What I built",
      solution: [
        "Clear sections + anchors",
        "Burger menu (mobile)",
        "Dark mode with persistence (localStorage)",
        "Light scroll animations",
      ],
      learnTitle: "🧠 What I learned",
      learn: [
        "A solid base (IA + responsive) saves time for future iterations.",
        "Dark mode is simple, yet it increases ‘product’ feel.",
        "Clarity beats decoration.",
      ],
      previewTitle: "Live preview (Portfolio 2021)",
    };

    return isFR ? fr : en;
  }, [isFR]);

  return (
    <div className="space-y-8">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.35 }}
        className="space-y-4"
      >
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

      <LegacyPreview title={t.previewTitle} src="portfolio/declyn50s.github.io-main/page/Portfolio/index1.html" height={820} />
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
