import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

import Projecthome from "../components/project";

export default function Home() {
  const words = ["Engineer", "Developer", "Coder", "Cypherpunk"];
  return (
    <>

      <div className="relative h-[55rem] md:h-[42rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="max-w-4xl center mx-auto pb-40">

          <p className="text-3xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Hi I'Am Bhanu Pratap
          </p>

          <div className="text-[20px] md:text-[20px] lg:text-3xl mt-4 text-white font-normal inter-var text-center" >
            <p >
              Aspriring Full Stack Software
            </p>
            <FlipWords words={words} />
          </div>


        </WavyBackground>


      </div>
      <TracingBeam className="none" >
        <div className="-mt-56">
            <Projecthome/>
        </div>
      </TracingBeam>
    </>
  );
}
