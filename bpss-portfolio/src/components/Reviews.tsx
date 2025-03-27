import React from 'react';
import { Carousel } from './ui/apple-cards-carousel';
import Image from 'next/image';
const reviews = [
    {
        id: 1,
        name: "Yash Rajan Shukla",
        role: "CTO Newral CSX Para-Talks",
        text: "Unexceptionally good in his work, his consistency and dedication can move mountains. The best person I worked with not only in tech and also about taking responsibility of work and completing it on time",
        rating: 5,
        src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739372306/ubspxiibjrfogqwpcmul.png"
    },
    {
        id: 2,
        name: "Ankit",
        role: "Lead Dev Eventory",
        text: "Most impressive thing about Bhanu is his ability to innovate and debug -",
        rating: 4,
        src: ""
    },
    {
        id: 3,
        name: "Krithika Kaur",
        role: "SDE 2 In US Based Start-UP",
        text: "Bhanu is the best coding buddy I could ask for! From late-night debugging to building cool projects together, working with him is always fun and inspiring. He picks up new technologies effortlessly and brings creativity to everything we create!",
        rating: 5,
        src: ""
    },
    {
        id: 4,
        name: "Ritik Pal",
        role: "SDE",
        text: "An exceptional collaborator who brings both technical depth and creative problem-solving to every project. Working with Bhanu has been an absolute pleasure.",
        rating: 5,
        src: ""
    }
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex gap-1 text-yellow-400">
            {[...Array(rating)].map((_, index) => (
                <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

// Testimonial Card component
interface TestimonialCardProps {
    name: string;
    role: string;
    text: string;
    rating: number;
    src: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, src, text, rating }) => {
    return (
        <div className="group bg-neutral-900/50 w-96 h-full backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
            <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-blue-800 rounded-full">
                    {
                        src ? (
                            <Image
                                src={src}
                                height={100}
                                width={100}
                                alt={"Loading"}
                                className='rounded-full'
                            />
                        ) : (
                            <h2>{name.slice(0, 2)}</h2>
                        )
                    }
                </div>
                <div>
                    <h4 className="text-white font-semibold">{name}</h4>
                    <p className="text-gray-400 text-sm">{role}</p>
                </div>
            </div>
            <blockquote className="text-gray-400 mb-6">
                {text}
            </blockquote>
            <StarRating rating={rating} />
        </div>
    );
};

// Main Testimonials section component
const TestimonialsSection = () => {
    const cards = reviews.map((review) => (
        <TestimonialCard
            key={review.id}
            name={review.name}
            role={review.role}
            text={review.text}
            rating={review.rating}
            src={review.src}
        />
    ));
    return (
        <section className="bg-black py-16">
            <div className="">
                {/* Section Header */}
                <div className=" text-center mb-16">
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
                        Reviews of My Work
                    </span>
                    <svg className="w-6 h-6 mx-auto mt-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24"></svg>
                    <h2 className="mt-3 h-14 text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                        Hear from My Clients & Collaborators, Managers, and More
                    </h2>
                    <p className="mt-4  text-gray-400">
                        Genuine feedback from those I've worked with, highlighting my expertise, professionalism, and impact.
                    </p>
                </div>

                <Carousel items={cards} />
            </div>
        </section>
    );
};

export default TestimonialsSection;