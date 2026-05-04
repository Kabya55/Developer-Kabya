"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import Image from 'next/image';



const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* Theme-aware background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Information Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 w-full glass-card p-12 rounded-[4rem] text-center group"
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-10 border-2 border-white/10 group-hover:border-accent/50 transition-all duration-700 relative shadow-2xl">
              <Image
                alt="Kabyar Profile"
                className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                src="/Kabya.png"
                width={256}
                height={256}
              />
            </div>

            <div className="inline-block px-6 py-2 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-8 border border-accent/20">
              Active Session
            </div>
            <br />

            <h2 className="text-4xl font-black mb-12 tracking-tighter text-gradient italic pr-4">Kabya</h2>
            <p className="text-text-secondary text-sm mb-12 leading-relaxed font-medium">
              Architecting scalable systems with a focus on human-centric design and accessibility.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { icon: <FiLinkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/kabya-kishor-halder" },
                { icon: <FiGithub className="w-6 h-6" />, label: "GitHub", href: "https://github.com/Kabya55" },
                { icon: <FiFacebook className="w-6 h-6" />, label: "Facebook", href: "https://www.facebook.com/kabya55" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -8, backgroundColor: "rgba(var(--accent-rgb), 0.15)", borderColor: "var(--accent)" }}
                  className="p-4 bg-white/5 rounded-[1.5rem] border border-white/5 transition-all duration-500 flex items-center justify-center shadow-lg"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Bio Narrative */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-5xl md:text-[6.5rem] font-black mb-12 tracking-tighter italic text-gradient leading-[0.85] pr-4">
                About Me
              </h3>
              <h3 className="text-5xl md:text-[6.5rem] font-black mb-12 tracking-tighter italic text-gradient leading-[0.85] pr-4">
                Hi,I'm Kabya Kishor Halder.
              </h3>
              <p className="text-text-secondary text-2xl mb-10 leading-relaxed font-medium">
                I am a passionate web developer who loves building modern, user-friendly applications. I enjoy working with technologies like HTML, CSS, Tailwind CSS, React, Next.js, MongoDB, Express.js, Node.js, and Firebase to create responsive and dynamic web experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
                <motion.a
                  href="https://drive.google.com/file/d/13y7bAjnA_VlnvN1dqE8IDKdRChEj2LXD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 12, backgroundColor: "var(--secondary)", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-6 bg-secondary px-12 py-7 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-2xl border border-white/5 text-white cursor-pointer"
                >
                  Download Resume <Download className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
