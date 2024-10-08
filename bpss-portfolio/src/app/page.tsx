"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Projecthome from "../components/project";
import { Queastions_Accordation } from "@/components/component/Queastions-Accordation";

export default function Home() {
  const words = ["Engineer", "Developer", "Coder", "Cypherpunk"];
  return (
    <>
      <div className="mt-10 overflow-hidden">
        <div className="flex flex-col w-screen items-center justify-center">
          <Image
            src="/avatar2.png"
            alt="img"

            width={260}
            height={160}
          />
          <h2 className="text-3xl font-bold tracking-tighter md:text-center sm:text-4xl md:text-5xl">Hi I'Am Bhanu</h2>
          <div className="text-[20px] md:text-[20px] lg:text-3xl mt-4 text-white font-normal inter-var text-center" >
            <p >
              Full Stack Software
            </p>
            <FlipWords words={words} />
          </div>
        </div>

      </div>
      <TracingBeam className="none" >
        <div className="z-10 py-6 relative pt-36">
          <div className="pt-4">
            <Queastions_Accordation />
          </div>
          <Projecthome />


        </div>
        <StarsBackground starDensity={0.00025} className="z-5" />
      </TracingBeam>
      <StarsBackground starDensity={0.00025} />
    </>
  );
}
