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

export default function Portfolio2023CaseStudy({ isDark, isFR }: Props) {
  const t = useMemo(() => {
    const fr = {
      kicker: "Portfolio — 2023",
      title: "Portfolio 2023 — One-page orientée conversion",
      subtitle:
        "Troisième itération : une page unique structurée (sections + ancres) pour présenter mon profil, prouver par les projets et faciliter la prise de contact.",
      chips: ["UX", "Web", "Landing", "Itération"],
      contextTitle: "🎯 Contexte",
      contextBody:
        "Après deux versions plus ‘exploratoires’, je voulais une version plus ‘produit’ : rapide à comprendre, facile à scroller et utile pour un recruteur.",
      goalsTitle: "✅ Objectifs",
      goals: [
        "Accroche claire (positionnement + valeur)",
        "Navigation fluide (ancres + scroll)",
        "Mise en avant des projets (preuve)",
        "Contact simple et visible",
      ],
      solutionTitle: "✨ Ce que j’ai construit",
      solution: [
        "One-page avec sections (Home / Skills / Projects / Contact)",
        "Animations au scroll pour rythmer la lecture",
        "Cartes projets + CTA", 
        "Version EN séparée",
      ],
      learnTitle: "🧠 Ce que j’ai appris",
      learn: [
        "Moins d’effets, plus de lisibilité = meilleur ressenti.",
        "La hiérarchie (titre, preuve, contact) fait la différence.",
        "Une IA simple vaut mieux qu’un site ‘trop démonstratif’.",
      ],
      previewTitle: "Aperçu du site (Portfolio 2023)",
    };

    const en = {
      kicker: "Portfolio — 2023",
      title: "Portfolio 2023 — Conversion-focused one-page",
      subtitle:
        "Third iteration: a structured one-page (sections + anchors) to present my profile, prove through projects and make contact effortless.",
      chips: ["UX", "Web", "Landing", "Iteration"],
      contextTitle: "🎯 Context",
      contextBody:
        "After two more ‘exploratory’ versions, I wanted a more ‘product-minded’ portfolio: easy to scan, fast to understand, recruiter-friendly.",
      goalsTitle: "✅ Goals",
      goals: [
        "Clear positioning and value proposition",
        "Smooth navigation (anchors + scroll)",
        "Project showcase as proof",
        "Visible and simple contact section",
      ],
      solutionTitle: "✨ What I built",
      solution: [
        "One-page with sections (Home / Skills / Projects / Contact)",
        "Scroll animations to add rhythm",
        "Project cards + CTA",
        "Separate English version",
      ],
      learnTitle: "🧠 What I learned",
      learn: [
        "Fewer effects, better readability = stronger impact.",
        "Hierarchy (headline, proof, contact) matters.",
        "Simple IA beats an over-demonstrative site.",
      ],
      previewTitle: "Live preview (Portfolio 2023)",
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

      <LegacyPreview title={t.previewTitle} src="portfolio/declyn50s.github.io-main/index.html" height={820} />
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
