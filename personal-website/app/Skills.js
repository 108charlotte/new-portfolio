import Image from "next/image";
import FadeIn from "./FadeIn";
import { Languages, Frameworks, Platforms } from "./SkillIcons";

export default function Skills({ isDarkMode }) {
  const cardBg = isDarkMode ? "bg-gray-800 text-white" : "bg-zinc-200 text-zinc-900";
  return (
    <FadeIn id="skills" className={`rounded-lg p-6 justify-center overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center`}>
      <h2 className="mb-4">Skills</h2>
      <div className="flex flex-col gap-y-4 items-start">
        <div className={`proficient flex flex-row gap-5 items-center justify-start rounded-lg px-6 py-4 ${cardBg}`}>
          <p className="w-24 font-semibold">Proficient</p>
          <Languages path="/python_logo.png" label="Python" />
          <Languages path="/html_logo.png" imgClassName="w-9 h-9" label="HTML" />
        </div>
        <div className={`familiar flex flex-row gap-6 items-center justify-start rounded-lg px-6 py-4 ${cardBg}`}>
          <p className="w-24 font-semibold">Familiar</p>
          <Languages path="/css_logo.png" imgClassName="w-9 h-9" label="CSS" />
          <Languages path="/javascript_logo.png" imgClassName="w-7 h-7" label="JavaScript" />
          <Frameworks path="/flask_logo.svg" label="Flask" />
        </div>
        <div className={`learning flex flex-row gap-6 items-center justify-start rounded-lg px-6 py-4 ${cardBg}`}>
          <p className="w-24 font-semibold">Exploring</p>
          <Frameworks path="/react_logo.svg" label="React" />
          <Platforms path="/godot_logo.svg" label="Godot" />
        </div>
      </div>
    </FadeIn>
  );
}