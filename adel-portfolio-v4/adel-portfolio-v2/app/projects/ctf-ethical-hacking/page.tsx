"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Trophy, Network, Lock, Terminal } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CATEGORIES = [
  { icon: Network, title: "Network Exploitation", desc: "Identified and exploited vulnerabilities in network configurations and services." },
  { icon: Lock, title: "Cryptography", desc: "Decoded encrypted flags using various cryptographic techniques and tools." },
  { icon: Terminal, title: "Web Exploitation", desc: "Performed SQL injection, XSS, and other web vulnerability attacks." },
  { icon: Shield, title: "Reverse Engineering", desc: "Analyzed and reversed binary files to extract hidden information." },
  { icon: Target, title: "OSINT", desc: "Used open-source intelligence techniques to gather information and solve challenges." },
  { icon: Trophy, title: "Steganography", desc: "Uncovered hidden data embedded within image and audio files." },
];

export default function CTFEthicalPage() {
  return (
    <ProjectLayout
      slug="ctf-ethical-hacking"
      title="CTF — Ethical Hacking"
      subtitle="University final exam CTF competition focused on ethical hacking. Competed as team 'Bakso Intel Khas BIN', finishing 10th out of 38 teams."
      tags={["CTF", "Ethical Hacking", "Cybersecurity", "Networking", "Competition"]}
      color="#10b981"
      gradient="from-emerald-900/60 via-[#050508] to-[#050508]"
    >
      {/* Screenshot */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/images/ctf-ethical.jpg" alt="CTF Ethical Hacking" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 to-transparent" />
        </div>
      </motion.div>

      {/* Result highlight */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "10th", label: "Final Ranking", color: "#10b981" },
            { value: "38", label: "Total Teams", color: "#3b82f6" },
            { value: "Top 27%", label: "Percentile", color: "#a855f7" },
          ].map(({ value, label, color }) => (
            <div key={label} className="glass rounded-2xl border border-white/10 p-5 text-center">
              <p className="text-3xl font-bold mb-1" style={{ color }}>{value}</p>
              <p className="text-white/85 font-medium text-sm">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#10b981,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Competition Overview</h2>
        <div className="glass rounded-2xl border border-white/10 p-6">
          <p className="text-white/90 font-medium leading-relaxed">
            This CTF (Capture The Flag) competition was held as the final exam for the Ethical Hacking course at President University. Teams competed to solve a series of security challenges across multiple categories, with each solved challenge awarding points toward the final ranking.
          </p>
          <p className="text-white/90 font-medium leading-relaxed mt-4">
            Our team <span className="text-white font-bold">&quot;Bakso Intel Khas BIN&quot;</span> finished <span className="text-emerald-400 font-bold">10th out of 38 teams</span>, placing us in the top 27% of all competitors.
          </p>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#10b981,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Challenge Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl border border-white/10 p-5 hover:border-emerald-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center mb-3">
                <Icon size={16} className="text-emerald-400" />
              </div>
              <h4 className="font-bold mb-1 text-sm">{title}</h4>
              <p className="text-white/85 font-medium text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tools Used */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#10b981,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tools Used</h2>
        <div className="flex flex-wrap gap-3">
          {["Nmap", "Burp Suite", "Metasploit", "CyberChef"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 glass border border-white/10 rounded-xl text-sm font-mono text-white/90 hover:border-emerald-500/40 hover:text-emerald-400 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </ProjectLayout>
  );
}