"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ghost, Users, BookOpen, Star, FileText, Gamepad2 } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const FEATURES = [
  { icon: Ghost, title: "Horror Atmosphere", desc: "Immersive horror environment with dynamic lighting and eerie sound design." },
  { icon: Users, title: "Multiplayer Mode", desc: "Co-op multiplayer supporting multiple players simultaneously on Roblox." },
  { icon: BookOpen, title: "Chapter System", desc: "Multiple chapters with evolving storylines and escalating challenges." },
  { icon: Star, title: "Achievement System", desc: "Unlockable achievements and collectibles rewarding thorough exploration." },
  { icon: Gamepad2, title: "Interactive Gameplay", desc: "Puzzle-solving mechanics, inventory system, and character progression." },
  { icon: FileText, title: "Documentation", desc: "Complete game design documents, asset lists, and development logs." },
];

const CHAPTERS = ["The Awakening", "Shadows of Deceit", "The Lost Sanctuary", "Final Reckoning"];

export default function BeforeSatanPage() {
  return (
    <ProjectLayout
      slug="before-satan-catch-you"
      title="Before Satan Catch You"
      subtitle="A horror multiplayer Roblox game with a chapter-based storyline, immersive gameplay mechanics, and team-developed art assets."
      tags={["Roblox", "Lua", "Game Dev", "Multiplayer", "Horror"]}
      color="#ef4444"
      gradient="from-red-900/60 via-[#050508] to-[#050508]"
      instagramUrl="https://www.instagram.com/tripleeights_studio/"
    >
      {/* Screenshot */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/images/before-satan.jpg" alt="Before Satan Catch You" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 to-transparent" />
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>The Story</h2>
        <div className="glass rounded-2xl border border-red-500/20 p-6">
          <p className="text-white/90 font-medium leading-relaxed">
            <em>&quot;Before Satan Catch You&quot;</em> is a horror survival game on <span className="text-white font-bold">Roblox</span> where players are trapped in a cursed world between reality and the underworld. Players must solve puzzles, uncover dark secrets, and survive before the supernatural entity catches them.
          </p>
          <p className="text-white/90 font-medium leading-relaxed mt-4">
            This was developed by <span className="text-white font-bold">Triple Eights Studio</span>. My role as <span className="text-white font-bold">Administration</span> covered documentation management, team coordination, development tracking, and asset organization across all production phases.
          </p>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Gameplay Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl border border-white/10 p-5 hover:border-red-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center mb-3">
                <Icon size={16} className="text-red-400" />
              </div>
              <h4 className="font-bold mb-1 text-sm">{title}</h4>
              <p className="text-white/85 font-medium text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Chapter Overview</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {CHAPTERS.map((chapter, i) => (
            <div key={chapter} className="glass rounded-xl border border-white/10 p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <p className="font-bold text-sm">{chapter}</p>
                <p className="text-white/75 text-xs">Chapter {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>My Contributions</h2>
        <div className="glass rounded-2xl border border-white/10 p-6">
          <ul className="space-y-3">
            {["Managed all project documentation including design docs, asset lists, and changelogs", "Coordinated team workflows and task assignments across development phases", "Tracked development milestones and maintained progress reports", "Handled communication between team members and organized meeting notes", "Organized asset pipeline and naming conventions for all game resources"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90 font-medium text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </ProjectLayout>
  );
}
