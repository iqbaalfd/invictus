"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/foto1.webp",
    number: "01",
    title: "A Moment to Remember",
  },
  {
    src: "/images/foto2.webp",
    number: "02",
    title: "Together",
  },
  {
    src: "/images/foto3.webp",
    number: "03",
    title: "Between the Moments",
  },
  {
    src: "/images/foto4.webp",
    number: "04",
    title: "Stories We Shared",
  },
  {
    src: "/images/foto5.webp",
    number: "05",
    title: "A Memory That Remains",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#030712] pt-20 pb-20 md:pt-24 md:pb-24"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[160px]" />

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
          className="mb-14 max-w-3xl md:mb-16"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Memories That Remain
          </span>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            The Visual
            <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Archive.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm font-light leading-7 text-slate-400 md:text-base md:leading-8">
            Fragments of time captured along the way — ordinary moments,
            unforgettable memories, and pieces of our story that deserve to
            remain.
          </p>
        </motion.div>

        {/* =====================================================
            FIRST EDITORIAL ROW
        ====================================================== */}

        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {/* Main Photo */}
          <motion.article
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="group md:col-span-7"
          >
            <div className="relative min-h-[440px] overflow-hidden rounded-[26px] bg-[#071225] md:min-h-[620px]">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/10 to-transparent" />

              <span className="absolute right-6 top-6 text-[10px] font-semibold tracking-[0.3em] text-white/45">
                {galleryImages[0].number}
              </span>

              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Archive {galleryImages[0].number}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {galleryImages[0].title}
                </h3>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-blue-400/30" />
            </div>
          </motion.article>

          {/* Right Column */}
          <div className="grid gap-5 md:col-span-5 md:gap-6">
            {galleryImages.slice(1, 3).map((item, index) => (
              <motion.article
                key={item.src}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.08 + index * 0.08,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-[26px] bg-[#071225] md:min-h-[297px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

                  <span className="absolute right-5 top-5 text-[9px] font-semibold tracking-[0.3em] text-white/45">
                    {item.number}
                  </span>

                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <span className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.28em] text-blue-300">
                      Archive {item.number}
                    </span>

                    <h3 className="text-base font-bold tracking-tight text-white md:text-lg">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-blue-400/30" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            SECOND EDITORIAL ROW
        ====================================================== */}

        <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-12 md:gap-6">
          {/* Photo 4 */}
          <motion.article
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="group md:col-span-5"
          >
            <div className="relative min-h-[340px] overflow-hidden rounded-[26px] bg-[#071225] md:min-h-[400px]">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

              <span className="absolute right-5 top-5 text-[9px] font-semibold tracking-[0.3em] text-white/45">
                {galleryImages[3].number}
              </span>

              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.28em] text-blue-300">
                  Archive {galleryImages[3].number}
                </span>

                <h3 className="text-lg font-bold tracking-tight text-white md:text-xl">
                  {galleryImages[3].title}
                </h3>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-blue-400/30" />
            </div>
          </motion.article>

          {/* Photo 5 */}
          <motion.article
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="group md:col-span-7"
          >
            <div className="relative min-h-[340px] overflow-hidden rounded-[26px] bg-[#071225] md:min-h-[400px]">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/75 via-[#020617]/10 to-transparent" />

              <span className="absolute right-6 top-6 text-[9px] font-semibold tracking-[0.3em] text-white/45">
                {galleryImages[4].number}
              </span>

              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Archive {galleryImages[4].number}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {galleryImages[4].title}
                </h3>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-blue-400/30" />
            </div>
          </motion.article>
        </div>

        {/* =====================================================
            CLOSING
        ====================================================== */}

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
          className="mt-14 flex justify-end border-t border-blue-400/10 pt-6 md:mt-16"
        >
          <p className="max-w-md text-right text-xs leading-6 text-slate-500 md:text-sm">
            Some moments pass.
            <span className="text-slate-300">
              {" "}
              Some become part of who we are.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}