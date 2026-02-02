import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ITILCoachCaseStudy({ isDark, isFR }: { isDark: boolean; isFR: boolean }) {
  const card = isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100";
  const softText = isDark ? "text-slate-300" : "text-slate-600";
  const titleText = isDark ? "text-slate-50" : "text-slate-900";

  // ✅ Ta démo (GitHub Pages)
  const demoUrl = "http://declyn50s.github.io/itil";

  // Optionnel si tu veux ajouter le repo plus tard
  // const repoUrl = "https://github.com/Declyn50s/itil";

  const chips = [
    { label: "React", tone: "violet" },
    { label: "TypeScript", tone: "violet" },
    { label: "Vite", tone: "violet" },
    { label: "Tailwind", tone: "pink" },
    { label: "Framer Motion", tone: "pink" },
    { label: isFR ? "Mobile-first" : "Mobile-first", tone: "slate" },
    { label: isFR ? "UX orientée mémorisation" : "Learning-first UX", tone: "slate" },
  ] as const;

  const chipClass = (tone: "violet" | "pink" | "slate") => {
    if (tone === "violet")
      return isDark
        ? "bg-violet-900/30 text-violet-200 border border-violet-900/40"
        : "bg-violet-100 text-violet-700 border border-violet-200";
    if (tone === "pink")
      return isDark
        ? "bg-pink-900/25 text-pink-200 border border-pink-900/40"
        : "bg-pink-100 text-pink-700 border border-pink-200";
    return isDark
      ? "bg-slate-900/40 text-slate-200 border border-slate-700"
      : "bg-white text-slate-700 border border-violet-100";
  };

  const features = [
    {
      title: isFR ? "Révision par modules" : "Module-based revision",
      body: isFR
        ? "Questions classées par thèmes (concepts clés, pratiques, gestion des services…)."
        : "Questions grouped by topics (key concepts, practices, service management…).",
    },
    {
      title: isFR ? "Mode entraînement" : "Training mode",
      body: isFR
        ? "Questions aléatoires + feedback immédiat pour apprendre en faisant."
        : "Random questions + instant feedback to learn by doing.",
    },
    {
      title: isFR ? "Mode examen" : "Exam mode",
      body: isFR
        ? "Conditions proches du vrai test avec score final et axes d’amélioration."
        : "Realistic conditions with final score and improvement pointers.",
    },
    {
      title: isFR ? "Favoris" : "Favorites",
      body: isFR
        ? "Marque les questions difficiles pour réviser ciblé et plus vite."
        : "Mark hard questions to focus revision and save time.",
    },
    {
      title: isFR ? "Notes personnelles" : "Personal notes",
      body: isFR
        ? "Ajout de notes par question pour mémorisation active."
        : "Add per-question notes for active memorization.",
    },
    {
      title: isFR ? "Suivi de progression" : "Progress tracking",
      body: isFR
        ? "Score moyen, taux de réussite, historique, points faibles."
        : "Average score, pass rate, history, weak areas.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.45 }} className="space-y-5">
        <div
          className={`rounded-3xl border p-6 md:p-8 shadow-sm ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-950 to-violet-950/40 border-slate-800"
              : "bg-gradient-to-br from-white via-white to-violet-50 border-violet-100"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-500">
                {isFR ? "Case study · Produit & UX" : "Case study · Product & UX"}
              </p>

              <h1 className={`text-2xl md:text-4xl font-bold leading-tight ${titleText}`}>
                ITIL Coach — {isFR ? "Plateforme de révision ITIL 4 Foundation" : "ITIL 4 Foundation revision platform"}
              </h1>

              <p className={`text-sm md:text-base max-w-2xl ${softText}`}>
                {isFR
                  ? "Une app de révision pensée comme un entraînement : sessions courtes (5–15 min), feedback immédiat, progression claire, zéro friction."
                  : "A training-first revision app: short sessions (5–15 min), instant feedback, clear progress, zero friction."}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {chips.map((c) => (
                  <span key={c.label} className={`px-2.5 py-1 rounded-full text-[11px] ${chipClass(c.tone)}`}>
                    {c.label}
                  </span>
                ))}
              </div>

              {/* ✅ CTA: Démo + ouverture */}
              <div className="flex flex-wrap gap-2 pt-3">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
                >
                  {isFR ? "Voir la démo" : "Live demo"} <span className="ml-2">↗</span>
                </a>

                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    isDark
                      ? "border-slate-700 text-slate-100 bg-slate-900/40 hover:bg-slate-900/70"
                      : "border-violet-200 text-violet-700 bg-white hover:bg-violet-50"
                  }`}
                >
                  {isFR ? "Ouvrir en plein écran" : "Open fullscreen"} <span className="ml-2">⤢</span>
                </a>
              </div>
            </div>

            <div className={`rounded-2xl border p-4 w-full md:w-[320px] ${isDark ? "bg-slate-900/60 border-slate-700" : "bg-white border-violet-100"}`}>
              <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {isFR ? "Problème" : "Problem"}
              </p>
              <ul className={`mt-2 space-y-2 text-sm ${softText}`}>
                <li>• {isFR ? "Outils existants trop théoriques" : "Existing tools too theoretical"}</li>
                <li>• {isFR ? "Peu adaptés aux sessions courtes" : "Not designed for short sessions"}</li>
                <li>• {isFR ? "Feedback insuffisant" : "Weak feedback loop"}</li>
                <li>• {isFR ? "Suivi de progression limité" : "Limited progress tracking"}</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ✅ APERÇU (iframe) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "👀 Aperçu du projet" : "👀 Project preview"}</h2>
            <p className={`text-xs mt-1 ${softText}`}>
              {isFR
                ? "Prévisualisation intégrée (si votre navigateur bloque l’iframe, utilisez “Ouvrir en plein écran”)."
                : "Embedded preview (if your browser blocks the iframe, use “Open fullscreen”)."}
            </p>
          </div>

          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700"
          >
            {isFR ? "Ouvrir la démo" : "Open demo"} <span>↗</span>
          </a>
        </div>

        <div className={`mt-4 rounded-2xl overflow-hidden border ${isDark ? "border-slate-700" : "border-violet-100"}`}>
          {/* aspect-video = 16/9 responsive */}
          <div className="relative w-full aspect-video">
            <iframe
              src={demoUrl}
              title="ITIL Coach Preview"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              // Sécurité + compat GitHub Pages
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* CONTEXTE + OBJECTIF */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={`rounded-2xl border p-6 shadow-sm ${card}`}
        >
          <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "🎯 Objectif" : "🎯 Goal"}</h2>
          <p className={`mt-2 text-sm ${softText}`}>
            {isFR
              ? "Créer une plateforme web pour réviser ITIL efficacement : apprendre vite, comprendre ses erreurs, suivre sa progression — et réussir l’examen."
              : "Build a web platform to revise ITIL efficiently: learn fast, understand mistakes, track progress — and pass the exam."}
          </p>

          <ul className={`mt-4 grid gap-2 text-sm ${softText}`}>
            <li>✔ {isFR ? "Révision par thèmes" : "Topic-based revision"}</li>
            <li>✔ {isFR ? "Entraînement + examen blanc" : "Training + mock exam"}</li>
            <li>✔ {isFR ? "Favoris & notes" : "Favorites & notes"}</li>
            <li>✔ {isFR ? "Progression visible" : "Visible progression"}</li>
          </ul>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={`rounded-2xl border p-6 shadow-sm ${card}`}
        >
          <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "👤 Public cible" : "👤 Target users"}</h2>
          <p className={`mt-2 text-sm ${softText}`}>
            {isFR
              ? "Étudiants ITIL, pros IT, reconversions — surtout ceux qui révisent sur mobile, par petites sessions, entre deux activités."
              : "ITIL students, IT professionals, career changers — especially people revising on mobile in short bursts between tasks."}
          </p>

          <div
            className={`mt-4 rounded-2xl p-4 border ${
              isDark ? "bg-slate-950/30 border-slate-700" : "bg-violet-50/50 border-violet-100"
            }`}
          >
            <p className={`text-sm ${softText}`}>
              <span className="font-semibold text-violet-500">{isFR ? "Principe UX:" : "UX principle:"}</span>{" "}
              {isFR ? "Apprendre mieux, pas plus longtemps." : "Learn better, not longer."}
            </p>
          </div>
        </motion.section>
      </div>

      {/* FEATURES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">🧩</span>
          <h2 className={`text-xl font-bold ${titleText}`}>{isFR ? "Fonctionnalités" : "Core features"}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className={`rounded-2xl border p-5 shadow-sm ${card}`}>
              <p className={`text-sm font-semibold ${titleText}`}>{f.title}</p>
              <p className={`mt-2 text-xs ${softText}`}>{f.body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PEDAGOGIE / UX */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "🧠 Logique UX / pédagogique" : "🧠 Learning-first UX logic"}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Constat" : "Observation"}
            </p>
            <p className={`mt-2 text-sm ${softText}`}>
              {isFR
                ? "Beaucoup de plateformes affichent des QCM, mais n’aident pas vraiment à apprendre (peu d’explications, pas de boucle de feedback)."
                : "Many platforms show MCQs but don’t really teach (few explanations, weak feedback loop)."}
            </p>
          </div>

          <div>
            <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Solution" : "Solution"}
            </p>
            <ul className={`mt-2 space-y-2 text-sm ${softText}`}>
              <li>• {isFR ? "Feedback immédiat + erreurs mises en avant" : "Instant feedback + highlight mistakes"}</li>
              <li>• {isFR ? "Répétition ciblée via favoris / points faibles" : "Targeted repetition via favorites / weak areas"}</li>
              <li>• {isFR ? "Navigation ultra rapide (zéro friction)" : "Ultra-fast navigation (zero friction)"}</li>
              <li>• {isFR ? "Mobile-first (sessions 5–15 min)" : "Mobile-first (5–15 min sessions)"}</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* STACK + VALEUR */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={`rounded-2xl border p-6 shadow-sm ${card}`}
        >
          <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "🛠️ Technologies" : "🛠️ Tech stack"}</h2>
          <ul className={`mt-3 space-y-2 text-sm ${softText}`}>
            <li>• React + TypeScript + Vite</li>
            <li>• Tailwind CSS + Framer Motion</li>
            <li>• {isFR ? "Stockage local (résultats, favoris, notes)" : "Local storage (results, favorites, notes)"}</li>
            <li>• {isFR ? "Navigation par modules + modes test/examen" : "Module navigation + training/exam modes"}</li>
          </ul>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={`rounded-2xl border p-6 shadow-sm ${card}`}
        >
          <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "📊 Valeur ajoutée" : "📊 Value delivered"}</h2>
          <ul className={`mt-3 space-y-2 text-sm ${softText}`}>
            <li>✅ {isFR ? "Approche réellement pédagogique" : "Truly learning-oriented approach"}</li>
            <li>✅ {isFR ? "UX orientée apprentissage & mémorisation" : "Learning & memorization-driven UX"}</li>
            <li>✅ {isFR ? "Base évolutive (auth, stats, cloud…)" : "Scalable base (auth, stats, cloud…)"}</li>
            <li>✅ {isFR ? "Réutilisable pour d’autres certifications" : "Reusable for other certifications"}</li>
          </ul>
        </motion.section>
      </div>

      {/* VERSION COURTE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-6 shadow-sm ${card}`}
      >
        <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {isFR ? "Version courte (portfolio)" : "Short version (portfolio)"}
        </p>
        <p className={`mt-2 text-sm ${softText}`}>
          <span className="font-semibold text-violet-500">ITIL Coach</span>{" "}
          {isFR
            ? "– Application web de révision ITIL 4 orientée UX : modules, entraînement, examen blanc, favoris, notes et suivi de progression. Objectif : apprendre vite, comprendre ses erreurs et réussir l’examen."
            : "– UX-first ITIL 4 revision web app: modules, training, mock exam, favorites, notes, and progress tracking. Goal: learn fast, understand mistakes, and pass the exam."}
        </p>
      </motion.section>
    </div>
  );
}
