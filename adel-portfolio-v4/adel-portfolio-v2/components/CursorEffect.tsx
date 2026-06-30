"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let id = 0;
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      setTrail((prev) => [
        { x: e.clientX, y: e.clientY, id: id++ },
        ...prev.slice(0, 6),
      ]);
    };
    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed pointer-events-none z-[9998]"
            animate={{ x: pos.x - 6, y: pos.y - 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
          >
            <div className="w-3 h-3 rounded-full bg-blue-400 opacity-90" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailing dots */}
      {visible && trail.map((t, i) => (
        <motion.div
          key={t.id}
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: t.x - 3,
            top: t.y - 3,
            width: 6 - i * 0.5,
            height: 6 - i * 0.5,
            backgroundColor: i < 2 ? "#00d4ff" : i < 4 ? "#0070f3" : "#a855f7",
            opacity: 0.6 - i * 0.08,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
        />
      ))}
    </>
  );
}
