"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#020617] px-4"
    >
      {/* Base Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#071a4d_42%,#2563eb_100%)]" />

      {/* Main Blue Atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[130px] md:h-[620px] md:w-[1000px]" />

      {/* Upper Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

      {/* Bottom Light Bloom */}
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[360px] w-[110%] -translate-x-1/2 rounded-[50%] bg-blue-400/20 blur-[100px]" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-svh w-full max-w-7xl items-center justify-center">
        {/* Invictus Logo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 28,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[58vh] w-[118%] sm:h-[64vh] sm:w-[112%] md:h-[72vh] md:w-[102%] lg:h-[78vh] lg:w-[96%]"
        >
          <Image
            src="/images/logoinvictus.webp"
            alt="Invictus"
            fill
            priority
            sizes="(max-width: 640px) 118vw, (max-width: 768px) 112vw, (max-width: 1024px) 102vw, 96vw"
            className="object-contain drop-shadow-[0_0_55px_rgba(96,165,250,0.55)]"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to Identity section"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="group absolute bottom-7 flex flex-col items-center gap-2 text-blue-200/50 transition-colors duration-300 hover:text-blue-100 md:bottom-8"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.35em] sm:text-[10px]">
            Scroll Down
          </span>

          <ArrowDown className="h-4 w-4 animate-bounce transition-colors duration-300 group-hover:text-white" />
        </motion.a>
      </div>
    </section>
  );
}