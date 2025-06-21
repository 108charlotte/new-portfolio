import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Skills({ isDarkMode }) {
  const cardBg = isDarkMode ? "bg-gray-800 text-white" : "bg-zinc-200 text-zinc-900";
  return (
    <FadeIn id="skills" className={`rounded-lg p-6 ${cardBg} justify-center overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center`}>
      <h2 className="mb-4">Skills</h2>
      <div className="flex flex-col gap-y-4 items-start">
        <div className={`proficient flex flex-row gap-5 items-center justify-start rounded-lg px-6 py-4 ${cardBg}`}>
          <p className="w-24 font-semibold">Proficient</p>
          <Languages path="/python_logo.png" label="Python" />
          <Languages path="/html_logo.png" imgClassName="w-9 h-9" label="HTML" />
        </div>
        <div className="familiar flex flex-row gap-5 items-center justify-start bg-gray-800 rounded-lg px-6 py-4 mx-auto">
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

function Languages({ path, imgClassName, label }) {
  return (
    <Logo
      path={path}
      className="w-14 h-14 rounded-full border-4 border-blue-500 overflow-hidden flex items-center justify-center bg-white"
      imgClassName={imgClassName}
      label={label}
    />
  );
}

function Platforms({ path, label }) {
  return (
    <Logo
      path={path}
      className="w-12 h-12 rounded border-4 border-purple-500 overflow-hidden flex items-center justify-center bg-white rotate-45"
      imgClassName="-rotate-45 w-8 h-8"
      label={label}
      labelClassName="mt-3 sm:mt-0 sm:ml-4"
    />
  );
}

function Frameworks({ path, label }) {
  return (
    <Logo
      path={path}
      className="w-14 h-14 rounded border-4 border-green-600 overflow-hidden flex items-center justify-center bg-white"
      label={label}
    />
  )
}

function Logo({ path, className, imgClassName, label, labelClassName }) {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className={className}>
        <img src={path} alt={label || "Logo"} className={`object-contain ${imgClassName || "w-10 h-10"}`} />
      </div>
      <p className={`mt-1 sm:mt-0 sm:ml-2 text-gray-400 uppercase tracking-wide text-xs font-semibold ${labelClassName || ""}`}>{label}</p>
    </div>
  );
}