import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const links = [
    { name: "Home", href: "#home" }, { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }, { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  function toggleTheme() {
    setDarkMode((currentMode) => !currentMode);
    document.documentElement.classList.toggle("dark");
  }
  return <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#home" className="text-xl font-bold text-cyan-400">Parash.dev</a>
      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">{link.name}</a>)}
        <button type="button" onClick={toggleTheme} className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400" aria-label="Toggle theme">{darkMode ? <FaSun /> : <FaMoon />}</button>
      </div>
      <button type="button" className="text-2xl text-slate-200 md:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Toggle navigation menu">{menuOpen ? <FaTimes /> : <FaBars />}</button>
    </nav>
    {menuOpen && <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden"><div className="flex flex-col gap-5">{links.map((link) => <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-cyan-400">{link.name}</a>)}</div></div>}
  </header>;
}

export default Navbar;
