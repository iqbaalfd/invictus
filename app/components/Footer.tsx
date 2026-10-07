"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] px-6 pb-7 pt-8 md:px-12 md:pb-8 md:pt-9">
      {/* Top Divider */}
      <div className="absolute left-1/2 top-0 w-full max-w-7xl -translate-x-1/2 px-6 md:px-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute bottom-[-90px] left-1/2 h-[180px] w-[460px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[110px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative -my-3 h-24 w-24 md:h-28 md:w-28"
        >
          <Image
            src="/images/logoinvictus.webp"
            alt="Invictus Logo"
            fill
            sizes="112px"
            className="object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.3)]"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.05,
            ease: "easeOut",
          }}
          className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400 md:text-xs"
        >
          One Class.
          <span className="text-blue-300"> One Story.</span>
          <span className="text-slate-200"> One Legacy.</span>
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-4 flex items-center gap-3"
        >
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/10 bg-[#071225]/70 text-slate-500 backdrop-blur-md transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.14)]"
          >
            <svg
              className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/10 bg-[#071225]/70 text-slate-500 backdrop-blur-md transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.14)]"
          >
            <svg
              className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/10 bg-[#071225]/70 text-slate-500 backdrop-blur-md transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.14)]"
          >
            <svg
              className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.708V8z" />
            </svg>
          </a>
        </motion.div>

        {/* Small Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 h-px w-12 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-[9px] font-light uppercase tracking-[0.22em] text-slate-600"
        >
          © {new Date().getFullYear()} Invictus. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}