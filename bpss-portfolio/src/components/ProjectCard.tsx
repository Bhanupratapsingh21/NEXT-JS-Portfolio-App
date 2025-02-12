"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectImage {
    name: string;
}

interface ProjectCardProps {
    id: number;
    name: string;
    category: string;
    description: string;
    techStack: string;
    images: ProjectImage[];
    repoLink: string;
    liveLink: string;
}

const ProjectCard = ({
    id,
    name,
    category,
    description,
    techStack,
    images,
    repoLink,
    liveLink
}: ProjectCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Convert techstack string to array of technologies
    const technologies = techStack.split(',').map(tech =>
        tech.replace('MERN :', '').replace('etc..', '').trim()
    ).filter(tech => tech.length > 0);

    // Rotate through images every 3 seconds
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div>
            <div className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl overflow-hidden w-full h-full hover:border-blue-600/50 transition-all duration-300" >
                <Link href={`/project/${id}`}>
                    <div className="aspect-video bg-neutral-800 relative overflow-hidden" >
                        <div className="absolute inset-0 bg-black " />
                        {
                            images.length > 0 ? (
                                <Image
                                    src={images[currentImageIndex].name}
                                    alt={`${name} screenshot ${currentImageIndex + 1}`
                                    }
                                    fill
                                    className="w-full object-contain h-full"
                                    onLoadingComplete={() => {
                                        setTimeout(nextImage, 3000);
                                    }}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center" >
                                    <span className="text-neutral-500" > Project Screenshot </span>
                                </div>
                            )}
                    </div>
                </Link>
                <div className="p-6" >
                    <Link href={`/project/${id}`} className="flex justify-between items-start mb-2" >
                        <h3 className="text-2xl font-semibold text-white" > {name} </h3>
                        < span className="text-sm text-blue-600 flex text-center bg-blue-600/10 w-28  justify-center items-center px-3 py-2 rounded-full" >
                            {category}
                        </span>
                    </Link>

                    < p className="text-gray-400 mb-4 line-clamp-2" >
                        {description}
                    </p>

                    <Link href={`/project/${id}`} className="flex flex-wrap gap-2 mb-4" >
                        {
                            technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm bg-blue-600/10 text-blue-600 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))
                        }
                    </Link>

                    < div className="flex gap-4" >
                        {repoLink && (
                            <Link
                                href={repoLink}
                                target="_blank"
                                className="text-blue-600 hover:text-blue-500 flex items-center gap-2"
                            >
                                <span>Live Demo </span>
                                < svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>
                        )}

                        {
                            liveLink && (
                                <Link
                                    href={liveLink}
                                    target="_blank"
                                    className="text-blue-600 hover:text-blue-500 flex items-center gap-2"
                                >
                                    <span>Code </span>
                                    < svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;