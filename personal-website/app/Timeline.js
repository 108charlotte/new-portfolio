import FadeIn from "./FadeIn";
import TimelineElements from "./TimelineElements"; 
import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
};

function TimelineCard({ element, isDarkMode }) {
  return (
    <motion.div
      className={`flex m-4 relative border sm:w-3/4 mx-auto
        ${isDarkMode
          ? "border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10"
          : "border-gray-400 rounded-lg px-8 py-4 bg-zinc-200 w-full text-center z-10"
        }
        flex-shrink-0 z-10
      `}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="hidden items-start w-44 pt-0.5 relative sm:flex mr-8">
        <div className={`bg-${element.color}-500 w-10 p-1 rounded-lg z-20`}>{element.icon}</div>
        <div className="ml-2 w-4/5 text-gray-500">{element.date}</div>
      </div>
      <div>
        <div className="text-x1 font-bold tracking-wide">{element.title}</div>
        <div>
          <span className="sm:hidden text-gray-500"> {element.date} </span>
        </div>
        <div className="mb-4 text-left">{element.description}</div>
        <div className="flex flex-wrap justify-center">
          {element.tech.map((tech, index) => (
            <span key={index} className={`rounded-xl px-2 py-1 text-sm m-1 ${isDarkMode ? "bg-gray-900" : "bg-gray-300"}`}>{tech}</span>
          ))}
        </div>
        <div className={`bg-${element.color}-500 w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}>{element.icon}</div>
        {element.buttonText && (
          <a
            className={`bg-${element.color}-500 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer text-gray-900 hover:text-zinc-50 mt-4 block`}
            href={element.buttonLink}>
            {element.buttonText}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline({ isDarkMode }) {
    const wrapperRef = useRef(null);
    const [wrapperHeight, setWrapperHeight] = useState(0);

    useLayoutEffect(() => {
        if (!wrapperRef.current) return;

        // Initial set
        setWrapperHeight(wrapperRef.current.scrollHeight);

        // Observe for changes
        const resizeObserver = new window.ResizeObserver(() => {
            setWrapperHeight(wrapperRef.current.scrollHeight);
        });
        resizeObserver.observe(wrapperRef.current);

        // Clean up
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <FadeIn
            id="timeline"
            className="h-screen w-full snap-start flex flex-col items-center justify-center"
        >
            <motion.h2
                className="mb-4 mt-14 md:mt-14 sm:mt-14"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                My Journey
            </motion.h2>
            <div
                className="flex flex-col gap-6 w-full px-4 pb-4 min-h-full overflow-y-auto relative"
            >
                {/* The line uses the inner wrapper's height */}
                <div
                  className="absolute left-1/2 top-0 w-0.5 bg-gray-400 opacity-30 -translate-x-1/2 z-0"
                  style={{ height: `${wrapperHeight + 50}px` }}
                ></div>
                {/* Inner wrapper to measure */}
                <div ref={wrapperRef}>
                  {TimelineElements.map((element, idx) => (
                    <TimelineCard
                      key={element.id}
                      element={element}
                      isDarkMode={isDarkMode}
                    />
                  ))}
                </div>
            </div>
        </FadeIn>
    );
}