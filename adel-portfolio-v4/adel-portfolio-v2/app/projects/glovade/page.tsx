"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Users, Search, Shield, BarChart2, CheckCircle } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const FEATURES = [
  { icon: BookOpen, title: "Book Catalog", desc: "Complete digital catalog with search, filter by genre, author, and availability status." },
  { icon: Users, title: "Member Management", desc: "Register and manage library members with borrowing history and fine tracking." },
  { icon: Search, title: "Smart Search", desc: "Real-time search across titles, authors, and ISBN numbers." },
  { icon: Shield, title: "Admin Dashboard", desc: "Full admin control over inventory, loans, returns, and member accounts." },
  { icon: BarChart2, title: "Reports", desc: "Generate borrowing reports, popular book statistics, and overdue summaries." },
  { icon: CheckCircle, title: "Loan Tracking", desc: "Track active loans, due dates, and automated overdue fine calculations." },
];

export default function GlovadePage() {
  return (
    <ProjectLayout
      slug="glovade"
      title="Glovade Library Management"
      subtitle="A full-stack library management system built with Laravel, streamlining book cataloging, member management, and borrowing operations."
      tags={["Laravel", "PHP", "MySQL", "Bootstrap", "Web App"]}
      color="#0070f3"
      gradient="from-blue-900/60 via-[#050508] to-[#050508]"
      githubUrl="https://github.com/glory1996-bit/-Library-Laravel"
    >
      {/* Screenshot */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/images/glovade.jpg" alt="Glovade Library" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 to-transparent" />
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6 gradient-text-blue">Project Overview</h2>
        <div className="glass rounded-2xl border border-white/10 p-6">
          <p className="text-white/90 font-medium leading-relaxed">
            Glovade is a comprehensive library management system developed using <span className="text-white font-bold">Laravel</span>. The system digitizes the entire library workflow — from cataloging books and registering members to tracking loans and generating reports. Built as a full-stack solution with a clean Bootstrap frontend and robust Laravel backend.
          </p>
          <p className="text-white/90 font-medium leading-relaxed mt-4">
            As the <span className="text-white font-bold">Developer</span>, I was responsible for designing the database schema, building RESTful controllers, implementing the authentication system, and creating the responsive frontend interface.
          </p>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6 gradient-text-blue">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl border border-white/10 p-5 hover:border-blue-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-3">
                <Icon size={16} className="text-blue-400" />
              </div>
              <h4 className="font-bold mb-1 text-sm">{title}</h4>
              <p className="text-white/85 font-medium text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl font-bold mb-6 gradient-text-blue">Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "Blade Templates", "Eloquent ORM"].map((tech) => (
            <span key={tech} className="px-4 py-2 glass border border-white/10 rounded-xl text-sm font-mono text-white/90 hover:border-blue-500/40 hover:text-blue-400 transition-all cursor-default">{tech}</span>
          ))}
        </div>
      </motion.div>
    </ProjectLayout>
  );
}
