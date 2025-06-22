import FadeIn from "./FadeIn";
import TimelineElements from "./TimelineElements"; 
import Image from "next/image";

export default function Timeline({ isDarkMode }) {
    return (
        <FadeIn id="timeline" className="overflow-y-auto text-center h-screen w-full snap-start flex flex-col items-center justify-center">
            <h2>My Journey</h2>
            <div className="flex flex-col justify-center items-center pb-8 sm:text-lg">
            {TimelineElements.map((element) => {
                const colors = [
                    "bg-red-500", 
                    "bg-blue-500", 
                    "bg-yellow-500", 
                    "bg-purple-500", 
                    "bg-green-500", 
                    "bg-orange-500", 
                ]
                const color = `bg-${element.color}-500`;
                return <div
                key={element.id}
                className={`flex m-4 relative border sm:w-96
                ${isDarkMode ? ("border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10") : ("border-gray-400 rounded-lg px-8 py-4 bg-zinc-200 w-full text-center z-10")}`}>
                    <div></div>
                    <div></div>
                    <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                        <div className="w-4/5 text-gray-500">{element.date}</div>
                        <div></div>
                        <div className={`${color} w-10 p-1 rounded-lg z-20`}>{element.icon}</div>
                        <div></div>
                    </div>
                    <div>
                        <div className="text-x1 font-medium">{element.title}</div>
                        <div>
                            <span className="sm:hidden"> {element.date} </span>
                        </div>
                        <div className="mb-4 text-left">{element.description}</div>
                        <div className="flex flex-wrap justify-center">{element.tech.map((tech, index) => {
                            return <span key={index} className={`rounded-xl px-2 py-1 text-sm m-1 ${isDarkMode ? ("bg-gray-900") : ("bg-gray-400")}`}>{tech}</span>
                        })}</div>
                        <div className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}>{element.icon}</div>
                        <a>{element.buttonText}</a>
                    </div>
                </div>
            })}
            </div>
        </FadeIn>
    );
}