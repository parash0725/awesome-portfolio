import { motion } from "framer-motion";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  ["HTML", FaHtml5, "Confident", 85], ["CSS", FaCss3Alt, "Confident", 80],
  ["JavaScript", FaJs, "Learning deeply", 68], ["React", FaReact, "Building projects", 62],
  ["Tailwind CSS", SiTailwindcss, "Building projects", 70], ["Node.js", FaNodeJs, "Learning", 50],
  ["Express", SiExpress, "Learning", 48], ["MongoDB", SiMongodb, "Learning", 45],
  ["Git", FaGitAlt, "Using regularly", 65], ["GitHub", FaGithub, "Using regularly", 70],
  ["Vite", SiVite, "Using in React", 65],
];

function Skills() {
  return <section id="skills" className="bg-white px-6 py-24 transition-colors dark:bg-slate-950"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-3xl">
      <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">My toolkit</p><h2 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">Technologies I use and learn</h2><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">I am developing a strong foundation in frontend development while progressively adding backend, database and deployment skills.</p>
    </motion.div>
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{skills.map(([name, Icon, level, percentage], index) => <motion.article key={name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900/60"><div className="flex items-center justify-between"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-600 dark:text-cyan-400"><Icon /></div><div><h3 className="font-bold text-slate-950 dark:text-white">{name}</h3><p className="text-sm text-slate-500">{level}</p></div></div><span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{percentage}%</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><motion.div initial={{ width: 0 }} whileInView={{ width: `${percentage}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.05 }} className="h-full rounded-full bg-cyan-500 dark:bg-cyan-400" /></div></motion.article>)}</div>
    <p className="mt-8 text-sm leading-6 text-slate-500">These percentages represent my current self-assessment and will be updated as I complete more projects.</p>
  </div></section>;
}

export default Skills;
