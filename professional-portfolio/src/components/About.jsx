import { motion } from "framer-motion";
import { FaCode, FaGlobeAsia, FaLaptopCode, FaRocket } from "react-icons/fa";

const highlights = [
  { icon: FaCode, title: "Project-based learning", description: "I learn development by building practical websites and applications instead of only watching tutorials." },
  { icon: FaLaptopCode, title: "Full-stack journey", description: "I am developing skills in React, Node.js, Express, MongoDB and modern development workflows." },
  { icon: FaRocket, title: "Career focused", description: "My goal is to become a reliable developer who can contribute to remote teams and international projects." },
  { icon: FaGlobeAsia, title: "Based in Nepal", description: "I am preparing to work remotely with clients and companies from different parts of the world." },
];

function About() {
  return <section id="about" className="bg-slate-100 px-6 py-24 transition-colors dark:bg-slate-900/50"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-3xl">
      <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">About me</p>
      <h2 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">Building skills through real projects</h2>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">I am Parash Awasthi, an aspiring full-stack developer based in Nepal. I enjoy transforming ideas into responsive, useful and visually attractive web applications.</p>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">I am currently strengthening my JavaScript, React and backend development skills while creating portfolio projects such as e-commerce applications, dashboards, AI tools and web-scraping systems.</p>
    </motion.div>
    <div className="mt-14 grid gap-6 sm:grid-cols-2">{highlights.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-950/60"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-600 dark:text-cyan-400"><Icon /></div><h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{item.description}</p></motion.article>; })}</div>
  </div></section>;
}

export default About;
