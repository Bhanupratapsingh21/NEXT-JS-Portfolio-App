"use client";
import Link from "next/link";
import React, { useState } from "react";
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

const links = [
    { title: "Home", icon: <IconHome size={15} />, href: "/" },
    { title: "Projects", icon: <IconCpu2 size={15} />, href: "/projects" },
    { title: "My AI", icon: <IconAi size={15} />, href: "/My-Ai" },
    { title: "Education", icon: <IconSchool size={15} />, href: "/About-Me" },
    { title: "Connect", icon: <IconMessage2 size={15} />, href: "/Connect-With-Me" },
];
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;
};


const Header: React.FC = () => {
    const pathname = usePathname() || "";
    const router = useRouter();
    // Common mask/gradient classes for Fade
    const maskClasses =
        "pointer-events-none backdrop-blur " +
        "bg-[linear-gradient(to_bottom,var(--page-background),var(--static-transparent))] " +
        "[mask-image:linear-gradient(rgba(0,0,0)_25%,rgba(0,0,0,0)_100%)] " +
        "[mask-size:100%_100%] sm:rotate-180 sm:bottom-0";

    return (
        <>


            <div className="sticky top-0 sm:fixed px-3 lg:px-48 md:px-10 sm:top-auto sm:bottom-[var(--static-space-24)] z-[9] w-full  py-4 flex  items-center justify-between">


                {/* Center: Nav Buttons */}
                <div className="flex-1 w-full flex justify-center">
                    <div className="bg-surface w-full bg-black-20 justify-between backdrop-blur-md border border-neutral-alpha-medium rounded-2xl shadow-lg p-1 flex items-center space-x-4">
                        <div>
                            <button
                                onClick={() => router.back()}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Go back"
                            >
                                <IconArrowLeft className="h-4 w-4 text-white" />
                            </button>
                            <span className="h-6 border-r border-neutral-alpha-medium" />
                        </div>

                        <div className="flex justify-center items-center">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-base text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <span className="text-white">{link.icon}</span>
                                    <span className="md:block hidden text-xs">{link.title}</span>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Header