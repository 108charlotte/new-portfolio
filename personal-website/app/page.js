'use client'

import { useState, useEffect } from "react";
import '@fontsource/inter'; 

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import UIToggle from "./UIToggle"; 

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
}, [isDarkMode]); 

  return (
    <>
      <div className="fixed right-4 top-4 z-50">
        <UIToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </>
  );
}