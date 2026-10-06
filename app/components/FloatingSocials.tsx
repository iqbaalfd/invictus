"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const socialButtonClass =
  "group relative flex h-11 w-11 items-center justify-center rounded-full " +
  "border border-blue-400/15 bg-[#07152b]/70 text-slate-400 " +
  "backdrop-blur-xl transition-[background-color,border-color,color,box-shadow] duration-300 " +
  "hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-white " +
  "hover:shadow-[0_0_24px_rgba(59,130,246,0.18)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 md:bottom-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-3">
      {/* Instagram */}
      <motion.a
        href="https://instagram.com/invictus_inc23"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Invictus on Instagram"
        initial={{
          opacity: 0,
          x: 24,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 0.4,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className={socialButtonClass}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="relative z-10 h-5 w-5 fill-current"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>

        {/* Desktop Tooltip */}
        <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-lg border border-blue-400/10 bg-[#07152b]/90 px-3 py-1.5 text-[11px] font-medium text-slate-300 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 md:block">
          Instagram
        </span>
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:iqbaal.fd@gmail.com"
        aria-label="Send an email to Invictus"
        initial={{
          opacity: 0,
          x: 24,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 0.5,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className={socialButtonClass}
      >
        <Mail
          aria-hidden="true"
          className="relative z-10 h-5 w-5"
        />

        {/* Desktop Tooltip */}
        <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-lg border border-blue-400/10 bg-[#07152b]/90 px-3 py-1.5 text-[11px] font-medium text-slate-300 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 md:block">
          Email
        </span>
      </motion.a>
    </div>
  );
}