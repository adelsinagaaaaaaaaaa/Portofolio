"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    applyTheme(isDark);
    setDark(isDark);
  }, []);

  const applyTheme = (isDark: boolean) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isDark ? "dark" : "light");

    // Force background color on body and all dark bg elements
    document.body.style.backgroundColor = isDark ? "#050508" : "#f8f9fa";
    document.body.style.color = isDark ? "#e8e8e8" : "#111111";

    // Also update all elements with hardcoded dark bg
    const darkBgEls = document.querySelectorAll('[class*="bg-[#050508]"]');
    darkBgEls.forEach((el) => {
      (el as HTMLElement).style.backgroundColor = isDark
        ? "#050508"
        : "#f8f9fa";
    });
  };

  const toggle = () => {
    const next = !dark;
    setDark(next);
    applyTheme(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center shadow-lg hover:border-white/30 transition-all"
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {dark ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
