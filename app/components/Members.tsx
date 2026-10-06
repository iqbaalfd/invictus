"use client";

import { motion } from "framer-motion";

const members = Array.from({ length: 32 }, (_, index) => ({
  id: index + 1,
  name: `Member ${String(index + 1).padStart(2, "0")}`,
  role: "Invictus Member",
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
        {/* Header */}
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

        {/* Members Wall */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 md:grid-cols-4 md:gap-x-6 md:gap-y-14 lg:grid-cols-5">
          {members.map((member, index) => {
            const stagger =
              index % 5 === 1 || index % 5 === 3
                ? "md:translate-y-8"
                : "";

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
                  y: 26,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: (index % 5) * 0.05,
                  ease: "easeOut",
                }}
                className={`group ${stagger} ${desktopPosition}`}
              >
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[#071225]">
                  {/* Placeholder Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,#071225_0%,#0b1f44_55%,#1d4ed8_100%)]" />

                  {/* Soft Glow */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[50px]" />

                  {/* Placeholder Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-extrabold tracking-tight text-white/[0.08] sm:text-5xl">
                      {String(member.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Top Number */}
                  <span className="absolute right-4 top-4 text-[9px] font-semibold tracking-[0.3em] text-white/35">
                    {String(member.id).padStart(2, "0")}
                  </span>

                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />

                  {/* Hover Layer */}
                  <div className="pointer-events-none absolute inset-0 bg-blue-400/0 transition-colors duration-500 group-hover:bg-blue-400/[0.03]" />

                  {/* Border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-blue-400/30" />
                </div>

                {/* Info */}
                <div className="mt-4">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                    {member.role}
                  </span>

                  <h3 className="mt-1 text-sm font-semibold tracking-tight text-white md:text-base">
                    {member.name}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-14 flex justify-end border-t border-blue-400/10 pt-6 md:mt-16"
        >
          <p className="max-w-md text-right text-xs leading-6 text-slate-500 md:text-sm">
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