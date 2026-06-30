"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Code2, Heart } from "lucide-react";

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/adelsinagaaaaaaaaaa",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adel-septiana-sinaga-450981325",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/ad.elsng",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Logo + name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 size={14} className="text-white" />
              </div>
              <span className="font-bold text-sm gradient-text font-mono">
                adel.dev
              </span>
            </Link>
            <span className="text-white/20 text-sm">·</span>
            <span className="text-xs text-white/40 font-mono">
              © 2025 Adel Septiana Sinaga
            </span>
          </div>

          {/* Center: Available badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow" />
            <span className="text-xs text-green-400 font-semibold">
              Available for Internship
            </span>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:text-white text-white/60 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
