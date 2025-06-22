"use client"; 

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero(props) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  if (!hasAnimated) {
    return (
      <motion.section
        id="hero"
        className="overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 3 },
          y: { duration: 0.8 }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>
          Hi, I&apos;m <span className="name">Charlotte Woodrum</span>
        </h1>
        <h3 className="headline">
          Aspiring Software Engineer & AI Enthusiast
        </h3>
        <p className="summary text-center mt-2">
          I&apos;m a high school programmer who loves building projects and solving problems with code.
        </p>
        <a
          href="#projects"
          className="projects-button"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="contact-button inline-block px-3 py-0.5 mt-3 font-bold rounded transition"
          style={{
            border: "2px solid var(--accent-color)"
          }}
        >
          Get in Touch
        </a>
      </motion.section>
    );
  }

  return (
    <FadeIn id="hero" className="overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center">
      <h1>
        Hi, I&apos;m <span className="name">Charlotte Woodrum</span>
      </h1>
      <h3 className="headline">
        Aspiring Software Engineer & AI Enthusiast
      </h3>
      <p className="summary text-center mt-2">
        I&apos;m a high school programmer who loves building projects and solving problems with code.
      </p>
      <a
        href="#projects"
        className="projects-button"
      >
        View My Projects
      </a>
      <a
        href="#contact"
        className="contact-button inline-block px-3 py-0.5 mt-3 font-bold rounded transition"
        style={{
          border: "2px solid var(--accent-color)"
        }}
      >
        Get in Touch
      </a>
    </FadeIn>
  );
}