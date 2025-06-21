import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <FadeIn id="skills" className="justify-center overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center">
      <h2 className="mb-4">Skills</h2>
      <div className="flex flex-col gap-y-8 items-center w-full">
        <div className="proficient flex flex-row gap-5 items-center justify-start w-full max-w-lg">
          <p className="w-24 font-semibold">Proficient</p>
          <Languages path="/python_logo.png" />
          <Languages path="/html_logo.png" imgClassName="w-9 h-9" />
        </div>
        <div className="familiar flex flex-row gap-5 items-center justify-start w-full max-w-lg">
          <p className="w-24 font-semibold">Familiar</p>
          <Languages path="/css_logo.png" imgClassName="w-9 h-9" />
          <Languages path="/javascript_logo.png" imgClassName="w-7 h-7" />
          <Frameworks path="/flask_logo.svg" />
        </div>
        <div className="learning flex flex-row gap-5 items-center justify-start w-full max-w-lg">
          <p className="w-24 font-semibold">Exploring</p>
          <Frameworks path="/react_logo.svg" />
          <Platforms path="/godot_logo.svg" />
        </div>
      </div>
    </FadeIn>
  );
}

function Languages({ path, imgClassName }) {
  return (
    <Logo
      path={path}
      className="w-14 h-14 rounded-full border-4 border-blue-500 overflow-hidden flex items-center justify-center bg-white"
      imgClassName={imgClassName}
    />
  );
}

function Platforms({ path }) {
  return (
    <Logo
      path={path}
      className="w-12 h-12 rounded border-4 border-purple-500 overflow-hidden flex items-center justify-center bg-white rotate-45"
      imgClassName="-rotate-45 w-8 h-8"
    />
  );
}

function Frameworks({ path }) {
  return (
    <Logo path={path} className="w-14 h-14 rounded border-4 border-green-600 overflow-hidden flex items-center justify-center bg-white"/>
  )
}

function Logo({ path, className, imgClassName, label }) {
  return (
    <div className={className}>
      <img src={path} alt={label || "Logo"} className={`object-contain ${imgClassName || "w-10 h-10"}`} />
    </div>
  );
}