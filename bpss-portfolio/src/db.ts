
interface Data {
  id: number;
  name: string;
  description: string;
  techstack: string;
  images: { name: string }[];
  link: string;
  livelink: string;
}

const AllProjectsdata: Data[] = [
  {
    id: 1,
    name: "URL Shortner & Analytics",
    description: "Our new URL Shortener App, built with the MERN stack, offers a seamless way to manage and track your links. It features secure user authentication using JWT tokens and bcrypt, allowing users to sign up and log in safely. The app simplifies link sharing by converting long URLs into short, manageable ones, and provides detailed analytics to track link performance, including request counts, IP addresses, and device information. Utilizing Node.js, Express, React.js, Redux, and Mongoose, this app combines modern technology with robust functionality for both personal and professional use.",
    techstack: "MERN React JS Node JS Express Mongoose MongoDB JWT Tokens Bcrypt etc..",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857825/sizolaeougobiukphkzk.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857169/vs410fg2x4z91zhwea3s.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/ydlrkka0cg6c0jqv6ndc.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/xco6x7hllyg4t7qelsww.png" },
    ],
    link: "https://github.com/Bhanupratapsingh21/URL-Shortner-MERN-",
    livelink: 'https://url-shortner-mern.vercel.app/'
  },
  {
    id: 2,
    name: "Portfolio Website With NEXT-JS",
    description: "Portfolio Website For Myself : Utilized Next.js, Tailwind CSS, Accenternity UI , Ant Design, and Framer Motion for seamless animations. Explored frontend fundamentals, client-side components, and optimization techniques. Demonstrates proficiency in Next.js development. ",
    techstack: "NEXT JS ,TypeScript ,Tailwind CSS, Acceternity UI, Vercel",
    images: [

      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717858776/epnwuf4vbrf8gsqe5cfs.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717858780/ph9poiri6dbtx0gppmhp.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717858781/drwporwc1oo9mtixays0.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857259/o1j6npfl2nmvsystop9c.png" },
    ],
    link: "/",
    livelink: '/'
  },
  {
    id: 3,
    name: "The Blog",
    description: "Embark on a journey of creativity with our latest creation, built with the dynamic trio of React, Tailwind CSS, and Appwrite React-Redux . Our platform empowers users not only to create captivating blogs but also to share, edit, delete, sign up, and log in seamlessly. Dive into a world of endless possibilities and exploration. Join us and unleash your blogging potential today! Check it out now! ",
    techstack: "React JS Chakra UI React Redux React Router  React-Form ContextApi Appwrite BaaS Tailwind",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857322/dxudugmmzjh7oahfgyf4.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857323/llfnt51n8aleqbrl1jue.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857291/dsc1qqdsxhcicy3o3u6p.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857259/o1j6npfl2nmvsystop9c.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857317/eunjxktegi4wedjx2xnf.png" }
    ],
    link: "https://github.com/Bhanupratapsingh21/The-Blog-Application",
    livelink: 'https://the-blog-application.vercel.app/'
  },
  {
    id: 4,
    name: "React Redux Todo-list",
    description: "Developed a versatile todo list application with React/Redux, empowering users to effortlessly manage tasks through functionalities including addition, deletion, editing, and marking tasks complete. Offering customization options such as priority and due dates enhances task organization.",
    techstack: "React.js, HTML, CSS, JavaScript, React Router, Context API, and Chakra UI. Features include local storage data persistence",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857170/kunmlz8od7ignafu0fy0.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/qr005vyrd4gx0bjtyxya.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/rwzps1pfxkrtexzzq04s.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857170/kunmlz8od7ignafu0fy0.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857168/qr005vyrd4gx0bjtyxya.png" },
    ],
    link: "https://github.com/Bhanupratapsingh21/React-Redux-Todolist",
    livelink: 'https://react-redux-todolist-nu.vercel.app/'
  },
  {
    id: 5,
    name: "Tata 1MG Clone FE",
    description: "Built a responsive 1MG.com clone with React.js, HTML, CSS, JavaScript, React Router, Context API, and Chakra UI. Features include local storage data persistence, smooth navigation, and visually appealing components. Demonstrates front-end expertise and attention to detail.",
    techstack: "React.js, HTML, CSS, JavaScript, React Router, Context API, and Chakra UI. Features include local storage data persistence",
    images: [
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717859287/cgxbof46swi1oeujwtvf.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857258/lutsarolucxhwspbeksd.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857258/g4j1sdmw6qat1h2m2sg6.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857213/wfxe0fecobeekzwvpmff.png" },
      { name: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1717857193/l5mfb85n66btcbuxdvd5.png" },
    ],
    link: "https://github.com/Bhanupratapsingh21/1MG-Clone-React",
    livelink: 'https://1-mg-clone-by-bpss.vercel.app/'
  },
  {
    id: 6,
    name: "Find Your Movie | OMDB API",
    description: "This application, meticulously crafted with HTML, CSS, and JavaScript, showcases my proficiency in front-end development and API integration, along with advanced techniques such as debouncing and throttling for enhanced user experience.",
    techstack: "HTML CSS JS",
    images: [
      { name: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75" },
      { name: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75" },
      { name: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75" },
      { name: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75" },
    ],
    link: "https.dwaa",
    livelink: 'https://bhanupratapsingh21.github.io/FIND-YOUR-Movie-Api-Usage-/'
  }
  // Add more projects here...
];

export default AllProjectsdata
