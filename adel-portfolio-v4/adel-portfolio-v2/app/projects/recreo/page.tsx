"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Users, FileText, Heart, Megaphone, School } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const ACTIVITIES = [
  { icon: School, title: "School Visits", desc: "Visited multiple schools to directly engage students with hands-on waste recycling workshops." },
  { icon: Leaf, title: "Recycling Education", desc: "Taught proper waste sorting, recycling techniques, and environmental impact awareness." },
  { icon: Megaphone, title: "Socialization Campaign", desc: "Delivered presentations and interactive sessions on sustainable living practices." },
  { icon: Users, title: "Community Engagement", desc: "Built connections with school communities to create lasting environmental awareness." },
  { icon: Heart, title: "Social Impact", desc: "Directly impacted hundreds of students with practical environmental education." },
  { icon: FileText, title: "Documentation", desc: "Produced comprehensive reports, meeting minutes, and project progress documentation." },
];

export default function RecreoPage() {
  return (
    <ProjectLayout
      slug="recreo"
      title="ReCreo — Social Project"
      subtitle="A social impact initiative bringing proper waste recycling education directly to schools, inspiring the next generation toward sustainable practices."
      tags={["Social Project", "Education", "Environment", "Community"]}
      color="#a855f7"
      gradient="from-purple-900/60 via-[#050508] to-[#050508]"
      instagramUrl="https://www.instagram.com/recreo.group/"
      githubUrl="https://github.com/laurentindra/recreogroup"
    >
      {/* Photo */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden border border-white/10">
          <Image src="/images/recreo.jpg" alt="ReCreo Social Project" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 to-transparent" />
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#a855f7,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>About ReCreo</h2>
        <div className="glass rounded-2xl border border-white/10 p-6">
          <p className="text-white/90 font-medium leading-relaxed">
            <span className="text-white font-bold">ReCreo</span> is a student-led social project from President University with the mission: <em>&quot;Bersama ReCreo, Buat Dunia Lebih Kreatif!&quot;</em> (Together with ReCreo, Make the World More Creative!). The project focuses on socializing proper waste recycling practices to school students across the region.
          </p>
          <p className="text-white/90 font-medium leading-relaxed mt-4">
            As <span className="text-white font-bold">Secretary</span>, I managed all administrative operations — from drafting official correspondence and recording meeting minutes to coordinating logistics for school visits and producing post-event reports.
          </p>
        </div>
      </motion.div>

      {/* Impact stats */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "1", label: "Schools Visited", color: "#a855f7" },
            { value: "50+", label: "Students Reached", color: "#10b981" },
            { value: "1", label: "Social Impact Event", color: "#3b82f6" },
          ].map(({ value, label, color }) => (
            <div key={label} className="glass rounded-2xl border border-white/10 p-5 text-center">
              <p className="text-3xl font-bold mb-1" style={{ color }}>{value}</p>
              <p className="text-white/85 font-medium text-sm">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#a855f7,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Activities & Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVITIES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl border border-white/10 p-5 hover:border-purple-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center mb-3">
                <Icon size={16} className="text-purple-400" />
              </div>
              <h4 className="font-bold mb-1 text-sm">{title}</h4>
              <p className="text-white/85 font-medium text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl font-bold mb-6" style={{ background: "linear-gradient(135deg,#a855f7,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>My Role as Secretary</h2>
        <div className="glass rounded-2xl border border-white/10 p-6">
          <ul className="space-y-3">
            {["Drafted and managed all official project documents and correspondence", "Recorded detailed meeting minutes for all project planning sessions", "Coordinated logistics and scheduling for school visit activities", "Produced comprehensive post-event reports and impact assessments", "Maintained organized archives of all project materials and communications"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90 font-medium text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </ProjectLayout>
  );
}
