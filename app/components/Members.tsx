"use client";

import { motion } from "framer-motion";

const members = Array.from({ length: 32 }, (_, index) => ({
  id: index + 1,
  name: `Name ${String(index + 1).padStart(2, "0")}`,
  note: "Invictus / Informatics 7C",
}));

export default function Members() {
  return (
    <section
      id="members"
      className="relative overflow-hidden bg-[#030712] pt-20 pb-16 md:pt-24 md:pb-20"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-blue-400"
          >
            The People Behind Invictus
          </motion.span>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
                Faces of the
                <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  Unconquered.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
                Thirty-two individuals. Different personalities, different
                stories, one generation shaped by the moments we shared
                together.
              </p>
            </motion.div>

            {/* Member Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="hidden md:block"
            >
              <span className="block text-right text-[92px] font-extrabold leading-[0.8] tracking-[-0.07em] text-white/[0.07] lg:text-[120px]">
                32
              </span>

              <span className="mt-4 block text-right text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                One Generation
              </span>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            SCRAPBOOK WALL
        ====================================================== */}

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-12 lg:grid-cols-5">
          {members.map((member, index) => {
            const number = String(member.id).padStart(2, "0");

            /*
             * Subtle scrapbook rhythm.
             * Only desktop gets vertical offsets.
             */
            const offset =
              index % 5 === 1
                ? "md:translate-y-8"
                : index % 5 === 3
                  ? "md:-translate-y-4"
                  : "";

            /*
             * Last two cards are positioned so the final row
             * feels intentionally composed rather than automatic.
             */
            const isSecondLast = index === members.length - 2;
            const isLast = index === members.length - 1;

            let desktopPosition = "";

            if (isSecondLast) {
              desktopPosition = "lg:col-start-2";
            }

            if (isLast) {
              desktopPosition = "lg:col-start-4";
            }

            return (
              <motion.article
                key={member.id}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.65,
                  delay: (index % 5) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group ${offset} ${desktopPosition}`}
              >
                {/* =================================================
                    SCRAPBOOK CARD
                ================================================== */}

                <div className="relative overflow-hidden rounded-[20px] border border-blue-300/10 bg-[#071225] p-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-300/25 group-hover:bg-[#091a35] group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.45)] sm:p-4">
                  {/* Inner Archive Area */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-white/[0.05] bg-[#0a1830]">
                    {/* Abstract Placeholder */}
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,#071225_0%,#0b1f44_50%,#123b83_100%)] transition-transform duration-700 group-hover:scale-[1.03]" />

                    {/* Soft Light */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.08] blur-[55px]" />

                    {/* Large Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="select-none text-[72px] font-extrabold leading-none tracking-[-0.08em] text-white/[0.07] sm:text-[88px]">
                        {number}
                      </span>
                    </div>

                    {/* Archive Label */}
                    <div className="absolute left-4 top-4">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-blue-300/70">
                        INVICTUS
                      </span>
                    </div>

                    {/* Corner Number */}
                    <span className="absolute right-4 top-4 text-[8px] font-semibold tracking-[0.25em] text-white/30">
                      {number}
                    </span>

                    {/* Bottom Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020617]/80 via-[#020617]/20 to-transparent" />

                    {/* Decorative Line */}
                    <div className="absolute bottom-4 left-4 h-px w-8 bg-blue-400/50 transition-all duration-500 group-hover:w-14" />

                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute inset-0 bg-blue-400/0 transition-colors duration-500 group-hover:bg-blue-400/[0.025]" />
                  </div>

                  {/* =================================================
                      MEMBER INFORMATION
                  ================================================== */}

                  <div className="px-1 pb-1 pt-4">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <span className="block text-[8px] font-medium uppercase tracking-[0.28em] text-slate-500">
                          {member.note}
                        </span>

                        <h3 className="mt-1 truncate text-sm font-semibold tracking-tight text-white sm:text-base">
                          {member.name}
                        </h3>
                      </div>

                      <span className="shrink-0 text-[9px] font-medium tracking-[0.2em] text-blue-400/60">
                        {number}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            CLOSING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-14 border-t border-blue-400/10 pt-6 md:mt-16"
        >
          <p className="max-w-md text-left text-xs leading-6 text-slate-500 md:text-sm">
            One class. Thirty-two stories.
            <span className="text-slate-300">
              {" "}
              One shared legacy.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}