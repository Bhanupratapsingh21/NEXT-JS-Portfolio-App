import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline } from "@/components/ui/timeline";
import data from "@/expriencedata";
import Education from "./education";
import TestimonialsSection from "@/components/Reviews";
function Aboutme() {

    return (
        <>

            <div className="bg-black/20 border-b border-white/10">
                <div className="max-w-7xl mx-auto py-28 px-4  sm:px-10 lg:px-16">
                    <Tabs defaultValue="Experience" className="">
                        <TabsList>
                            <TabsTrigger value="Experience">Experience</TabsTrigger>
                            <TabsTrigger value="Education">Education & Skill's</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Experience">
                            <div>
                                <div className='flex justify-between'>
                                    <h1 className="text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-left mt-16 mb-6 md:text-5xl">Experience</h1>
                                    <a target="_blank" href="https://drive.google.com/drive/folders/1suWEU3s50t9GHvCHJEOAY9J2pG0y6BYk?usp=sharing" className=" md:h-14 w-24 h-10 items-center justify-center mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500 flex  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                                        Resume
                                    </a>
                                </div>
                                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                    Welcome to my Experience page! Here, you'll find a detailed overview of my professional journey, showcasing the roles I've undertaken, the projects I've led, and the impact I've made in various domains. This section illustrates my practical experience, the challenges I've overcome, and the growth I've achieved through diverse and dynamic work environments. Explore the milestones that have shaped my career and the contributions I've made to the field.                            </p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="w-full ">
                                <Timeline data={data} />
                            </div>
                        </TabsContent>
                        <TabsContent value="Education">
                            <Education />
                        </TabsContent>
                       
                    </Tabs>
                    <TestimonialsSection/>
                </div>
            </div>
        </>
    )
}
export default Aboutme
