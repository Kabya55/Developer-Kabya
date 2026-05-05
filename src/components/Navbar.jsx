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

  const headerPadding = useTransform(scrollY, [0, 100], ["28px", "16px"]);

  useEffect(() => {
    setMounted(true);

    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

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
      <div className="container mx-auto px-4 flex items-center justify-between min-h-[70px]">

        {/* LEFT SECTION (Mobile: Menu + Logo | Desktop: Logo only) */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center"
            >
              {isOpen ? <IoClose size={24} /> : <CiMenuBurger size={28} />}
            </motion.button>
          </div>

          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/KabyaLogo4.png"
              alt="Kabya Logo"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* CENTER NAV (Desktop only) */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-black tracking-[0.4em] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group transition-all duration-500 ${isActive ? 'text-accent' : 'hover:text-accent'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-3 left-0 h-0.5 bg-gradient-to-r from-secondary to-soft transition-all duration-700 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SECTION (Theme button) */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center"
          >
            {mounted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                >
                  {theme === 'dark'
                    ? <Moon className="w-5 h-5" />
                    : <Sun className="w-5 h-5" />
                  }
                </motion.div>
              </AnimatePresence>
            )}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-10 text-md font-black uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-all ${pathname === link.href
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;