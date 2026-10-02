"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050508]/80 backdrop-blur-md border-b border-blue-900/20 py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Text / Brand */}
        <a href="#" className="font-cinzel text-xl font-bold tracking-widest text-white flex items-center gap-2">
          <span className="text-blue-500">INVICTUS</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition-colors">Identity</a>
          <a href="#members" className="hover:text-blue-400 transition-colors">Members</a>
          <a href="#journey" className="hover:text-blue-400 transition-colors">Journey</a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
          <a href="#code" className="hover:text-blue-400 transition-colors text-blue-400">The Code</a>
        </nav>

        {/* Action Button */}
        <a
          href="#journey"
          className="relative px-5 py-2 text-xs uppercase tracking-widest font-semibold text-white rounded-full overflow-hidden border border-blue-500/40 group transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity"></span>
          <span className="relative z-10">Explore</span>
        </a>
      </div>
    </motion.header>
  );
}