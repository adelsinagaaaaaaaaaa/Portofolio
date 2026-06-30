"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  Code2,
  Layers,
  Users,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = from;
    const step = (to - from) / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const STATS = [
  {
    icon: Code2,
    label: "Projects Completed",
    value: 6,
    suffix: "+",
    color: "#0070f3",
  },
  {
    icon: Layers,
    label: "Technologies Learned",
    value: 14,
    suffix: "+",
    color: "#a855f7",
  },
  {
    icon: Calendar,
    label: "Events Organized",
    value: 3,
    suffix: "+",
    color: "#00d4ff",
  },
  {
    icon: Users,
    label: "Team Collaborations",
    value: 6,
    suffix: "+",
    color: "#10b981",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsLight(
        document.documentElement.getAttribute("data-theme") === "light"
      );

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050508]">
      <Navbar />

      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
              Who I Am
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
              About <span className="gradient-text">Me</span>
            </h1>

            <p className="font-medium text-white/75 max-w-xl mx-auto">
              An Information Technology student who enjoys learning, building,
              and creating digital solutions through real projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 md:w-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-[80px] scale-110" />

                <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/photo.jpg"
                    alt="Adel Septiana Sinaga"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div className="absolute bottom-4 right-4 z-20">
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                      style={{
                        background: "rgba(0,0,0,0.75)",
                        backdropFilter: "blur(12px)",
                        borderColor: "rgba(34,211,238,0.5)",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />

                      <span className="open-to-work-text">
                        OPEN TO WORK
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="glass rounded-2xl border border-white/8 p-6">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Code2 size={12} className="text-blue-400" />
                  </span>
                  About Me
                </h2>

                <p className="text-[#d4d4d4] font-medium leading-relaxed text-sm">
                  Hi! I'm{" "}
                  <span className="font-bold text-white">
                    Adel Septiana Sinaga
                  </span>
                  , an Information Technology student at President University.
                  I enjoy learning new technologies and building websites or
                  applications that solve real problems. Most of my experience
                  comes from university projects, personal projects, and working
                  together with teammates in campus organizations.
                </p>

                <p className="text-[#d4d4d4] font-medium leading-relaxed text-sm mt-3">
                  Outside of coding, I like joining organizations and events
                  because they help me improve my communication, teamwork, and
                  leadership skills. I believe that being a good developer is
                  not only about writing code, but also about collaborating with
                  others, solving problems, and always being willing to learn.
                </p>
              </div>
                            <div className="glass rounded-2xl border border-white/8 p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <GraduationCap size={12} className="text-purple-400" />
                  </span>
                  Education
                </h2>

                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full flex-shrink-0" />

                  <div>
                    <p className="font-semibold">
                      President University
                    </p>

                    <p className="text-blue-400 text-sm">
                      Bachelor of Information Technology
                    </p>

                    <p className="font-medium text-white/75 text-xs mt-1">
                      2024 — Present
                    </p>

                    {/* <p className="font-medium text-white/85 text-sm mt-2 leading-relaxed">
                      Currently pursuing a Bachelor's degree in Information Technology,
                      with a focus on software development, web development, databases,
                      and networking.
                    </p>  */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          >
            {STATS.map(({ icon: Icon, label, value, suffix, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-2xl border border-white/8 p-6 text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                    <Icon size={18} style={{ color }} />
                  </div>
                </div>

                <div
                  className="text-4xl font-bold mb-1"
                  style={{ color }}
                >
                  <Counter from={0} to={value} />
                  {suffix}
                </div>

                <p className="font-medium text-white/75 text-xs">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}