"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#050508] via-[#030712] to-[#0b1329]">
      
      {/* Background Glow / Fog Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,transparent_70%)] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Cinematic Logo Reveal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-64 md:w-96 h-32 md:h-44 mb-6 drop-shadow-[0_0_35px_rgba(59,130,246,0.4)]"
        >
          <Image
            src="/invictus.webp"
            alt="Invictus Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Subtitle / Catchphrase */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-cinzel text-sm md:text-base tracking-[0.3em] text-blue-300 uppercase mb-8"
        >
          A Legacy Beyond Time
        </motion.p>

        {/* Main Title description */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-slate-400 text-sm md:text-lg max-w-xl mb-10 font-light leading-relaxed"
        >
          The Unconquered Generation — united by memories, challenges, and dreams that shape our journey.
        </motion.h1>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase rounded-full bg-slate-900/80 border border-blue-500/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-2">
              Enter Our Story
              <svg
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none"></div>
    </section>
  );
}