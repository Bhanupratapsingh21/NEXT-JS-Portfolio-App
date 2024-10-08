import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline } from "@/components/ui/timeline";
import data from "@/expriencedata";
import Education from "./education";
function Aboutme() {
    
    return (
        <>  
            
            <div></div>
            <div className="w-[90vw] md:pt-24  mx-auto antialiased relative">
                <Tabs defaultValue="Experience" className="w-[90vw]">
                    <TabsList>
                        <TabsTrigger value="Experience">Experience</TabsTrigger>
                        <TabsTrigger value="Education">Education & Skill's</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Experience">
                        <div>
                            <div className='flex justify-between'>
                                <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">Experience</h1>
                                <button className=" md:h-14 w-24 h-10 mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                                    Resume
                                </button>
                            </div>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                Welcome to my Experience page! Here, you'll find a detailed overview of my professional journey, showcasing the roles I've undertaken, the projects I've led, and the impact I've made in various domains. This section illustrates my practical experience, the challenges I've overcome, and the growth I've achieved through diverse and dynamic work environments. Explore the milestones that have shaped my career and the contributions I've made to the field.                            </p>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="w-full">
                            <Timeline data={data} />
                        </div>
                    </TabsContent>
                    <TabsContent value="Education">
                        <Education/>
                    </TabsContent>
                    
                </Tabs>

            </div>
        </>
    )
}
export default Aboutme
