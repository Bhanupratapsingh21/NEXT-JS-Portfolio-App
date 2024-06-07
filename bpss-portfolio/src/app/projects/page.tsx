"use clinet"
import { useState } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam"
import Projecthome from "@/components/project"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import AllProjectsdata from "@/db";
function Project() {
    const data = AllProjectsdata.slice(5, AllProjectsdata.length)
    const projects = data.map(data => ({
        title: data.name,
        description:data.description,
        link: data.link,
    }))


    return (
        <TracingBeam>
            <div>
                <Projecthome />
            </div>
            <div>
                <div>
                    <h1 className="text-3xl text-center md:text-left mt-16 mb-6 md:text-5xl">Some More Basic Projects</h1>
                </div>
                <div className="max-w-5xl mx-auto px-4">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </TracingBeam>
    )
}
export default Project