import Link from "next/link"
function Fotter() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <hr />
      <br />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="h-60 overflow-y-scroll hide-scrollbar ">
          <h2 className="text-white text-lg font-semibold mb-4">About-Me</h2>
          <p className="mb-4 ">
            Embarking on my journey after passing my 12th, I'm currently in my first year of college. Fascinated by the intersection of commerce and coding, I'm diving deep into learning the MERN stack at Masai School.

            As I navigate this transformative journey, I'm also exploring DSA & DevOps, honing my skills to meet industry demands. Alongside coding, I bring a creative touch with proficiency in multimedia tools like Premiere, Canva, and Figma.

            Eager to explore internships and opportunities in fintech, edtech, and beyond, I'm enthusiastic about contributing to the dynamic tech industry. If you're looking for a dedicated learner with a blend of coding skills and multimedia expertise, let's connect and explore possibilities together...
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white transition-colors duration-300"
              >
                Project's
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme"
                className="hover:text-white transition-colors duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/connectwithme"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="grid  text-left grid-cols-2 ">

            <Link
              href="https://www.instagram.com/bhanu_pratap_2119"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
            <Link
              href="https://github.com/Bhanupratapsingh21"
              className="hover:text-white transition-colors duration-300"
            >
              Git-Hub
            </Link>
            <Link
              href="https://x.com/BhanuFreelancer"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter (X)
            </Link>
            <Link
              href="https://www.linkedin.com/in/bhanu-pratap-singh-bbb976257/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </Link>

          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Rajasthan , India</p>
          <p>Beawar</p>
          <p>Email: bhanupss137@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 BPSS. All rights reserved.</p>
    </footer>
  )
}
export default Fotter