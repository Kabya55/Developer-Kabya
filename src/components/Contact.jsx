"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section className="py-20 md:py-40 relative overflow-hidden" id="contact">
      {/* Theme-aware background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-40"
        >
          <h2 className="text-5xl md:text-[9rem] font-black mb-10 tracking-tighter italic text-gradient">Connect.</h2>
          <p className="text-text-secondary text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
            Available for <span className="text-accent">technical consultation</span> and high-level architectural development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
          {/* Detailed Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-[4rem] font-black mb-16 tracking-tighter leading-[0.85] italic text-gradient leading-tight pr-4">
              Let's Architect <br /> Something Rare <br /> Together.
            </h3>

            <div className="space-y-8 md:space-y-12">
              {[
                { icon: <FiMail className="w-8 h-8" />, label: "Gmail", val: "kabyakishor017@gmail.com" },
                { icon: <FiPhone className="w-8 h-8" />, label: "Number", val: "+8801750084574" },
                { icon: <FiMapPin className="w-8 h-8" />, label: "Address", val: "Dhaka, Bangladesh" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 20 }}
                  className="flex items-center gap-6 md:gap-10 group cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-accent border border-white/5 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-2xl shadow-accent/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-text-secondary uppercase tracking-[0.5em] font-black mb-3 opacity-60">{item.label}</p>
                    <p className="text-lg md:text-3xl font-black group-hover:text-accent transition-colors duration-500 tracking-tighter italic break-all">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* High-Performance Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-20 rounded-3xl md:rounded-[5rem] border border-white/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:gap-14 relative z-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.5em] ml-4">Identification</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-6 py-4 md:px-10 md:py-7 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none text-text-primary transition-all duration-500 placeholder:text-slate-700 text-base md:text-xl font-medium" placeholder="Full Name" type="text" required />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.5em] ml-4">Secure Channel</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-6 py-4 md:px-10 md:py-7 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none text-text-primary transition-all duration-500 placeholder:text-slate-700 text-base md:text-xl font-medium" placeholder="Email Address" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.5em] ml-4">Protocol Details</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-3xl md:rounded-[4rem] px-6 py-5 md:px-10 md:py-8 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none text-text-primary transition-all duration-500 placeholder:text-slate-700 min-h-[250px] resize-none text-base md:text-xl font-medium" placeholder="Define the objective..." required></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="btn-gradient w-full py-5 md:py-8 rounded-2xl md:rounded-[3rem] font-black text-xl md:text-2xl flex items-center justify-center gap-6 shadow-2xl shadow-accent/30 disabled:opacity-50 text-white border border-white/10"
              >
                {isSubmitting ? (
                  <div className="w-10 h-10 border-[5px] border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10 uppercase tracking-[0.4em] text-sm font-black">Execute Transmission</span>
                    <FiSend className="w-7 h-7 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
