import { TracingBeam } from "@/components/ui/tracing-beam";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
          <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Hi I'am Bhanu Pratap
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Aspriring Full Stack Software Dev
            </p>
          </WavyBackground>
          
        </div>
        <TracingBeam>
            <div>
              
            </div>
          </TracingBeam>
    </>
  );
}
