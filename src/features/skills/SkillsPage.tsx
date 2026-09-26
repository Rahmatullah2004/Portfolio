import { AiTwotoneApi } from "react-icons/ai";
import { DiPhotoshop } from "react-icons/di";
import {
  FaDatabase,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import { MdDesignServices, MdFlipToFront } from "react-icons/md";
import { PiFileSqlBold } from "react-icons/pi";
import {
  RiJavascriptLine,
  RiNextjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  SiCanvas,
  SiDotnet,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { TbBrandTypescript, TbStackBack } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        title: "React",
        icon: FaReact,
      },
      {
        title: "Next.js",
        icon: RiNextjsLine,
      },
      {
        title: "TypeScript",
        icon: TbBrandTypescript,
      },
      {
        title: "Tailwind CSS",
        icon: RiTailwindCssLine,
      },
      {
        title: "HTML & CSS",
        icon: FaHtml5,
      },
      {
        title: "JavaScript",
        icon: RiJavascriptLine,
      },
    ],
    icon: MdFlipToFront,
  },
  {
    title: "Backend",
    skills: [
      {
        title: "Node.js",
        icon: FaNodeJs,
      },
      {
        title: "Express.js",
        icon: SiExpress,
      },
      {
        title: "ASP.NET Core",
        icon: SiDotnet,
      },
      {
        title: "REST APIs",
        icon: AiTwotoneApi,
      },
      {
        title: "Next.js",
        icon: RiNextjsLine,
      },
    ],
    icon: TbStackBack,
  },
  {
    title: "Database",
    skills: [
      {
        title: "MySQL",
        icon: GrMysql,
      },
      {
        title: "MongoDB",
        icon: SiMongodb,
      },
      {
        title: "SQL",
        icon: PiFileSqlBold,
      },
    ],
    icon: FaDatabase,
  },
  {
    title: "Tools & DevOps",
    skills: [
      {
        title: "Git",
        icon: FaGitAlt,
      },
      {
        title: "GitHub",
        icon: FaGithubSquare,
      },
      {
        title: "VS Code",
        icon: VscVscode,
      },
      {
        title: "Postman",
        icon: SiPostman,
      },
    ],
    icon: FaTools,
  },
  {
    title: "Design",
    skills: [
      {
        title: "Figma",
        icon: FiFigma,
      },
      {
        title: "Photoshop",
        icon: DiPhotoshop,
      },
      {
        title: "Canva",
        icon: SiCanvas,
      },
    ],
    icon: MdDesignServices,
  },
];

function SkillsPage() {
  return (
    <section id="skills" className="mx-6 mb-16 mt-20">
      <div className=" px-8 py-2">
        <div className="mb-12">
          <span className="flex gap-2 my-3 tracking-wider justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#182030] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
            <FaBox className="text-[0.98rem]" />
            Skills
          </span>
          <h2 className="text-3xl font-bold tracking-wide lg:text-4xl text-black dark:text-white">
            My Skills{" "}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 lg:text-[1.1rem]">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start gap-6 ">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="w-full h-full">
                <div className=" w-full h-full rounded-2xl border border-border dark:bg-[#182030]  bg-white px-5 py-5 lg:px-6 lg:py-6 hover:-translate-y-2 transition-all duration-300 ease-in-out ">
                  <h3 className=" text-lg font-extrabold tracking-wider lg:text-xl mb-5 flex justify-start items-center gap-4 ">
                    <Icon className="text-2xl text-blue-500" />
                    <span>{skill.title}</span>
                  </h3>
                  <ul className=" text-sm lg:text-[0.88rem] grid grid-cols-2 gap-4">
                    {skill.skills.map((skil, index) => {
                      const Icon = skil.icon;
                      return (
                        <li
                          key={index}
                          className="flex justify-start items-center gap-2"
                        >
                          <Icon className="text-sm lg:text-xl" />
                          <span>{skil.title}</span>
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

export default SkillsPage;
