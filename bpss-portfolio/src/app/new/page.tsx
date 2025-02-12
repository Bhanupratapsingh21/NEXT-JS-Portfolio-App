"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";

// Dynamically import FlipWords to disable SSR
const FlipWordsNoSSR = dynamic(() => import("@/components/ui/flip-words"), { ssr: false });

export default function SpotlightPreview() {
    const words = ["नमस्कार", "Hello", "Konnichiwa", "Hola Amigo", "Bonjour"];

    // State to control when FlipWords should appear
    const [showFlipWords, setShowFlipWords] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowFlipWords(true), 2000); // Delay 2s
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    return (
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 max-w-7xl gap-8  flex justify-center flex-col items-center mx-auto relative z-10 w-full pt-20 md:pt-0">
                <div className="text-neutral-500 cursor-pointer gap-4 max-w-lg mx-auto my-2 text-sm text-center relative z-10 flex justify-center items-center">
                    <Link href={"/projects"} >Projects</Link>
                    <Link href={"/My-Ai"} >My-AI</Link>
                    <Link href={"/About-Me"} >About-Me</Link>
                    <Link href={"/Connect-With-Me"} >Contact</Link>

                </div>
                <h1 className="text-4xl md:text-7xl font-black text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {showFlipWords ? <FlipWordsNoSSR words={words} /> : "नमस्कार"}
                    , I'm <br /> Bhanu Pratap Singh
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Blending commercial acumen with cutting-edge technical skills. Passionate about creating impactful digital solutions with modern Tech stack and technologies.
                </p>
            </div>
            <StarsBackground starDensity={0.00025} className="z-5" />
        </div>
    );
}
