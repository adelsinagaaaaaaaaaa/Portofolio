"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TYPING_TEXTS = ["Software Developer", "Web Developer", "IT Student"];

const PARTICLES = [
  { x: 76, y: 80, size: 2.5, color: "#3b82f6", delay: 0 },
  { x: 50, y: 30, size: 3.4, color: "#00d4ff", delay: 0.3 },
  { x: 31, y: 6,  size: 2.4, color: "#0070f3", delay: 0.6 },
  { x: 33, y: 29, size: 3.2, color: "#0070f3", delay: 0.9 },
  { x: 8,  y: 13, size: 3.6, color: "#3b82f6", delay: 1.2 },
  { x: 48, y: 19, size: 1.5, color: "#3b82f6", delay: 0.2 },
  { x: 63, y: 20, size: 1.5, color: "#3b82f6", delay: 0.5 },
  { x: 12, y: 54, size: 1.8, color: "#00d4ff", delay: 0.8 },
  { x: 38, y: 61, size: 3.7, color: "#00d4ff", delay: 1.1 },
  { x: 4,  y: 70, size: 2.7, color: "#3b82f6", delay: 1.4 },
  { x: 5,  y: 45, size: 3.0, color: "#3b82f6", delay: 0.1 },
  { x: 95, y: 64, size: 3.8, color: "#3b82f6", delay: 0.4 },
  { x: 96, y: 75, size: 3.3, color: "#00d4ff", delay: 0.7 },
  { x: 82, y: 26, size: 3.9, color: "#0070f3", delay: 1.0 },
  { x: 71, y: 78, size: 3.9, color: "#a855f7", delay: 1.3 },
  { x: 67, y: 13, size: 3.1, color: "#a855f7", delay: 0.15 },
  { x: 80, y: 32, size: 1.3, color: "#00d4ff", delay: 0.45 },
  { x: 34, y: 34, size: 1.3, color: "#3b82f6", delay: 0.75 },
  { x: 7,  y: 21, size: 2.3, color: "#a855f7", delay: 1.05 },
  { x: 82, y: 17, size: 3.3, color: "#0070f3", delay: 1.35 },
];

const MARQUEE_ITEMS = ["Software Developer", "Web Developer", "IT Student", "Laravel", "React", "MySQL", "Python", "UI/UX", "Cybersecurity"];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    const speed = isDeleting ? 60 : 120;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); setTimeout(onComplete, 600); return 100; }
        return prev + 1.2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,112,243,0.15)_0%,_transparent_70%)]" />

      {PARTICLES.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, backgroundColor: p.color }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + p.delay, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Real photo instead of "A" */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, type: "spring" }} className="relative">
          <motion.div className="absolute -inset-4 rounded-full border border-blue-500/30"
            animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute -inset-8 rounded-full border border-purple-500/20"
            animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/50 glow-blue">
            <Image src="/images/photo.jpg" alt="Adel Sinaga" width={80} height={80} className="object-cover w-full h-full" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Adel Sinaga</h1>
          <div className="h-7 flex items-center justify-center gap-1">
            <span className="text-lg text-white/85 font-mono font-medium">{displayText}</span>
            <span className="text-blue-400 font-mono text-xl animate-blink">|</span>
          </div>
        </motion.div>

        {/* Marquee text */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="w-72 overflow-hidden">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="text-xs font-mono text-white/50 px-2 py-1 glass rounded-full border border-white/10 flex-shrink-0">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Progress */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="w-64">
          <div className="flex justify-between text-xs text-white/50 font-mono mb-2">
            <span>Initializing</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
