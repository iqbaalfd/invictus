"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function SecretCode() {
  return (
    <section id="code" className="relative py-32 px-6 bg-[#050508] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 rounded-3xl bg-gradient-to-b from-[#0b0b10] to-[#030712] border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className="w-14 h-14 rounded-2xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Lock className="w-6 h-6 text-blue-400" />
          </div>

          <span className="text-blue-400 font-cinzel text-xs tracking-[0.3em] uppercase block mb-3">
            The Code of Invictus
          </span>
          
          <h2 className="text-2xl md:text-4xl font-bold font-cinzel text-white mb-8 leading-snug">
            &ldquo;Invictus is not about never falling. It is about standing again together.&rdquo;
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-8">
            Di balik setiap tantangan terdapat kekuatan kolektif yang takkan pernah bisa dipatahkan. Inilah sumpah dan filosofi abadi generasi kita.
          </p>

          <div className="inline-block px-6 py-2 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-semibold tracking-widest text-blue-300 uppercase">
            Confidential Legacy
          </div>
        </motion.div>

      </div>
    </section>
  );
}