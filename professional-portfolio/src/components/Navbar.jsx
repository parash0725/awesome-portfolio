import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const navigationLinks = [
  { name: "Home", href: "#home" }, { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" }, { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function getInitialTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const closeMenu = () => setMenuOpen(false);
  const themeLabel = darkMode ? "Activate light mode" : "Activate dark mode";

  return <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-950/90">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#home" onClick={closeMenu} className="text-xl font-bold text-cyan-600 dark:text-cyan-400">Parash.dev</a>
      <div className="hidden items-center gap-8 md:flex">{navigationLinks.map((link) => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400">{link.name}</a>)}<button type="button" onClick={() => setDarkMode((current) => !current)} className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300" aria-label={themeLabel} title={themeLabel}>{darkMode ? <FaSun /> : <FaMoon />}</button></div>
      <div className="flex items-center gap-3 md:hidden"><button type="button" onClick={() => setDarkMode((current) => !current)} className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300" aria-label={themeLabel}>{darkMode ? <FaSun /> : <FaMoon />}</button><button type="button" onClick={() => setMenuOpen((current) => !current)} className="text-2xl text-slate-800 dark:text-slate-200" aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? <FaTimes /> : <FaBars />}</button></div>
    </nav>
    {menuOpen && <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950 md:hidden"><div className="flex flex-col gap-5">{navigationLinks.map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="text-slate-700 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400">{link.name}</a>)}</div></div>}
  </header>;
}

export default Navbar;
