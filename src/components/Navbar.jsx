"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Dynamic animations based on scroll
  const headerPadding = useTransform(scrollY, [0, 100], ["28px", "16px"]);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    // Synchronize theme with localStorage and document class
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');

    return () => unsubscribe();
  }, [scrollY]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      style={{
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 glass-nav ${isScrolled ? 'shadow-2xl' : 'bg-opacity-0 border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between min-h-[70px] gap-4">
        {/* Mobile Menu Trigger */}
        <div className="xl:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white"
          >
            {isOpen ? <IoClose size={24} /> : <CiMenuBurger size={32} strokeWidth={1} />}
          </motion.button>
        </div>

        <Link href="/" onClick={() => setIsOpen(false)}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer flex-1 flex justify-center xl:justify-start xl:flex-none"
          >
            <Image
              src="/KabyaLogo4.png"
              alt="Kabya Logo"
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </motion.div>
        </Link>

        {/* Navigation - Grid Layout */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-black tracking-[0.4em] text-text-secondary absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                className={`relative group transition-all duration-500 ${isActive ? 'text-accent' : 'hover:text-accent'}`}
                href={link.href}
              >
                {link.name}
                <span className={`absolute -bottom-3 left-0 h-0.5 bg-gradient-to-r from-secondary to-soft transition-all duration-700 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            );
          })}
        </nav>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-6">
          {/* Premium Theme Switcher */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            onClick={toggleTheme}
            className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-text-primary transition-all duration-500 overflow-hidden relative"
          >
            {mounted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-12 text-md font-black uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-all duration-500 ${pathname === link.href ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
