import Image from 'next/image';
import FadeIn from "./FadeIn";
import { motion } from 'framer-motion'; 

const projects = [
    {
        title: "JARVIS: Python AI Assistant",
        description: "A Python voice assistant with an engaging personality that answers questions, tracks tasks, and keeps you accountable in focus mode using OpenAI, Flask, and Vosk.",
        image: "/JARVIS_image_demo.png",
        github: "https://github.com/108charlotte/python-voice-assistant", 
        demo: "https://python-voice-assistant.onrender.com/"
    }, 
    {
        title: "Web Analytics",
        description: "A chrome extension that tracks your web activity and provides insights in the form of a pie chart",
        image: "/web_analytics.png",
        github: "https://github.com/108charlotte/webAnalytics/tree/v2.1", 
        demo: "https://github.com/108charlotte/webAnalytics/releases/tag/v2.1"
    },
    {
        title: "Raspberry Pi Productivity Monitor",
        description: "A monitor mounted above my desk powered by a Raspberry Pi with a custom display to enhance my productivity. ",
        image: "/Raspberry-pi-monitor.jpg",
        github: "https://github.com/108charlotte/magic-mirror", 
        demo: "https://108charlotte.github.io/magic-mirror/"
    }
]


export default function Projects() {
    return (
        <FadeIn id="projects" className="h-screen w-full snap-start flex flex-col items-center justify-start">
            <h2 className="mb-4 mt-18">Projects</h2>
            <div className="flex flex-row overflow-x-auto gap-6 w-full px-4 pb-4 snap-x snap-mandatory">
                {projects.map((project, idx) => (
                    <motion.a
                        key={idx}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          bg-gray-800 rounded-lg shadow-lg p-4
                          w-[16rem] h-[26rem]              // mobile
                          sm:w-[32rem] sm:h-72             // desktop: 32rem wide, 18rem tall
                          flex-shrink-0 flex flex-col sm:flex-row items-center gap-4 snap-center
                        "
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <div className="w-full sm:w-2/5 h-80 sm:h-60 relative flex items-center justify-center mb-2 sm:mb-0">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-top rounded-xl" // Change to rounded-xl or rounded-2xl
                              sizes="180px"
                            />
                        </div>
                        <div className="w-full sm:w-3/5 flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                            <p className="text-sm text-gray-300 mt-1 mb-2">{project.description}</p>
                            <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="email underline hover:no-underline text-sm mt-2"
                            onClick={e => e.stopPropagation()}
                            >
                            Github Repo
                            </a>
                        </div>
                    </motion.a>
                ))}

            </div>
        </FadeIn>
    )
}