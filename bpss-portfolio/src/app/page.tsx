"use client"
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Particles from "@/components/particles";
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "My Ai", href: "/My-Ai" },
  { name: "About-Me", href: "/About-Me" },
  { name: "Contact", href: "/Connect-With-Me" }
];

// Dynamically import FlipWords to disable SSR
const FlipWordsNoSSR = dynamic(() => import("@/components/ui/flip-words"), { ssr: false });

export default function SpotlightPreview() {
  const words = ["नमस्कार", "Konnichiwa", "Hola Amigo", "Bonjour"];
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text ">
        <FlipWordsNoSSR words={words} />
        , I'm <br /> Bhanu Pratap Singh
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
            Blending commercial acumen with cutting-edge technical skills. Passionate about <br />creating impactful digital solutions with modern Tech stack and technologies.
        </h2>
      </div>
    </div>
  );
};