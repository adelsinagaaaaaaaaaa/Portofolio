"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

const FLOATING_ICONS = [
  { Icon: Code2, color: "#0070f3", x: "78%", y: "12%", delay: 0 },
  { Icon: Database, color: "#a855f7", x: "83%", y: "38%", delay: 0.5 },
  { Icon: Globe, color: "#00d4ff", x: "70%", y: "62%", delay: 1 },
  { Icon: Cpu, color: "#f59e0b", x: "88%", y: "68%", delay: 1.5 },
  { Icon: GitBranch, color: "#10b981", x: "92%", y: "28%", delay: 0.8 },
  { Icon: Layers, color: "#ec4899", x: "74%", y: "82%", delay: 1.2 },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <div
          ref={containerRef}
          className="min-h-screen bg-[#050508] relative overflow-hidden"
        >
          <Navbar />

          {/* Mouse glow */}
          <div
            className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,112,243,0.05), transparent 40%)`,
            }}
          />

          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-20 min-h-[calc(100vh+120px)] flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[75vh]">
                {/* LEFT */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 w-fit mb-6"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow" />
                    <span className="text-xs text-[#c0c0c0] font-semibold font-mono">
                      Available for Internship
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#c8c8c8] font-medium text-lg mb-2"
                  >
                    Hello, I&apos;m
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                  >
                    <span className="gradient-text">Adel</span>
                    <br />
                    <span className="text-white">Sinaga</span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                    <span className="text-lg md:text-xl text-blue-300 font-semibold">
                      Information Technology Student
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-[#c8c8c8] font-medium text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                  >
                    Passionate about{" "}
                    <span className="text-white font-semibold">
                      Software Development
                    </span>
                    ,{" "}
                    <span className="text-white font-semibold">
                      Web Development
                    </span>
                    ,{" "}
                    <span className="text-white font-semibold">
                      Database Systems
                    </span>
                    , and Building Digital Solutions.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      href="/projects"
                      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-200 glow-blue"
                    >
                      View Projects
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <a
                      href="/cv-adel-sinaga.pdf"
                      download
                      className="flex items-center gap-2 px-6 py-3 glass border border-white/10 rounded-xl font-bold text-sm text-white/90 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                    >
                      <Download size={16} />
                      Download CV
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-6 py-3 glass border border-white/10 rounded-xl font-bold text-sm text-white/90 hover:text-white hover:border-purple-500/50 transition-all duration-200"
                    >
                      <Mail size={16} />
                      Contact Me
                    </Link>
                  </motion.div>
                </motion.div>

                {/* RIGHT — Profile Photo */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative flex items-center justify-center"
                >
                  {FLOATING_ICONS.map(({ Icon, color, x, y, delay }, i) => (
                    <motion.div
                      key={i}
                      className="absolute hidden lg:flex items-center justify-center w-10 h-10 glass rounded-xl border border-white/10"
                      style={{ left: x, top: y }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 3 + delay,
                        repeat: Infinity,
                        delay,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon size={18} style={{ color }} />
                    </motion.div>
                  ))}

                  <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl" />
                    <motion.div
                      className="absolute -inset-4 rounded-full border border-blue-500/20"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute -inset-8 rounded-full border border-purple-500/10"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="relative w-full h-full rounded-full glass-strong border-2 border-white/10 overflow-hidden glow-blue">
                      <Image
                        src="/images/photo.jpg"
                        alt="Adel Sinaga"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
