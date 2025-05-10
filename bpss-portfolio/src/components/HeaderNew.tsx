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
    { title: "Home", icon: <IconHome size={20} />, href: "/" },
    { title: "Projects", icon: <IconCpu2 size={20} />, href: "/projects" },
    { title: "My AI", icon: <IconAi size={20} />, href: "/My-Ai" },
    { title: "Education", icon: <IconSchool size={20} />, href: "/About-Me" },
    { title: "Connect", icon: <IconMessage2 size={20} />, href: "/Connect-With-Me" },
];
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;
};


export const Header: React.FC = () => {
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
           

            <div className="sticky top-0 sm:fixed sm:top-auto sm:bottom-[var(--static-space-24)] z-[9] w-full px-8 py-4 flex items-center justify-between">


                {/* Center: Nav Buttons */}
                <div className="flex-1 flex justify-center">
                    <div className="bg-surface border border-neutral-alpha-medium rounded-2xl shadow-lg p-4 flex items-center space-x-4">
                        <button
                            onClick={() => router.back()}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Go back"
                        >
                            <IconArrowLeft className="h-6 w-6 text-white" />
                        </button>
                        <span className="h-6 border-r border-neutral-alpha-medium" />

                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <span className="text-white/70">{link.icon}</span>
                                <span>{link.title}</span>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};
