"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { title: "The Beginning", span: "col-span-1 md:col-span-2 row-span-2" },
  { title: "Late Night Coding", span: "col-span-1 row-span-1" },
  { title: "Class Gathering", span: "col-span-1 row-span-1" },
  { title: "Unconquered Spirit", span: "col-span-1 md:col-span-2 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-32 px-6 bg-[#030712] overflow-hidden">
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-cinzel text-sm tracking-[0.3em] uppercase block mb-3">
            Memories That Remain
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-cinzel mb-6">
            The Visual Archive
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Kumpulan momen sinematik yang terekam dalam perjalanan panjang generasi kita.
          </p>
        </motion.div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden bg-slate-900 border border-blue-900/30 group shadow-lg ${item.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-slate-900/30 to-transparent z-10"></div>
              
              {/* Dummy Photo / Visual Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-cinzel text-2xl group-hover:scale-105 group-hover:text-blue-500/20 transition-all duration-700">
                INVICTUS MEMORY
              </div>

              <div className="absolute bottom-0 left-0 p-6 z-20">
                <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase block mb-1">
                  Archive 0{index + 1}
                </span>
                <h3 className="text-white text-lg font-bold font-cinzel">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}