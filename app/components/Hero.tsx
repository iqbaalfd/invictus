"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black">
      
      {/* Background Gradasi Vertikal Nge-blend Persis Poster Invictus */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-[#0a184f] to-[#3b82f6] opacity-95 pointer-events-none"></div>
      
      {/* Efek Glow Utama di Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-blue-500/35 blur-[200px] rounded-full pointer-events-none"></div>

      {/* Konten Murni Logo Full Selayar */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* Logo Invictus Ekstra Besar (Full Lebar Layar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center"
        >
          <Image
            src="/images/logoinvictus.webp"
            alt="Invictus Logo Full"
            fill
            className="object-contain scale-125 sm:scale-150 md:scale-175 drop-shadow-[0_0_80px_rgba(59,130,246,0.95)]"
            priority
          />
        </motion.div>

        {/* Indikator Scroll ke Bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center gap-1.5 text-blue-300/60"
        >
          <span className="text-[10px] uppercase font-cinzel tracking-[0.3em]">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-blue-400" />
        </motion.div>

      </div>
    </section>
  );
}