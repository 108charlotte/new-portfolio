import FadeIn from "./FadeIn";

export default function Contact({ isDarkMode }) {
    return (
        <FadeIn id="contact" className="overflow-y-auto text-center h-screen w-full snap-start flex flex-col items-center justify-center">
          <h2>Contact Me</h2>
            <p>Feel free to reach out to me about anything--I&apos;m open to questions, project ideas, or just saying hi! </p>
            <p>Email: <a className="email underline hover:no-underline transition-colors font-medium" href="mailto: charlottewoodrum@westminster.net">charlottewoodrum@westminster.net</a></p>
            <p className="mt-4">Connect with me on <a className="email underline hover:no-underline transition-colors font-medium" href="www.linkedin.com/in/charlotte-woodrum-557900370">LinkedIn</a>!</p>
        </FadeIn>
    )
}