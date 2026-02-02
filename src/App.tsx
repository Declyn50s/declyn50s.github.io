import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import DervalLogo from "./assets/Derval-logo-anime-removebg-preview.png";
import JaxformCaseStudy from "./components/JaxformCaseStudy";
import HuggyStudioCaseStudy from "./components/HuggyStudioCaseStudy";
import TraineSavatesCaseStudy from "./components/TraineSavatesCaseStudy";
import ExcelCaseStudy from "./components/ExcelCaseStudy";
import ITILCoachCaseStudy from "./components/ITILCoachCaseStudy";
import Portfolio2023CaseStudy from "./components/Portfolio2023CaseStudy";
import Portfolio2022CaseStudy from "./components/Portfolio2022CaseStudy";
import Portfolio2021CaseStudy from "./components/Portfolio2021CaseStudy";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type Social = {
  name: string;
  href: string;
  icon: ReactNode;
};

const IconBehance = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.7 11.7c1.2-.6 1.9-1.6 1.9-3 0-2.4-1.7-3.7-4.6-3.7H2v13h5.4c3.2 0 5-1.5 5-4.1 0-1.8-.9-3.2-2.7-3.8ZM4.4 7.2h2.6c1.2 0 2.1.4 2.1 1.6 0 1.1-.7 1.6-2.1 1.6H4.4V7.2Zm2.9 8.6H4.4v-3.2h3c1.6 0 2.5.6 2.5 1.6 0 1.1-.7 1.6-2.6 1.6ZM20.7 8.1h-5V6.4h5v1.7ZM18.2 9.5c-3 0-4.8 2.1-4.8 5.1 0 3.2 1.9 5.1 4.9 5.1 2.2 0 3.6-1 4.3-3h-2.2c-.3.8-1 1.2-2.1 1.2-1.4 0-2.3-.9-2.4-2.5h6.8c.1-3.4-1.6-5.9-4.5-5.9Zm-2.2 4.2c.2-1.3 1-2.1 2.2-2.1 1.2 0 2 .8 2.1 2.1H16Z"
    />
  </svg>
);

const IconDribbble = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm7.8 9.2c-1.6-.2-3.3-.2-4.9.1-.2-.5-.4-1-.6-1.5 1.7-.7 3.2-1.8 4.4-3.2a7.95 7.95 0 0 1 1.1 4.6ZM17.3 5.1c-1 1.2-2.3 2.1-3.8 2.7A37.4 37.4 0 0 0 11.4 4c2.2-.2 4.3.4 5.9 1.1ZM9.6 4.3c.7 1.1 1.5 2.4 2.2 3.8-1.9.6-4 .9-6 .9.6-2.1 2-3.8 3.8-4.7ZM4 12c0-.3 0-.7.1-1 2.4 0 4.8-.4 7-1.1.2.4.4.9.6 1.3-2 .6-3.9 1.6-5.5 2.9-.8-.7-1.7-1.3-2.2-2.1Zm1.3 3.7c1.4-1.1 3-2 4.7-2.5.6 1.5 1 3 1.2 4.5A7.98 7.98 0 0 1 5.3 15.7Zm8.2 4c-.2-1.8-.6-3.6-1.3-5.4 1.4-.2 2.9-.2 4.3.1.6 1.5 1 3.1 1.1 4.7A7.97 7.97 0 0 1 13.5 19.7Zm6.2-2.1c-.2-1.1-.5-2.2-.9-3.2 1.2.3 2.3.8 3.3 1.4a8.03 8.03 0 0 1-2.4 1.8Z"
    />
  </svg>
);

const IconLinkedIn = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0.5 23.5h4V7.98h-4V23.5ZM8 7.98h3.8v2.12h.06c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.77 2.65 4.77 6.1v9.42h-4v-8.35c0-1.99-.04-4.55-2.77-4.55-2.78 0-3.2 2.17-3.2 4.41v8.49H8V7.98Z"
    />
  </svg>
);

const IconGitHub = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.3-3.9-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 3.3 1.5.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.9 1.1 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
    />
  </svg>
);

const IconCodepen = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 1.5 22 8v8l-10 6.5L2 16V8l10-6.5Zm0 4.1L5.6 9.5 12 13.4l6.4-3.9L12 5.6Zm8 6.2-5.6 3.4L20 18.5v-6.7ZM4 18.5l5.6-3.4L4 11.8v6.7Zm7-2.2-5.4 3.3L12 22.7l6.4-3.9-5.4-3.3L12 16.3l-1 .6Zm.9-1.9L6 10.7l5.9-3.6 5.9 3.6-5.9 3.7Z"
    />
  </svg>
);

const IconMail = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
    />
  </svg>
);

