import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaRobot, FaShoppingBag, FaUtensils } from "react-icons/fa";
import { MdDashboard, MdOutlineWeb, MdPeopleAlt } from "react-icons/md";
import { SiDatabricks } from "react-icons/si";

const projects = [
  { title: "Professional Portfolio", description: "A responsive developer portfolio built with React, Tailwind CSS and Framer Motion.", technologies: ["React", "Tailwind CSS", "Framer Motion"], icon: MdOutlineWeb, status: "In Progress", github: "https://github.com/parash0725/awesome-portfolio", live: "#home", featured: true },
  { title: "Restaurant Website", description: "A responsive restaurant ordering website with menu filtering, dish details, reservation form, shopping cart, localStorage persistence and a demonstration checkout flow.", technologies: ["React", "Tailwind CSS", "JavaScript", "Context API", "Framer Motion"], icon: FaUtensils, status: "In Progress", github: "https://github.com/parash0725/restaurant-website", live: "", featured: false },
  { title: "Clothing E-commerce", description: "A full-stack clothing store with products, search, shopping cart, authentication and order management.", technologies: ["React", "Node.js", "MongoDB"], icon: FaShoppingBag, status: "Planned", github: "", demo: "", featured: true },
  { title: "Social Media UI", description: "A responsive social platform interface containing feeds, profiles, messages and notifications.", technologies: ["React", "Tailwind CSS", "API"], icon: MdPeopleAlt, status: "Planned", github: "", demo: "", featured: false },
  { title: "AI Chatbot", description: "An AI-powered chat interface with conversation history, reusable prompts and API integration.", technologies: ["React", "Node.js", "AI API"], icon: FaRobot, status: "Planned", github: "", demo: "", featured: true },
  { title: "Analytics Dashboard", description: "An interactive dashboard that presents key performance data using charts, tables and filters.", technologies: ["React", "Charts", "REST API"], icon: MdDashboard, status: "Planned", github: "", demo: "", featured: false },
  { title: "Web Scraping Dashboard", description: "A MERN dashboard for collecting, storing and visualising publicly available web data.", technologies: ["MERN", "Python", "Web Scraping"], icon: SiDatabricks, status: "Future project", github: "", demo: "", featured: true },
];

function Projects() {
  return <section id="projects" className="bg-slate-100 px-6 py-24 transition-colors dark:bg-slate-900/50"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-3xl">
      <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">Selected work</p><h2 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">Projects I am building</h2><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">These projects represent my development roadmap. Completed projects will include live demonstrations, source code and clear documentation.</p>
    </motion.div>
    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => { const Icon = project.icon; return <motion.article key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.08 }} className={`group flex h-full flex-col rounded-2xl border bg-white p-7 transition hover:-translate-y-2 dark:bg-slate-950/70 ${project.featured ? "border-cyan-500/40 hover:border-cyan-500 dark:border-cyan-400/40" : "border-slate-200 hover:border-cyan-500 dark:border-slate-800"}`}>
      <div className="flex items-start justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400"><Icon /></div><span className={`rounded-full px-4 py-1 text-sm font-semibold ${project.status === "Completed" ? "bg-green-500/15 text-green-500 dark:text-green-400" : project.status === "In Progress" ? "bg-amber-500/15 text-amber-500 dark:text-amber-400" : "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>{project.status}</span></div>
      <h3 className="mt-6 text-2xl font-bold text-slate-950 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">{project.title}</h3><p className="mt-4 flex-grow leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">{technology}</span>)}</div>
      <div className="mt-8 flex flex-wrap items-center gap-5">{project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"><FaGithub />View code</a> : <span className="flex items-center gap-2 text-slate-500 dark:text-slate-600"><FaGithub />Coming soon</span>}{project.live ? <a href={project.live} target={project.live.startsWith("http") ? "_blank" : undefined} rel={project.live.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-2 font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"><FaExternalLinkAlt />Live demo</a> : <span className="flex items-center gap-2 text-slate-500 dark:text-slate-600"><FaExternalLinkAlt />Deployment pending</span>}</div>
    </motion.article>; })}</div>
  </div></section>;
}

export default Projects;
