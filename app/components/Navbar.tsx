"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MessageSquare } from "lucide-react";

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

  const logoClass = "relative block w-40 md:w-48 h-14 md:h-16 flex-shrink-0";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-md py-2 shadow-lg shadow-black/50"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Brand Logo Image: Kiri (Muncul saat di-scroll) */}
        <a 
          href="#" 
          className={`${logoClass} transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src="/images/logoinvictus.png"
            alt="Invictus Logo"
            fill
            className="object-contain object-left drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            priority
          />
        </a>

        {/* Spacer Kiri */}
        {!scrolled && <div className={logoClass}></div>}

        {/* Navigation Links: Tengah */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition-colors">Identity</a>
          <a href="#members" className="hover:text-blue-400 transition-colors">Members</a>
          <a href="#journey" className="hover:text-blue-400 transition-colors">Journey</a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
          <a href="#code" className="hover:text-blue-400 transition-colors text-blue-400">The Code</a>
        </nav>

        {/* Ikon Sosial Media Melayang: Kanan */}
        <div className="flex items-center gap-3">
          
          {/* Instagram (Custom SVG) */}
          <a
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-full text-slate-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <span className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/20 blur-sm transition-all duration-300"></span>
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-full text-slate-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <span className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/20 blur-sm transition-all duration-300"></span>
            <Mail className="w-5 h-5 relative z-10" />
          </a>

          {/* Chat / WhatsApp */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-full text-slate-400 hover:text-white transition-colors"
            aria-label="Chat"
          >
            <span className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/20 blur-sm transition-all duration-300"></span>
            <MessageSquare className="w-5 h-5 relative z-10" />
          </a>

        </div>
      </div>
    </motion.header>
  );
}