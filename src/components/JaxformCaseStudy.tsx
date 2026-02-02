// src/components/JaxformCaseStudy.tsx
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

const DEMO_URL = "https://declyn50s.github.io/jaxform-galion/";

// ✅ Ton PDF est dans /public, donc accessible en /NOM_DU_FICHIER.pdf
const PDF_URL = "/Formulaire_pour_un_logement_a_loyer_modere-LLM.pdf";

export default function JaxformCaseStudy({ isDark, isFR }: Props) {
  const [tab, setTab] = useState<"ux" | "tech" | "pdf">("ux");
  const [showPreview, setShowPreview] = useState(true);

  const t = useMemo(() => {
    const fr = {
      kicker: "Projet",
      title: "Jaxform (LLM) — Numérisation d’un formulaire administratif",
      subtitle:
        "Formulaire multi-étapes (wizard) pour déposer une demande LLM : parcours guidé, règles métier intégrées, contrôle des pièces et export PDF.",
      primary: "Voir la démo",
      secondary: showPreview ? "Masquer l’aperçu" : "Afficher l’aperçu",
      tabUx: "UX & impact",
      tabTech: "Tech",
      tabPdf: "PDF initial",
      pdfTitle: "Formulaire initial (PDF officiel)",
      pdfBody:
        "Voici le formulaire d’origine (papier/PDF) qui a été numérisé. Il sert de référence pour comparer l’expérience et comprendre les sources d’erreurs (pièces manquantes, incompréhensions, allers-retours).",
      openPdf: "Ouvrir le PDF",
      downloadPdf: "Télécharger",
      contextTitle: "Contexte",
      contextBody:
        "Le formulaire papier LLM génère souvent des erreurs de saisie, des pièces manquantes et des incompréhensions sur l’éligibilité. Résultat : dossiers incomplets, allers-retours et perte de temps côté usager et côté service.",
      goalTitle: "Objectif",
      goalBody:
        "Réduire l’incomplétude et rendre les règles compréhensibles, sans alourdir l’expérience. L’usager est guidé étape par étape, et le dossier final est structuré et contrôlé.",
      solutionTitle: "Solution (ce que fait Jaxform)",
      bullets: [
        "Parcours clair étape par étape + barre de progression",
        "Validation progressive : erreurs affichées au bon moment",
        "Règles LLM intégrées (éligibilité, permis, pièces max, cas étudiant)",
        "Détection documents manquants / infos manquantes",
        "Récap final : bloquants vs informatifs + suggestions",
        "Export PDF (brouillon + accusé) via jsPDF",
      ],
      flowTitle: "Parcours utilisateur",
      steps: [
        { k: "Étape 1", v: "Type de demande + préfiltrage Lausanne (3 ans) pour éviter de remplir “pour rien”." },
        { k: "Étape 2", v: "Ménage : composition, rôles, contrôles d’âge et cohérence." },
        { k: "Étape 3", v: "Logement : pièces, loyer, motif + calcul pièces maximales selon barème." },
        { k: "Étape 4", v: "Finances : ressources par personne + pièces à joindre (ou “à fournir plus tard”)." },
        { k: "Étape 5", v: "Flux conditionnel “conditions étudiantes” si concerné (étape ajoutée automatiquement)." },
        { k: "Étape 6", v: "Consentements : données, conditions, signatures selon composition du ménage." },
        { k: "Étape 7", v: "Récap + soumission : points bloquants, avertissements et checklist documents." },
      ],
      rulesTitle: "Règles métier intégrées (exemples)",
      rules: [
        "Préfiltrage Lausanne (habite ou travaille depuis 3 ans)",
        "Contrôle permis (CH, C, B, F) + expiration obligatoire (alerte si proche)",
        "Calcul des pièces max selon ménage",
        "Cas “enfant à naître” compté uniquement avec justificatif",
        "Règle “conditions étudiantes” (plafond 1,5 pièce si conditions OK)",
        "Taxation requirement selon critères canton/commune/permis",
      ],
      techTitle: "Stack & architecture",
      techBody:
        "React + TypeScript + Vite, UI Tailwind + composants Radix/shadcn, react-hook-form + Zod pour validation, Framer Motion pour transitions, jsPDF pour les exports.",
      deliverTitle: "Livrables / outputs",
      deliver: [
        "Dossier structuré prêt à contrôler",
        "Checklist documents (manquants / à fournir plus tard)",
        "PDF brouillon et PDF accusé avec référence",
      ],
      impactTitle: "Impact attendu",
      impact: [
        "Moins de dossiers incomplets",
        "Moins d’allers-retours guichet / e-mail",
        "Moins d’erreurs de saisie",
        "Expérience plus claire et plus rapide pour l’usager",
      ],
      ctaTitle: "Tu veux voir le parcours en action ?",
      ctaBody: "Ouvre la démo, puis teste les scénarios (étudiant, permis, ménage, pièces manquantes…).",
      badge1: "Multi-steps",
      badge2: "Business rules",
      badge3: "PDF export",
    };

    const en = {
      kicker: "Project",
      title: "Jaxform (LLM) — Digitising an administrative form",
      subtitle:
        "A multi-step wizard to submit an LLM application: guided journey, embedded business rules, document checks and PDF export.",
      primary: "Open demo",
      secondary: showPreview ? "Hide preview" : "Show preview",
      tabUx: "UX & impact",
      tabTech: "Tech",
      tabPdf: "Original PDF",
      pdfTitle: "Original form (official PDF)",
      pdfBody:
        "This is the original paper/PDF form that was digitised. It helps compare experiences and understand typical issues (missing documents, misunderstandings, back-and-forth).",
      openPdf: "Open PDF",
      downloadPdf: "Download",
      contextTitle: "Context",
      contextBody:
        "Paper/PDF LLM forms often lead to input mistakes, missing documents and eligibility misunderstandings. This creates incomplete files, back-and-forth and wasted time for both applicants and the service team.",
      goalTitle: "Goal",
      goalBody:
        "Reduce incompleteness and make rules understandable without adding friction. The user is guided step-by-step, and the final file is structured and validated.",
      solutionTitle: "Solution (what Jaxform does)",
      bullets: [
        "Clear step-by-step journey + progress bar",
        "Progressive validation: errors shown at the right moment",
        "Embedded LLM rules (eligibility, permits, max rooms, student cases)",
        "Detect missing documents / missing info",
        "Final recap: blocking vs informative checks + suggestions",
        "PDF export (draft + receipt) via jsPDF",
      ],
      flowTitle: "User flow",
      steps: [
        { k: "Step 1", v: "Request type + Lausanne pre-filter (3 years) to avoid filling everything “for nothing”." },
        { k: "Step 2", v: "Household: members, roles, age logic and consistency checks." },
        { k: "Step 3", v: "Housing: rooms, rent, reason + max-room calculation based on household." },
        { k: "Step 4", v: "Finance: resources per person + documents to attach (or “to be provided later”)." },
        { k: "Step 5", v: "Conditional “student conditions” flow if relevant (auto-added step)." },
        { k: "Step 6", v: "Consents: data processing, conditions, signatures based on adults in household." },
        { k: "Step 7", v: "Recap + submit: blockers, warnings and document checklist." },
      ],
      rulesTitle: "Embedded business rules (examples)",
      rules: [
        "Lausanne pre-filter (living or working for 3 years)",
        "Permit check (CH, C, B, F) + expiry required (warning if near expiry)",
        "Max rooms calculation based on household composition",
        "“Unborn child” counted only with proof",
        "“Student conditions” rule (1.5 room cap if eligible)",
        "Taxation requirement based on criteria (canton/commune/permit)",
      ],
      techTitle: "Stack & architecture",
      techBody:
        "React + TypeScript + Vite, Tailwind UI + Radix/shadcn components, react-hook-form + Zod validation, Framer Motion transitions, jsPDF exports.",
      deliverTitle: "Deliverables / outputs",
      deliver: [
        "Structured file ready for review",
        "Document checklist (missing / to provide later)",
        "Draft PDF and receipt PDF with reference",
      ],
      impactTitle: "Expected impact",
      impact: [
        "Fewer incomplete applications",
        "Less back-and-forth (front desk / email)",
        "Fewer input errors",
        "Clearer and faster user experience",
      ],
      ctaTitle: "Want to see it in action?",
      ctaBody: "Open the demo and test scenarios (student, permit, household, missing docs…).",
      badge1: "Multi-steps",
      badge2: "Business rules",
      badge3: "PDF export",
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
            <span
              className={`px-2.5 py-1 rounded-full text-xs border ${
                isDark
                  ? "border-violet-900/40 bg-violet-900/30 text-violet-200"
                  : "border-violet-200 bg-violet-50 text-violet-700"
              }`}
            >
              {t.badge1}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs border ${
                isDark
                  ? "border-violet-900/40 bg-violet-900/30 text-violet-200"
                  : "border-violet-200 bg-violet-50 text-violet-700"
              }`}
            >
              {t.badge2}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs border ${
                isDark
                  ? "border-violet-900/40 bg-violet-900/30 text-violet-200"
                  : "border-violet-200 bg-violet-50 text-violet-700"
              }`}
            >
              {t.badge3}
            </span>
          </div>
        </div>

        <div className="flex gap-2 w-full md:w-auto flex-wrap">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
          >
            {t.primary} <span className="ml-2">↗</span>
          </a>

          <a
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              isDark
                ? "border-slate-700 text-slate-100 bg-slate-900/40 hover:bg-slate-900/70"
                : "border-violet-200 text-violet-700 bg-white hover:bg-violet-50"
            }`}
          >
            {t.openPdf} <span className="ml-2">↗</span>
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
            {t.secondary}
          </button>
        </div>
      </div>

      {/* Preview demo */}
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
              <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Live preview — {DEMO_URL}
              </p>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-violet-600 hover:text-violet-700"
              >
                {isFR ? "Ouvrir en plein écran" : "Open fullscreen"} ↗
              </a>
            </div>

            <div className="w-full aspect-[16/10] bg-black/5">
              <iframe
                title="Jaxform demo"
                src={DEMO_URL}
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
            {t.tabUx}
          </button>
          <button
            type="button"
            onClick={() => setTab("tech")}
            className={`px-3 py-1.5 ${
              tab === "tech" ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.tabTech}
          </button>
          <button
            type="button"
            onClick={() => setTab("pdf")}
            className={`px-3 py-1.5 ${
              tab === "pdf" ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.tabPdf}
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {tab === "pdf" ? (
          <motion.div
            key="pdf"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div className={`${cardBase} p-4 space-y-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.pdfTitle}
              </p>
              <p className={`text-sm ${subtleText}`}>{t.pdfBody}</p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-colors"
                >
                  {t.openPdf} ↗
                </a>
                <a
                  href={PDF_URL}
                  download
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
                    isDark
                      ? "bg-slate-900/40 border-slate-700 text-slate-200 hover:bg-slate-900/70"
                      : "bg-white border-violet-100 text-slate-700 hover:border-violet-300"
                  }`}
                >
                  {t.downloadPdf} ⬇
                </a>
              </div>
            </div>

            <div className={`${cardBase} overflow-hidden`}>
              <div className="w-full aspect-[16/10] bg-black/5">
                <iframe
                  title="LLM original form (PDF)"
                  src={`${PDF_URL}#view=FitH`}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ) : tab === "ux" ? (
          <motion.div
            key="ux"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className={`${cardBase} p-4 space-y-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.contextTitle}
              </p>
              <p className={`text-sm ${subtleText}`}>{t.contextBody}</p>
            </div>

            <div className={`${cardBase} p-4 space-y-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.goalTitle}
              </p>
              <p className={`text-sm ${subtleText}`}>{t.goalBody}</p>
            </div>

            <div className={`${cardBase} p-4 space-y-3 md:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.solutionTitle}
              </p>
              <ul className={`grid md:grid-cols-2 gap-2 text-sm ${subtleText}`}>
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink-400 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${cardBase} p-4 space-y-3`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.flowTitle}
              </p>
              <div className="space-y-3">
                {t.steps.map((s) => (
                  <div key={s.k} className={`relative pl-4 border-l ${isDark ? "border-slate-700" : "border-violet-200"}`}>
                    <div
                      className={`absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-pink-400 border-2 ${
                        isDark ? "border-slate-950" : "border-violet-50"
                      }`}
                    />
                    <div className={`text-xs font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>{s.k}</div>
                    <div className={`text-xs ${subtleText}`}>{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cardBase} p-4 space-y-3`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.impactTitle}
              </p>
              <ul className={`space-y-2 text-sm ${subtleText}`}>
                {t.impact.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 text-pink-400">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-3 rounded-2xl border p-3 ${
                  isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"
                }`}
              >
                <p className={`text-xs font-semibold ${titleText}`}>{t.ctaTitle}</p>
                <p className={`text-xs mt-1 ${subtleText}`}>{t.ctaBody}</p>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-violet-600 hover:text-violet-700"
                >
                  {t.primary} <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tech"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className={`${cardBase} p-4 space-y-2 md:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.techTitle}
              </p>
              <p className={`text-sm ${subtleText}`}>{t.techBody}</p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React", "TypeScript", "Vite", "Tailwind", "react-hook-form", "Zod", "Framer Motion", "jsPDF"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className={`px-2 py-1 rounded-full ${
                        isDark
                          ? "bg-violet-900/30 text-violet-200 border border-violet-900/40"
                          : "bg-violet-100 text-violet-700"
                      }`}
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className={`${cardBase} p-4 space-y-2`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.rulesTitle}
              </p>
              <ul className={`space-y-2 text-sm ${subtleText}`}>
                {t.rules.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink-400 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${cardBase} p-4 space-y-2 md:col-span-3`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.deliverTitle}
              </p>
              <ul className={`grid md:grid-cols-3 gap-2 text-sm ${subtleText}`}>
                {t.deliver.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 text-pink-400">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
