"use client";

import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  // Interactive Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="glass-card p-6 md:p-12 rounded-3xl md:rounded-[4rem] border border-white/5 group relative cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(80px)" }}
        className="aspect-video bg-primary/20 rounded-2xl md:rounded-[3rem] overflow-hidden mb-8 md:mb-12 border border-white/10 relative shadow-2xl"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group transition-all duration-1000 ease-out group-hover:scale-105"
        />

        {/* Interaction Layer */}
        <div className="absolute inset-0 bg-background-main/80 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center gap-10 z-20">
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: "var(--foreground)", color: "var(--background)" }}
            className="p-6 bg-white/5 backdrop-blur-3xl text-text-primary rounded-3xl border border-white/10 shadow-2xl transition-all"
          >
            <GithubIcon className="w-8 h-8" />
          </motion.a>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "#fff" }}
            className="p-6 bg-accent/20 backdrop-blur-3xl text-accent rounded-3xl border border-accent/20 shadow-2xl transition-all"
          >
            <ExternalLink className="w-8 h-8" />
          </motion.a>
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter text-gradient group-hover:text-accent transition-colors italic">
          {project.title}
        </h3>
        <p className="text-text-secondary text-base md:text-xl mb-10 md:mb-12 leading-relaxed font-medium opacity-80">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-10 md:mb-16">
          {project.tags.map(tag => (
            <span key={tag} className="px-6 py-2.5 bg-secondary/20 text-accent rounded-full text-[10px] font-black border border-accent/10 tracking-[0.4em] uppercase transition-all group-hover:border-accent/40">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "Digital Book Library",
      description: "A full-stack online book store that enables users to discover, search, and borrow books with a seamless and responsive user experience.",
      tags: ["Next.js", "JS", "Tailwind", "MongoDB"],
      image: "/home.png",
      repo: "https://github.com/Kabya55/Digital-Book-Library",
      link: "https://digital-book-library-five.vercel.app"
    },
    {
      title: "Dragon News",
      description: " a full stack website for the news website ",
      tags: ["Next.js", "JS", "Tailwind", "MongoDB"],
      image: "/dragon-news.png",
      repo: "https://github.com/Kabya55/Programming-Hero-13/tree/main/Modul-46-dragon-news-next",
      link: "https://programming-hero-13-ztsh.vercel.app/category/08"
    },
    {
      title: "PixGen AI",
      description: "A full stack website for the AI image generation website ",
      tags: ["Next.js", "JS", "Tailwind", "MongoDB"],
      image: "/pixgen-next.png",
      repo: "https://github.com/Kabya55/Programming-Hero-13/tree/main/pixgen-next",
      link: "https://programming-hero-13-sltu.vercel.app/"
    },
    {
      title: "Kin-Keeper",
      description: "Enterprise-level project management tool with AI-driven insights and automated workflow integrations.",
      tags: ["React", "JS", "Tailwind", "daisyUI"],
      image: "/Kin-Keeper.png",
      repo: "https://github.com/Kabya55/Programming-Hero-13/tree/main/Assinment-7",
      link: "https://kin-keeper-zeta.vercel.app"
    }
  ];

  return (
    <section className="py-20 md:py-40 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-40"
        >
          <h2 className="text-5xl md:text-[8.5rem] font-black mb-10 tracking-tighter italic text-gradient pr-10 pb-2 leading-tight">
            Recent Projects
          </h2>
          <p className="text-text-secondary text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
            Here are some of the real-world projects I have worked on.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
