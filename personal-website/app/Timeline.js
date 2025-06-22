import FadeIn from "./FadeIn";
import TimelineElements from "./TimelineElements"; 

export default function Timeline({ isDarkMode }) {
    return (
        <FadeIn id="timeline" className="overflow-y-auto text-center h-screen w-full snap-start flex flex-col items-center justify-center">
            <h2>My Journey</h2>
            {TimelineElements.map((element) => (
                
            ))}
        </FadeIn>
    );
}