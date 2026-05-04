"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const orbitRef = useRef(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const icons = orbitRef.current.children;
    const totalIcons = icons.length;
    const radius = window.innerWidth < 768 ? 160 : 340;

    // Orbital mechanics
    gsap.set(icons, {
      x: (i) => Math.cos((i / totalIcons) * Math.PI * 2) * radius,
      y: (i) => Math.sin((i / totalIcons) * Math.PI * 2) * radius,
    });

    const orbitTl = gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none",
    });

    gsap.to(icons, {
      rotation: -360,
      duration: 120,
      repeat: -1,
      ease: "none",
    });

    return () => {
      orbitTl.kill();
    };
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "TailwindCss", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "ExpressJs", icon: <SiExpress className="text-foreground" /> },
    { name: "NodeJs", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  ];

  return (
    <section className="py-40 relative overflow-hidden" id="skills">
      {/* Theme-aware background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/5 blur-[200px] rounded-full pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-[9rem] font-black mb-12 tracking-tighter italic text-gradient pr-10 pb-6 leading-tight">Skills & Technologies</h2>
          <p className="text-text-secondary max-w-3xl mx-auto mb-40 text-2xl leading-relaxed font-medium opacity-80">
            Built with <span className="text-accent glow-text italic">high-performance technology</span> and modern user experience.
          </p>
        </motion.div>

        {/* Orbital System */}
        <div className="relative max-w-5xl mx-auto h-[500px] md:h-[750px] flex items-center justify-center">
          <div ref={orbitRef} className="relative w-full h-full flex items-center justify-center">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.3, backgroundColor: "rgba(var(--accent-rgb), 0.2)", borderColor: "var(--accent)" }}
                className="absolute w-20 h-20 md:w-32 md:h-32 glass rounded-[2rem] md:rounded-[3.5rem] flex items-center justify-center text-4xl md:text-6xl shadow-2xl cursor-pointer group transition-all duration-700"
              >
                <span className="group-hover:drop-shadow-[0_0_25px_var(--glow-color)] transition-all scale-75 md:scale-100">
                  {skill.icon}
                </span>
                <div className="absolute -bottom-20 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[10px] font-black text-accent uppercase tracking-[0.5em] whitespace-nowrap glass px-6 py-3 rounded-2xl shadow-2xl">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Structural Node */}
          <div className="w-48 h-48 md:w-80 md:h-80 bg-accent/10 rounded-[4rem] md:rounded-[7rem] flex items-center justify-center relative z-10 glow-accent border border-accent/20 group backdrop-blur-3xl shadow-2xl">
            <div className="absolute inset-0 bg-accent/5 rounded-[7rem] animate-ping opacity-10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="text-7xl md:text-[10rem] font-black text-accent glow-text tracking-tighter italic"
            >
              M
            </motion.div>

            {/* Constellation Lines */}
            <div className="absolute w-[400px] h-[400px] md:w-[650px] md:h-[650px] border border-accent/5 rounded-full" />
            <div className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] border border-accent/5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
