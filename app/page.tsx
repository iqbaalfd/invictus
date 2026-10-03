import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Members from "@/app/components/Members";
import Timeline from "@/app/components/Timeline";
import Gallery from "@/app/components/Gallery";
import SecretCode from "@/app/components/SecretCode";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050508] min-h-screen text-white relative selection:bg-blue-500 selection:text-white">
      {/* Website Utama (Tanpa Intro Overlay) */}
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Timeline />
      <Gallery />
      <SecretCode />
      <Footer />
    </main>
  );
}