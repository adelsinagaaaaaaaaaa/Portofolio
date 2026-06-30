"use client";
import { motion } from "framer-motion";
import { Code2, FileText, Users, Calendar, MessageSquare, Clock, CheckSquare, RefreshCw, Target, Handshake, Lightbulb, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";

/*
  TECHNICAL: ordered strongest → weakest based on project usage & depth.
  Core web (HTML/CSS/JS) → backend (PHP/Laravel/MySQL) → tooling (Git/GitHub) →
  frameworks (Bootstrap/React) → other lang (Python/Java) → design (Figma) → networking (Cisco PT)
*/
const TECHNICAL = [
  { name: "HTML5",      icon: "🌐", color: "#e34f26", level: 95 },
  { name: "CSS3",       icon: "🎨", color: "#1572b6", level: 90 },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e", level: 82 },
  { name: "PHP",        icon: "🐘", color: "#777bb4", level: 80 },
  { name: "Laravel",    icon: "🔴", color: "#ff2d20", level: 78 },
  { name: "MySQL",      icon: "🗄️", color: "#4479a1", level: 75 },
  { name: "Git",        icon: "🔀", color: "#f05032", level: 72 },
  { name: "GitHub",     icon: "🐙", color: "#e0e0e0", level: 70 },
  { name: "Bootstrap",  icon: "🅱️", color: "#7952b3", level: 68 },
  { name: "React",      icon: "⚛️", color: "#61dafb", level: 60 },
  { name: "Python",     icon: "🐍", color: "#3776ab", level: 55 },
  { name: "Java",       icon: "☕", color: "#ed8b00", level: 50 },
  { name: "Figma",      icon: "🖌️", color: "#f24e1e", level: 45 },
  { name: "Cisco PT",   icon: "🌐", color: "#1ba0d7", level: 40 },
];

/*
  ADMINISTRATIVE: ordered by frequency of use in organizational roles
*/
const ADMINISTRATIVE = [
  { name: "Documentation Management", icon: FileText,    color: "#0070f3" },
  { name: "Meeting Minutes Writing",  icon: FileText,    color: "#a855f7" },
  { name: "Report Preparation",       icon: CheckSquare, color: "#10b981" },
  { name: "Event Administration",     icon: Calendar,    color: "#00d4ff" },
  { name: "Data Management",          icon: Code2,       color: "#f59e0b" },
  { name: "Scheduling & Coordination",icon: Clock,       color: "#ec4899" },
];

/*
  PROFESSIONAL: core interpersonal strengths first
*/
const PROFESSIONAL = [
  { name: "Team Collaboration",  icon: Users,          color: "#a855f7" },
  { name: "Communication",       icon: MessageSquare,  color: "#0070f3" },
  { name: "Attention to Detail", icon: Brain,          color: "#00d4ff" },
  { name: "Problem Solving",     icon: Lightbulb,      color: "#f59e0b" },
  { name: "Time Management",     icon: Clock,          color: "#10b981" },
  { name: "Adaptability",        icon: RefreshCw,      color: "#ec4899" },
];

/*
  ORGANIZATIONAL: most practiced first
*/
const ORGANIZATIONAL = [
  { name: "Event Planning",            icon: Calendar,  color: "#0070f3" },
  { name: "Team Coordination",         icon: Users,     color: "#10b981" },
  { name: "Project Coordination",      icon: Target,    color: "#a855f7" },
  { name: "Stakeholder Coordination",  icon: Handshake, color: "#00d4ff" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">{label}</span>
      <h2 className="text-3xl font-bold mt-1 text-white">{title}</h2>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Page header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Capabilities</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-[#c0c0c0] font-medium max-w-xl mx-auto">
              Ordered from strongest to most recently developing — across technical, administrative, professional, and organizational domains.
            </p>
          </motion.div>

          {/* ── TECHNICAL SKILLS ── */}
          <div className="mb-16">
            <SectionHeader label="01 / Technical" title="Technical Skills" />
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3"
            >
              {TECHNICAL.map(({ name, icon, color, level }, i) => (
                <motion.div
                  key={name}
                  variants={item}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="glass rounded-xl border border-white/10 p-4 flex flex-col items-center gap-2 cursor-default group hover:border-white/25 transition-all duration-200 relative overflow-hidden"
                >
                  {/* strongest badge */}
                  {i === 0 && (
                    <span className="absolute top-1.5 right-1.5 text-[9px] font-mono bg-blue-500/20 text-blue-300 px-1 rounded">TOP</span>
                  )}
                  <span className="text-2xl">{icon}</span>
                  <span className="text-xs font-semibold text-center text-white/85 group-hover:text-white transition-colors leading-tight">{name}</span>
                  {/* proficiency bar */}
                  <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.04 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── ADMINISTRATIVE + ORGANIZATIONAL ── */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <SectionHeader label="02 / Administrative" title="Administrative Skills" />
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-3">
                {ADMINISTRATIVE.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name} variants={item} whileHover={{ x: 4 }}
                    className="glass rounded-xl border border-white/10 p-4 flex items-center gap-4 group hover:border-white/25 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 flex-shrink-0" style={{ background: `${color}20` }}>
                      <Icon size={14} style={{ color }} />
                    </div>
                    <span className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <SectionHeader label="03 / Organizational" title="Organizational Skills" />
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-3">
                {ORGANIZATIONAL.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name} variants={item} whileHover={{ x: 4 }}
                    className="glass rounded-xl border border-white/10 p-4 flex items-center gap-4 group hover:border-white/25 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 flex-shrink-0" style={{ background: `${color}20` }}>
                      <Icon size={14} style={{ color }} />
                    </div>
                    <span className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── PROFESSIONAL SKILLS ── */}
          <div>
            <SectionHeader label="04 / Professional" title="Professional Skills" />
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {PROFESSIONAL.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name} variants={item} whileHover={{ y: -6, scale: 1.03 }}
                  className="glass rounded-2xl border border-white/10 p-5 flex flex-col items-center gap-3 text-center group hover:border-white/25 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10" style={{ background: `${color}20` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <span className="text-xs font-semibold text-white/85 group-hover:text-white transition-colors leading-tight">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
