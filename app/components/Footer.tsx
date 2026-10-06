  "use client";

  import Image from "next/image";

  export default function Footer() {
    return (
      <footer className="relative py-8 md:py-10 px-6 md:px-12 bg-[#050508] overflow-hidden">
        
        {/* Garis Gradasi Tipis Pemisah Section (Fade Out di Kiri-Kanan) */}
        <div className="absolute top-0 left-0 w-full px-6 md:px-12 max-w-7xl mx-auto right-0">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        {/* --- BACKGROUND GLOW AMBIENT (Menyelaraskan dengan section lainnya) --- */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 left-1/4 w-[300px] h-[120px] bg-blue-700/10 rounded-full blur-[90px]" />
        {/* ---------------------------------------------------------------------- */}

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Logo Image: Ukuran besar (w-36 h-36) tapi diberi negative margin vertikal (-my-4) 
              agar sisa ruang kosong bawaan file kotak gambarnya ketarik dan tidak bikin section jadi longgar */}
          <div className="relative w-36 h-36 -my-4">
            <Image
              src="/logoinvictus.png"
              alt="Invictus Logo"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            />
          </div>
          
          <p className="text-slate-400 text-xs md:text-sm font-light tracking-widest uppercase mb-5">
            One Class. One Story. One Legacy.
          </p>

          {/* Sosial Media Icons (Custom SVG) */}
          <div className="flex items-center gap-4 mb-5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 transition-all duration-300"
              aria-label="Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.708V8z"/>
              </svg>
            </a>
          </div>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mb-4"></div>

          <p className="text-slate-500 text-[11px] tracking-widest uppercase font-light">
            &copy; {new Date().getFullYear()} Invictus. All Rights Reserved.
          </p>

        </div>
      </footer>
    );
  }