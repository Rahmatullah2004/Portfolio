import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className=" py-20 mt-16 mx-6 grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div className="py-4 px-8 ">
        <span className="px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
          Hello, I am
        </span>
        <h1 className="md:my-6 sm:my-4 my-2 md:text-6xl mt-4 sm:text-5xl text-4xl lg:leading-16 md:leading-14 sm:leading-12 leading-10 font-extrabold text-black dark:text-white">
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
            className="cursor-pointer text-center border border-border font-semibold gap-2 sm:px-6 px-4 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in-out text-white"
            href="#projects"
          >
            View My Projects
          </Link>
          <a
            className="cursor-pointer text-center border border-border hover:bg-gray-100 dark:hover:bg-[#192134] transition-all duration-200 ease-in-out font-semibold gap-2 sm:px-6 px-4 py-3 rounded-2xl "
            href="/images/cv/Rahmatullah_Alizada_CV.pdf"
            download="Rahmatullah_Alizada_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-auto h-auto">
          <Image
            src="/images/profile.png"
            alt="homepage image"
            width={600}
            height={600}
            className="w-full max-w-130 sm:max-w-180 lg:max-w-150 h-auto rounded-xl"
          />
          <div className="absolute bottom-6 -rotate-8 p-7 bg-black opacity-85 blur-sm w-full h-12"></div>
          <p className="absolute bottom-7 text-[1.7rem] text-white font-semibold font-mono -rotate-8">
            Turning ideas into reality
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
