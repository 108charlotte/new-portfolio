'use client'

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react"; 
import '@fontsource/inter'; 

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}