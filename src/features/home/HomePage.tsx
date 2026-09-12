import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen py-20 mt-10 mx-6 grid grid-cols-2 gap-8">
      <div className="py-4 px-8 ">
        <span className="px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
          Hello, I am
        </span>
        <h1 className="my-6 text-6xl leading-16 font-extrabold text-black dark:text-white">
          Rahmatullah <br /> Alizada
        </h1>
        <h3 className="text-3xl font-bold mb-6">
          <span className="dark:text-blue-400 text-[#2563eb]">Full-Stack</span>{" "}
          Developer
        </h3>
        <p className="text-[1.1rem] tracking-wide mb-6">
          I build modern web applications that solve real problems and create
          meaningful impact.
        </p>
        <div className="flex items-center gap-4">
          <Link
            className="cursor-pointer border border-border font-semibold gap-2 px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in-out text-white"
            href="#projects"
          >
            View My Projects
          </Link>
          <a
            className="cursor-pointer border border-border hover:bg-gray-100 dark:hover:bg-[#192134] transition-all duration-200 ease-in-out font-semibold gap-2 px-6 py-3 rounded-2xl "
            href="/images/cv/Rahmatullah_Alizada_CV.pdf"
            download="Rahmatullah_Alizada_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
