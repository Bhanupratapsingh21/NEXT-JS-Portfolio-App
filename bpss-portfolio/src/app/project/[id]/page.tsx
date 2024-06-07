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
        <h1 className="text-3xl text-center md:text-left mt-16 mb-6 md:text-5xl">{data.name}</h1>
        <p className="mt-4 text-center md:text-left  text-base/6 text-neutral-200">
          {data.description}
        </p>
        <p></p>
        <h1 className="text-1xl text-center md:text-left mt-16 mb-6 md:text-3xl">Tech Stack : {data.techstack}</h1>
        <hr />
        <h1 className="text-3xl text-center md:text-left mt-16 mb-6 md:text-5xl">Preview</h1>
      </div>

      <div onClick={()=> window.location.href = data.link }>
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