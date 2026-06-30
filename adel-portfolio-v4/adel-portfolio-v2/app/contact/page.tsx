"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

const SOCIAL = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@adelsinagaaaaaaaaaa",
    href: "https://github.com/adelsinagaaaaaaaaaa",
    color: "#e0e0e0",
    bg: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.15)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Adel Septiana Sinaga",
    href: "https://www.linkedin.com/in/adel-septiana-sinaga-450981325",
    color: "#0077b5",
    bg: "rgba(0,119,181,0.12)",
    border: "rgba(0,119,181,0.3)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@ad.elsng",
    href: "https://instagram.com/ad.elsng",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.12)",
    border: "rgba(225,48,108,0.3)",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="font-medium max-w-xl mx-auto text-white/85">
              Have a project in mind or want to discuss an opportunity? Reach
              out through any of the channels below.
            </p>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full border border-green-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-sm font-semibold text-green-400">
                Open for Internship Opportunities
              </span>
            </div>
          </motion.div>

          {/* Contact & Socials — 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3 text-center">
              Contact & Socials
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* Email */}
              <motion.a
                href="mailto:adelsinaga44@gmail.com"
                whileHover={{ y: -3 }}
                className="glass rounded-2xl border border-white/10 p-5 flex items-center gap-4 hover:border-blue-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                    adelsinaga44@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Socials */}
              {SOCIAL.map(
                ({ icon: Icon, label, handle, href, color, bg, border }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="glass rounded-2xl border border-white/10 p-5 flex items-center gap-4 transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: bg, border: `1px solid ${border}` }}
                    >
                      <Icon size={22} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      <p className="font-semibold text-sm group-hover:text-white transition-colors">
                        {handle}
                      </p>
                    </div>
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}