import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";

const experience = [
  {
    year: "07/2025 – 12/2025",
    title: "Frontend / Full-Stack Developer",
    degree: "Hadaf-e-Bartar Academy | Kabul, Afghanistan",
    achievements: [
      "Developed and maintained web applications for academy.",
      "Worked with React, Tailwindcss, Node.js, and MySQL.",
      "Collaborated with a team of developers and designers.",
    ],
    icon: CgWebsite,
  },
  {
    year: "2026",
    title: "Futsal Management System",
    degree: "Khurasan Futsal gym | Kabul, Afghanistan",
    achievements: [
      "Developed web applications for Khurasan Futsal Gym .",
      "Worked with React, Tailwindcss, JWT, Node.js, and MySQL.",
      "Collaborated with my teamate Hayatullah Mohammadi Frontend Developer.",
    ],
    icon: IoMdFootball,
  },
  {
    year: "2026",
    title: "Vanix Company Website",
    degree: "Vanix Company",
    achievements: [
      "Developed and designed web application for vanix company.",
      "Worked with Next.js, tailwindcss",
      "Collaborated with Murtaza Rahimi Senior Frontend Developer.",
    ],
    icon: CgWebsite,
  },
  {
    year: "2025 – Present",
    title: "Intern Developer",
    degree: "Personal Projects | Remote",
    achievements: [
      "Built small web applications and tools.",
      "Learned and applied modern development practices.",
    ],
    icon: FaCode,
  },
];

function ExperiencePage() {
  return (
    <section id="experience" className="mx-6 mb-16 mt-20">
      <div className=" px-8 py-2">
        <div className="mb-12">
          <span className="flex gap-2 my-3 justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
            <FaBox className="text-[0.98rem]" />
            Experience
          </span>
          <h2 className="text-3xl font-bold lg:text-4xl text-black dark:text-white">
            Work Experience
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 lg:text-[1.1rem]">
            My professional journey so far, where I&apos;ve gained hands-on
            experience and developed my skills.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4.25 top-0 bottom-0 w-px bg-gray-700 lg:hidden" />
          <div className="absolute left-26 top-0 bottom-0 hidden w-px bg-gray-700 lg:block" />

          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className=" relative mb-8 last:mb-0 grid grid-cols-[36px_1fr] gap-3 lg:grid-cols-[106px_1px_70px_0.8fr] "
              >
                <div className=" col-start-2 row-start-1 mb-0 flex items-center pl-2 lg:hidden ">
                  <span className="text-sm font-medium">{item.year}</span>
                </div>
                <div className=" hidden lg:col-start-1 lg:row-start-1 lg:flex lg:items-start lg:justify-start lg:pt-5">
                  <span className="text-[0.88rem] font-medium">
                    {item.year}
                  </span>
                </div>
                <div className="hidden lg:col-start-2 lg:row-start-1 lg:block " />
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    z-10

                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full
                    border-2
                    border-blue-500
                    text-blue-500
                    bg-white
                    dark:bg-[#090d17]

                    lg:static
                    lg:col-start-3
                    lg:row-start-1
                    lg:h-10
                    lg:w-10
                    lg:justify-self-start
                  "
                >
                  <Icon className="text-sm lg:text-xl" />
                </div>
                <div
                  className="
                    col-start-2
                    row-start-2

                    w-full
                    max-w-212

                    rounded-2xl
                    border
                    border-border
                    dark:bg-[#2563eb1a] 
                    bg-white

                    px-6
                    py-6

                    lg:col-start-4
                    lg:row-start-1
                    lg:ml-0
                    lg:min-h-30
                    lg:px-7
                    lg:py-7
                  "
                >
                  <h3 className=" text-lg font-bold text-black dark:text-white lg:text-2xl ">
                    {item.title}
                  </h3>
                  <p className=" mt-2 text-sm font-medium text-blue-500 lg:text-lg ">
                    {item.degree}
                  </p>
                  <ul className=" mt-4 text-sm lg:text-[0.98rem] pl-4 space-y-1">
                    {item.achievements.map((achieve, index) => {
                      return (
                        <li key={index} className="list-disc list-inside">
                          {achieve}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
