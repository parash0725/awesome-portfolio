import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const initialFormData = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState("");
  function handleChange(event) { const { name, value } = event.target; setFormData((current) => ({ ...current, [name]: value })); }
  function handleSubmit(event) {
    event.preventDefault(); setFormError("");
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) { setFormError("Please complete every field before sending."); return; }
    const emailSubject = encodeURIComponent(`${subject} — message from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:penguincoder25@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  }
  return <section id="contact" className="bg-slate-100 px-6 py-24 transition-colors dark:bg-slate-900/50"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }} className="max-w-3xl"><p className="mb-3 font-semibold uppercase tracking-[.25em] text-cyan-600 dark:text-cyan-400">Contact</p><h2 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">Let&apos;s work together</h2><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">I am interested in junior development opportunities, freelance projects, internships and collaborations that help me grow as a full-stack developer.</p></motion.div>
    <div className="mt-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }} className="space-y-5">
        <ContactItem icon={FaEnvelope} title="Email" value="penguincoder25@gmail.com" href="mailto:penguincoder25@gmail.com" />
        <ContactItem icon={FaGithub} title="GitHub" value="github.com/parash0725" href="https://github.com/parash0725" />
        <ContactItem icon={FaLinkedin} title="LinkedIn" value="linkedin.com/in/parash-awasthi" href="https://www.linkedin.com/in/parash-awasthi/" />
        <ContactItem icon={FaMapMarkerAlt} title="Location" value="Nepal — available for remote work" />
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6"><p className="font-semibold text-cyan-700 dark:text-cyan-300">Current availability</p><p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">Open to junior roles, internships, freelance assignments and project-based remote opportunities.</p></div>
      </motion.div>
      <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }} onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-none sm:p-9">
        <div className="grid gap-6 sm:grid-cols-2"><FormField label="Your name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Smith" /><FormField label="Your email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" /></div>
        <div className="mt-6"><FormField label="Subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Remote development opportunity" /></div>
        <div className="mt-6"><label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">Message</label><textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white" /></div>
        {formError && <p role="alert" className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">{formError}</p>}
        <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400 focus:ring-2 focus:ring-cyan-500 sm:w-auto"><FaPaperPlane />Send message</button><p className="mt-4 text-sm leading-6 text-slate-500">This button opens your default email application with the message prepared.</p>
      </motion.form>
    </div>
  </div></section>;
}

function ContactItem({ icon: Icon, title, value, href }) {
  const content = <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-950/60"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-600 dark:text-cyan-400"><Icon /></div><div className="min-w-0"><p className="text-sm text-slate-500">{title}</p><p className="truncate font-semibold text-slate-900 dark:text-slate-200">{value}</p></div></div>;
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a> : content;
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  return <div><label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">{label}</label><input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white" /></div>;
}

export default Contact;
