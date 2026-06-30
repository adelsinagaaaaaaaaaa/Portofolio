"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLES = [
  { x: 5, y: 10, size: 5, color: "#0070f3", duration: 4, delay: 0 },
  { x: 15, y: 70, size: 6, color: "#00d4ff", duration: 5, delay: 0.5 },
  { x: 25, y: 30, size: 5, color: "#a855f7", duration: 6, delay: 1 },
  { x: 35, y: 85, size: 5, color: "#0070f3", duration: 4, delay: 1.5 },
  { x: 45, y: 20, size: 6, color: "#00d4ff", duration: 5, delay: 0.8 },
  { x: 55, y: 60, size: 5, color: "#a855f7", duration: 6, delay: 0.3 },
  { x: 65, y: 40, size: 5, color: "#0070f3", duration: 4, delay: 1.2 },
  { x: 75, y: 80, size: 6, color: "#00d4ff", duration: 5, delay: 0.6 },
  { x: 85, y: 15, size: 5, color: "#a855f7", duration: 6, delay: 1.8 },
  { x: 92, y: 55, size: 5, color: "#0070f3", duration: 4, delay: 0.4 },
  { x: 10, y: 45, size: 5, color: "#00d4ff", duration: 5, delay: 1.1 },
  { x: 20, y: 90, size: 6, color: "#a855f7", duration: 6, delay: 0.7 },
  { x: 30, y: 5, size: 5, color: "#0070f3", duration: 4, delay: 1.4 },
  { x: 40, y: 65, size: 5, color: "#00d4ff", duration: 5, delay: 0.2 },
  { x: 50, y: 35, size: 6, color: "#a855f7", duration: 6, delay: 1.6 },
  { x: 60, y: 75, size: 5, color: "#0070f3", duration: 4, delay: 0.9 },
  { x: 70, y: 25, size: 5, color: "#00d4ff", duration: 5, delay: 1.3 },
  { x: 80, y: 50, size: 6, color: "#a855f7", duration: 6, delay: 0.1 },
  { x: 88, y: 88, size: 5, color: "#0070f3", duration: 4, delay: 1.7 },
  { x: 3, y: 60, size: 5, color: "#00d4ff", duration: 5, delay: 1.0 },
];

export default function ParticlesBackground() {
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

  return (
    // z-[15] — di atas background (z-0) tapi di bawah konten utama (z-20)
    // pointer-events-none supaya tidak ganggu klik
    <div className="fixed inset-0 pointer-events-none z-[15] overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}40`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: isLight ? [0.5, 0.9, 0.5] : [0.4, 0.75, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
