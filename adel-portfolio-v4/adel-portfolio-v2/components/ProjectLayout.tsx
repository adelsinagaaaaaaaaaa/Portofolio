"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Github,
  ExternalLink,
  Instagram,
} from "lucide-react";
import Navbar from "./Navbar";

const ALL_PROJECTS = [
  { slug: "glovade", title: "Glovade Library Management" },
  { slug: "fortune", title: "Fortune Company Profile" },
  { slug: "before-satan-catch-you", title: "Before Satan Catch You" },
  { slug: "ctf-ethical-hacking", title: "CTF — Ethical Hacking" },
  { slug: "recreo", title: "ReCreo Social Project" },
  { slug: "ctf-digital-forensic", title: "CTF — Digital Forensic" },
];

interface ProjectLayoutProps {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  color: string;
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
  instagramUrl?: string;
  children: React.ReactNode;
}

export default function ProjectLayout({
  slug,
  title,
  subtitle,
  tags,
  color,
  gradient,
  githubUrl,
  demoUrl,
  instagramUrl,
  children,
}: ProjectLayoutProps) {
  const idx = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? ALL_PROJECTS[idx - 1] : null;
  const next = idx < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[idx + 1] : null;

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsLight(
        document.documentElement.getAttribute("data-theme") === "light",
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const bgPage = isLight ? "#ffffff" : "#050508";
  const textMain = "#ffffff";
  const textSub = "rgba(255,255,255,0.92)";
  const shadow = "0 2px 10px rgba(0,0,0,0.8)";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: bgPage }}>
      <Navbar />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Hero — always uses gradient color, never black */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Gradient background dari warna project */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${color}40 0%, ${color}15 50%, transparent 100%)`,
          }}
        />
        {/* Subtle dark overlay hanya supaya teks terbaca */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.25)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors group font-semibold"
              style={{ color: textMain, textShadow: shadow }}
            >
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-full"
                  style={{
                    color: textMain,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    textShadow: shadow,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ color: textMain, textShadow: shadow }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="font-medium text-lg max-w-2xl mb-8"
              style={{ color: textSub, textShadow: shadow }}
            >
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all"
                  style={{
                    color: textMain,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <Github size={16} /> View on GitHub
                </a>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all"
                  style={{
                    color: textMain,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <Instagram size={16} /> Instagram
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: `${color}40`,
                    border: `1px solid ${color}80`,
                    color,
                  }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>

      {/* Prev / Next */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="border-t pt-8 grid grid-cols-2 gap-4"
          style={{
            borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
          }}
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="glass rounded-xl p-4 group transition-all hover:border-white/25"
            >
              <p
                className="text-xs mb-1 flex items-center gap-1"
                style={{ color: isLight ? "#666" : "rgba(255,255,255,0.75)" }}
              >
                <ArrowLeft size={12} />
                Previous
              </p>
              <p className="text-sm font-semibold group-hover:text-blue-400 transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="glass rounded-xl p-4 text-right group transition-all hover:border-white/25"
            >
              <p
                className="text-xs mb-1 flex items-center justify-end gap-1"
                style={{ color: isLight ? "#666" : "rgba(255,255,255,0.75)" }}
              >
                Next
                <ArrowRight size={12} />
              </p>
              <p className="text-sm font-semibold group-hover:text-blue-400 transition-colors">
                {next.title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
