import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Queastions_Accordation() {
  return (

    <div className="p-5 md:p-0"  >
      <div className="text-center my-3">
        <h2 className="text-3xl font-bold tracking-tighter text-left md:text-center sm:text-4xl md:text-5xl">Why Work With Me?</h2>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="why-hire-me">
          <AccordionTrigger className="flex items-center justify-between">
            <h3 className="md:text-xl text-sm font-semibold">Why Hire Me as a Freelancer?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              With a strong foundation in web development and hands-on experience in full-stack technologies like React.js, Node.js, and MongoDB, Express Js, Next.js, Devopes, Etc... I bring a versatile skill set to the table. Whether it's building scalable applications or crafting intuitive user interfaces, I’m committed to delivering solutions that align with your business goals. My adaptability and passion for staying ahead of the curve make me the ideal partner for your freelance projects.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="why-hire-me2">
          <AccordionTrigger className="flex items-center justify-between">
            <h3 className="md:text-xl text-sm font-semibold">Why Should You Hire Me? (Full Time)</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              With a unique combination of a BCom background and full-stack development expertise, I bring both technical and business insight to every project. My hands-on experience in building projects like a URL shortener and 'Vibe Social,' combined with my strong foundation in the MERN stack, AWS, and Docker, ensures I can handle complex projects with ease. Whether you're looking for scalable web apps, seamless user interfaces, or innovative solutions, my passion for development and attention to detail make me the right fit for your team.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="what-makes-me-unique">
          <AccordionTrigger className="flex items-center justify-between">
            <h3 className="md:text-xl text-sm font-semibold">What Makes Me Unique?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              What sets me apart is my ability to blend creativity with technical expertise. My portfolio includes a diverse range of projects, from a Tata 1mg clone to 'Vibe Social,' a social platform for video and tweet sharing. I don’t just code—I collaborate with clients to deeply understand their needs and provide custom-tailored solutions that exceed expectations. Plus, my continuous learning in AI, ML, and DevOps allows me to bring cutting-edge solutions to the table.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="my-process">
          <AccordionTrigger className="flex items-center justify-between">
            <h3 className="md:text-xl text-sm font-semibold">My Process</h3>

          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              My approach to freelance work is centered around clear communication, efficient project management,
              and a focus on delivering exceptional results. I begin each project with a thorough discovery phase,
              where I work closely with my clients to understand their goals, target audience, and any existing
              constraints. From there, I develop a detailed project plan and timeline, ensuring that we stay on
              track and within budget. Throughout the development process, I provide regular updates and maintain a
              collaborative working relationship, so that my clients can be confident in the progress and quality of
              the final product.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

  )
}

function ChevronDownIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
