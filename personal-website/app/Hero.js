import {motion} from "framer-motion"; 

export default function Hero({ isDarkMode }) {
  const button = isDarkMode
    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-300"
    : "bg-zinc-900 text-zinc-100 hover:bg-zinc-600";

  return (
    <motion.section
      id="hero"
      className={`overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center`}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 3 },
        y: { duration: 0.8 }
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1>
        Hi, I'm <span className="name">Charlotte Woodrum</span>
      </h1>
      <h3 className="headline">
        Aspiring Software Engineer & AI Enthusiast
      </h3>
      <p className="summary text-center">
        I’m a high school programmer who loves building projects and solving problems with code.
      </p>
      <a
        href="#projects"
        className={`projects-button inline-block px-3 py-0.5 mt-2 font-bold rounded transition ${button}`}
      >
        View My Projects
      </a>
      <a
        href="#contact"
        className={`contact-button inline-block px-3 py-0.5 mt-3 border-1 font-bold rounded transition ${button}`}
      >
        Get in Touch
      </a>
    </motion.section>
  );
}