import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import About from "@/components/sections/About/page";
import Contact from "@/components/sections/Contact/page";
import Hero from "@/components/sections/Hero/page";
import Projects from "@/components/sections/Projects/page";
import Skills from "@/components/sections/Skills/page";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-black">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}