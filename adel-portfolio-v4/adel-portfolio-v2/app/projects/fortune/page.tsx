"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Layout, Users, Briefcase, Mail, Star, Monitor } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const FEATURES = [
  { icon: Layout, title: "Modern Landing Page", desc: "Clean, dark-themed hero section with strong typography and CTA buttons." },
  { icon: Briefcase, title: "Services Section", desc: "Showcases company services with icons, descriptions, and hover animations." },
  { icon: Users, title: "Team Section", desc: "Profile cards for team members with roles and social links." },
  { icon: Star, title: "Projects Portfolio", desc: "Gallery of completed projects with category filtering." },
  { icon: Mail, title: "Contact Section", desc: "Contact form with company address and social media links." },
  { icon: Monitor, title: "Responsive Design", desc: "Fully responsive layout that works seamlessly on all screen sizes." },
];

export default function FortunePage() {
  return (
    <ProjectLayout
      slug="fortune"
      title="Fortune — Company Profile"
      subtitle="A modern, dark-themed company profile website built to showcase Fortune's services, team, and portfolio in a professional and engaging way."
      tags={["HTML", "CSS", "JavaScript", "Bootstrap", "Website"]}
      color="#f59e0b"
      gradient="from-amber-900/60 via-[#050508] to-[#050508]"
      githubUrl="https://github.com/adelsinagaaaaaaaaaa/fortune-company-profile"
    >
      {/* Screenshot */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/images/fortune.jpg" alt="Fortune Company Profile" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 to-transparent" />
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Project Overview</h2>
        <div className="glass rounded-2xl border border-white/10 p-6">
          <p className="text-white/90 font-medium leading-relaxed">
            Fortune is a sleek company profile website designed with a dark, professional aesthetic. Built using <span className="text-white font-bold">HTML, CSS, JavaScript, and Bootstrap</span>, the site presents Fortune&apos;s brand identity, services, and portfolio in an elegant and modern format.
          </p>
          <p className="text-white/90 font-medium leading-relaxed mt-4">
            As the <span className="text-white font-bold">Developer</span>, I handled the complete frontend development — from layout design and component building to animations and responsive breakpoints.
          </p>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl border border-white/10 p-5 hover:border-amber-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-amber-600/15 border border-amber-500/30 flex items-center justify-center mb-3">
                <Icon size={16} className="text-amber-400" />
              </div>
              <h4 className="font-bold mb-1 text-sm">{title}</h4>
              <p className="text-white/85 font-medium text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Google Fonts", "AOS Animations"].map((tech) => (
            <span key={tech} className="px-4 py-2 glass border border-white/10 rounded-xl text-sm font-mono text-white/90 hover:border-amber-500/40 hover:text-amber-400 transition-all cursor-default">{tech}</span>
          ))}
        </div>
      </motion.div>
    </ProjectLayout>
  );
}
