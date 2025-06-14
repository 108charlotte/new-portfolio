'use client'

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react"; 
import '@fontsource/inter'; 

function Logo({ path, className }) {
  return (
    <Image src={path} width={25} height={25} alt="Python Logo" className={className} />
  );
}

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Charlotte Woodrum</h1>
      <p>I am a high schooler who's passionate about...</p>
      <div className="icon_container">
        <p>Languages</p>
        <div className="icons">
          <Logo path="/python_logo.png" className="language_icon" />
          <Logo path="/html_logo.png" className="language_icon" />
          <Logo path="/css_logo.png" className="language_icon" />
          <Logo path="/javascript_logo.png" className="language_icon" />
        </div>
      </div>
      <div className="icon_container">
        <p>Frameworks</p>
        <div className="icons">
          <Logo path="/flask_logo.svg" className="framework_icon" />
          <Logo path="/react_logo.svg" className="framework_icon" />
        </div>
      </div>
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <br></br>
      <Link href="/projects">Projects</Link>
    </div>
  );
}