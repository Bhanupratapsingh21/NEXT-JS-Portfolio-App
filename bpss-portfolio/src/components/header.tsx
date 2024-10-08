"use client"
import Link from "next/link"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconMessage2,
    IconHome,
    IconNewSection,
    IconCpu2,
    IconAi,
    IconSchool,
    IconBrandWhatsapp
} from "@tabler/icons-react";
import Image from "next/image";

function Header() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-black md:dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Projects",
            icon: (
                <IconCpu2 className="h-full w-full text-black md:dark:text-neutral-300" />
            ),
            href: "/projects",
        },
        {
            title: "My Ai (Chat With It)",
            icon: (
                <IconAi className="h-full w-full text-black md:dark:text-neutral-300" />
            ),
            href: "/My-Ai",
        },
        {
            title: "Education And Exprience",
            icon: (
                <IconSchool className="h-full w-full text-black md:dark:text-neutral-300" />
            ),
            href: "/About-Me",
        },
        {
            title: "Connect With Me",
            icon: (
                <IconMessage2 className="h-full w-full text-black md:dark:text-neutral-300" />
            ),
            href: "/Connect-With-Me",
        },
        {
            title: "DM Me",
            icon: (
                <IconBrandWhatsapp className="h-full w-full text-black md:dark:text-neutral-300" />
            ),
            href: "/Contact-Form",
        },
    ];
    return (
        <>
            <div className="container ">
                <FloatingDock
                    mobileClassName="" // only for demo, remove for production
                    items={links}
                />
                <div className="navigation-card md:hidden">
                    {links.map((link) => (
                        <Link key={link.title} className="tab" href={link.href}>
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>

        </>

    );
}

export default Header
