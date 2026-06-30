"use client";
import { motion } from "framer-motion";
import { FileText, Calendar, Users, MessageSquare, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

const EXPERIENCES = [
  {
    org: "President University Developer Club",
    abbr: "PUDC",
    role: "Secretary",
    period: "Nov 2024 — Present",
    color: "#0070f3",
    colorBg: "bg-blue-600/15",
    colorBorder: "border-blue-500/30",
    colorText: "text-blue-400",
    description:
      "PUDC is a student community focused on developing skills in technology, particularly programming, software development, and IT project management. The club organizes workshops, seminars, company visits, and competitions to support practical learning and build connections between students and industry.",
    responsibilities: [
      { icon: FileText, text: "Managed documentation and administrative reports for 10+ organizational meetings and technology-related events." },
      { icon: Users, text: "Coordinated communication between 4+ divisions and committee members to support seminars and company visits." },
      { icon: FileText, text: "Maintained structured digital archives to improve document accessibility and reporting efficiency for organizational activities." },
      { icon: Calendar, text: "Prepared and distributed meeting agendas, invitations, and documentation for 20+ active members and administrators." },
    ],
  },
  {
    org: "Pathfinder: Company Visit & Seminar",
    abbr: "PF",
    role: "Secretary",
    period: "Jan 2025 — Jul 2025",
    color: "#a855f7",
    colorBg: "bg-purple-600/15",
    colorBorder: "border-purple-500/30",
    colorText: "text-purple-400",
    description:
      "Pathfinder 2025 was an event organized under President University Developer Club, combining a company visit and seminar program to connect students with industry professionals.",
    responsibilities: [
      { icon: FileText, text: "Compiled proposals, reports, and meeting records for multiple event preparation activities and committee meetings." },
      { icon: Users, text: "Collaborated with division leaders and committees to ensure smooth administrative readiness during event execution." },
      { icon: FileText, text: "Organized and archived important event documents systematically to support accountability and post-event reporting." },
    ],
  },
  {
    org: "COMPSPHERE 2025",
    abbr: "CS",
    role: "Member of Guard X Medic",
    period: "Feb 2025 — Oct 2025",
    color: "#00d4ff",
    colorBg: "bg-cyan-600/15",
    colorBorder: "border-cyan-500/30",
    colorText: "text-cyan-400",
    description:
      "Served as a Guard and Medical Division Member in COMPSPHERE 2025, responsible for supporting event safety and assisting in basic medical preparedness to ensure the well-being of participants during the event.",
    responsibilities: [
      { icon: ShieldCheck, text: "Assisted in maintaining safety and event coordination for 100+ participants." },
      { icon: Users, text: "Supported basic medical preparedness and collaborated with organizing committees during event operations." },
      { icon: MessageSquare, text: "Contributed to creating a safe and well-organized environment throughout event activities." },
    ],
  },
  {
    org: "CSGO 2026",
    abbr: "CG",
    role: "Member of Guard",
    period: "Nov 2025 — Feb 2026",
    color: "#22c55e",
    colorBg: "bg-green-600/15",
    colorBorder: "border-green-500/30",
    colorText: "text-green-400",
    description:
      "A faculty-scale event organized by PUFA Computer Science, where safety and smooth event coordination were key priorities for all participants.",
    responsibilities: [
      { icon: ShieldCheck, text: "Assisted in maintaining participant safety and event coordination during the event." },
      { icon: Users, text: "Collaborated with committees and organizers to support smooth event operations and participant management." },
      { icon: MessageSquare, text: "Contributed to creating a safe and organized environment throughout event activities." },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Background</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">My <span className="gradient-text">Experience</span></h1>
            <p className="font-medium text-white/75 max-w-xl mx-auto">Organizational roles that shaped my leadership, coordination, and professional communication skills.</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] timeline-line rounded-full" />

            <div className="flex flex-col gap-12">
              {EXPERIENCES.map(({ org, abbr, role, period, color, colorBg, colorBorder, colorText, description, responsibilities }, i) => (
                <motion.div
                  key={org}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 md:left-5 w-6 h-6 rounded-full ${colorBg} border-2 ${colorBorder} flex items-center justify-center`} style={{ top: "1.5rem" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl border border-white/8 overflow-hidden hover:border-white/16 transition-all duration-300">
                    {/* Header */}
                    <div className={`p-6 pb-4 border-b border-white/8`}>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${colorBg} border ${colorBorder} flex items-center justify-center text-xs font-bold font-mono ${colorText}`}>
                            {abbr.slice(0, 2)}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{org}</h3>
                            <p className={`text-sm font-medium ${colorText}`}>{role}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 glass rounded-full text-xs font-mono text-white/75 border border-white/10">{period}</span>
                      </div>
                      <p className="text-[#c8c8c8] font-medium text-sm mt-4 leading-relaxed">{description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="p-6">
                      <p className="text-xs font-mono text-white/95 uppercase tracking-widest mb-4">Key Responsibilities</p>
                      <ul className="space-y-3">
                        {responsibilities.map(({ icon: Icon, text }, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-6 h-6 rounded-md ${colorBg} border ${colorBorder} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Icon size={12} style={{ color }} />
                            </div>
                            <p className="text-[#d4d4d4] font-medium text-sm leading-relaxed">{text}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}