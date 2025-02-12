"use clinet"
import AllProjectsdata from "@/db";
import ProjectCard from "@/components/ProjectCard";
function Project() {

    return (

        <div className="bg-black/20 border-b border-white/10">
            <div className="max-w-7xl mx-auto py-28 px-4 sm:px-10 lg:px-16">
                <div>
                    <div className="text-center my-3">
                        <h2 className="text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 font-bold tracking-tighter text-left sm:text-4xl md:text-5xl">Project's</h2>
                    </div>
                    <p className="mt-4 text-left   text-base/6 text-neutral-200">
                        Welcome to my projects showcase! Below, you'll find a selection of projects that showcase my skills and passion for building innovative solutions. Each project represents a unique journey of problem-solving, creativity, and continuous learning..
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-2 py-10 lg:grid-cols-2 gap-6">
                    {
                        AllProjectsdata.map((data) => (
                            <ProjectCard key={data.id} {...data} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
export default Project