"use clinet"
import { useState } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam"
import Projecthome from "@/components/project"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import AllProjectsdata from "@/db";
function Project() {
    const data = AllProjectsdata.slice(5, AllProjectsdata.length)
    const projects = data.map((data,i )=> ({
        title: data.name,
        description: data.description,
        link: `/project/${data.id}`,
    }))


    return (
        <TracingBeam>
            <div>
                <Projecthome />
            </div>
            <div>
                <div>
                    <h1 className="text-3xl md:mx-0 mx-4 text-left mt-16 mb-6 md:text-5xl">Some More Basic Projects</h1>
                    <p className="mt-4 text-left md:mx-0  mx-4 text-base/6 text-neutral-200">
                        Some Basic Or The Project i have Created For Learning And Some Fun...
                    </p>
                </div>
                <div className="max-w-5xl mx-auto px-4">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </TracingBeam>
    )
}
export default Project