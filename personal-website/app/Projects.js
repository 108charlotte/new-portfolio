import Image from 'next/image';
import FadeIn from "./FadeIn";
import { motion } from 'framer-motion'; 
import { Languages, Frameworks, Platforms } from "./SkillIcons";

const projects = [
    {
        title: "JARVIS: Python AI Assistant",
        description: "A Python voice assistant with an engaging personality that answers questions, tracks tasks, and keeps you accountable in focus mode using OpenAI, Flask, and Vosk.",
        image: "/JARVIS_image_demo.png",
        github: "https://github.com/108charlotte/python-voice-assistant", 
        demo: "https://python-voice-assistant.onrender.com/", 
        latest_updates: "Created first deployment! Still working through a lot of bugs, so let me know if you encounter any strange behavior! ", 
        logos: ["Python", "Javascript", "Flask", "HTML", "CSS"]
    }, 
    {
        title: "Web Analytics",
        description: "A chrome extension that tracks your web activity and provides insights in the form of a pie chart",
        image: "/web_analytics.png",
        github: "https://github.com/108charlotte/webAnalytics/tree/v2.1", 
        demo: "https://github.com/108charlotte/webAnalytics/releases/tag/v2.1", 
        demo_notes: "This extension is not yet available on the web store yet, so the demo link will take you to a github release with a .zip file and instructions for installation. ", 
        latest_updates: "Re-submitted to the Chrome Web Store, awaiting response (typically timeline is about 1-2 weeks)", 
        logos: ["Javascript", "HTML", "Flask"]
    },
    {
        title: "Raspberry Pi Productivity Monitor",
        description: "A monitor mounted above my desk powered by a Raspberry Pi with a custom display to enhance my productivity. ",
        image: "/Raspberry-pi-monitor.jpg",
        github: "https://github.com/108charlotte/magic-mirror", 
        demo: "https://108charlotte.github.io/magic-mirror/", 
        latest_updates: "Currently working on re-submitting for OAuth verification to get rid of scary \"unprotected\" warning when user tries to grant access to their Google Calendar. ", 
        logos: ["HTML", "CSS", "Javascript"]
    }, 
    {
      /* extra: "Sneak Peek! ", */
        title: "Chef Crawler", 
        description: "A godot roguelike game in which the player gathers ingredients and combines them to create dishes which provide power-ups or temporarily disable them. ", 
        github: "https://github.com/108charlotte/Chef-Crawler", 
        image: "/chef_crawler_image.png", 
        latest_updates: "Deployed on itch!", 
        demo: "https://108charlotte.itch.io/chef-crawler", 
        logos: ["Godot"]
    }, 
    {
      extra: "Early WIP!", 
      title: "FRC Object Detection Model", 
      description: "A custom CNN created using Pytorch for game piece classification for the FRC 2025 season game \"Reefscape\"", 
      image: "/neural_network_screenshot.png", 
      latest_updates: "Created early model! Struggling with training due to dataset imbalances.", 
      demo: "https://colab.research.google.com/drive/1fgtDtVT_hqawJ50hEbn7ggg139AvaAN6?usp=sharing", 
      logos: ["Pytorch"]
    }
]

const logoMap = {
  Python: <Languages path="/python_logo.svg" label="Python" size="w-8 h-8" imgClassName="w-5 h-5" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  HTML: <Languages path="/html_logo.svg" label="HTML" size="w-8 h-8" imgClassName="w-4.5 h-4.5" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  CSS: <Languages path="/css_logo.svg" label="CSS" size="w-8 h-8" imgClassName="w-4.5 h-4.5" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  Javascript: <Languages path="/javascript_logo.svg" label="JavaScript" size="w-8 h-8" imgClassName="w-4 h-4" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  Flask: <Frameworks path="/flask_logo.svg" label="Flask" size="w-8 h-8" imgClassName="w-5 h-5" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  React: <Frameworks path="/react_logo.svg" label="React" size="w-8 h-8" imgClassName="w-6 h-6" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  Godot: <Platforms path="/Godot.png" size="w-8 h-8" imgClassName="w-5 h-5 -rotate-45" labelClassName="mt-2" textSize="text-[10px]" labelMargin="mt-0" forceColumn={true} width="w-14" />,
  Pytorch: <Frameworks path="/Pytorch.png"/>
};


export default function Projects({ isDarkMode }) {
    const title_color = isDarkMode ? "text-white" : "text-zinc-900";
    const description_color = isDarkMode ? "text-gray-300" : "text-zinc-700";
    const latest_updates_color = isDarkMode ? "text-yellow-400" : "text-yellow-600";
    const extra_color = isDarkMode ? "text-pink-400" : "text-pink-600";
    const demo_notes_color = isDarkMode ? "text-gray-400" : "text-gray-600";
    
    return (
        <FadeIn id="projects" className="h-screen w-full snap-start flex flex-col items-center justify-start">
            <h2 className="mb-4 mt-2 md:mt-14 sm:mt-14">Projects</h2>
            <div className="flex flex-row overflow-x-auto gap-6 w-full px-4 pb-4 snap-x snap-mandatory">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => {
                          if (project.demo) window.open(project.demo, "_blank", "noopener,noreferrer");
                        }}
                        role="link"
                        tabIndex={0}
                        className={`
                          rounded-lg shadow-lg p-4
                          w-[16rem] h-[30rem]
                          sm:w-[32rem] sm:h-100
                          md:w-[32rem] md:h-100
                          flex-shrink-0 flex flex-col sm:flex-row items-center gap-4 snap-center
                          ${isDarkMode ? "bg-gray-800 text-white" : "bg-zinc-200 text-zinc-900"}
                        `}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <div className="w-full sm:w-2/5 h-80 sm:h-60 relative flex items-center justify-center mb-2 sm:mb-0">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-top rounded-xl"
                              sizes="180px"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full bg-gray-700 rounded-xl text-white text-lg font-semibold">
                              Coming Soon
                            </div>
                          )}
                        </div>
                        <div className="w-full sm:w-3/5 flex flex-col h-full justify-center">
                            {project.extra && (
                                <p className={`text-xs font-bold uppercase mb-1 ${extra_color}`}>{project.extra}</p>
                            )}
                            <h3 className={`text-lg font-semibold ${title_color}`}>{project.title}</h3>
                            <p className={`text-sm mt-1 mb-2 ${description_color}`}>{project.description}</p>
                            <p className={`text-xs font-semibold mb-2 ${latest_updates_color}`}>
                              Latest Updates: {project.latest_updates}
                            </p>
                            {project.demo && (
                              <p className={`text-xs italic mb-4 ${demo_notes_color}`}>
                                Click anywhere for demo
                              </p>
                            )}
                            {project.demo_notes && (
                              <p className={`text-xs mb-4 ${demo_notes_color}`}>Demo Notes: {project.demo_notes}</p>
                            )}
                            <div className="mb-2 flex flex-row flex-wrap gap-2">
                              {project.logos.map((logo, idx) => (
                                <span key={idx}>{logoMap[logo]}</span>
                              ))}
                            </div>
                            {project.github && (
                              <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="email underline hover:no-underline text-sm mt-2"
                              onClick={e => e.stopPropagation()}
                              >
                              Github Repo
                              </a>
                            )}
                        </div>
                    </motion.div>
                ))}

            </div>
        </FadeIn>
    )
}