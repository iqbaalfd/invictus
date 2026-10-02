import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home() {
  return (
    <main className="bg-[#050508] min-h-screen text-slate-100">
      <Navbar />
      <Hero />
      <About />
      
      {/* Placeholder section berikutnya */}
      <section id="members" className="h-screen flex items-center justify-center border-t border-slate-900">
        <h2 className="font-cinzel text-3xl text-blue-400">Next Section: Members...</h2>
      </section>
    </main>
  );
}