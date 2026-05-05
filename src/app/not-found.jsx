"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full blur-[100px] -z-10" 
        style={{ background: "var(--glow-color)" }} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 glass-card p-10 md:p-16 rounded-3xl w-full max-w-2xl border border-white/5"
      >
        <h1 className="text-[100px] md:text-[150px] font-black mb-0 text-gradient leading-none drop-shadow-2xl">
          404
        </h1>
        <h2 className="text-xl md:text-3xl font-black text-text-primary mb-6 tracking-[0.2em] uppercase">
          Lost in Space
        </h2>
        <p className="text-text-secondary max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
          The coordinates you entered don't match any known sectors in this portfolio. Let's get you back to safe space.
        </p>
        
        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl btn-gradient text-xs md:text-sm font-black tracking-[0.3em] uppercase glow-accent"
          >
            Return Home
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
