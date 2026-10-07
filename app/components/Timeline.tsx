"use client";

import { motion } from "framer-motion";

const journeyData = [
  {
    year: "2023",
    label: "Beginning",
    title: "The Genesis of Invictus",
    description:
      "The beginning of our journey — when different personalities, ambitions, and stories first came together under one identity.",
  },
  {
    year: "2024",
    label: "Growth",
    title: "Through the Trials",
    description:
      "Assignments, projects, deadlines, and difficult moments tested us, but also taught us how to grow and move forward together.",
  },
  {
    year: "2025",
    label: "Milestone",
    title: "Moments That Defined Us",
    description:
      "A year filled with accomplishments, unforgettable experiences, and moments that strengthened the bond behind Invictus.",
  },
  {
    year: "2026",
    label: "Legacy",
    title: "Beyond the Classroom",
    description:
      "As our time together approaches its final chapter, the memories, friendships, and stories we created continue beyond the classroom.",
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#030712] pt-16 pb-20 md:pt-20 md:pb-24"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
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
          className="mb-14 ml-auto max-w-3xl text-right md:mb-16"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Our Journey
          </span>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            The Path We
            <span className="block bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
              Walked Together.
            </span>
          </h2>

          <p className="ml-auto mt-6 max-w-xl text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
            Every chapter left something behind — lessons, memories, and
            moments that shaped who we became.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-blue-400/50 via-blue-500/20 to-transparent md:left-1/2" />

          <div className="space-y-16 md:space-y-20">
            {journeyData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.year}
                  initial={{
                    opacity: 0,
                    y: 32,
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
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="relative grid md:grid-cols-2"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[16px] top-1 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-blue-400/50 bg-[#030712] md:left-1/2 md:-translate-x-1/2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div
                      className={`mb-4 flex items-center gap-4 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                        {item.label}
                      </span>

                      <span className="h-px w-8 bg-blue-400/30" />
                    </div>

                    <div
                      className={`flex items-start gap-5 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="shrink-0 text-4xl font-extrabold leading-none tracking-[-0.05em] text-white/[0.09] sm:text-5xl md:text-6xl">
                        {item.year}
                      </span>

                      <div className="pt-1">
                        <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-md text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

{/* Closing */}
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
    duration: 0.8,
    delay: 0.2,
  }}
  className="mt-16 border-t border-blue-400/10 pt-6 md:mt-20"
>
  <p className="max-w-md text-left text-xs leading-6 text-slate-500 md:text-sm">
    Four years. Countless moments.
    <span className="text-slate-300">
      {" "}
      One journey we will always remember.
    </span>
  </p>
</motion.div>
      </div>
    </section>
  );
}