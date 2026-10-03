"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Kamu bisa ganti data nama dan path foto anggota kelasmu nanti di sini
const membersList = [
  { name: "Ahmad Fauzi", role: "Class Leader", image: "/images/member-1.jpg" },
  { name: "Siti Rahma", role: "Vice Leader", image: "/images/member-2.jpg" },
  { name: "Rizky Pratama", role: "Core Member", image: "/images/member-3.jpg" },
  { name: "Dewi Lestari", role: "Core Member", image: "/images/member-4.jpg" },
  { name: "Fajar Nugraha", role: "Core Member", image: "/images/member-5.jpg" },
  { name: "Nadia Putri", role: "Core Member", image: "/images/member-6.jpg" },
];

export default function Members() {
  return (
    <section id="members" className="relative py-32 px-6 bg-[#030712] overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-cinzel text-sm tracking-[0.3em] uppercase block mb-3">
            The People Behind Invictus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-cinzel mb-6">
            Faces of The Unconquered
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Hover over each portrait to reveal the vibrant spirit behind our shared legacy.
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersList.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-[400px] rounded-2xl overflow-hidden bg-slate-900 border border-blue-900/30 shadow-xl"
            >
              {/* Image Container with Grayscale to Color Hover Effect */}
              <div className="absolute inset-0 w-full h-full bg-slate-950">
                {/* Placeholder jika foto belum ada (menggunakan div warna gelap sementara) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-slate-900/40 to-transparent z-10"></div>
                
                {/* Jika nanti sudah ada fotonya di public/images/ */}
                {/* <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" /> */}
                
                {/* Dummy visual placeholder sementara sebelum ada foto asli */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-cinzel text-4xl group-hover:text-blue-600/30 transition-colors duration-500">
                  INVICTUS
                </div>
              </div>

              {/* Member Info overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase block mb-1">
                  {member.role}
                </span>
                <h3 className="text-white text-xl font-bold font-cinzel tracking-wide">
                  {member.name}
                </h3>
              </div>

              {/* Electric border glow on hover */}
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}