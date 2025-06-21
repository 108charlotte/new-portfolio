import Image from 'next/image';
import FadeIn from "./FadeIn";

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
            <div className="flex flex-row overflow-x-auto gap-6 w-full px-4 pb-4">
                {projects.map((project, idx) => (
                    <a key={idx} href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-lg shadow-lg p-4 w-70 flex-shrink-0 flex flex-col justify-between">
                        <div className="w-full h-40 relative mb-3">
                            <Image src={project.image} alt={project.title} fill className="object-contain rounded" sizes="256px"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="email underline hover:no-underline text-sm" onClick={e => e.stopPropagation()}>Github Repo</a>
                    </a>
                ))}

            </div>
        </FadeIn>
    )
}