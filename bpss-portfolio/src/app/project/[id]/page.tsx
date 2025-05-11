"use client";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import db from '@/db'

interface ProjectImage {
  name: string;
}

interface ProjectCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  techStack: string;
  images: ProjectImage[];
  repoLink: string;
  liveLink: string;
}


const Project = () => {

  const params = useParams();
  const [id, setid] = useState<number>(Number(params.id));
  const [data, setData] = useState<ProjectCardProps | undefined>(db.find(project => project.id === id));

  if (id >= db.length + 1) {
    return (
      <div className='text-center px-56 py-56'>
        404 | Not-Found
      </div>
    )
  }

  const testimonials = data?.images.map(image => ({
    quote: data.name,
    name: image.name,
    title: data.name,
  })) || [];
  return (
    <div className="bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto py-28 px-4 sm:px-10 lg:px-16">
        <div>
          <div className='flex justify-between'>
            <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">{data?.name}</h1>
            <button onClick={() => window.location.href = data?.repoLink || ""} className=" md:h-14 md:w-28 w-24 h-16 mt-[69px] md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
              Git-Repo
            </button>
          </div>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {data?.description}
          </p>
          <p></p>
          <h1 className="text-1xl text-left mt-16 mb-6 md:text-3xl">Tech Stack : {data?.techStack}</h1>
          <hr />
          <div className='flex justify-between'>
            <h1 className="text-3xl text-left mt-16 mb-6 md:text-5xl">Preview</h1>
            <button onClick={() => window.location.href = data?.liveLink || "/"} className=" md:w-28 md:h-14 w-24 h-10 mt-16 md:mt-[54px] mb-6 overflow-hidden shadow-[0_0_0_3px_#000000_inset] md:px-4 md:py-2 bg-transparent border border-gray-500  text-white rounded-lg font-bold transform hover:-translate-y-1 text-center transition duration-400">
              Live-Link
            </button>
          </div>
        </div>

        <div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;