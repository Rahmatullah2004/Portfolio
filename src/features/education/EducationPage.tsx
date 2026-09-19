"use client";

import { CgWebsite } from "react-icons/cg";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";

const education = [
  {
    year: "2023 – Present",
    title: "Kabul Polytechnic University",
    degree: "Bachelor of Computer Science (Information System)",
    location: "Kabul, Afghanistan",
    icon: FaUniversity,
  },
  {
    year: "07/2025 – 12/2025",
    title: "Hadaf-e-Bartar Academy",
    degree: "Front End Developer",
    location: "Kabul, Afghanistan",
    icon: CgWebsite,
  },
  {
    year: "2019 – 2022",
    title: "High School",
    degree: "High School Diploma",
    location: "Ghazni, Afghanistan",
    icon: FaSchool,
  },
  {
    year: "2022 – 2024",
    title: "English House Center",
    degree: "English Language Level C1",
    location: "Kabul, Afghanistan",
    icon: MdOutlineLanguage,
  },
];

export default function EducationPage() {
  return (
    <section id="education" className="mx-6 mb-16 mt-20">
      <div className=" px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold lg:text-4xl text-black dark:text-white">
            My Academic Journey
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 lg:text-[1.1rem]">
            I have always been passionate about technology and have pursued my
            education in the field of software engineering.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4.25 top-0 bottom-0 w-px bg-gray-700 lg:hidden" />
          <div className="absolute left-26 top-0 bottom-0 hidden w-px bg-gray-700 lg:block" />

          {education.map((item, index) => {
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
                  <p className=" mt-4 text-sm lg:text-base">{item.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
