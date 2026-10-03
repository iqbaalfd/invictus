"use client";

import { motion } from "framer-motion";
import { Flag, Trophy, Sparkles, Star } from "lucide-react";

const journeyData = [
  {
    year: "2023",
    title: "The Genesis of Invictus",
    description: "Pertemuan pertama kita di kelas, awal mula menyatukan berbagai karakter dan mimpi di bawah satu bendera.",
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    badge: "Beginning",
  },
  {
    year: "2024",
    title: "Battling The Trials",
    description: "Menghadapi berbagai tantangan akademik, tugas kelompok yang menumpuk, dan ujian-ujian berat bersama-sama.",
    icon: <Flag className="w-5 h-5 text-blue-400" />,
    badge: "Challenging Era",
  },
  {
    year: "2025",
    title: "Glory & Achievements",
    description: "Meraih berbagai pencapaian penting, memenangkan kompetisi lokal, dan mempererat ikatan kekeluargaan.",
    icon: <Trophy className="w-5 h-5 text-blue-400" />,
    badge: "Milestone",
  },
  {
    year: "2026",
    title: "An Unconquered Legacy",
    description: "Menyongsong akhir masa studi dengan kepala tegak, siap meninggalkan jejak abadi sebagai satu generasi yang tak terkalahkan.",
    icon: <Star className="w-5 h-5 text-blue-400" />,
    badge: "Legacy",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="relative py-32 px-6 bg-[#050508] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 font-cinzel text-sm tracking-[0.3em] uppercase block mb-3">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-cinzel mb-6">
            The Path We Walked Together
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Setiap detik, cerita, dan perjuangan membentuk kita menjadi tak terkalahkan.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-blue-900/40 ml-4 md:ml-auto md:max-w-3xl space-y-12">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Glowing Dot on Line */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#050508] border border-blue-500/60 flex items-center justify-center group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
              </div>

              {/* Content Card */}
              <div className="p-8 rounded-2xl bg-[#0b0b10] border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] group-hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/60 border border-blue-800/40 rounded-full">
                    {item.badge}
                  </span>
                  <span className="font-cinzel text-slate-400 text-sm tracking-widest font-bold">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-cinzel text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}