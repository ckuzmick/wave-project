"use client"

import Image from "next/image";
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { useEffect } from "react";

export default function Home() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scroll = window.scrollY;

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scroll = window.scrollY;
    console.log(scroll);
    document.getElementById("desmos-graph").style.left = -50 - scroll/5 + "px";
    document.getElementById("desmos-graph-2").style.right = -50 - scroll/5 + "px";
  };

  return (
    <main>
      <section id="title-section">
        <Image
          src={"desmos-graph.svg"}
          width={vw*1.1}
          height={200}
          style={{
            position: "absolute",
            left: -50 + scroll/2,
            top: 100,
            overflow: "hidden",
            transition: "0.1s",
          }}
          id="desmos-graph"
        />
        <Image
          src={"desmos-graph.svg"}
          width={vw*1.1}
          height={200}
          style={{
            position: "absolute",
            right: -50 + scroll/2,
            top: 625,
            overflow: "hidden",
            transition: "0.1s",
          }}
          id="desmos-graph-2"
        />
        <h1 className="title-text" >Radio Waves</h1>
        <h2 className="title-subtitle">An Overview of Frequency Modulation, EM Waves, and Their Applications</h2>
        <p className="title-byline">By Conrad, Albert, Anurag, and Daniel</p>
      </section>
      <section id="introduction-section">
      </section>
    </main>
  );
}
