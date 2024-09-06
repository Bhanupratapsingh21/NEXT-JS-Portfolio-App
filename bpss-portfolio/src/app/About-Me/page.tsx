import { WobbleCard } from "@/components/ui/wobble-card"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline } from "@/components/ui/timeline";

const data = [
    {
        title: "2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/templates/startup-1.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-2.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-3.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-4.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Early 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    I usually run out of copy, but when I see content this big, I try to
                    integrate lorem ipsum.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Lorem ipsum is for people who are too lazy to write copy. But we are
                    not. Here are some more example of beautiful designs I built.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Changelog",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Deployed 5 new components on Aceternity today
                </p>
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Card grid component
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Startup template Aceternity
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Random file upload lol
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Himesh Reshammiya Music CD
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Salman Bhai Fan Club registrations open
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
];
function Aboutme() {

    const techstack = [
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
                <Tabs defaultValue="Education" className="w-[90vw]">
                    <TabsList>
                        <TabsTrigger value="Education">Education & Skill's</TabsTrigger>
                        <TabsTrigger value="Experience">Experience</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Education">
                        <div>
                            <div className='flex justify-between'>
                                <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">Education</h1>
                                <button className=" md:h-14 w-24 h-10 mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
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
                                        techstack.map((name) => (
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
                    </TabsContent>
                    <TabsContent value="Experience">
                        <div>
                            <div className='flex justify-between'>
                                <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">Experience</h1>
                                <button className=" md:h-14 w-24 h-10 mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                                    Resume
                                </button>
                            </div>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                Welcome to my Experience page! Here, you'll find a detailed overview of my professional journey, showcasing the roles I've undertaken, the projects I've led, and the impact I've made in various domains. This section illustrates my practical experience, the challenges I've overcome, and the growth I've achieved through diverse and dynamic work environments. Explore the milestones that have shaped my career and the contributions I've made to the field.                            </p>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="w-full">
                            <Timeline data={data} />
                        </div>
                    </TabsContent>
                </Tabs>

            </div>
        </>
    )
}
export default Aboutme
