"use client"

import { useState, useEffect, useRef } from 'react';
import '@fontsource/inter'; 

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import UIToggle from "./UIToggle"; 

function SmoothFollower({ isDarkMode }) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    window.addEventListener('mousemove', handleMouseMove);
    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    const animate = () => {
      const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
      };
      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );
      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );
      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Choose colors based on mode
  const color = isDarkMode ? "#fff" : "#171717";

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className="absolute rounded-full"
        style={{
          background: color,
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          border: `1px solid ${color}`,
          width: isHovering ? '44px' : '28px',
          height: isHovering ? '44px' : '28px',
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    </div>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]); 

  return (
    <>
      <SmoothFollower isDarkMode={isDarkMode} />
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