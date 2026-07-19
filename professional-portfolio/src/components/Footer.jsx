import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-slate-200 bg-white px-6 py-8 transition-colors dark:border-slate-800 dark:bg-slate-950"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"><div><a href="#home" className="text-xl font-bold text-cyan-600 dark:text-cyan-400">Parash.dev</a><p className="mt-2 text-sm text-slate-500">© {currentYear} Parash Awasthi. Built with React and Tailwind CSS.</p></div><div className="flex items-center gap-4"><a href="https://github.com/parash0725" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-lg border border-slate-300 p-3 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400"><FaGithub /></a><a href="https://www.linkedin.com/in/parash-awasthi/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-lg border border-slate-300 p-3 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400"><FaLinkedin /></a><a href="#home" aria-label="Return to the top" className="rounded-lg bg-cyan-500 p-3 text-slate-950 transition hover:bg-cyan-400"><FaArrowUp /></a></div></div></footer>;
}

export default Footer;