const EMAIL = "derval.botuna@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Contact depuis ton portfolio")}&body=${encodeURIComponent(
  "Bonjour Derval,\n\nJe te contacte depuis ton portfolio.\n\n"
)}`;

const SOCIALS: Social[] = [
  { name: "Behance", href: "https://www.behance.net/dervalbotuna", icon: <IconBehance /> },
  { name: "Dribbble", href: "https://dribbble.com/Declyn50s", icon: <IconDribbble /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dervalbotuna/", icon: <IconLinkedIn /> },
  { name: "GitHub", href: "https://github.com/Declyn50s", icon: <IconGitHub /> },
  { name: "CodePen", href: "https://codepen.io/Declyn50s", icon: <IconCodepen /> },
  { name: "Email", href: MAILTO, icon: <IconMail /> },
];

export default function App() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isFR = lang === "fr";
  const isDark = theme === "dark";

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  // Navigate to home first if we're on another route, then scroll.
  const goToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      setMenuOpen(false);
      return;
    }
    scrollToId(id);
  };

  // When landing on home with a requested section, scroll and clear state.
  useEffect(() => {
    const st = location.state as { scrollTo?: string } | null;
    if (location.pathname === "/" && st?.scrollTo) {
      const id = st.scrollTo;
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      navigate("/", { replace: true, state: null });
    }
  }, [location.pathname, location.state, navigate]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div
      className={`min-h-screen font-sans scroll-smooth transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-50" : "bg-violet-50 text-slate-900"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-30 backdrop-blur border-b transition-colors duration-300 ${
          isDark ? "bg-slate-950/80 border-slate-800" : "bg-violet-50/80 border-violet-100"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              className="h-9 w-9 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-400 flex items-center justify-center shadow-md overflow-hidden"
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img src={DervalLogo} alt="Logo Derval Botuna" className="h-8 w-8 object-contain" />
            </motion.div>

            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-500">Derval Botuna</p>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {isFR
                  ? "Employé de commerce | UX / Web designer | IT Support"
                  : "Administrative Clerk | UX / Web Designer | IT Support"}
              </p>
            </div>
          </div>

          {/* Nav + controls */}
          <div className="flex items-center gap-4">
            <nav
              className={`hidden md:flex gap-4 text-xs font-medium ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              <button type="button" onClick={() => goToSection("hero")} className="hover:text-violet-600 transition-colors">
                {isFR ? "Accueil" : "Home"}
              </button>
              <button
                type="button"
                onClick={() => goToSection("parcours")}
                className="hover:text-violet-600 transition-colors"
              >
                {isFR ? "Parcours" : "Experience"}
              </button>
              <button type="button" onClick={() => goToSection("skills")} className="hover:text-violet-600 transition-colors">
                {isFR ? "Compétences" : "Skills"}
              </button>
              <button
                type="button"
                onClick={() => goToSection("projects")}
                className="hover:text-violet-600 transition-colors"
              >
                {isFR ? "Projets" : "Projects"}
              </button>
              <button type="button" onClick={() => goToSection("value")} className="hover:text-violet-600 transition-colors">
                {isFR ? "Ce que j'apporte" : "What I bring"}
              </button>
              <button type="button" onClick={() => goToSection("cv")} className="hover:text-violet-600 transition-colors">
                CV
              </button>
              <button type="button" onClick={() => goToSection("contact")} className="hover:text-violet-600 transition-colors">
                {isFR ? "Contact" : "Contact"}
              </button>
            </nav>

            <div className="flex items-center gap-2">
              {/* Lang switch */}
              <div
                className={`inline-flex rounded-full border shadow-sm overflow-hidden text-xs ${
                  isDark ? "bg-slate-900 border-slate-700" : "bg-white border-violet-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={`px-2.5 py-1 ${
                    isFR ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 ${
                    !isFR ? "bg-violet-500 text-white" : isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`inline-flex items-center justify-center h-7 w-7 rounded-full border text-xs transition-colors ${
                  isDark ? "bg-slate-900 border-slate-700 text-amber-300" : "bg-white border-violet-100 text-slate-700"
                }`}
                aria-label={
                  isFR
                    ? isDark
                      ? "Passer en mode clair"
                      : "Passer en mode sombre"
                    : isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {isDark ? "☀️" : "🌙"}
              </button>

              {/* Burger */}
              <button
                type="button"
                className={`md:hidden inline-flex items-center justify-center h-8 w-8 rounded-full border ${
                  isDark ? "border-slate-700 bg-slate-900/60" : "border-violet-200 bg-white/80"
                }`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={isFR ? "Ouvrir le menu" : "Open menu"}
              >
                <div className="space-y-1.5">
                  <span
                    className={`block h-0.5 w-5 rounded-full transition-transform duration-200 ${
                      isDark ? "bg-slate-100" : "bg-slate-800"
                    } ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full transition-opacity duration-200 ${
                      isDark ? "bg-slate-100" : "bg-slate-800"
                    } ${menuOpen ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full transition-transform duration-200 ${
                      isDark ? "bg-slate-100" : "bg-slate-800"
                    } ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <motion.nav
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", y: 0 },
            closed: { opacity: 0, height: 0, y: -8 },
          }}
          transition={{ duration: 0.25 }}
          className={`md:hidden overflow-hidden border-t ${
            isDark ? "bg-slate-950/95 border-slate-800" : "bg-violet-50/95 border-violet-100"
          }`}
        >
          <div
            className={`max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm ${
              isDark ? "text-slate-200" : "text-slate-800"
            }`}
          >
            <button type="button" onClick={() => goToSection("hero")} className="text-left py-1 hover:text-violet-600">
              {isFR ? "Accueil" : "Home"}
            </button>
            <button type="button" onClick={() => goToSection("parcours")} className="text-left py-1 hover:text-violet-600">
              {isFR ? "Parcours" : "Experience"}
            </button>
            <button type="button" onClick={() => goToSection("skills")} className="text-left py-1 hover:text-violet-600">
              {isFR ? "Compétences" : "Skills"}
            </button>
            <button type="button" onClick={() => goToSection("projects")} className="text-left py-1 hover:text-violet-600">
              {isFR ? "Projets" : "Projects"}
            </button>
            <button type="button" onClick={() => goToSection("value")} className="text-left py-1 hover:text-violet-600">
              {isFR ? "Ce que j'apporte" : "What I bring"}
            </button>
            <button type="button" onClick={() => goToSection("cv")} className="text-left py-1 hover:text-violet-600">
              CV
            </button>
            <button type="button" onClick={() => goToSection("contact")} className="text-left py-1 hover:text-violet-600">
              {isFR ? "Contact" : "Contact"}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 pb-16 pt-8">
        {location.pathname === "/jaxform" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="jaxform">
            <JaxformCaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/huggystudio" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="huggystudio">
            <HuggyStudioCaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/traine-savates" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="traine-savates">
            <TraineSavatesCaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/excel" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="excel">
            <ExcelCaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/itil-coach" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="itil-coach">
            <ITILCoachCaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/portfolio-2023" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="portfolio-2023">
            <Portfolio2023CaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/portfolio-2022" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="portfolio-2022">
            <Portfolio2022CaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : location.pathname === "/portfolio-2021" ? (
          <CaseStudyShell isDark={isDark} isFR={isFR} slug="portfolio-2021">
            <Portfolio2021CaseStudy isDark={isDark} isFR={isFR} />
          </CaseStudyShell>
        ) : (
          <div className="space-y-16 md:space-y-24">
            {/* Hero */}
            <motion.section
              id="hero"
              variants={sectionVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-center"
            >
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-500">CV · Portfolio</p>

                <div>
                  <p className={`text-sm mb-1 ${isDark ? "text-slate-300" : "text-slate-500"}`}>
                    {isFR ? "Je m'appelle" : "My name is"}
                  </p>

                  <h1
                    className={`text-3xl md:text-4xl font-bold leading-tight ${
                      isDark ? "text-slate-50" : "text-slate-900"
                    }`}
                  >
                    Derval BOTUNA
                  </h1>

                  <p className={`text-sm md:text-base mt-1 ${isDark ? "text-violet-300" : "text-violet-700"}`}>
                    {isFR
                      ? "Employé de commerce | UX / Web designer | IT Support"
                      : "Administrative Clerk | UX / Web Designer | IT Support"}
                  </p>

                  <p className={`mt-3 text-base md:text-lg max-w-xl ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    {isFR
                      ? "Entre administration publique et assurance maladie, j’assiste les utilisateurs, qualifie et suis les demandes multicanales, et contribue à améliorer les outils et parcours grâce à mon background."
                      : "At the crossroads of public administration and health insurance, I support users, triage and follow up multichannel requests, and help improve tools and journeys thanks to my UX background."}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => goToSection("projects")}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
                  >
                    {isFR ? "Voir mes projets" : "View my projects"}
                  </button>

                  <button
                    type="button"
                    onClick={() => goToSection("parcours")}
                    className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      isDark
                        ? "border-slate-700 text-slate-100 bg-slate-900/40 hover:bg-slate-900/70"
                        : "border-violet-200 text-violet-700 bg-white hover:bg-violet-50"
                    }`}
                  >
                    {isFR ? "Découvrir mon parcours" : "Explore my experience"}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
                  <div
                    className={`rounded-2xl border p-3 shadow-sm ${
                      isDark ? "bg-slate-900/60 border-slate-700" : "bg-white border-violet-100"
                    }`}
                  >
                    <p className={`font-semibold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                      5+ {isFR ? "ans" : "years"}
                    </p>
                    <p className={`${isDark ? "text-slate-300" : "text-slate-500"}`}>
                      {isFR ? "Administration, assurances & logement public" : "Administration, insurance & public housing"}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl border p-3 shadow-sm ${
                      isDark ? "bg-slate-900/60 border-slate-700" : "bg-white border-violet-100"
                    }`}
                  >
                    <p className={`font-semibold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                      {isFR ? "Profil hybride" : "Hybrid profile"}
                    </p>
                    <p className={`${isDark ? "text-slate-300" : "text-slate-500"}`}>
                      {isFR ? "Terrain, service client & UX design" : "Operations, customer service & UX"}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl border p-3 shadow-sm ${
                      isDark ? "bg-slate-900/60 border-slate-700" : "bg-white border-violet-100"
                    }`}
                  >
                    <p className={`font-semibold ${isDark ? "text-slate-50" : "text-slate-900"}`}>Web & UX</p>
                    <p className={`${isDark ? "text-slate-300" : "text-slate-500"}`}>Webmaster, UX, ITIL, e-commerce</p>
                  </div>
                </div>
              </div>

              {/* Avatar / status */}
              <div className="flex flex-col items-center gap-4">
                <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                  <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-violet-300/70 to-pink-300/70 rounded-full" />
                  <div
                    className={`relative h-40 w-40 rounded-full border-4 shadow-lg flex items-center justify-center overflow-hidden ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-violet-100"
                    }`}
                  >
                    <img src={DervalLogo} alt="Logo Derval Botuna" className="h-full w-full object-contain" />
                  </div>
                </motion.div>

                <motion.div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border shadow-sm ${
                    isDark ? "bg-slate-900/60 border-slate-700" : "bg-white border-pink-200"
                  }`}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                >
                  <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                  <span className={`${isDark ? "text-slate-200" : "text-slate-600"}`}>
                    {isFR ? "Disponible pour de nouveaux défis" : "Available for new challenges"}
                  </span>
                </motion.div>
              </div>
            </motion.section>

            {/* Parcours */}
            <motion.section
              id="parcours"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h2 className={`text-xl md:text-2xl font-bold flex items-center gap-2 ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                  <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">🧭</span>
                  {isFR ? "Mon parcours" : "My experience"}
                </h2>

                <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {isFR
                    ? "De l'administration foncière à la gestion de logements à loyers modérés, en passant par le service client en assurance maladie, je construis un profil qui relie le terrain, les usagers et le digital."
                    : "From land registry to moderated-rent housing (LLM) case management, via health insurance customer service, I build a profile that connects operations, people and digital."}
                </p>

                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${isDark ? "bg-violet-900/30 text-violet-200" : "bg-violet-100/70 text-violet-700"}`}>
                  <span>✨</span>
                  <span>{isFR ? "Profil hybride : terrain & digital" : "Hybrid profile: operations & digital"}</span>
                </div>

                <div className={`mt-4 rounded-2xl border p-4 shadow-sm ${isDark ? "bg-slate-900/60 border-slate-700" : "bg-white border-violet-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{isFR ? "Loisirs" : "Hobbies"}</p>
                  <p className="text-sm">
                    <span className="mr-2">🏀 Basketball</span>
                    <span className="mr-2">🎧 {isFR ? "Musique" : "Music"}</span>
                    <span className="mr-2">📚 {isFR ? "Lecture" : "Reading"}</span>
                    <span className="mr-2">✈️ {isFR ? "Voyager" : "Travel"}</span>
                  </p>
                  <p className={`mt-3 text-xs ${isDark ? "text-slate-300" : "text-slate-500"}`}>
                    {isFR
                      ? "Le basket m'a appris la rigueur, l'esprit d'équipe et la gestion de la pression — des réflexes que j'applique autant dans la gestion de dossiers que dans mes projets digitaux."
                      : "Basketball taught me discipline, team spirit and how to handle pressure — skills I apply both to case management and digital projects."}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <TimelineItem
                  isDark={isDark}
                  title={isFR ? "Registre Foncier d'Aigle & Riviera" : "Aigle & Riviera Land Registry"}
                  subtitle={isFR ? "Collaborateur administratif" : "Administrative clerk"}
                  highlight={isFR ? "Capitastra, SAP, courrier, archivage" : "Capitastra, SAP, mail handling, archiving"}
                  body={
                    isFR
                      ? "Saisie de réquisitions, gestion du courrier entrant/sortant, facturation et économat, avec une rigueur reconnue et un strict respect du secret professionnel."
                      : "Entered land registry requests, handled incoming/outgoing mail, billing and supplies with recognised rigour and strict confidentiality."
                  }
                />

                <TimelineItem
                  isDark={isDark}
                  title="Figeas SA / Assura"
                  subtitle={isFR ? "Gestionnaire de traitement" : "Processing specialist"}
                  highlight={isFR ? "Smartfix, volumétrie élevée, délais" : "Smartfix, high volumes, deadlines"}
                  body={
                    isFR
                      ? "Saisie et contrôle de gros volumes de documents médicaux et administratifs, dans le respect des normes, des délais et de la qualité de service."
                      : "Entered and checked large volumes of medical and administrative documents, meeting strict quality and deadline requirements."
                  }
                />

                <TimelineItem
                  isDark={isDark}
                  title={isFR ? "SWICA Assurance-maladie SA" : "SWICA Health Insurance Ltd."}
                  subtitle={isFR ? "Conseiller service client" : "Customer service advisor"}
                  highlight={isFR ? "Téléphone, e-mail, LAMal & complémentaires" : "Phone, email, basic & supplemental health insurance"}
                  body={
                    isFR
                      ? "Gestion multicanal des clients Romandie, conseil en LAMal et complémentaires en français et anglais, reconquête et fidélisation avec un comportement salué par la hiérarchie."
                      : "Handled multi-channel contacts for French-speaking Switzerland, advised on basic and supplemental insurance in French and English, and retained customers with behaviour praised by management."
                  }
                />

                <TimelineItem
                  isDark={isDark}
                  title={isFR ? "Ville de Lausanne - Unité Logement à Loyer Modéré" : "City of Lausanne - Affordable Rent Housing Unit"}
                  subtitle={isFR ? "Gestionnaire de dossiers" : "Case manager"}
                  highlight={isFR ? "Guichet, téléphone, décisions LLM" : "Front desk, phone, LLM decisions"}
                  body={
                    isFR
                      ? "Accueil, orientation et traitement de demandes de logements à loyers modérés, analyse de situations complexes et rédaction d'attestations, décisions et refus dans le respect des normes et des délais."
                      : "Welcomed, guided and processed applications for moderated-rent housing (LLM), analysed complex situations and drafted certificates, decisions and refusals in line with rules and deadlines."
                  }
                />
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              id="skills"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">🧠</span>
                <h2 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                  {isFR ? "Compétences" : "Skills"}
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <SkillCard
                  isDark={isDark}
                  title={isFR ? "Administration & dossiers" : "Administration & file management"}
                  points={
                    isFR
                      ? ["Registre foncier (Capitastra, SAP, archivage)", "LLM : dossiers, attestations, décisions & refus", "Courrier, guichet, secret professionnel"]
                      : ["Land registry (Capitastra, SAP, archiving)", "LLM: files, certificates, decisions & refusals", "Mail handling, front desk, confidentiality"]
                  }
                />

                <SkillCard
                  isDark={isDark}
                  title={isFR ? "Assurance & service client" : "Insurance & customer service"}
                  points={
                    isFR
                      ? ["Téléphone, e-mail, courrier, tâches CRM", "Conseil LAMal & complémentaires", "Gestion du stress, priorisation, reconquête"]
                      : ["Phone, email, mail, CRM tasks", "Advice on basic & supplemental insurance", "Stress management, prioritisation, retention"]
                  }
                />

                <SkillCard
                  isDark={isDark}
                  title="Web, UX & digital"
                  points={
                    isFR
                      ? ["HTML, CSS, JS, PHP, MySQL", "React", "Webmaster, UX Designer", "SEO, campagnes, e-mailing"]
                      : ["HTML, CSS, JavaScript, PHP, MySQL", "React", "Webmaster, UX Designer", "SEO, campaigns, email marketing"]
                  }
                />

                <SkillCard
                  isDark={isDark}
                  title="IT Support"
                  points={
                    isFR
                      ? ["Qualification, suivi, traçabilité, respect des délais", "Procédures, confidentialité, conformité", "ITIL Foundation"]
                      : ["Triage, follow-up, traceability, meeting deadlines", "Procedures, confidentiality, compliance", "ITIL Foundation"]
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className={`rounded-2xl p-4 shadow-sm border ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {isFR ? "Langues" : "Languages"}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>🇫🇷 {isFR ? "Français" : "French"}</span>
                      <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>C2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>🇬🇧 {isFR ? "Anglais" : "English"}</span>
                      <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>B2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>🇩🇪 {isFR ? "Allemand" : "German"}</span>
                      <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>A2</span>
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl p-4 shadow-sm border ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {isFR ? "Outils" : "Tools"}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Figma", "Miro", "VS Code", "Shopify", "WordPress", "Mailchimp", "Camtasia", "Adobe Creative"].map((tool) => (
                      <span
                        key={tool}
                        className={`px-2 py-1 rounded-full ${
                          isDark ? "bg-violet-900/30 text-violet-200 border border-violet-900/40" : "bg-violet-100 text-violet-700"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              id="projects"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">💡</span>
                  <h2 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                    {isFR ? "Projets" : "Projects"}
                  </h2>
                </div>

                <div className="hidden md:flex gap-2 text-xs">
                  {[isFR ? "Tous" : "All", "UX", "Web", isFR ? "Outils internes" : "Internal tools"].map((tag) => (
                    <button
                      key={tag}
                      className={`px-2.5 py-1 rounded-full border transition-colors ${
                        isDark ? "bg-slate-900/40 border-slate-700 text-slate-200" : "bg-white border-violet-100 text-slate-600"
                      }`}
                      type="button"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ProjectCard
                  isDark={isDark}
                  category={isFR ? "Outils internes" : "Internal tools"}
                  title={isFR ? "Jaxform (LLM) — Formulaire multi-étapes" : "Jaxform (LLM) — Multi-step application form"}
                  description={
                    isFR
                      ? "Numérisation du formulaire officiel LLM : étapes guidées, règles métier, contrôle pièces et export PDF."
                      : "Digitized the official LLM form: guided steps, business rules, document checks, PDF export."
                  }
                  tools="React · TS · Tailwind · RHF · Zod · Framer Motion · jsPDF"
                  href="/jaxform"
                  linkLabel={isFR ? "Lire le case study" : "Read case study"}
                />

                <ProjectCard
                  isDark={isDark}
                  category="UX / Product"
                  title={isFR ? "HuggyStudio — Refonte UX conversion" : "HuggyStudio — Conversion UX redesign"}
                  description={isFR ? "Refonte du parcours + formulaire, diplôme SAWI (2022)." : "Journey + form redesign, SAWI diploma (2022)."}
                  tools="UX Research · Personas · Tests · Figma"
                  href="/huggystudio"
                  linkLabel={isFR ? "Lire le case study" : "Read case study"}
                />

                <ProjectCard
                  isDark={isDark}
                  category="UX / Web"
                  title={isFR ? "Traîne-Savates — Refonte UX du site" : "Traîne-Savates — UX website redesign"}
                  description={
                    isFR
                      ? "Refonte UX/UI d’un site de club de course : hiérarchie, navigation, mobile et mise en valeur des événements."
                      : "UX/UI redesign for a running club website: hierarchy, navigation, mobile, and event highlights."
                  }
                  tools="UX/UI · IA · Mobile-first · React · Tailwind"
                  href="/traine-savates"
                  linkLabel={isFR ? "Lire le case study" : "Read case study"}
                />

                <ProjectCard
                  isDark={isDark}
                  category={isFR ? "UX / Produit" : "UX / Product"}
                  title={isFR ? "Refonte de parcours pour une plateforme digitale" : "User journey redesign for a digital platform"}
                  description={
                    isFR
                      ? "Wireframes, personas et parcours utilisateurs pour clarifier l'inscription et le suivi de dossiers."
                      : "Wireframes, personas and user journeys to clarify onboarding and case follow-up."
                  }
                  tools="Figma · Miro"
                  href="#"
                  linkLabel={isFR ? "Voir le projet" : "View project"}
                />

                <ProjectCard
  isDark={isDark}
  category={isFR ? "Outils internes" : "Internal tools"}
  title={isFR ? "Excel — Suivi de dossiers (VBA + structuration)" : "Excel — Case tracking (VBA + structuring)"}
  description={
    isFR
      ? "Refonte d’un tableau de suivi : colonnes dédiées, listes déroulantes, automatisation VBA et commune auto via NPA."
      : "Redesigned a tracking sheet: dedicated columns, dropdowns, VBA automation and city auto-fill from ZIP."
  }
  tools="Excel · VBA · Data structuring · Validation · UX Data"
  href="/excel"
  linkLabel={isFR ? "Lire le case study" : "Read case study"}
/>

<ProjectCard
  isDark={isDark}
  category="Web / Product"
  title={isFR ? "ITIL Coach — App de révision ITIL 4" : "ITIL Coach — ITIL 4 revision app"}
  description={
    isFR
      ? "Plateforme de révision orientée UX : modules, entraînement, examen blanc, favoris, notes et progression."
      : "UX-first revision platform: modules, training, mock exam, favorites, notes and progress tracking."
  }
  tools="React · TS · Vite · Tailwind · Framer Motion"
  href="/itil-coach"
  linkLabel={isFR ? "Lire le case study" : "Read case study"}
/>

                <ProjectCard
                  isDark={isDark}
                  category={isFR ? "Portfolio" : "Portfolio"}
                  title={isFR ? "Portfolio 2023 — One-page orientée conversion" : "Portfolio 2023 — Conversion-focused one-page"}
                  description={
                    isFR
                      ? "V3 : navigation simple, sections claires, preuve par les projets. Version la plus ‘produit’ de mes portfolios." 
                      : "V3: simple navigation, clear sections, proof through projects. My most ‘product-minded’ portfolio." 
                  }
                  tools="HTML · CSS · JS · AOS · OwlCarousel"
                  href="/portfolio-2023"
                  linkLabel={isFR ? "Voir le case study" : "View case study"}
                />

                <ProjectCard
                  isDark={isDark}
                  category={isFR ? "Portfolio" : "Portfolio"}
                  title={isFR ? "Portfolio 2022 — Expérience interactive" : "Portfolio 2022 — Interactive experience"}
                  description={
                    isFR
                      ? "V2 : popups, sliders, effets visuels. Une version plus ‘showcase créatif’ pour explorer l’interaction." 
                      : "V2: popups, sliders, visual effects. A more ‘creative showcase’ version to explore interaction." 
                  }
                  tools="HTML · CSS · JS · Swiper · Particles"
                  href="/portfolio-2022"
                  linkLabel={isFR ? "Voir le case study" : "View case study"}
                />

                <ProjectCard
                  isDark={isDark}
                  category={isFR ? "Portfolio" : "Portfolio"}
                  title={isFR ? "Portfolio 2021 — Fondations (responsive + dark mode)" : "Portfolio 2021 — Foundations (responsive + dark mode)"}
                  description={
                    isFR
                      ? "V1 : structure, navigation, sections et mode sombre. Le socle qui m’a permis d’itérer ensuite." 
                      : "V1: structure, navigation, sections and dark mode. The foundation that enabled later iterations." 
                  }
                  tools="HTML · CSS · JS · AOS"
                  href="/portfolio-2021"
                  linkLabel={isFR ? "Voir le case study" : "View case study"}
                />



                <ProjectCard
                  isDark={isDark}
                  category="Web & e-commerce"
                  title={isFR ? "Boutique en ligne & campagnes marketing" : "Online store & marketing campaigns"}
                  description={
                    isFR
                      ? "Mise en place d'un shop, suivi des ventes et optimisation de campagnes SEO/SEA."
                      : "Set up an online shop, tracked sales and optimised SEO/ads campaigns."
                  }
                  tools="Shopify · Analytics"
                  href="#"
                  linkLabel={isFR ? "Voir le projet" : "View project"}
                />

                <ProjectCard
                  isDark={isDark}
                  category={isFR ? "Outils internes" : "Internal tools"}
                  title={isFR ? "Maquettes LLM pour la gestion de dossiers" : "LLM mockups for case management"}
                  description={
                    isFR
                      ? "Prototypage de tableaux de bord et formulaires pour simplifier la gestion des demandes en administration communale."
                      : "Prototyped dashboards and forms to simplify application handling in local administration."
                  }
                  tools="Figma · UX"
                  href="#"
                  linkLabel={isFR ? "Voir le projet" : "View project"}
                />
              </div>
            </motion.section>

            {/* What I bring */}
            <motion.section
              id="value"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">🤝</span>
                <h2 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                  {isFR ? "Ce que je peux apporter" : "What I can bring"}
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <ValueCard
                  isDark={isDark}
                  title={isFR ? "Gestion de dossiers" : "File management"}
                  body={
                    isFR
                      ? "Structurer, prioriser et suivre des dossiers avec une grande rigueur, tout en gardant une communication claire avec les usagers."
                      : "Structure, prioritise and follow up files with strong rigour while keeping communication clear for users."
                  }
                />

                <ValueCard
                  isDark={isDark}
                  title={isFR ? "Service client & accueil" : "Customer service & front desk"}
                  body={
                    isFR
                      ? "Accueillir, expliquer des décisions parfois sensibles et désamorcer les tensions avec calme et respect."
                      : "Welcome people, explain sometimes sensitive decisions, and defuse tensions with calm and respect."
                  }
                />

                <ValueCard
                  isDark={isDark}
                  title="UX & digitalisation"
                  body={
                    isFR
                      ? "Améliorer formulaires, parcours et outils internes en partant du terrain, pour rendre le digital plus utile et plus humain."
                      : "Improve forms, journeys and internal tools based on real-life feedback, to make digital more useful and human."
                  }
                />

                <ValueCard
                  isDark={isDark}
                  title={isFR ? "Support utilisateurs & suivi" : "User support & follow-up"}
                  body={
                    isFR
                      ? "Assister les utilisateurs, qualifier et suivre les demandes, assurer la traçabilité et contribuer à l'amélioration continue des outils."
                      : "Support users, triage and follow up requests, ensure traceability, and contribute to continuous improvement of tools."
                  }
                />
              </div>
            </motion.section>

            {/* CV */}
            <motion.section
              id="cv"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">📄</span>
                <h2 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                  {isFR ? "CV & certificats" : "CV & certificates"}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className={`rounded-2xl p-4 shadow-sm border ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {isFR ? "Formations" : "Education"}
                  </p>

                  <ul className={`list-disc list-inside space-y-1 mt-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    <li>Webmaster - HES-SO Sierre</li>
                    <li>UX Designer - SAWI Lausanne</li>
                    <li>ITIL Foundation</li>
                    <li>{isFR ? "Formation e-commerce / webmarketing" : "E-commerce / digital marketing training"}</li>
                    <li>{isFR ? "CFC employé de commerce, voie élargie" : "Commercial apprenticeship (CFC)"}</li>
                  </ul>
                </div>

                <div className={`rounded-2xl p-4 shadow-sm border ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {isFR ? "Certificats & objectifs" : "Certificates & goals"}
                  </p>

                  <ul className={`list-disc list-inside space-y-1 mt-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    <li>{isFR ? "Intermédiaire d'assurance AFA (objectif)" : "Insurance intermediary AFA (goal)"}</li>
                    <li>{isFR ? "ICT Desktop Technician / CompTIA A+ (objectif)" : "ICT Desktop Technician / CompTIA A+ (goal)"}</li>
                    <li>{isFR ? "Renforcement des compétences UX & data" : "Strengthening UX & data skills"}</li>
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <a
                      href="/cv-employe-de-commerce.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-colors"
                    >
                      {isFR ? "CV Employé de commerce" : "Business clerk CV"}
                    </a>
                    <a
                      href="/cv-ux-web-designer.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-colors"
                    >
                      {isFR ? "CV UX / Web designer" : "UX / Web designer CV"}
                    </a>
                    <a
                      href="/cv-it-support.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-colors"
                    >
                      {isFR ? "CV IT Support" : "IT Support CV"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              id="contact"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm">📬</span>
                <h2 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-50" : "text-slate-900"}`}>
                  {isFR ? "Contact & réseaux" : "Contact & networks"}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 text-sm">
                  <p className={`${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    {isFR
                      ? "Intéressé à en savoir plus, à recevoir mon CV détaillé ou à discuter d'un projet ?"
                      : "Interested in learning more, receiving my detailed CV, or discussing a project?"}
                  </p>

                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {isFR ? "Réseaux" : "Social"}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
                            isDark
                              ? "bg-slate-900/40 border-slate-700 text-slate-200 hover:border-violet-500/50 hover:text-violet-200"
                              : "bg-white border-violet-100 text-slate-700 hover:border-violet-300 hover:text-violet-700"
                          }`}
                          aria-label={s.name}
                          title={s.name}
                        >
                          <span className={`${isDark ? "text-slate-200" : "text-slate-800"}`}>{s.icon}</span>
                          <span>{s.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <form className={`rounded-2xl p-4 shadow-sm space-y-3 text-sm border ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`} action="https://formspree.io/f/xnjzglnz" method="POST">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-xs mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{isFR ? "Nom" : "Name"}</label>
                      <input
                        className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 ${
                          isDark
                            ? "border-slate-700 bg-slate-950/40 text-slate-100 focus:ring-violet-500/30"
                            : "border-violet-100 bg-violet-50/40 text-slate-900 focus:ring-violet-300"
                        }`}
                        placeholder={isFR ? "Votre nom" : "Your name"}
                      required />
                    </div>

                    <div>
                      <label className={`block text-xs mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>E-mail</label>
                      <input
                        className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 ${
                          isDark
                            ? "border-slate-700 bg-slate-950/40 text-slate-100 focus:ring-violet-500/30"
                            : "border-violet-100 bg-violet-50/40 text-slate-900 focus:ring-violet-300"
                        }`}
                        placeholder="you@example.com"
                        type="email"
                      required />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{isFR ? "Sujet" : "Subject"}</label>
                    <input
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 ${
                        isDark
                          ? "border-slate-700 bg-slate-950/40 text-slate-100 focus:ring-violet-500/30"
                          : "border-violet-100 bg-violet-50/40 text-slate-900 focus:ring-violet-300"
                      }`}
                      placeholder={isFR ? "Objet de votre message" : "What is it about?"}
                    required />
                  </div>

                  <div>
                    <label className={`block text-xs mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Message</label>
                    <textarea
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 min-h-[96px] ${
                        isDark
                          ? "border-slate-700 bg-slate-950/40 text-slate-100 focus:ring-violet-500/30"
                          : "border-violet-100 bg-violet-50/40 text-slate-900 focus:ring-violet-300"
                      }`}
                      placeholder={isFR ? "Écrivez votre message ici..." : "Write your message here..."}
                    required/>
                  </div>

                  <button
                    type="button"
                    className="w-full inline-flex justify-center items-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white shadow-sm hover:bg-violet-600 transition-colors"
                  >
                    {isFR ? "Envoyer le message" : "Send message"}
                  </button>

                  <p className={`text-[11px] mt-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {isFR ? "Formulaire non connecté : vos données ne sont pas réellement envoyées. Derval.botuna@gmail.com" : "Form not connected: your data is not actually sent."}
                  </p>
                </form>
              </div>
            </motion.section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`border-t transition-colors duration-300 ${
          isDark ? "border-slate-800 bg-slate-950/80" : "border-violet-100 bg-white/70"
        }`}
      >
        <div
          className={`max-w-5xl mx-auto px-4 py-4 text-[11px] md:text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-2 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          <p>
            © {new Date().getFullYear()} Derval Botuna. {isFR ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <p>{isFR ? "Portfolio personnel · Lausanne, Suisse" : "Personal portfolio · Lausanne, Switzerland"}</p>
        </div>
      </footer>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  highlight,
  body,
  isDark,
}: {
  title: string;
  subtitle: string;
  highlight: string;
  body: string;
  isDark: boolean;
}) {
  return (
    <div className={`relative pl-4 border-l ${isDark ? "border-slate-700" : "border-violet-200"}`}>
      <div className={`absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-pink-400 border-2 ${isDark ? "border-slate-950" : "border-violet-50"}`} />
      <div className={`mb-1 text-xs font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</div>
      <h3 className={`text-sm font-semibold ${isDark ? "text-slate-50" : "text-slate-900"}`}>{title}</h3>
      <p className="text-xs text-pink-500 mt-0.5">{highlight}</p>
      <p className={`mt-1 text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>{body}</p>
    </div>
  );
}

function CaseStudyShell({
  isDark,
  isFR,
  slug,
  children,
}: {
  isDark: boolean;
  isFR: boolean;
  slug: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <button
          type="button"
          onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
          className={`inline-flex items-center gap-2 text-sm font-medium w-fit px-3 py-2 rounded-full border transition-colors ${
            isDark
              ? "border-slate-700 bg-slate-900/40 text-slate-100 hover:bg-slate-900/70"
              : "border-violet-200 bg-white text-violet-700 hover:bg-violet-50"
          }`}
        >
          <span aria-hidden>←</span>
          {isFR ? "Retour aux projets" : "Back to projects"}
        </button>

        <div className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {isFR ? `Page dédiée au case study (URL: /${slug})` : `Dedicated case study page (URL: /${slug})`}
        </div>
      </div>

      <motion.section
        id={slug}
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {children}
      </motion.section>
    </div>
  );
}

function SkillCard({ title, points, isDark }: { title: string; points: string[]; isDark: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`rounded-2xl border p-4 shadow-sm flex flex-col gap-2 text-xs ${
        isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"
      }`}
    >
      <h3 className={`font-semibold flex items-center gap-2 ${isDark ? "text-slate-50" : "text-slate-900"}`}>
        <span
          className={`h-5 w-5 rounded-full flex items-center justify-center text-[11px] ${
            isDark ? "bg-violet-900/30 text-violet-200 border border-violet-900/40" : "bg-violet-100 text-violet-600"
          }`}
        >
          ★
        </span>
        {title}
      </h3>

      <ul className={isDark ? "space-y-1 text-slate-300" : "space-y-1 text-slate-600"}>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({
  category,
  title,
  description,
  tools,
  href,
  linkLabel,
  isDark,
}: {
  category: string;
  title: string;
  description: string;
  tools: string;
  href?: string;
  linkLabel?: string;
  isDark: boolean;
}) {
  const navigate = useNavigate();
  const isAnchor = !!href && href.startsWith("#");
  const isInternal = !!href && href.startsWith("/");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href) return;

    // Anchor scroll (same page)
    if (isAnchor) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Internal route (SPA)
    if (isInternal) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 18px 35px rgba(148, 127, 255, 0.18)" }}
      className={`rounded-2xl border p-4 shadow-sm text-xs flex flex-col gap-2 ${
        isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"
      }`}
    >
      <div className="rounded-xl bg-gradient-to-r from-violet-400/90 to-pink-400/90 text-[10px] uppercase tracking-[0.15em] text-white px-3 py-1 inline-flex w-fit">
        {category}
      </div>

      <h3 className={`text-sm font-semibold mt-1 ${isDark ? "text-slate-50" : "text-slate-900"}`}>{title}</h3>
      <p className={`${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      <p className={`mt-1 text-[11px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>{tools}</p>

      {href && (
        <a
          href={href}
          onClick={handleClick}
          target={isAnchor || isInternal ? undefined : "_blank"}
          rel={isAnchor || isInternal ? undefined : "noreferrer"}
          className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-violet-600 hover:text-violet-700"
        >
          {linkLabel ?? (isAnchor || isInternal ? "Open" : "View project")} <span>↗</span>
        </a>
      )}
    </motion.article>
  );
}

function ValueCard({ title, body, isDark }: { title: string; body: string; isDark: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`rounded-2xl border p-4 shadow-sm ${isDark ? "bg-slate-900/70 border-slate-700" : "bg-white border-violet-100"}`}
    >
      <h3 className={`text-sm font-semibold mb-1 ${isDark ? "text-slate-50" : "text-slate-900"}`}>{title}</h3>
      <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>{body}</p>
    </motion.div>
  );
}
