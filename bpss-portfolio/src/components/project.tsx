"use client"
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { WobbleCard } from "./ui/wobble-card";
import AllProjectsdata from "@/db";
function Projecthome() {

    return (
        <>
            <div className=" w-[90vw] md:pt-24  mx-auto antialiased relative">
                <div >
                    <div>
                        <h1 className="text-left text-3xl md:text-5xl">Project's</h1>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Welcome to my projects showcase! Below, you'll find a selection of projects that showcase my skills and passion for building innovative solutions. Each project represents a unique journey of problem-solving, creativity, and continuous learning..
                        </p>
                    </div>
                </div>
                <div>
                    <div className="grid overflow-hidden md:pr-6  grid-cols-1 mt-16 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                        <Link className="col-span-1 lg:col-span-2 " href={"/project/1"}>
                            <WobbleCard
                                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                                className=""
                            >

                                <div className="max-w-xs">

                                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                        {AllProjectsdata[0].name}
                                    </h2>
                                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                        {AllProjectsdata[0].description.slice(0, 110)}
                                    </p>

                                </div>
                                <Image
                                    src={AllProjectsdata[0].images[3].name}
                                    width={500}
                                    height={500}
                                    alt="linear demo image"
                                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                                />

                            </WobbleCard>
                        </Link>


                        <Link href={"project/2"}>
                            <WobbleCard containerClassName=" col-span-1 ">
                                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {AllProjectsdata[1].name}
                                </h2>
                                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                    {AllProjectsdata[1].description.slice(0, 110)}
                                </p>
                            </WobbleCard>
                        </Link>
                        <Link href={"project/3"} className="col-span-1 h-full min-h-[500px] lg:min-h-[300px]   lg:col-span-3 ">
                            <WobbleCard containerClassName="col-span-1  lg:col-span-3 min-h-[500px] lg:min-h-[300px]  bg-blue-900  "
                                className="min-h-[500px] lg:min-h-[300px]"
                            >
                                <div className="max-w-sm">
                                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                        {AllProjectsdata[2].name}
                                    </h2>
                                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                        {AllProjectsdata[2].description.slice(0, 152)}
                                    </p>
                                </div>
                                <Image
                                    src={AllProjectsdata[2].images[0].name}
                                    width={500}
                                    height={500}
                                    alt="linear demo image"
                                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                                />
                            </WobbleCard>
                        </Link>
                        <Link href={"project/4"}>
                            <WobbleCard containerClassName=" col-span-1 min-h-[300px]">
                                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {AllProjectsdata[3].name}
                                </h2>
                                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                    {AllProjectsdata[3].description.slice(0, 110)}
                                </p>
                            </WobbleCard>
                        </Link>
                        <Link className="col-span-1 lg:col-span-2 " href={"/project/5"}>
                            <WobbleCard
                                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                                className=""
                            >
                                <div className="max-w-xs">
                                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                        {AllProjectsdata[4].name}
                                    </h2>
                                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                        {AllProjectsdata[4].description.slice(0, 110)}
                                    </p>
                                </div>
                                <Image
                                    src={AllProjectsdata[4].images[0].name}
                                    width={500}
                                    height={500}
                                    alt="linear demo image"
                                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                                />
                            </WobbleCard>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Projecthome 