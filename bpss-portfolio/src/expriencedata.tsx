import Link from "next/link";
import Image from "next/image";

const data = [
    {
        title: "Dec 2024 - Present",
        content: (
            <div>
                {/* Eventory Experience */}
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
                    After completing my <b>3-month internship</b> at Eventory , where I worked on vendor and customer platforms, payments integration, and event booking features,
                </p>

                {/* Newral & CSX Experience */}
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    I&apos;ve joined <b>Newral & CSX</b>, one of India's <b>top tech agencies</b>, where I&apos;m working with <b>US-based clients</b> like <b>Assume Chat & Fizz Social</b> and leading <b>Indian edtech startups</b> including <b>Competishun NEET Kaka JEE & Abroad Kaka  And Other Clients Like OTT Bharat App, Paratalks, and Rezume.dev</b>.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739288580/qrfjgl5ayfadxd84h58g.jpg"
                        alt="CSX Platform"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg"
                    />
                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739288988/ysspkyfkncgoeuddtzgi.jpg"
                        alt="Paratalks Tech Agency"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg"
                    />
                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739288580/th40gtw2gqnk11tpajdi.jpg"
                        alt="Newral Booking"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg"
                    />

                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739288990/rftuvw1iy4w0yagoxf5m.png"
                        alt="US-Based Clients & EdTech Startups"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Aug 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    I’m currently interning at Eventory, where I build both the vendor and customer platforms, from integrating payments for vendor subscriptions to creating features for customers to find, browse, and book event managers, venues, and other services.
                </p>
                <div className="grid grid-cols-2 gap-4">

                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615042/Screenshot_2024-09-06_at_14-54-08_Eventory_xgfkyi.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615042/Screenshot_2024-09-06_at_14-54-47_Eventory_wuhv6f.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615048/Screenshot_2024-09-06_at_14-55-30_Eventory_zoxvdl.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615041/Screenshot_2024-09-06_at_14-54-29_Eventory_badpxi.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "June-July 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Created Vibe Social: Share Videos and Tweets with a Dynamic Community
                </p>
                <div className="mb-8">
                    <div className="flex gap-4 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Rich User Features: Includes capabilities for subscribing to channels, liking, commenting, sharing posts, creating and managing playlists, and browsing personalized content through advanced search
                    </div>
                    <div className="flex gap-4 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Unified Platform: Combines video sharing and social networking features, allowing users to discover and share both videos and tweets.
                    </div>
                    <div className="flex gap-4  mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Content Management: Users can manage their own content by editing, deleting, changing thumbnails, and tracking channel status updates.
                    </div>
                    <div className="flex gap-4  mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Scalability: Designed to handle a growing user base with expanding features, ensuring a robust experience as the platform evolves.
                    </div>

                    <div className="flex gap-4  mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Future Enhancements: Upcoming updates will include an inbuilt transcoder to further improve video streaming quality.
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1723476884/Screenshot_2024-08-12_at_20-51-13_VibeSocial_By_BPSS_Video_Post_s_Shareing_Platform_ff3qv9.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1723476859/Screenshot_2024-08-12_at_20-51-30_VibeSocial_By_BPSS_Video_Post_s_Shareing_Platform_dtmo82.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1723476855/Screenshot_2024-08-12_at_20-52-11_VibeSocial_By_BPSS_Video_Post_s_Shareing_Platform_il3tc0.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1723476853/Screenshot_2024-08-12_at_20-52-27_VibeSocial_By_BPSS_Video_Post_s_Shareing_Platform_mdpn5i.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Start 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    I focused on both backend and frontend development with the MERN stack (MongoDB, Express, React, Node.js). During this period, I created a URL shortener and a Tata 1mg clone, gaining hands-on experience with full-stack development. I also explored Tailwind CSS, enhancing my skills in building responsive and visually appealing user interfaces.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1717859287/cgxbof46swi1oeujwtvf.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857258/lutsarolucxhwspbeksd.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/ydlrkka0cg6c0jqv6ndc.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857169/vs410fg2x4z91zhwea3s.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Sep 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    I enrolled in Masai School's Prepleaf program, marking the start of my coding journey from the ground up. Over the course of this 1.5-year web development program, I've been mastering the MERN stack, DSA, Python, and more, building a strong foundation in both front-end and back-end technologies. Masai's hands-on approach has equipped me with the skills to tackle real-world challenges and continuously evolve as a developer.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1725704351/Screenshot_2024-09-07_at_15-46-43_Start_building_your_career_in_Full_Stack_Web_Development_Data_Science_svl84h.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1725705267/WhatsApp_Image_2024-09-07_at_16.03.53_34f7de8d_jbxdhh.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>

            </div>
        ),
    },
    {
        title: "June-July 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Content Creation Journey: Achieved 250K+ Monthly Views in 3 Months
                </p>
                <div className="mb-8">
                    <div className="flex gap-4 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Created engaging video content across multiple platforms, driving significant audience growth.
                    </div>
                    <div className="flex gap-4 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Focused on high-quality editing, storytelling, and audience interaction to maximize engagement.
                    </div>
                    <div className="flex gap-4 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Utilized analytics to optimize content strategy and increase viewership.
                    </div>
                    <div className="flex gap-4 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        ✅ Gained experience in brand building, audience retention, and content monetization strategies.
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739291333/wyfmgpsflumsutxlohnv.jpg"
                        alt="Content Creation Screenshot 3"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg"
                    />
                    <img
                        src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739291334/ymzkww2pkgrxbgjdipsf.jpg"
                        alt="Content Creation Screenshot 4"
                        width={500}
                        height={500}
                        className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg"
                    />
                </div>
            </div>
        ),
    },
];
export default data