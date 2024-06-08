import { WobbleCard } from "@/components/ui/wobble-card"
import Link from "next/link"
import Image from "next/image"
function Aboutme() {
    const data = [
        "HTML",
        "CSS",
        "Java Script",
        "React",
        "Mongoose",
        "MongoDB",
        "Express",
        "Tailwind",
        "Node-JS",
        "NEXT JS (L)",
        "Git",
        "GitHub",
        "ChakraUI",
        "Accenternity UI",
        "ShadCN",
        "AppWrite BaaS",
        "Vercel",
        "AWS",


    ]
    const tools = [
        "Adobe PRE-PRO",
        "CANVA",
        "FIGMA",
        "NOTION",
        "SEO",
        "Content",
        "Cap-Cut",
        "Video Editing",
    ]
    return (
        <>
            <div className="w-[90vw] md:pt-24  mx-auto antialiased relative">
                <div>
                    <h1 className=" text-center md:text-left text-3xl md:text-5xl">Education</h1>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Welcome to my Education and Skills page! Here, you'll discover the foundation of my knowledge and the skills I've acquired through rigorous academic training and hands-on experience. This section highlights my educational background, technical proficiencies, and continuous commitment to professional development.
                    </p>
                </div>
                <br />
                <hr />
                <br />
                <h1 className=" text-center mb-6 md:text-left text-3xl md:text-5xl">What I Know</h1>                <div className="md:flex gap-4 md:space-x-8">
                    <div className="py-4 mb-8 px-2 md:px-6 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 " >
                        <h1 className="text-center mb-4 md:text-left text-2xl md:text-3xl">Technical Skill's </h1>
                        <div className="grid md:grid-cols-3 grid-cols-3 gap-4 ">
                            {
                                data.map((name) => (
                                    <button className="shadow-[0_0_0_3px_#000000_inset] md:px-6 py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center overflow-hidden transition duration-400">
                                        {name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="py-4 mb-8 px-2 md:px-6 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 " >
                        <h1 className="text-center mb-4 md:text-left text-2xl md:text-3xl">Tool's & Non Tech</h1>
                        <div className="grid md:grid-cols-3 grid-cols-3 gap-4 ">
                            {
                                tools.map((name) => (
                                    <button className=" overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-6 py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                                        {name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <h1 className=" text-center mb-6 md:text-left text-3xl md:text-5xl">Education Academic's</h1>

                <div className="md:flex gap-4 md:space-x-8">
                    <div className="py-4 md:w-[90vw] mb-8 px-6 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 " >
                        <div className="mb-6">
                            <h1 className="text-center mb-4 md:text-left text-2xl md:text-3xl">PrepLeaf By Masai</h1>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                CAP | Full Stack Development | 2023-2024
                            </p>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-center mb-4 md:text-left text-2xl md:text-3xl">Bachelor Degree | UG</h1>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                Sanatan Dharma Government Collage, Beawar | B-Com | 2023-2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutme