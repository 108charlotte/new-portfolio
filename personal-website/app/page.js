'use client'

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react"; 
import '@fontsource/inter'; 

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience /> 
      <Skills />
      <Contact /> 
    </>
  );
}