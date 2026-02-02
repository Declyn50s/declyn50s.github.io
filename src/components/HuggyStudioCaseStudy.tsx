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

// IMPORTANT: fichier à placer dans /public
const PDF_URL = "/Projet-UX-HuggyStudio.pdf";

export default function HuggyStudioCaseStudy({ isDark, isFR }: Props) {
  const [tab, setTab] = useState<"ux" | "process">("ux");
  const [showPdfPreview, setShowPdfPreview] = useState(false); // ✅ pas affiché d’office

  const t = useMemo(() => {
    const fr = {
      kicker: "Projet UX",
      title: "HuggyStudio — Refonte UX du parcours de conversion",
      subtitle:
        "Travail de diplôme UX Designer (SAWI — 2022). Objectif : améliorer la conversion du formulaire de demande, réduire la friction et clarifier l’offre.",
      chip1: "UX Design",
      chip2: "Conversion",
      chip3: "Research",
      openPdf: "Ouvrir le PDF",
      togglePreview: showPdfPreview ? "Masquer l’aperçu" : "Afficher l’aperçu",
      tabsUx: "Synthèse",
      tabsProcess: "Méthode",
      contextTitle: "🎯 Contexte",
      contextBody:
        "HuggyStudio propose une Académie No-Code (formation) et une Agence No-Code (prestations). Le formulaire de demande était un point de friction majeur : trop long, trop technique, mal compris et peu adapté aux profils non-tech.",
      problemsTitle: "Problèmes identifiés",
      problems: [
        "Formulaire long (jusqu’à 9 étapes)",
        "Jargon technique",
        "Offre pas assez claire (Académie vs Agence)",
        "Manque de réassurance",
        "Faible taux de complétion",
      ],
      goalsTitle: "🧠 Objectifs UX",
      goals: [
        "Clarifier l’offre (Académie vs Agence)",
        "Réduire la charge cognitive",
        "Simplifier le parcours",
        "Rendre le formulaire plus engageant",
        "Guider l’utilisateur sans le perdre",
        "Adapter le discours à des profils non techniques",
      ],
      solutionTitle: "✨ Solution proposée",
      solution: [
        "2 entrées claires : Académie / Agence",
        "Formulaire progressif (1 écran = 1 action) + progression visible",
        "Suppression des champs inutiles + réduction d’étapes",
        "Ton plus humain + langage simplifié",
        "Réassurance progressive + FAQ stratégique",
        "Suppression des prix fixes (frein psychologique)",
      ],
      resultsTitle: "📈 Résultats",
      results: [
        { k: "UX validée", v: "Crash tests utilisateurs concluants" },
        { k: "Parcours simplifié", v: "Moins de confusion et d’abandon" },
        { k: "Client satisfait", v: "Projet validé & recommandé" },
      ],
      processTitle: "🧭 Démarche UX (résumé)",
      processCards: [
        {
          title: "Analyse & cadrage",
          body: "Audit du site existant, arborescence, friction points, analyse des performances (Lighthouse) et benchmark.",
        },
        {
          title: "Personas & parcours",
          body: "Deux cibles principales : Académie (entrepreneur/étudiant) et Agence (chef de projet/entrepreneur).",
        },
        {
          title: "Tests & itérations",
          body: "6 utilisateurs (marketing, tech, ergonomie, social). Itérations : wording, étapes, CTA, FAQ, réassurance.",
        },
      ],
      pdfTitle: "PDF — dossier complet",
      pdfSub: "Aperçu intégré (si ton navigateur le supporte).",
    };

    const en = {
      kicker: "UX Project",
      title: "HuggyStudio — UX redesign for conversion journey",
      subtitle:
        "UX Designer diploma project (SAWI — 2022). Goal: increase form completion, reduce friction and clarify the offer.",
      chip1: "UX Design",
      chip2: "Conversion",
      chip3: "Research",
      openPdf: "Open PDF",
      togglePreview: showPdfPreview ? "Hide preview" : "Show preview",
      tabsUx: "Summary",
      tabsProcess: "Method",
      contextTitle: "🎯 Context",
      contextBody:
        "HuggyStudio offers a No-Code Academy (training) and a No-Code Agency (services). The request form was a major friction point: long, too technical, poorly understood and not adapted to non-technical profiles.",
      problemsTitle: "Key issues",
      problems: [
        "Long form (up to 9 steps)",
        "Too much technical jargon",
        "Offer not clear (Academy vs Agency)",
        "Lack of reassurance",
        "Low completion rate",
      ],
      goalsTitle: "🧠 UX goals",
      goals: [
        "Clarify the offer (Academy vs Agency)",
        "Reduce cognitive load",
        "Simplify the journey",
        "Make the form more engaging",
        "Guide users without losing them",
        "Adapt wording to non-technical profiles",
      ],
      solutionTitle: "✨ Proposed solution",
      solution: [
        "Two clear entry points: Academy / Agency",
        "Progressive form (1 screen = 1 action) + visible progress",
        "Remove unnecessary fields + reduce steps",
        "More human tone + simplified language",
        "Progressive reassurance + strategic FAQ",
        "Remove fixed prices (psychological barrier)",
      ],
      resultsTitle: "📈 Results",
      results: [
        { k: "Validated UX", v: "User crash tests were positive" },
        { k: "Simplified journey", v: "Less confusion and drop-off" },
        { k: "Client satisfied", v: "Project approved & recommended" },
      ],
      processTitle: "🧭 UX process (summary)",
      processCards: [
        {
          title: "Analysis & framing",
          body: "Website audit, IA review, friction points, performance check (Lighthouse) and competitive benchmark.",
        },
        {
          title: "Personas & journeys",
          body: "Two key targets: Academy (entrepreneur/student) and Agency (project lead/entrepreneur).",
        },
        {
          title: "Testing & iterations",
          body: "6 users (marketing, tech, ergonomics, social). Iterations: wording, steps, CTAs, FAQ, reassurance.",
        },
      ],
      pdfTitle: "PDF — full report",
      pdfSub: "Embedded preview (if supported by your browser).",
    };

    return isFR ? fr : en;
  }, [isFR, showPdfPreview]);

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

        <div className="flex gap-2 w-full md:w-auto">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
          >
            {t.openPdf} <span className="ml-2">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setShowPdfPreview((p) => !p)}
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

      {/* PDF Preview (masqué par défaut) */}
      <AnimatePresence initial={false}>
        {showPdfPreview && (
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
                <p className={`text-xs font-semibold ${titleText}`}>{t.pdfTitle}</p>
                <p className={`text-[11px] ${subtleText}`}>{t.pdfSub}</p>
              </div>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-violet-600 hover:text-violet-700"
              >
                {t.openPdf} ↗
              </a>
            </div>

            <div className="w-full aspect-[16/10] bg-black/5">
              <iframe
                title="HuggyStudio PDF"
                src={PDF_URL}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
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
        </div>
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

            <div className={`${cardBase} p-4 space-y-3 md:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.resultsTitle}
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {t.results.map((r) => (
                  <div
                    key={r.k}
                    className={`rounded-2xl border p-3 ${
                      isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${titleText}`}>{r.k}</p>
                    <p className={`text-xs mt-1 ${subtleText}`}>{r.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="process"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className={`${cardBase} p-4 space-y-2 md:col-span-3`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.processTitle}
              </p>
            </div>

            {t.processCards.map((c) => (
              <div key={c.title} className={`${cardBase} p-4 space-y-2`}>
                <p className={`text-sm font-semibold ${titleText}`}>{c.title}</p>
                <p className={`text-sm ${subtleText}`}>{c.body}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
