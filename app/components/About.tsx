"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-24 md:py-32"
    >
      {/* Ambient Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Section Label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-6 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
              Our Identity
            </span>
          </motion.div>

          {/* Main Statement */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="mb-14 text-center md:mb-16"
          >
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
              The Essence
              <br />

              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                of Invictus.
              </span>
            </h2>

            <div className="mx-auto mt-7 h-px w-16 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
          </motion.div>

          {/* Editorial Content */}
          <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Core Philosophy */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                  Core Philosophy
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  “One Generation, Infinite Legacy”
                </h3>

                <p className="mt-4 text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
                  More than a class. More than a name. Invictus is the story of
                  32 individuals who grew, struggled, and created a legacy
                  together.
                </p>
              </div>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-blue-400/30 to-transparent" />
            </motion.div>

            {/* The Journey */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: "easeOut",
              }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                  The Journey
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  Forged Through Growth
                </h3>

                <p className="mt-4 text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
                  Every challenge shaped us. Every memory connected us. And
                  every step forward became part of something bigger than
                  ourselves.
                </p>
              </div>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-blue-400/30 to-transparent" />
            </motion.div>
          </div>

          {/* Identity Data */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-blue-400/10 pt-9 md:grid-cols-4"
          >
            <div>
              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500 md:text-[10px]">
                Established
              </span>

              <span className="text-sm font-semibold tracking-wide text-white md:text-base">
                2023 — 2026
              </span>
            </div>

            <div>
              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500 md:text-[10px]">
                Major & Class
              </span>

              <span className="text-sm font-semibold tracking-wide text-white md:text-base">
                Informatics 7C
              </span>
            </div>

            <div>
              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500 md:text-[10px]">
                Faculty
              </span>

              <span className="text-sm font-semibold tracking-wide text-white md:text-base">
                Information Technology
              </span>
            </div>

            <div>
              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500 md:text-[10px]">
                University
              </span>

              <span className="text-sm font-semibold tracking-wide text-white md:text-base">
                Sebelas April Sumedang
              </span>
            </div>
          </motion.div>

          {/* Closing Line */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="mt-16 flex flex-col items-center justify-center"
          >
            <div className="mb-4 h-px w-12 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

            <p className="text-center text-[9px] font-medium uppercase tracking-[0.35em] text-slate-500 md:text-xs">
              Different Stories. One Identity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}