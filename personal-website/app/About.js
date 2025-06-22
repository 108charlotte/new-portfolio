import FadeIn from "./FadeIn";

export default function About({ isDarkMode }) {
  return (
    <FadeIn id="about" className="h-screen w-full snap-start flex flex-col items-center justify-center overflow-y-auto">
      <h2>About Me</h2>
      <p className="max-w-2xl text-center">
        At school, I am a programmer for Westminster&apos;s FIRST robotics team, 2415, and a Mu Alpha Theta executive council member.
        On my own time, I am a passion-driven programmer who loves to build cool projects!
      </p>
      <p className="max-w-2xl text-center mt-4">
        I believe in learning by doing. After months of studying programming online, I realized that endless courses weren’t helping me create unique, impressive projects.
        So, I chose to switch to a project-based approach--after only a few weeks, it transformed my growth—I began building projects that truly interested me and, along the way, learned to use powerful new frameworks and tools.
        Now, I&apos;m excited to share my journey and show the world how rewarding it is to pursue your own ideas!
      </p>
    </FadeIn>
  );
}