"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] rounded-full blur-[80px] -z-10" 
        style={{ background: "var(--glow-color)" }} 
      />
      
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border-2 border-text-secondary/20 border-t-accent border-r-accent"
          />
          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full border-2 border-text-secondary/20 border-b-secondary border-l-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          {/* Center Dot */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-3 rounded-full bg-soft glow-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        
        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-secondary tracking-[0.4em] uppercase text-xs md:text-sm font-black"
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
}
