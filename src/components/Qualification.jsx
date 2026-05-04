"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Qualification = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="qualifications">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-gradient italic pr-10">Qualification</h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto font-medium uppercase tracking-[0.5em]">My personal journey</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-40">
          {/* Experience Column */}
          <div className="flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-20 justify-center lg:justify-start"
            >
              <div className="w-16 h-16 bg-secondary/30 rounded-[1.5rem] flex items-center justify-center font-black text-highlight border border-highlight/10 shadow-2xl">XP</div>
              <h3 className="text-4xl font-black italic tracking-tighter uppercase tracking-[0.1em]">Education</h3>
            </motion.div>

            <div className="relative border-l-2 border-white/5 ml-8 space-y-24">

              {[
                { title: "SSC", sub: "Egarogram Sammilani High School", date: "2014 - 2015" },
                { title: "Diploma in Textile Technology", sub: "Rajdhani polytechnic & Textile College", date: "2015 - 2019" },
                { title: "B. Sc in Textile Technology", sub: "University Of South Asia", date: "2019 - 2023" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="pl-14 relative group"
                >
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-background group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(47,107,154,0.6)]"></div>
                  <h4 className="font-black text-3xl mb-3 tracking-tighter group-hover:text-highlight transition-colors italic">{item.title}</h4>
                  <p className="text-text-secondary text-xl font-medium mb-4 leading-snug">{item.sub}</p>
                  <p className="text-[10px] font-black text-highlight uppercase tracking-[0.4em] bg-accent/10 px-5 py-2 rounded-full border border-accent/20 inline-block">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-20 justify-center lg:justify-start"
            >
              <div className="w-16 h-16 bg-secondary/30 rounded-[1.5rem] flex items-center justify-center font-black text-highlight border border-highlight/10 shadow-2xl">ED</div>
              <h3 className="text-4xl font-black italic tracking-tighter uppercase tracking-[0.1em]">Experience</h3>
            </motion.div>

            <div className="relative border-l-2 border-white/5 ml-8 space-y-24">
              {[
                { title: "Fiverr", sub: "Freelance Digital Marketing", date: "2020 - 2023" },
                { title: "Amasyn Tex", sub: "Merchandising", date: "1 year" },
                { title: "web developer", sub: "Frotend and Backend Developer", date: "1 year+" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="pl-14 relative group"
                >
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-background group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(47,107,154,0.6)]"></div>
                  <h4 className="font-black text-3xl mb-3 tracking-tighter group-hover:text-highlight transition-colors italic">{item.title}</h4>
                  <p className="text-text-secondary text-xl font-medium mb-4 leading-snug">{item.sub}</p>
                  <p className="text-[10px] font-black text-highlight uppercase tracking-[0.4em] bg-accent/10 px-5 py-2 rounded-full border border-accent/20 inline-block">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
