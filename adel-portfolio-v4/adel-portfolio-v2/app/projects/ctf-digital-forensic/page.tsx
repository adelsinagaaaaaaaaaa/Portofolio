"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  HardDrive,
  Search,
  FileSearch,
  Database,
  Shield,
  Terminal,
} from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CATEGORIES = [
  {
    icon: HardDrive,
    title: "Disk Forensics",
    desc: "Analyzed disk images to recover deleted files and uncover hidden partitions.",
  },
  {
    icon: FileSearch,
    title: "File Analysis",
    desc: "Examined file metadata, timestamps, and embedded data for forensic evidence.",
  },
  {
    icon: Search,
    title: "Memory Forensics",
    desc: "Analyzed memory dumps to extract running processes and network connections.",
  },
  {
    icon: Database,
    title: "Log Analysis",
    desc: "Investigated system and application logs to reconstruct events and timelines.",
  },
  {
    icon: Terminal,
    title: "Steganography",
    desc: "Detected and extracted data hidden within image, audio, and video files.",
  },
  {
    icon: Shield,
    title: "Network Forensics",
    desc: "Analyzed packet captures to identify suspicious activity and recover data.",
  },
];

export default function CTFDigitalForensicPage() {
  return (
    <ProjectLayout
      slug="ctf-digital-forensic"
      title="CTF — Digital Forensic"
      subtitle="University Digital Forensics CTF competition. Competed under the team name 'C I O ayam tiren', achieving 3rd place by solving digital investigation challenges involving forensic analysis, evidence recovery, and cyber investigations."
      tags={[
        "Digital Forensics",
        "CTF",
        "Cybersecurity",
        "Investigation",
        "Competition",
      ]}
      color="#00d4ff"
      gradient="from-cyan-900/60 via-[#050508] to-[#050508]"
    >
      {/* Hero Banner */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12"
      >
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-cyan-500/20">
          <Image
            src="/images/ctf-digfor.jpeg"
            alt="CTF Digital Forensic"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 to-transparent" />
        </div>
      </motion.div>

      {/* Result Highlight */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12"
      >
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              value: "3rd",
              label: "Final Ranking",
              color: "#00d4ff",
            },
            {
              value: "C I O ayam tiren",
              label: "Team Name",
              color: "#a855f7",
            },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="glass rounded-2xl border border-white/10 p-5 text-center"
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{ color }}
              >
                {value}
              </p>

              <p className="text-white/85 font-medium text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Competition Overview */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12"
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            background:
              "linear-gradient(135deg,#00d4ff,#38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Competition Overview
        </h2>

        <div className="glass rounded-2xl border border-white/10 p-6">
          <p className="text-white/90 font-medium leading-relaxed">
            This Capture The Flag (CTF) competition was held as the final
            examination for the Digital Forensics course at President
            University. Participants investigated simulated cyber incidents
            by recovering deleted evidence, analyzing memory dumps,
            examining network traffic, and solving various forensic
            challenges within a limited time.
          </p>

          <p className="text-white/90 font-medium leading-relaxed mt-4">
            Competing under the team name{" "}
            <span className="font-bold text-cyan-400">
              "C I O ayam tiren"
            </span>
            , our team successfully secured{" "}
            <span className="font-bold text-cyan-400">
              3rd Place
            </span>
            . The competition strengthened our practical skills in digital
            evidence analysis, forensic investigation, teamwork, and
            analytical problem-solving under pressure.
          </p>
        </div>
      </motion.div>

      {/* Forensic Categories */}
            <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12"
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            background: "linear-gradient(135deg,#00d4ff,#38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Forensic Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-600/15 border border-cyan-500/30 flex items-center justify-center mb-3">
                <Icon size={16} className="text-cyan-400" />
              </div>

              <h4 className="font-bold mb-1 text-sm">
                {title}
              </h4>

              <p className="text-white/85 font-medium text-xs leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Demonstrated */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12"
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            background: "linear-gradient(135deg,#00d4ff,#38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Skills Demonstrated
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Digital Evidence Analysis",
            "Incident Investigation",
            "Memory Analysis",
            "Network Traffic Analysis",
            "Disk Image Analysis",
            "File Recovery",
            "Timeline Reconstruction",
            "Problem Solving",
            "Critical Thinking",
            "Team Collaboration",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 glass border border-white/10 rounded-xl text-sm font-medium text-white/90 hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tools Used */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            background: "linear-gradient(135deg,#00d4ff,#38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tools Used
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Autopsy",
            "Wireshark",
            "Volatility",
            "FTK Imager",
            "Binwalk",
            "ExifTool",
            "Steghide",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 glass border border-white/10 rounded-xl text-sm font-mono text-white/90 hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </ProjectLayout>
  );
}