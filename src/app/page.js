"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Certifications from "@/components/Certifications/Certifications";
import Projects from "@/components/Projects/Projects";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <ScrollReveal direction="up" distance={60} duration={0.8}>
        <About />
      </ScrollReveal>
      
      <ScrollReveal direction="up" distance={60} duration={0.8}>
        <Skills />
      </ScrollReveal>
      
      <ScrollReveal direction="up" distance={60} duration={0.8}>
        <Certifications />
      </ScrollReveal>
      
      <ScrollReveal direction="up" distance={60} duration={0.8}>
        <Projects />
      </ScrollReveal>
      
      <ScrollReveal direction="up" distance={60} duration={0.8}>
        <Blog />
      </ScrollReveal>
      
      <ScrollReveal direction="up" distance={60} duration={0.8}>
        <Contact />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}
