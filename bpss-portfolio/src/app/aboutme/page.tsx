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
        
        "Video Editing",
        "Adobe PRE-PRO",
        "Cap-Cut",
        "CANVA",
        "FIGMA",
        "NOTION",
        "Public Speaking",
        "Time Management",
        "Teamwork",
        "Problem Solving",
        "Content Creation",
        "Social Media MNG"
    ]
    return (
        <>
            <div className="w-[90vw] md:pt-24  mx-auto antialiased relative">
                <div>
                    <div className='flex justify-between'>
                        <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">Education</h1>
                        <button  className=" md:h-14 w-24 h-10 mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                            Resume
                        </button>
                    </div>
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
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
                            {
                                data.map((name) => (
                                    <button key={name} className="shadow-[0_0_0_3px_#000000_inset] md:px-6 py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center overflow-hidden transition duration-400">
                                        {name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="py-4 mb-8 px-2 md:px-6 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 " >
                        <h1 className="text-center mb-4 md:text-left text-2xl md:text-3xl">Tool's & Non Tech</h1>
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
                            {
                                tools.map((name) => (
                                    <button key={name} className=" overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-6 py-2 bg-transparent border border-gray-500  text-white rounded-lg text-sm font-bold transform hover:-translate-y-1 text-center transition duration-400">
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
                            <h1 className=" mb-4 text-left text-2xl md:text-3xl">PrepLeaf By Masai</h1>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                CAP | Full Stack Development | 2023-2024
                            </p>
                        </div>
                        <div className="">
                            <h1 className=" mb-4 text-left text-2xl md:text-3xl">Bachelor Degree | UG</h1>
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