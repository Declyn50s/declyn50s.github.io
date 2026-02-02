import { motion } from "framer-motion";

export default function ExcelCaseStudy({
  isDark,
  isFR,
}: {
  isDark: boolean;
  isFR: boolean;
}) {
  return (
    <div
      className={`min-h-screen px-6 py-16 ${
        isDark ? "bg-slate-950 text-slate-50" : "bg-violet-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {isFR ? "Optimisation d’un fichier Excel" : "Excel workflow optimization"}
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {isFR
              ? "Refonte complète d’un outil de suivi administratif pour améliorer la lisibilité, la rapidité de traitement et la fiabilité des données."
              : "Full redesign of an administrative tracking spreadsheet to improve readability, speed, and data reliability."}
          </p>

          <div className="flex justify-center gap-3 text-xs flex-wrap">
            <span className={`px-4 py-1 rounded-full ${isDark ? "bg-emerald-900/30 text-emerald-200 border border-emerald-900/40" : "bg-emerald-100 text-emerald-700"}`}>
              Excel avancé
            </span>
            <span className={`px-4 py-1 rounded-full ${isDark ? "bg-blue-900/30 text-blue-200 border border-blue-900/40" : "bg-blue-100 text-blue-700"}`}>
              VBA / Automatisation
            </span>
            <span className={`px-4 py-1 rounded-full ${isDark ? "bg-violet-900/30 text-violet-200 border border-violet-900/40" : "bg-slate-900 text-white"}`}>
              UX Data
            </span>
          </div>
        </section>

        {/* CONTEXTE */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">📌 {isFR ? "Contexte" : "Context"}</h2>
            <p className={`${isDark ? "text-slate-300" : "text-slate-700"} leading-relaxed`}>
              {isFR
                ? "Dans le cadre du suivi administratif des dossiers, un tableau Excel était utilisé au quotidien. L’outil était fonctionnel, mais reposait sur de la saisie manuelle et des champs libres peu exploitables."
                : "For day-to-day administrative case tracking, a spreadsheet was used as the main tool. It worked, but relied on manual input and free-text fields that were hard to leverage."}
            </p>
            <p className={`${isDark ? "text-slate-300" : "text-slate-700"} leading-relaxed`}>
              {isFR
                ? "Les infos clés (voie, motif, situation, indicateur LLM/subv) étaient noyées dans une colonne “Remarques”, rendant l’analyse lente et source d’erreurs."
                : "Key information (channel, reason, status, subsidized housing indicator) was buried in a single “Notes” column—slow to analyze and error-prone."}
            </p>
          </div>

          <div className={`rounded-2xl border p-6 shadow-sm ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
            <h3 className="font-semibold mb-3">{isFR ? "Problèmes identifiés" : "Main issues"}</h3>
            <ul className={`list-disc pl-5 space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              <li>{isFR ? "Données non structurées" : "Unstructured data"}</li>
              <li>{isFR ? "Saisie manuelle chronophage" : "Time-consuming manual input"}</li>
              <li>{isFR ? "Risque élevé d’erreurs" : "High risk of errors"}</li>
              <li>{isFR ? "Filtres / tris inefficaces" : "Poor filtering/sorting"}</li>
              <li>{isFR ? "Statut difficile à lire" : "Status hard to read quickly"}</li>
            </ul>
          </div>
        </section>

        {/* OBJECTIFS */}
        <section className={`rounded-2xl border p-10 shadow-sm ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
          <h2 className="text-2xl font-semibold mb-6">🎯 {isFR ? "Objectifs" : "Goals"}</h2>
          <ul className={`grid md:grid-cols-2 gap-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            <li>✔ {isFR ? "Structurer l’information" : "Structure information"}</li>
            <li>✔ {isFR ? "Réduire le temps de saisie" : "Reduce input time"}</li>
            <li>✔ {isFR ? "Fiabiliser la saisie" : "Make input reliable"}</li>
            <li>✔ {isFR ? "Faciliter tri & analyse" : "Enable filtering & analysis"}</li>
            <li>✔ {isFR ? "Réduire les erreurs humaines" : "Reduce human errors"}</li>
            <li>✔ {isFR ? "Outil partagé, exploitable" : "Shared, usable tool"}</li>
          </ul>
        </section>

        {/* SOLUTION */}
        <section className={`rounded-2xl p-10 ${isDark ? "bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800" : "bg-gradient-to-br from-violet-100/70 to-white border border-violet-100"}`}>
          <h2 className="text-2xl font-semibold mb-6">🧠 {isFR ? "Solution mise en place" : "Solution"}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-2xl border p-6 ${isDark ? "bg-slate-950/40 border-slate-800" : "bg-white border-violet-100"}`}>
              <h3 className="font-semibold mb-3">{isFR ? "1) Restructuration" : "1) Restructuring"}</h3>
              <ul className={`list-disc pl-5 space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>{isFR ? "Colonnes dédiées : Par, Voie, Motif, Situation, Subv" : "Dedicated columns: Owner, Channel, Reason, Status, Subsidy flag"}</li>
                <li>{isFR ? "Commune remplie automatiquement via NPA" : "City auto-filled from ZIP/postcode"}</li>
                <li>{isFR ? "Données filtrables et exploitables" : "Filterable, analyzable dataset"}</li>
              </ul>
            </div>

            <div className={`rounded-2xl border p-6 ${isDark ? "bg-slate-950/40 border-slate-800" : "bg-white border-violet-100"}`}>
              <h3 className="font-semibold mb-3">{isFR ? "2) Automatisation (VBA + validation)" : "2) Automation (VBA + validation)"}</h3>
              <ul className={`list-disc pl-5 space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>{isFR ? "Listes déroulantes (Voie, Motif, Situation, Subv)" : "Dropdown lists (Channel, Reason, Status, Subsidy)"}</li>
                <li>{isFR ? "Un “X” → date du jour" : 'A single "X" → today’s date'}</li>
                <li>{isFR ? "Noms auto en MAJUSCULES, prénoms formatés" : "Auto formatting: names uppercase, first names proper case"}</li>
                <li>{isFR ? "Moins d’erreurs, saisie plus rapide" : "Fewer errors, faster input"}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AVANT / APRÈS */}
        <section className={`rounded-2xl border p-10 shadow-sm ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
          <h2 className="text-2xl font-semibold mb-6">🔍 {isFR ? "Avant / Après" : "Before / After"}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">{isFR ? "Avant" : "Before"}</h3>
              <ul className={`list-disc pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>{isFR ? "Infos mélangées dans Remarques" : "Mixed info in a notes field"}</li>
                <li>{isFR ? "Saisie libre non contrôlée" : "Uncontrolled free text input"}</li>
                <li>{isFR ? "Filtrage lent et peu fiable" : "Slow and unreliable filtering"}</li>
                <li>{isFR ? "Statistiques quasi impossibles" : "Stats almost impossible"}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{isFR ? "Après" : "After"}</h3>
              <ul className={`list-disc pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>{isFR ? "Colonnes dédiées + listes déroulantes" : "Dedicated columns + dropdowns"}</li>
                <li>{isFR ? "Automatisation (date, formats, commune)" : "Automation (date, formatting, city)"}</li>
                <li>{isFR ? "Lecture et tri instantanés" : "Instant scan & filtering"}</li>
                <li>{isFR ? "Base prête pour reporting" : "Reporting-ready base"}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RÉSULTATS */}
        <section className={`rounded-2xl p-10 ${isDark ? "bg-gradient-to-r from-emerald-900/20 to-slate-950 border border-slate-800" : "bg-gradient-to-r from-emerald-50 to-white border border-emerald-100"}`}>
          <h2 className="text-2xl font-semibold mb-6">📈 {isFR ? "Résultats obtenus" : "Results"}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: isFR ? "⏱ Gain de temps" : "⏱ Time saved", d: isFR ? "Saisie plus rapide et moins répétitive" : "Faster, less repetitive input" },
              { t: isFR ? "✅ Fiabilité" : "✅ Reliability", d: isFR ? "Données uniformisées, moins d’erreurs" : "Standardized data, fewer errors" },
              { t: isFR ? "📊 Exploitabilité" : "📊 Usability", d: isFR ? "Filtres/tri + analyse immédiate" : "Instant filtering/sorting + analysis" },
            ].map((kpi) => (
              <motion.div
                key={kpi.t}
                whileHover={{ y: -3 }}
                className={`rounded-2xl border p-6 shadow-sm ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}
              >
                <p className="font-semibold">{kpi.t}</p>
                <p className={`${isDark ? "text-slate-300" : "text-slate-600"} mt-1`}>{kpi.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="text-center pt-6">
          <p className={`max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {isFR
              ? "Ce projet montre ma capacité à analyser un besoin métier, structurer l’information et transformer un fichier Excel en outil fiable et efficace (standardisation + automatisation + meilleure lisibilité)."
              : "This project shows my ability to analyze operational needs, structure information, and turn an Excel file into a reliable, efficient tool (standardization + automation + clarity)."}
          </p>
        </section>
      </div>
    </div>
  );
}
