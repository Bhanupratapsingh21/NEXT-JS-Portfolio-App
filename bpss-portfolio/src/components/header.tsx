"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import {
    IconBrandGithub,
    IconBrandX,
    IconMessage2,
    IconHome,
    IconNewSection,
    IconCpu2,
    IconAi,
    IconSchool,
    IconBrandWhatsapp,
    IconArrowLeft,
    IconMenu2,
    IconX
} from "@tabler/icons-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const links = [
        {
            title: "Home",
            icon: <IconHome size={20} />,
            href: "/",
        },
        {
            title: "Projects",
            icon: <IconCpu2 size={20} />,
            href: "/projects",
        },
        {
            title: "My AI",
            icon: <IconAi size={20} />,
            href: "/My-Ai",
        },
        {
            title: "Education",
            icon: <IconSchool size={20} />,
            href: "/About-Me",
        },
        {
            title: "Connect",
            icon: <IconMessage2 size={20} />,
            href: "/Connect-With-Me",
        },
    ];

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="backdrop-blur-lg bg-black/20 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
                    <div className="flex h-16 items-center justify-between">
                        {/* Back Button */}
                        <button
                            onClick={() => router.back()}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Go back"
                        >
                            <IconArrowLeft className="h-6 w-6 text-white" />
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    <span className="text-white/70">{link.icon}</span>

                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <IconX className="h-6 w-6 text-white" />
                            ) : (
                                <IconMenu2 className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg bg-black/20">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-base text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-white/70">{link.icon}</span>
                                    <span>{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;