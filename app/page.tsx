import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Comtact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}
