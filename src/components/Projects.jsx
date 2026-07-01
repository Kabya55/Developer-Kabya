"use client";

import React, { useRef, useState } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
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
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group transition-all duration-1000 ease-out group-hover:scale-105"
        />

        {/* Interaction Layer */}
        <div className="absolute inset-0 bg-background-main/80 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center gap-10 z-20">
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
            }}
            className="p-6 bg-white/5 backdrop-blur-3xl text-text-primary rounded-3xl border border-white/10 shadow-2xl transition-all"
          >
            <GithubIcon className="w-8 h-8" />
          </motion.a>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "var(--accent)",
              color: "#fff",
            }}
            className="p-6 bg-accent/20 backdrop-blur-3xl text-accent rounded-3xl border border-accent/20 shadow-2xl transition-all"
          >
            <ExternalLink className="w-8 h-8" />
          </motion.a>
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-2xl md:text-4xl font-black pr-3 mb-6 md:mb-8 tracking-tighter text-gradient group-hover:text-accent transition-colors italic">
          {project.title}
        </h3>
        <p className="text-text-secondary text-base md:text-xl mb-10 md:mb-12 leading-relaxed font-medium opacity-80">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-10 md:mb-16">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-6 py-2.5 bg-secondary/20 text-accent rounded-full text-[10px] font-black border border-accent/10 tracking-[0.4em] uppercase transition-all group-hover:border-accent/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const projectList = [
    {
      title: "Startup Forge",
      description:
        "Developed a comprehensive platform to connect startup founders with talent, featuring a complete Role-Based Access Control (RBAC) system for Administrators, Founders, and Collaborators.",
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "JSON Web Tokens (JWT)",
        "JS",
        "Tailwind",
        "MongoDB",
      ],
      image: "/startup-forge.png",
      repo: "https://github.com/Kabya55/Startup-Forge",
      link: "https://startup-forge-beige.vercel.app",
    },
    {
      title: "MediQueue",
      description:
        "MediQueue is a premium, state-of-the-art tutor booking platform designed to simplify schedule planning, eliminate booking conflicts, and deliver a smooth learning session management flow for both students and instructors.",
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "JSON Web Tokens (JWT)",
        "JS",
        "Tailwind",
        "MongoDB",
      ],
      image: "/mediQueue.png",
      repo: "https://github.com/Kabya55/MediQueue-clien",
      link: "https://medi-queue-clien.vercel.app",
    },
    {
      title: "wanderlust",
      description:
        "wanderlust is a travel planning application that helps users discover and organize their dream destinations.",
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "JSON Web Tokens (JWT)",
        "JS",
        "Tailwind",
        "MongoDB",
      ],
      image: "/wanderlust.png",
      repo: "https://github.com/Kabya55/https://github.com/Kabya55/Programming-Hero-13/tree/main/Modul-52-wanderlust",
      link: "https://modul-52-wanderlust.vercel.app",
    },
    {
      title: "Digital Book Library",
      description:
        "A full-stack online book store that enables users to discover, search, and borrow books with a seamless and responsive user experience.",
      tags: ["Next.js", "JS", "Tailwind", "MongoDB"],
      image: "/home.png",
      repo: "https://github.com/Kabya55/Digital-Book-Library",
      link: "https://digital-book-library-five.vercel.app",
    },
    {
      title: "Dragon News",
      description: " a full stack website for the news website ",
      tags: ["Next.js", "JS", "Tailwind", "MongoDB"],
      image: "/dragon-news.png",
      repo: "https://github.com/Kabya55/Programming-Hero-13/tree/main/Modul-46-dragon-news-next",
      link: "https://programming-hero-13-ztsh.vercel.app/category/08",
    },
    {
      title: "PixGen AI",
      description: "A full stack website for the AI image generation website ",
      tags: ["Next.js", "JS", "Tailwind", "MongoDB"],
      image: "/pixgen-next.png",
      repo: "https://github.com/Kabya55/Programming-Hero-13/tree/main/pixgen-next",
      link: "https://programming-hero-13-sltu.vercel.app/",
    },
    {
      title: "Kin-Keeper",
      description:
        "Enterprise-level project management tool with AI-driven insights and automated workflow integrations.",
      tags: ["React", "JS", "Tailwind", "daisyUI"],
      image: "/Kin-Keeper.png",
      repo: "https://github.com/Kabya55/Programming-Hero-13/tree/main/Assinment-7",
      link: "https://kin-keeper-zeta.vercel.app",
    },
  ];

  const totalPages = Math.ceil(projectList.length / itemsPerPage);
  const currentProjects = projectList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-16 md:mt-24">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`p-4 rounded-2xl glass border border-white/5 transition-all duration-300 ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-accent/20 hover:border-accent/30 text-text-primary cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-2xl border text-sm font-black transition-all duration-300 cursor-pointer ${
                    currentPage === page
                      ? "bg-accent border-accent text-white shadow-lg glow-accent"
                      : "glass border-white/5 text-text-secondary hover:text-accent hover:border-accent/30"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-4 rounded-2xl glass border border-white/5 transition-all duration-300 ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-accent/20 hover:border-accent/30 text-text-primary cursor-pointer"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
