// app/project/[id]/page.tsx
"use client";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import db from '@/db'

interface Data {
  name: string;
  description: string;
  techstack: string;
  images: { name: string }[];
  link : string;
  livelink : string
}


const Project = () => {

  const params = useParams();
  const id = Number(params.id);
  const [data, setData] = useState<Data>(db[id-1]);
  const testimonials = data.images.map(image => ({
    quote: data.name,
    name: image.name,
    title: data.name,
  }));
  return (
    <div className='px-[5vw] w-[98w] '>
      <div>
        <div className='flex justify-between'>
          <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">{data.name}</h1>
          <button onClick={()=> window.location.href = data.link} className=" md:h-14 w-24 h-16 mt-[69px] md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                                        Git-Repo
                                    </button>
        </div>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          {data.description}
        </p>
        <p></p>
        <h1 className="text-1xl text-left mt-16 mb-6 md:text-3xl">Tech Stack : {data.techstack}</h1>
        <hr />
        <div className='flex justify-between'>
          <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">Preview</h1>
          <button onClick={()=> window.location.href = data.livelink} className=" md:h-14 w-24 h-10 mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
                                        Live-Link
                                    </button>
        </div>
      </div>

      <div  onClick={()=> window.location.href = data.link }>
        <InfiniteMovingCards
          
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Project;