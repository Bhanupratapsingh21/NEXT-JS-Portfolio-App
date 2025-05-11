import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import categories from "@/techstack";
import data from "@/expriencedata";

const AboutMePage = () => {
    return (
        <div className="min-h-screen md:pt-32 pt-20  text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl">
                            <Image
                                src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1746894816/ChatGPT_Image_May_9_2025_10_45_03_PM_iffkxs.png" // Replace with your image path
                                alt="Profile Picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    {/* Spoken Languages */}
                    <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Spoken Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">English</span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Hindi</span>
                            {/* Add more languages as needed */}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                        {Object.entries(categories).map(([category, skills]) => (
                            <div key={category} className="mb-4">
                                <h4 className="font-semibold text-gray-300">{category}</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {skills.map((skill) => (
                                        <span key={skill} className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Currently Working On */}
                    <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-xl font-bold mb-4">Currently Working On</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">• Next.js projects with TypeScript</p>
                            <p className="text-gray-300">• US-based client applications</p>
                            <p className="text-gray-300">• Indian edtech platforms</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Name and Position */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">Bhanu Pratap Singh</h1>
                        <p className="text-xl text-gray-300 mt-2">
                            Working At Newral As SDE
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/bhanupratapsingh21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-black bg-opacity-50 rounded-lg border border-gray-700 hover:bg-purple-900 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/bhanupratapsingh137"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-black bg-opacity-50 rounded-lg border border-gray-700 hover:bg-blue-900 transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:bhanupss137@gmail.com"
                            className="p-3 bg-black bg-opacity-50 rounded-lg border border-gray-700 hover:bg-red-900 transition-colors"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>

                    {/* Introduction */}
                    <div className="">
                        <p className="text-gray-300">
                            I’m a passionate and results-driven Full Stack Developer with strong expertise in the MERN stack, TypeScript, Next.js, and cloud-based technologies. Currently working at Newral, one of India’s top tech agencies, I collaborate with both US-based clients and leading Indian edtech startups to build scalable, high-performance applications. Previously, I completed a successful internship at Eventory, where I contributed to both vendor and customer platforms, focusing on payments integration and event booking flows. I’ve also built independent projects like Vibe Social and Linky, showcasing my ability to design, develop, and deploy complete products. With a strong foundation in both frontend and backend development, I thrive in fast-paced environments and continuously seek opportunities to learn, innovate, and contribute meaningfully to impactful tech solutions.
                        </p>
                    </div>

                    {/* Work Experience */}
                    <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
                        {data.map((item, index) => (
                            <div key={index} className="mb-8 last:mb-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-semibold text-purple-300">{item.company}</h3>
                                    <span className="text-gray-400 text-sm">{item.title}</span>
                                </div>
                                <div className="mt-4 text-gray-300">
                                    {item.content}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default AboutMePage;