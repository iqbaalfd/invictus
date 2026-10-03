export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#030712] border-t border-blue-950/40 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold tracking-widest text-white mb-4">
          INVICTUS
        </h2>
        <p className="text-slate-400 text-sm font-light tracking-wide mb-8">
          One Class. One Story. One Legacy.
        </p>
        <div className="w-12 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="text-slate-600 text-xs tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Invictus Generation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}