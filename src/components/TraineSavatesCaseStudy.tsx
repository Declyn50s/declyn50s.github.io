import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isDark: boolean;
  isFR: boolean;
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const LIVE_URL = "https://declyn50s.github.io/Traine-Savates-2/";
const ORIGINAL_URL = "https://www.traine-savates.ch/";

export default function TraineSavatesCaseStudy({ isDark, isFR }: Props) {
  const [tab, setTab] = useState<"ux" | "process" | "compare">("ux");
  const [showPreview, setShowPreview] = useState(false);

  const t = useMemo(() => {
    const fr = {
      kicker: "Projet UX/UI",
      title: "Traîne-Savates — Refonte UX du site du club",
      subtitle:
        "Projet personnel : moderniser un site associatif pour améliorer lisibilité, navigation et engagement. Travail centré sur la hiérarchisation de l’information, une IA plus claire et une expérience mobile plus fluide.",
      chip1: "UX/UI",
      chip2: "IA / Structure",
      chip3: "Mobile-first",
      openLive: "Ouvrir la refonte (live)",
      openOriginal: "Voir le site actuel",
      togglePreview: showPreview ? "Masquer l’aperçu" : "Afficher l’aperçu",
      tabsUx: "Synthèse",
      tabsProcess: "Démarche",
      tabsCompare: "Avant / Après",

      contextTitle: "🎯 Contexte",
      contextBody:
        "traine-savates.ch est le site officiel d’un club de course à pied local. Il informait, mais avec des limites d’ergonomie, de lisibilité, de hiérarchie de contenu et de cohérence visuelle. Objectif : moderniser et rendre l’expérience plus claire et engageante.",

      problemsTitle: "❌ Problèmes identifiés",
      problems: [
        "Structure confuse : trop d’infos sans hiérarchie",
        "Navigation peu intuitive, pages longues et chargées",
        "Manque de repères visuels et de parcours clair",
        "Design daté, faible uniformité graphique",
        "Valeurs / vie du club peu mises en avant",
        "Expérience mobile peu lisible",
      ],

      goalsTitle: "✅ Objectifs de la refonte",
      goals: [
        "Clarifier et structurer l’information",
        "Améliorer l’expérience mobile",
        "Valoriser la vie du club (photos, événements, activités)",
        "Faciliter la navigation et l’accès rapide aux infos",
        "Donner une image plus moderne et dynamique",
        "Renforcer identité visuelle / cohérence",
      ],

      solutionTitle: "✨ Solutions proposées",
      solution: [
        "Architecture clarifiée : Accueil / Le club / Activités / Galerie / Événements / Sponsors / Contact",
        "Sections plus aérées + délimitation claire des blocs",
        "Hiérarchie typographique plus forte (titres, sous-titres, CTA)",
        "Moins de texte, plus d’impact visuel (images, événements)",
        "Parcours mobile fluide (lecture verticale naturelle)",
        "Sponsors et partenaires mieux valorisés (crédibilité)",
      ],

      valueTitle: "🧩 Valeur ajoutée",
      value: [
        "Refonte orientée utilisateur (3 profils : visiteurs / membres / sponsors)",
        "Meilleure lisibilité et navigation",
        "Image du club plus moderne et plus sportive",
        "Structure prête pour évoluer (news, inscriptions, etc.)",
      ],

      demoTitle: "Aperçu intégré",
      demoSub: "Affichage via iframe (si ton navigateur l’autorise).",
    };

    const en = {
      kicker: "UX/UI Project",
      title: "Traîne-Savates — Website UX redesign",
      subtitle:
        "Personal project: modernize a local running club website to improve readability, navigation and engagement. Focus on information hierarchy, clearer IA and a smoother mobile experience.",
      chip1: "UX/UI",
      chip2: "IA / Structure",
      chip3: "Mobile-first",
      openLive: "Open redesign (live)",
      openOriginal: "See current website",
      togglePreview: showPreview ? "Hide preview" : "Show preview",
      tabsUx: "Summary",
      tabsProcess: "Process",
      tabsCompare: "Before / After",

      contextTitle: "🎯 Context",
      contextBody:
        "traine-savates.ch is the official website of a local running club. It was informative but lacked usability, readability, clear content hierarchy and visual consistency. Goal: modernize and make the experience clearer and more engaging.",

      problemsTitle: "❌ Key issues",
      problems: [
        "Confusing structure: too much info without hierarchy",
        "Unclear navigation, long and dense pages",
        "Few visual cues and no clear user journey",
        "Outdated design, low visual consistency",
        "Club values and life not highlighted enough",
        "Weak mobile readability",
      ],

      goalsTitle: "✅ Redesign goals",
      goals: [
        "Clarify and structure information",
        "Improve mobile experience",
        "Show club life (photos, events, activities)",
        "Make navigation simpler and faster",
        "Deliver a modern, energetic look",
        "Strengthen visual identity / consistency",
      ],

      solutionTitle: "✨ Proposed solutions",
      solution: [
        "Clear IA: Home / Club / Activities / Gallery / Events / Sponsors / Contact",
        "More whitespace + clearly separated sections",
        "Stronger typographic hierarchy (titles, subtitles, CTAs)",
        "Less text, more visual impact (images, events)",
        "Smooth mobile flow (natural top-to-bottom reading)",
        "Better sponsor section (credibility & visibility)",
      ],

      valueTitle: "🧩 Added value",
      value: [
        "User-centered redesign (3 personas: visitors / members / sponsors)",
        "Improved readability and navigation",
        "More modern and sporty club image",
        "Scalable structure (news, registrations, etc.)",
      ],

      demoTitle: "Embedded preview",
      demoSub: "Displayed via iframe (if allowed by your browser).",
    };

    return isFR ? fr : en;
  }, [isFR, showPreview]);

  const cardBase = `rounded-2xl border shadow-sm ${
    isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"
  }`;
  const subtleText = isDark ? "text-slate-300" : "text-slate-600";
  const titleText = isDark ? "text-slate-50" : "text-slate-900";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-500">{t.kicker}</p>
          <h3 className={`text-xl md:text-2xl font-bold ${titleText}`}>{t.title}</h3>
          <p className={`text-sm md:text-base max-w-2xl ${subtleText}`}>{t.subtitle}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {[t.chip1, t.chip2, t.chip3].map((chip) => (
              <span
                key={chip}
                className={`px-2.5 py-1 rounded-full text-xs border ${
                  isDark
                    ? "border-violet-900/40 bg-violet-900/30 text-violet-200"
                    : "border-violet-200 bg-violet-50 text-violet-700"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 w-full md:w-auto flex-col sm:flex-row">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
          >
            {t.openLive} <span className="ml-2">↗</span>
          </a>

          <a
            href={ORIGINAL_URL}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              isDark
                ? "border-slate-700 text-slate-100 bg-slate-900/40 hover:bg-slate-900/70"
                : "border-violet-200 text-violet-700 bg-white hover:bg-violet-50"
            }`}
          >
            {t.openOriginal} <span className="ml-2">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setShowPreview((p) => !p)}
            className={`inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              isDark
                ? "border-slate-700 text-slate-100 bg-slate-900/40 hover:bg-slate-900/70"
                : "border-violet-200 text-violet-700 bg-white hover:bg-violet-50"
            }`}
          >
            {t.togglePreview}
          </button>
        </div>
      </div>

      {/* Preview */}
      <AnimatePresence initial={false}>
        {showPreview && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className={`${cardBase} overflow-hidden`}
          >
            <div className="px-4 py-3 border-b flex items-center justify-between gap-3">
              <div>
                <p className={`text-xs font-semibold ${titleText}`}>{t.demoTitle}</p>
                <p className={`text-[11px] ${subtleText}`}>{t.demoSub}</p>
              </div>
              <a href={LIVE_URL} target="_blank" rel="noreferrer" className="text-xs font-medium text-violet-600 hover:text-violet-700">
                {t.openLive} ↗
              </a>
            </div>

            <div className="w-full aspect-[16/10] bg-black/5">
              <iframe
                title="Traîne-Savates redesign preview"
                src={LIVE_URL}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tabs */}
      <div
        className={`inline-flex rounded-full border shadow-sm overflow-hidden text-xs ${
          isDark ? "bg-slate-900 border-slate-700" : "bg-white border-violet-100"
        }`}
      >
        <button
          type="button"
          onClick={() => setTab("ux")}
          className={`px-3 py-1.5 ${
            tab === "ux" ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {t.tabsUx}
        </button>
        <button
          type="button"
          onClick={() => setTab("process")}
          className={`px-3 py-1.5 ${
            tab === "process" ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {t.tabsProcess}
        </button>
        <button
          type="button"
          onClick={() => setTab("compare")}
          className={`px-3 py-1.5 ${
            tab === "compare" ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {t.tabsCompare}
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {tab === "ux" ? (
          <motion.div
            key="ux"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className={`${cardBase} p-4 space-y-2 md:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.contextTitle}
              </p>
              <p className={`text-sm ${subtleText}`}>{t.contextBody}</p>
            </div>

            <div className={`${cardBase} p-4 space-y-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.problemsTitle}
              </p>
              <ul className={`space-y-2 text-sm ${subtleText}`}>
                {t.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink-400 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${cardBase} p-4 space-y-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.goalsTitle}
              </p>
              <ul className={`space-y-2 text-sm ${subtleText}`}>
                {t.goals.map((g) => (
                  <li key={g} className="flex items-start gap-2">
                    <span className="mt-1.5 text-pink-400">✓</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${cardBase} p-4 space-y-2 md:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.solutionTitle}
              </p>
              <ul className={`grid md:grid-cols-2 gap-2 text-sm ${subtleText}`}>
                {t.solution.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink-400 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${cardBase} p-4 space-y-2 md:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.valueTitle}
              </p>
              <ul className={`grid md:grid-cols-2 gap-2 text-sm ${subtleText}`}>
                {t.value.map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="mt-1.5 text-pink-400">✓</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : tab === "process" ? (
          <motion.div
            key="process"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              {
                title: isFR ? "Analyse du besoin" : "Needs analysis",
                body: isFR
                  ? "3 profils clés : nouveaux visiteurs (comprendre), membres (infos/événements), sponsors (crédibilité/visibilité)."
                  : "3 key personas: visitors (understand), members (info/events), sponsors (credibility/visibility).",
              },
              {
                title: isFR ? "Refonte de l’IA" : "Information architecture",
                body: isFR
                  ? "Navigation simplifiée et contenu hiérarchisé : Accueil, Club, Activités, Galerie, Événements, Sponsors, Contact."
                  : "Simplified navigation and hierarchy: Home, Club, Activities, Gallery, Events, Sponsors, Contact.",
              },
              {
                title: isFR ? "UI & mobile" : "UI & mobile",
                body: isFR
                  ? "Design plus aéré, sections mieux délimitées, lecture naturelle, mise en valeur des images et de la vie du club."
                  : "More whitespace, clearer sections, natural reading flow, stronger visuals and club life highlight.",
              },
            ].map((c) => (
              <div key={c.title} className={`${cardBase} p-4 space-y-2`}>
                <p className={`text-sm font-semibold ${titleText}`}>{c.title}</p>
                <p className={`text-sm ${subtleText}`}>{c.body}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="compare"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className={`${cardBase} p-4`}
          >
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className={`rounded-2xl border p-3 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {isFR ? "Avant" : "Before"}
                </p>
                <ul className={`mt-2 space-y-2 ${subtleText}`}>
                  <li>• {isFR ? "Navigation confuse" : "Confusing navigation"}</li>
                  <li>• {isFR ? "Trop d’informations, peu hiérarchisées" : "Too much info, weak hierarchy"}</li>
                  <li>• {isFR ? "Design daté" : "Outdated design"}</li>
                  <li>• {isFR ? "Peu d’émotion / identité" : "Low emotion / identity"}</li>
                  <li>• {isFR ? "Mobile peu lisible" : "Weak mobile readability"}</li>
                </ul>
              </div>

              <div className={`rounded-2xl border p-3 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {isFR ? "Après" : "After"}
                </p>
                <ul className={`mt-2 space-y-2 ${subtleText}`}>
                  <li>• {isFR ? "Navigation claire" : "Clear navigation"}</li>
                  <li>• {isFR ? "Contenu structuré & lisible" : "Structured, readable content"}</li>
                  <li>• {isFR ? "Design plus moderne" : "More modern design"}</li>
                  <li>• {isFR ? "Identité sportive renforcée" : "Stronger sporty identity"}</li>
                  <li>• {isFR ? "Mobile-friendly" : "Mobile-friendly"}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
