interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  techStack: string;
  images: { name: string }[];
  repoLink: string;
  liveLink: string;
}

const AllProjectsData: Project[] = [
  {
    "id": 9,
    "name": "Unfiltered-Byte",
    "category": "",
    "description": "Unfiltered Byte is your safe space built for developers and tech students to share real experiences, vent anonymously, and recharge mentally — without the pressure of highlight reels. Whether you're navigating burnout, seeking motivation, or just need a break, the platform offers anonymous or identified posting, smart tags, upvoting, relaxing coding music, wellness tools, and gentle reminders for breaks and mental check-ins. With features like daily affirmations, a streak tracker (without the guilt), and a dedicated discover section, Unfiltered Byte is more than just a community — it’s your digital companion for staying human in tech. No filters. Just real bytes.",
    "techStack": "React Native, EXPO, Node.js, Express, MongoDB, Zustand, Cloudinary CDN, Appwrite Auth",
    "images": [
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205296/IMG-20250502-WA0007_vorzku.jpg" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205297/IMG-20250502-WA0015_v0zkb3.jpg" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205296/IMG-20250502-WA0008_quxazf.jpg" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205294/IMG-20250502-WA0021_pngivw.jpg" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205294/IMG-20250502-WA0018_nlyuc9.jpg" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205294/IMG-20250502-WA0016_fav7fy.jpg" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1746205294/IMG-20250502-WA0017_usxz7r.jpg" },

    ],
    "repoLink": "https://github.com/Bhanupratapsingh21/Unfiltered_Byte_App",
    "liveLink": "https://unfiltered-byte.bpss.tech/"
  },
  {
    "id": 2,
    "name": "Vibe Social - Video & Tweet Sharing",
    "category": "Social Media",
    "description": "A full-fledged social media platform for video and tweet sharing, offering features like subscriptions, likes, comments, private videos, editing, and analytics. Built for scalability with an inbuilt video transcoder that converts videos into multiple resolutions using FFmpeg and stores them on AWS S3 for optimized streaming.",
    "techStack": "React.js, Node.js, Express, MongoDB, Redux, Chakra UI, Cloudinary CDN, FFmpeg, AWS S3",
    "images": [
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375660/hpyl0nvhw0gpm1pogz8w.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375660/kqh4mdx08b0of1ure0kk.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375657/xrjya7zgiifxaqsmkbtn.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375657/ybhcozn4okhwhbmtfbmc.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375655/fm4wwotxbx4ahchsmud9.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375655/twqgrppxgmnlqzcklxtk.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375655/zbnyqrrgpqa2jf1ixvrc.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375655/mmtrobx9cfrqhd5ow5qw.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375654/cd2knelsqita1zlf9vm9.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375654/rp5msxubzuoopicpvcvx.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739375653/xfxprnalhftkaqt8l6fb.png" }
    ],
    "repoLink": "https://github.com/Bhanupratapsingh21/VIBESocial-Videos-Posts-Shareing-Platfrom-By-BPSS",
    "liveLink": "https://vibesocial.bpss.tech/"
  },
  {
    "id": 1,
    "name": "Linky - SaaS URL Shortener & Analytics",
    "category": "SaaS Tool",
    "description": "Linky is a powerful SaaS-based URL shortener built with modern web technologies. It provides secure authentication using JWT tokens and bcrypt, enables users to shorten URLs, and offers advanced analytics such as traffic insights, IP addresses, device types, and OS details. Users can also set multiple redirections for links and track their performance via a feature-rich dashboard.",
    "techStack": "Express.js, Node.js, TypeScript, PostgreSQL, Prisma ORM, Bcrypt, JWT, Next.js, ShadCN, Aceternity UI, Zod, Redux",
    "images": [
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739373617/ujf1gpbis8xxgqvbjyfk.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739373617/bdak4npyid656yslxenz.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739373617/a162zg0csilg7havdcjq.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739373619/emyn2vdnotom5zt87jnr.png" }
    ],
    "repoLink": "https://github.com/Bhanupratapsingh21/Linky",
    "liveLink": "https://linky.bpss.tech/"
  },
  {
    "id": 3,
    "name": "WhisperBox 🎤💬",
    "category": "Anonymous Messaging",
    "description": "WhisperBox is a modern and sleek anonymous feedback and Q&A platform, inspired by 'Not Gonna Lie' (NGL). It enables users to create a unique link where others can send anonymous messages, feedback, or questions, making it perfect for influencers, content creators, or anyone looking to engage anonymously with their audience.",
    "techStack": "Next.js, TypeScript, ShadCN, NextAuth (Google, GitHub, Email) , Database ,MongoDB , Zod ,Styling ,ShadCN ,Deployment , Vercel",
    "images": [
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1729522297/Screenshot_2024-10-21_at_20-16-41_Whisper-Box_qbhfss.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1729522297/Screenshot_2024-10-21_at_20-18-48_Whisper-Box_db1htk.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1729522297/Screenshot_2024-10-21_at_20-16-59_Whisper-Box_aumtll.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1729522298/Screenshot_2024-10-21_at_20-13-54_Whisper-Box_i96jpu.png" },
      { "name": "https://res.cloudinary.com/dhvkjanwa/image/upload/v1729522297/Screenshot_2024-10-21_at_20-16-59_Whisper-Box_aumtll.png" }
    ],
    "repoLink": "https://github.com/Bhanupratapsingh21/Whisper-BOX",
    "liveLink": "https://whisperbox.bpss.tech/",
  },
  {
    id: 4,
    name: "Portfolio Website",
    category: "Portfolio",
    description:
      "A personal portfolio website built with Next.js, showcasing my skills, projects, and experience. Features modern UI with smooth animations powered by Framer Motion and optimized performance with Next.js.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Ant Design, Framer Motion",
    images: [
      { name: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739376365/brsya1xgyiutxglmhmz8.png" },
      { name: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739376363/tojkq3elhj0wddgh1emy.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717858776/epnwuf4vbrf8gsqe5cfs.png" },
      { name: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739376363/lfjyvmdg9fft2y7b6zwv.png" },
    ],
    repoLink: "/",
    liveLink: "/",
  },
  {
    id: 5,
    name: "Tata 1MG Clone (Frontend)",
    category: "E-Commerce",
    description:
      "A frontend clone of Tata 1MG built with React.js, featuring responsive design, smooth navigation, and local storage data persistence.",
    techStack: "React.js, HTML, CSS, JavaScript, React Router, Chakra UI",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717859287/cgxbof46swi1oeujwtvf.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857258/lutsarolucxhwspbeksd.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857258/g4j1sdmw6qat1h2m2sg6.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857213/wfxe0fecobeekzwvpmff.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857193/l5mfb85n66btcbuxdvd5.png" },
    ],
    repoLink: "https://github.com/Bhanupratapsingh21/1MG-Clone-React",
    liveLink: "https://1-mg.clone.bpss.tech/",
  },
  {
    id: 6,
    name: "React Redux Todo List",
    category: "Tool",
    description:
      "A task management application with features like adding, deleting, and prioritizing tasks. Built with Redux for state management and seamless user interactions.",
    techStack: "React.js, Redux, Chakra UI, React Router",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857170/kunmlz8od7ignafu0fy0.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/qr005vyrd4gx0bjtyxya.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/rwzps1pfxkrtexzzq04s.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857170/kunmlz8od7ignafu0fy0.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/qr005vyrd4gx0bjtyxya.png" },
    ],
    repoLink: "https://github.com/Bhanupratapsingh21/React-Redux-Todolist",
    liveLink: "https://todolist.bpss.tech/",
  },
  {
    id: 7,
    name: "The Blog",
    category: "Social Application",
    description:
      "A dynamic blog platform built using React, Tailwind CSS, and Appwrite. Users can create, edit, delete, and share blogs with an intuitive UI and seamless authentication. Dive into creative expression today!",
    techStack:
      "React.js, Tailwind CSS, React-Redux, Appwrite BaaS, React Router, Chakra UI",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857322/dxudugmmzjh7oahfgyf4.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857323/llfnt51n8aleqbrl1jue.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857291/dsc1qqdsxhcicy3o3u6p.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857259/o1j6npfl2nmvsystop9c.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857317/eunjxktegi4wedjx2xnf.png" }
    ],
    repoLink: "https://github.com/Bhanupratapsingh21/The-Blog-Application",
    liveLink: "https://the-blog.bpss.tech/",
  },
  {
    id: 8,
    name: "Find Your Movie | OMDB API",
    category: "Movie Finder",
    description:
      "A simple yet powerful movie search application leveraging the OMDB API. Features search functionality with debouncing and throttling for enhanced performance.",
    techStack: "HTML, CSS, JavaScript, OMDB API Integration",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1718017191/u1cdawvie5cx6czb4bae.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1718017190/wx1xane3r4dfuj1sseia.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1718017195/eoypzgtnkmrugopudubg.png" }
    ],
    repoLink: "https://github.com/Bhanupratapsingh21/FIND-YOUR-Movie-Api-Usage-",
    liveLink: "https://bhanupratapsingh21.github.io/FIND-YOUR-Movie-Api-Usage-/",
  },
];

export default AllProjectsData;