import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education"; // NEW
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
       <main className="pt-24 space-y-24">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education /> {/* Add here */}
      <Projects />
      <Contact />
      </main>
    </>
  );
}
