"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const Certifications = dynamic(() => import("@/components/Certifications/Certifications"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Contact = dynamic(() => import("@/components/Contact/Contact"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

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
        <Contact />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}

