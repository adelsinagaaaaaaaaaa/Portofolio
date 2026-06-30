"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const PROJECTS = [
  {
    slug: "glovade",
    title: "Glovade Library Management",
    description: "A full-stack library management system built with Laravel, featuring book catalog, member management, borrowing system, and admin dashboard.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    color: "#0070f3",
    badge: "Web App",
    year: "2025",
    image: "/images/glovade.jpg",
    role: "Developer",
  },
  {
    slug: "fortune",
    title: "Fortune Company Profile",
    description: "A modern company profile website for Fortune, showcasing services, team members, and projects with a clean dark aesthetic.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    color: "#f59e0b",
    badge: "Website",
    year: "2024",
    image: "/images/fortune.jpg",
    role: "Developer",
  },
  {
    slug: "before-satan-catch-you",
    title: "Before Satan Catch You",
    description: "A horror multiplayer Roblox game with chapter-based storyline, immersive gameplay mechanics, and team-developed assets.",
    tags: ["Roblox", "Lua", "Game Dev", "Multiplayer"],
    color: "#ef4444",
    badge: "Game",
    year: "2025",
    image: "/images/before-satan.jpg",
    role: "Administration",
  },
  {
    slug: "ctf-ethical-hacking",
    title: "CTF — Ethical Hacking",
    description: "Competed in a university CTF (Capture The Flag) final exam competition focused on ethical hacking, finishing 10th out of 38 teams.",
    tags: ["Cybersecurity", "CTF", "Ethical Hacking", "Networking"],
    color: "#10b981",
    badge: "Competition",
    year: "2025",
    image: "/images/CTF.jpg",
    role: "Competitor",
  },
  {
    slug: "recreo",
    title: "ReCreo — Social Project",
    description: "A social impact project where we visited schools to socialize about proper waste recycling. Led documentation and administrative coordination as Secretary.",
    tags: ["Social Project", "Education", "Environment"],
    color: "#a855f7",
    badge: "Social",
    year: "2025",
    image: "/images/recreo.jpg",
    role: "Secretary",
  },
  {
    slug: "ctf-digital-forensic",
    title: "CTF — Digital Forensic",
    description: "University CTF competition focused on digital forensics, analyzing digital evidence, file recovery, and forensic investigation techniques.",
    tags: ["Digital Forensics", "CTF", "Cybersecurity"],
    color: "#00d4ff",
    badge: "Competition",
    year: "2026",
    image: "/images/CTF.jpg",
    role: "Competitor",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050508] dark:bg-[#050508]">
      <Navbar />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">My <span className="gradient-text">Projects</span></h1>
            <p className="text-white/85 font-medium max-w-xl mx-auto">A curated collection of projects — from web apps and games to competitions and social impact.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(({ slug, title, description, tags, color, badge, year, image, role }, i) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link href={`/projects/${slug}`}>
                  <div className="glass rounded-2xl border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="h-44 relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                      {image ? (
                        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl font-bold opacity-20" style={{ color }}>{title[0]}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-mono font-semibold border"
                        style={{ color, borderColor: `${color}50`, background: `${color}20` }}>
                        {badge}
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-mono text-white/70 glass border border-white/10">
                        {year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold group-hover:text-blue-300 transition-colors leading-tight">{title}</h3>
                      </div>
                      <p className="text-white/85 font-medium text-sm leading-relaxed mb-3 flex-1">{description}</p>
                      {/* Role badge */}
                      <div className="mb-3">
                        <span className="text-xs font-mono px-2 py-1 rounded-md" style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}>
                          Role: {role}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-xs font-mono glass border border-white/10 rounded-md text-white/75">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-semibold" style={{ color }}>
                        <span>View Project</span>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}