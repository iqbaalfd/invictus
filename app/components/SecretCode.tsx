"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const manifestoItems = [
  {
    number: "01",
    title: "One Class.",
    description:
      "Different minds, personalities, and ambitions — brought together in one place, growing through every chapter side by side.",
  },
  {
    number: "02",
    title: "One Story.",
    description:
      "Every laugh, struggle, deadline, achievement, and ordinary day became part of a story that belongs to all of us.",
  },
  {
    number: "03",
    title: "One Legacy.",
    description:
      "The chapter may eventually end, but what we built, remembered, and carried forward will remain beyond the classroom.",
  },
];

export default function SecretCode() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = manifestoItems[activeIndex];

  return (
    <section
      id="code"
      className="relative overflow-hidden bg-[#030712] pt-16 pb-16 md:pt-20 md:pb-20"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            The Invictus Code
          </span>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            What Defines
            <span className="block bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
              Us.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
            Three ideas. One identity. A simple manifesto that carries the
            meaning of Invictus beyond a name.
          </p>
        </motion.div>

        {/* =====================================================
            MANIFESTO SELECTOR
        ====================================================== */}

        <div className="border-y border-blue-400/10">
          <div className="grid md:grid-cols-3">
            {manifestoItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group relative min-h-[150px] border-blue-400/10 px-0 py-7 text-left transition-colors duration-500 md:min-h-[220px] md:px-8 md:py-10 ${
                    index !== manifestoItems.length - 1
                      ? "border-b md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <span
                    className={`mb-8 block text-[10px] font-semibold tracking-[0.35em] transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-3xl font-extrabold tracking-[-0.04em] transition-all duration-300 sm:text-4xl lg:text-5xl ${
                      isActive
                        ? "text-white"
                        : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Active Line */}
                  <div className="absolute bottom-0 left-0 h-px w-full">
                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
                    />
                  </div>

                  {/* Active Glow */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/[0.04] to-transparent"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ACTIVE MANIFESTO
        ====================================================== */}

        <div className="grid gap-10 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-start md:py-14">
          {/* Large Number */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeItem.number}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -16,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="block text-[100px] font-extrabold leading-[0.8] tracking-[-0.08em] text-white/[0.05] md:text-[150px]"
              >
                {activeItem.number}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="md:pt-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -18,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                  Manifesto {activeItem.number}
                </span>

                <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                  {activeItem.title}
                </h3>

                <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}