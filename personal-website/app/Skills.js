import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <FadeIn id="skills" className="overflow-y-auto h-screen w-full snap-start flex flex-col items-center justify-center">
        <h2>Skills</h2>
        <div className="icons_container">
        <p>Languages</p>
        <div className="icons">
          <Logo path="/python_logo.png" className="language_icon" />
          <Logo path="/html_logo.png" className="language_icon" />
          <Logo path="/css_logo.png" className="language_icon" />
          <Logo path="/javascript_logo.png" className="language_icon" />
        </div>
      </div>
      <div className="icons_container">
        <p>Frameworks</p>
        <div className="icons">
          <Logo path="/flask_logo.svg" className="framework_icon" />
          <Logo path="/react_logo.svg" className="framework_icon" />
        </div>
      </div>
      </FadeIn>
  );
}

function Logo({ path, className }) {
  return (
    <div className="icon_container">
      <Image src={path} width={50} height={50} alt="Logo" className={className} />
    </div>
  );
}