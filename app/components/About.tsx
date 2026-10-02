"use client";

import { motion } from "framer-motion";
import { Shield, Users, Calendar, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Calendar className="w-6 h-6 text-blue-400" />, label: "Tahun Berdiri", value: "2023 — 2026" },
    { icon: <Shield className="w-6 h-6 text-blue-400" />, label: "Jurusan / Kelas", value: "Informatics & Science" },
    { icon: <Users className="w-6 h-6 text-blue-400" />, label: "Jumlah Anggota", value: "32 Unconquered" },
    { icon: <Award className="w-6 h-6 text-blue-400" />, label: "Motto Kelas", value: "One Generation, Infinite Legacy" },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-[#050508] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-cinzel text-sm tracking-[0.3em] uppercase block mb-3">
            Our Identity
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-cinzel mb-6">
            The Essence of Invictus
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Invictus represents a generation that stands undefeated — united by memories, challenges, and dreams that shape our journey through time.
          </p>
        </motion.div>

        {/* Organization Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-[#0b0b10] border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-800/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-2">
                  {item.label}
                </h3>
                <p className="text-white text-lg font-semibold font-cinzel tracking-wide">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}