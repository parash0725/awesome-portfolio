import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return <section id="home" className="flex min-h-screen items-center px-6 pb-20 pt-28">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-cyan-400">Hello, I am</p>
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">Parash Awasthi</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-400 sm:text-3xl">Full-stack developer in training</h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">I build responsive web applications using React, Node.js, Express, MongoDB and AI-assisted development tools. I am creating real projects and preparing for remote opportunities.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">View Projects</a>
          <a href="/Parash-Awasthi-CV.pdf" download className="flex items-center gap-2 rounded-lg border border-cyan-400 px-6 py-3 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"><FaDownload />Download CV</a>
        </div>
        <div className="mt-8 flex gap-5 text-2xl">
          <a href="https://github.com/parash0725" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition hover:text-cyan-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/parash-awasthi/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-cyan-400"><FaLinkedin /></a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-2xl shadow-cyan-500/20 sm:h-96 sm:w-96">
        <div className="text-center"><div className="text-7xl font-black text-cyan-400">PA</div><p className="mt-3 text-slate-400">Developer Portfolio</p></div>
      </motion.div>
    </div>
  </section>;
}

export default Hero;
