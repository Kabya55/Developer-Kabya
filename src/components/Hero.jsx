"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const headlineRef = useRef(null);
  const containerRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // Statistic count-up with ScrollTrigger
    statsRef.current.forEach((stat) => {
      if (!stat) return;
      const target = parseInt(stat.getAttribute("data-target"));
      const suffix = stat.getAttribute("data-suffix") || "";

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 3,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 95%",
          },
          onUpdate: function () {
            stat.innerText =
              Math.floor(this.targets()[0].innerText).toLocaleString() + suffix;
          },
        },
      );
    });
  }, []);

  const stats = [
    { label: "Hours of Code", target: 10, suffix: "k+" },
    { label: "Global Clients", target: 10, suffix: "+" },
    { label: "Live Projects", target: 40, suffix: "+" },
    { label: "Exp. Years", target: 1, suffix: "+" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-48 pb-20 overflow-visible grid grid-cols-1 items-center"
    >
      {/* Space-Themed Nebula Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#462C7D]/20 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#831C91]/15 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Narrative Column */}
        <div className="lg:col-span-7 z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-8 p-1.5 px-5 glass rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <p className="text-text-primary text-[10px] font-black uppercase tracking-[0.5em] glow-text">
              Architecture & Interaction
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-[7.5rem] font-black leading-[1] mb-20 text-gradient italic tracking-tighter pr-6 pb-4"
          >
            Hi, I'm Kabya <br /> I'm a Web Developer.
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-text-secondary text-2xl max-w-xl mb-14 leading-relaxed font-medium"
          >
            Transforming complex systems into <span className="text-text-primary glow-text italic">high-performance digital products</span> with technical precision and artistic intuition.
          </motion.p> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-10 py-6 rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl border border-white/5"
            >
              Start Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-10 py-6 rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.3em] border border-white/10 transition-all text-text-primary"
            >
              The Story
            </motion.button>
          </motion.div> */}
        </div>

        {/* Visual Composition */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end mt-20 lg:mt-0">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-full p-2 bg-gradient-to-br from-accent/20 to-transparent shadow-2xl glow-accent group"
          >
            <div className="w-full h-full rounded-full overflow-hidden glass relative">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
              <Image
                alt="Leo Carter Visualization"
                className="w-full h-full object-cover group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                src="/Kabya.png"
                width={500}
                height={500}
                priority
              />
            </div>

            {/* Stat Overlay Cards - Optimized for Mobile */}
            <div className="absolute inset-0 pointer-events-none">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + i * 0.1 }}
                  className={`absolute glass p-5 md:p-7 rounded-[2.5rem] md:rounded-[3rem] min-w-[130px] md:min-w-[160px] shadow-2xl pointer-events-auto border border-white/5 ${
                    i === 0
                      ? "-top-10 md:-top-12 -left-4 md:-left-12"
                      : i === 1
                        ? "top-16 md:top-24 -right-4 md:-right-16"
                        : i === 2
                          ? "bottom-16 md:bottom-20 -left-6 md:-left-20"
                          : "-bottom-10 md:-bottom-12 right-6 md:right-12"
                  }`}
                >
                  <div
                    ref={(el) => (statsRef.current[i] = el)}
                    data-target={stat.target}
                    data-suffix={stat.suffix}
                    className="text-2xl md:text-4xl font-black text-accent mb-1 tracking-tighter"
                  >
                    0
                  </div>
                  <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary opacity-60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
