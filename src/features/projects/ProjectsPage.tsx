import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const projects = [
  {
    id: 1,
    image: "futsal.png",
    thechnologies: ["React", "TailwindCss", "Node.js", "JWT", "MySQL"],
    title: "Futsal Gym Management System",
    description:
      "A complete management system for futsal gym with booking, payment and member management features.",
    url: "#",
  },
  {
    id: 2,
    image: "vanix.png",
    thechnologies: ["Next.js", "TailwindCss"],
    title: "Vanix Company Website",
    description:
      "A complete website for Vanix Company show there works and experience.",
    url: "vanix-tawny.vercel.app",
  },
  {
    id: 3,
    image: "weather.png",
    thechnologies: ["React", "TypeScripts", "API", "TailwindCss"],
    title: "Weather App",
    description: "A simple weather application using real-time weather API.",
    url: "weather-forecast-coral-six.vercel.app",
  },
];

function ProjectsPage() {
  return (
    <section id="projects" className="mx-6 mb-16 mt-20">
      <div className=" px-8 py-2">
        <div className="mb-12">
          <span className="flex gap-2 my-3 tracking-wider justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#182030] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
            <GrProjects className="text-[0.98rem]" />
            Projects
          </span>
          <h2 className="text-3xl font-bold tracking-wide lg:text-4xl text-black dark:text-white">
            My Projects{" "}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 lg:text-[1.1rem]">
            Here are some of the projects I have worked on. Each project helped
            me learn something new and improve my skills.{" "}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start gap-6 ">
          {projects.map((project, index) => {
            return (
              <div key={index} className="w-full h-full">
                <div className=" w-full h-full rounded-2xl border border-border dark:bg-[#182030]  bg-white px-5 py-5 lg:px-6 lg:py-6 hover:-translate-y-2 transition-all duration-300 ease-in-out ">
                  <Image
                    src={`/images/${project.image}`}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-72 max-w-130 sm:max-w-180 lg:max-w-150 rounded-xl shadow-xl"
                  />
                  <div className="flex flex-wrap justify-start mt-6 items-center gap-1">
                    {project.thechnologies?.map((thechnology, i) => {
                      return (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[0.75rem] font-medium text-blue-500 rounded-2xl bg-background"
                        >
                          {thechnology}
                        </span>
                      );
                    })}
                  </div>
                  <h1 className="text-[1.1rem] font-semibold tracking-wide text-black dark:text-white my-2">
                    {project.title}
                  </h1>
                  <p className="text-[0.85rem]">{project.description}</p>
                  <a className="text-4xl" href={project.url}>
                    <FaArrowRight className="bg-background hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out my-3 p-2 rounded-full" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
