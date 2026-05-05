"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { GoMoveToTop } from "react-icons/go";



const Footer = () => {
  return (
    <footer className="py-32 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 grid grid-cols-1 justify-items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black tracking-tighter mb-20 text-gradient italic pr-10"
        >
          KABYA KISHOR HALDER
        </motion.div>

        {/* Global Navigation - Grid Layout */}
        <nav className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12 mb-24 text-[20px] font-black text-text-secondary uppercase tracking-[0.3em] md:tracking-[0.4em]">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "About", href: "/about" },
            { name: "Skills", href: "/skills" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <motion.a
              key={link.name}
              whileHover={{ y: -4 }}
              className="relative group transition-all duration-500 hover:text-white"
              href={link.href}
            >
              {link.name}

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-accent to-soft transition-all duration-500 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Ecosystem */}
        <div className="grid grid-cols-3 gap-10 mb-32">
          {[
            { icon: <FiLinkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/kabya-kishor-halder" },
            { icon: <FiGithub className="w-6 h-6" />, label: "GitHub", href: "https://github.com/Kabya55" },
            { icon: <FiFacebook className="w-6 h-6" />, label: "Facebook", href: "https://www.facebook.com/kabya55" }
          ].map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ y: -15, backgroundColor: "rgba(var(--accent-rgb), 0.15)", borderColor: "var(--accent)" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 glass rounded-[2.5rem] flex items-center justify-center border border-white/5 transition-all duration-700 shadow-2xl"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{social.label}</span>
              {social.icon}
            </motion.a>
          ))}
        </div>
        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/20 mb-20" />

        {/* Meta Context */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 items-center text-md font-black text-text-secondary tracking-[0.5em] opacity-50">
          <p className="md:col-span-2 justify-self-center md:justify-self-start normal-case font-bold text-white tracking-normal">© {new Date().getFullYear()} Kabya Kishor Halder. All rights reserved.</p>
          <div className="flex justify-center md:justify-end">
            <motion.button
              whileHover={{ y: -8, backgroundColor: "rgba(var(--accent-rgb), 0.15)", borderColor: "var(--accent)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-16 h-16 glass rounded-3xl flex items-center justify-center border border-white/5 transition-all duration-500 shadow-2xl text-white hover:text-accent"
            >
              <GoMoveToTop className="w-10 h-10" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
