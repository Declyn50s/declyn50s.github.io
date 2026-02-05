import { motion } from "framer-motion";

type Props = {
  isDark: boolean;
  isFR: boolean;
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function SboomCaseStudy({ isDark, isFR }: Props) {
  // PDF placé dans /public => accessible via /Projet-Webmaster-Sboom.pdf
  const pdfUrl = "/Projet-Webmaster-Sboom.pdf";

  const card = isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100";
  const softText = isDark ? "text-slate-300" : "text-slate-600";
  const titleText = isDark ? "text-slate-50" : "text-slate-900";
  const tag = isDark ? "bg-violet-900/30 text-violet-200 border border-violet-900/40" : "bg-violet-100 text-violet-700";
  const divider = isDark ? "border-slate-800" : "border-violet-100";

  return (
    <div className="space-y-10">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-6 md:p-8 shadow-sm ${card}`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={`px-3 py-1 rounded-full ${tag}`}>{isFR ? "Diplôme Webmaster" : "Webmaster diploma"}</span>
            <span className={`px-3 py-1 rounded-full ${tag}`}>PHP</span>
            <span className={`px-3 py-1 rounded-full ${tag}`}>MySQL</span>
            <span className={`px-3 py-1 rounded-full ${tag}`}>FO + BO</span>
            <span className={`px-3 py-1 rounded-full ${tag}`}>Mini CMS</span>
          </div>

          <div className="space-y-2">
            <h1 className={`text-2xl md:text-3xl font-bold ${titleText}`}>SBOOM — Site web dynamique Restaurant</h1>
            <p className={`${softText}`}>
              {isFR
                ? "Création d’un site complet (Front Office + Back Office) pour un restaurant de Smash Burgers, livré avant l’ouverture : menu, comptes, commentaires, gestion de contenu et administration autonome."
                : "Built a complete website (Front Office + Back Office) for a smash burger restaurant, delivered before opening: menu, accounts, comments, content management and an autonomous admin area."}
            </p>
            <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Période : Nov. 2023 → Oct. 2024 · Localisation : Mont-sur-Lausanne" : "Period: Nov 2023 → Oct 2024 · Location: Mont-sur-Lausanne"}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
            >
              {isFR ? "Voir le PDF (projet)" : "Open PDF (project)"} <span className="ml-2">↗</span>
            </a>

            <a
              href="#pdf-preview"
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                isDark
                  ? "border-slate-700 text-slate-100 bg-slate-900/40 hover:bg-slate-900/70"
                  : "border-violet-200 text-violet-700 bg-white hover:bg-violet-50"
              }`}
            >
              {isFR ? "Aperçu intégré" : "Embedded preview"} <span className="ml-2">↓</span>
            </a>
          </div>

          <div className={`pt-4 border-t ${divider}`}>
            <p className={`text-xs ${softText}`}>
              {isFR
                ? "Objectif : livrer un site fonctionnel avant l’ouverture, même sans intégration Uber Eats / Just Eat, avec une base solide pour évoluer."
                : "Goal: deliver a functional website before opening, even without Uber Eats / Just Eat integration, with a solid base to scale."}
            </p>
          </div>
        </div>
      </motion.section>

      {/* CONTEXTE + PROBLÉMATIQUE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "1) Contexte & Problématique" : "1) Context & problem"}</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-6">
          <div className={`text-sm ${softText} space-y-3`}>
            <p>
              {isFR
                ? "SBOOM est un restaurant de Smash Burgers au Mont-sur-Lausanne. La contrainte principale : une petite capacité sur place (~9 places) et une stratégie orientée vente à emporter / livraison."
                : "SBOOM is a smash burger restaurant in Mont-sur-Lausanne. Main constraint: small in-store capacity (~9 seats) and a take-away / delivery strategy."}
            </p>
            <p>
              {isFR
                ? "Au moment du projet, aucun contrat n’était encore signé avec des plateformes (Uber Eats, Just Eat). Il fallait donc un site complet, prêt et crédible, même sans intégration externe."
                : "At the time, there was no signed contract with delivery platforms (Uber Eats, Just Eat). The site had to be complete and credible even without external integrations."}
            </p>
          </div>

          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Enjeu clé" : "Key challenge"}
            </p>
            <p className={`mt-2 text-sm ${softText}`}>
              {isFR
                ? "Livrer un site prêt avant ouverture : présentation du menu, collecte d’inscriptions, crédibilité en ligne, et gestion autonome du contenu via Back Office."
                : "Deliver a website ready before opening: menu presentation, sign-up collection, online credibility, and autonomous content management via Back Office."}
            </p>
          </div>
        </div>
      </motion.section>

      {/* OBJECTIFS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "2) Objectifs" : "2) Objectives"}</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm">
          <ul className={`space-y-2 ${softText}`}>
            <li>✅ {isFR ? "Construire un site dynamique (FO + BO)" : "Build a dynamic site (FO + BO)"}</li>
            <li>✅ {isFR ? "Permettre la gestion autonome du contenu (mini CMS)" : "Enable autonomous content management (mini CMS)"}</li>
            <li>✅ {isFR ? "Mettre en place une base MySQL cohérente" : "Design a coherent MySQL relational database"}</li>
          </ul>
          <ul className={`space-y-2 ${softText}`}>
            <li>✅ {isFR ? "Sécuriser a minima (sessions, hash, requêtes préparées)" : "Ensure basic security (sessions, hashing, prepared statements)"}</li>
            <li>✅ {isFR ? "Livrer un projet installable (SQL + arborescence claire)" : "Deliver an installable project (SQL + clean structure)"}</li>
            <li>✅ {isFR ? "Préparer l’évolution (mini e-commerce / fidélité / plateformes)" : "Prepare scalability (mini e-commerce / loyalty / platforms)"}</li>
          </ul>
        </div>
      </motion.section>

      {/* STACK + ARCHI */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "3) Stack & Architecture" : "3) Stack & architecture"}</h2>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Front-end" : "Front-end"}
            </p>
            <ul className={`mt-2 text-sm ${softText} space-y-1`}>
              <li>• HTML5</li>
              <li>• CSS3</li>
              <li>• JavaScript (validation & interactions)</li>
            </ul>

            <p className={`mt-4 text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Back-end" : "Back-end"}
            </p>
            <ul className={`mt-2 text-sm ${softText} space-y-1`}>
              <li>• PHP</li>
              <li>• MySQL</li>
            </ul>
          </div>

          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Architecture" : "Architecture"}
            </p>
            <ul className={`mt-2 text-sm ${softText} space-y-1`}>
              <li>• {isFR ? "Deux espaces : Front Office (public) / Back Office (privé)" : "Two spaces: Front Office (public) / Back Office (private)"}</li>
              <li>• {isFR ? "Pages modulaires (includes / require) pour éviter la duplication" : "Modular pages (includes / require) to avoid duplication"}</li>
              <li>• {isFR ? "Uploads médias + gestion DB cohérente" : "Media uploads + consistent DB handling"}</li>
              <li>• {isFR ? "Séparation stricte FO / BO" : "Strict FO / BO separation"}</li>
            </ul>

            <p className={`mt-4 text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {isFR ? "Outils" : "Tools"}
            </p>
            <ul className={`mt-2 text-sm ${softText} space-y-1`}>
              <li>• XAMPP (dev local)</li>
              <li>• GitHub (versioning)</li>
              <li>• Hostpoint (hosting)</li>
              <li>• Figma (maquettes)</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* BASE DE DONNÉES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "4) Base de données (MySQL)" : "4) Database (MySQL)"}</h2>

        <div className="mt-3 grid md:grid-cols-2 gap-6 text-sm">
          <div className={`${softText} space-y-2`}>
            <p className={`font-medium ${titleText}`}>{isFR ? "Tables principales" : "Main tables"}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>utilisateurs</li>
              <li>produits</li>
              <li>categories</li>
              <li>badges</li>
              <li>commandes</li>
              <li>commande_details</li>
              <li>commentaires</li>
              <li>articles</li>
            </ul>
          </div>

          <div className={`${softText} space-y-2`}>
            <p className={`font-medium ${titleText}`}>{isFR ? "Relations & optimisations" : "Relations & optimizations"}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{isFR ? "commandes → utilisateurs" : "orders → users"}</li>
              <li>{isFR ? "commande_details → commandes + produits" : "order_details → orders + products"}</li>
              <li>{isFR ? "commentaires → utilisateurs + produits" : "comments → users + products"}</li>
              <li>{isFR ? "Clés étrangères + index sur champs recherchés" : "Foreign keys + indexes on searched fields"}</li>
              <li>{isFR ? "Contraintes (ex: note 1 → 5)" : "Constraints (e.g. rating 1 → 5)"}</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FO / BO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "5) Front Office & Back Office" : "5) Front Office & Back Office"}</h2>

        <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm">
          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`font-medium ${titleText}`}>🌍 {isFR ? "Front Office (public)" : "Front Office (public)"}</p>
            <ul className={`mt-2 list-disc list-inside space-y-1 ${softText}`}>
              <li>{isFR ? "Accueil, carte, catégories, histoire, contact" : "Home, menu, categories, story, contact"}</li>
              <li>{isFR ? "Inscription / connexion / mot de passe oublié" : "Sign-up / login / forgot password"}</li>
              <li>{isFR ? "Commentaires + notes sur produits" : "Product comments + ratings"}</li>
              <li>{isFR ? "Mentions légales" : "Legal pages"}</li>
            </ul>
          </div>

          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`font-medium ${titleText}`}>🔒 {isFR ? "Back Office (admin)" : "Back Office (admin)"}</p>
            <ul className={`mt-2 list-disc list-inside space-y-1 ${softText}`}>
              <li>{isFR ? "Dashboard (stats)" : "Dashboard (stats)"}</li>
              <li>{isFR ? "Produits (CRUD) + catégories" : "Products (CRUD) + categories"}</li>
              <li>{isFR ? "Commandes + statuts" : "Orders + statuses"}</li>
              <li>{isFR ? "Utilisateurs + modération commentaires" : "Users + comment moderation"}</li>
              <li>{isFR ? "Articles + pages légales" : "Articles + legal pages"}</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* SÉCURITÉ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "6) Sécurité (minimum viable)" : "6) Security (MVP)"}</h2>
        <ul className={`mt-3 text-sm list-disc list-inside space-y-1 ${softText}`}>
          <li>{isFR ? "Hash mots de passe (password_hash / password_verify)" : "Password hashing (password_hash / password_verify)"}</li>
          <li>{isFR ? "Sessions PHP pour zones sécurisées" : "PHP sessions for secured areas"}</li>
          <li>{isFR ? "Requêtes préparées (anti SQL injection)" : "Prepared statements (SQL injection protection)"}</li>
          <li>{isFR ? "Échappement des données (réduction XSS)" : "Output escaping (XSS reduction)"}</li>
          <li>{isFR ? "Séparation stricte FO / BO" : "Strict FO / BO separation"}</li>
        </ul>
      </motion.section>

      {/* RÉSULTATS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "7) Résultats" : "7) Results"}</h2>

        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`font-medium ${titleText}`}>✅ {isFR ? "Livrable complet" : "Complete deliverable"}</p>
            <p className={`mt-1 ${softText}`}>
              {isFR ? "FO + BO + DB relationnelle + CRUD, installable avec script SQL." : "FO + BO + relational DB + CRUD, installable with SQL script."}
            </p>
          </div>

          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`font-medium ${titleText}`}>🧩 {isFR ? "Base évolutive" : "Scalable base"}</p>
            <p className={`mt-1 ${softText}`}>
              {isFR ? "Pensé comme mini CMS + mini e-commerce, prêt pour v2." : "Designed as mini CMS + mini e-commerce, ready for v2."}
            </p>
          </div>

          <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-950/30" : "border-violet-100 bg-violet-50/40"}`}>
            <p className={`font-medium ${titleText}`}>🛠️ {isFR ? "Compétences validées" : "Validated skills"}</p>
            <p className={`mt-1 ${softText}`}>
              {isFR ? "DB relationnelle, dynamique PHP, BO, sécurité, structuration projet." : "Relational DB, dynamic PHP, BO, security, project structuring."}
            </p>
          </div>
        </div>
      </motion.section>

      {/* NEXT STEPS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "8) Next steps (v2)" : "8) Next steps (v2)"}</h2>
        <ul className={`mt-3 text-sm list-disc list-inside space-y-1 ${softText}`}>
          <li>{isFR ? "Responsive 100% + accessibilité" : "100% responsive + accessibility"}</li>
          <li>{isFR ? "Optimisation perf (compression images, cache)" : "Performance improvements (image compression, caching)"}</li>
          <li>{isFR ? "Redirection / intégration plateformes livraison (si dispo)" : "Delivery platform redirection / integration (if available)"}</li>
          <li>{isFR ? "Vrai système fidélité (points)" : "Real loyalty system (points)"}</li>
          <li>{isFR ? "Protection brute-force login" : "Brute-force protection on login"}</li>
        </ul>
      </motion.section>

      {/* PDF PREVIEW */}
      <motion.section
        id="pdf-preview"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "📄 PDF du projet (livrable)" : "📄 Project PDF (deliverable)"}</h2>
            <p className={`text-xs mt-1 ${softText}`}>
              {isFR ? "Aperçu intégré. Ouvre en plein écran si besoin." : "Embedded preview. Open fullscreen if needed."}
            </p>
          </div>

          <a href={pdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700">
            {isFR ? "Ouvrir le PDF" : "Open PDF"} <span>↗</span>
          </a>
        </div>

        <div className={`mt-4 rounded-2xl overflow-hidden border ${isDark ? "border-slate-700" : "border-violet-100"}`}>
          <div className="relative w-full h-[70vh]">
            <iframe src={pdfUrl} title="SBOOM PDF" className="absolute inset-0 h-full w-full" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* CONCLUSION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`rounded-2xl border p-5 md:p-6 shadow-sm ${card}`}
      >
        <h2 className={`text-lg font-semibold ${titleText}`}>{isFR ? "Ce que ce projet démontre" : "What this project proves"}</h2>
        <p className={`mt-3 text-sm ${softText}`}>
          {isFR
            ? "Capacité à concevoir une base relationnelle, développer un site dynamique complet en PHP, construire un Back Office exploitable, sécuriser un minimum, et livrer un projet installable, propre et maintenable."
            : "Ability to design a relational database, build a complete dynamic PHP website, create an operational Back Office, apply basic security, and deliver a clean, maintainable, installable project."}
        </p>
      </motion.section>
    </div>
  );
}
