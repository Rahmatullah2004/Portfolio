import Image from "next/image";
import React from "react";
import { FaIdCardClip } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";

const AboutPage = () => {
  return (
    <div className=" mx-6 mb-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div className="py-4 px-8 ">
        <span className="flex gap-1 justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
          <IoMdPerson />
          About Me
        </span>
        <h1 className="my-2  text-4xl lg:leading-16 md:leading-14 sm:leading-12 leading-10 font-extrabold text-black dark:text-white">
          A bit about myself
        </h1>
        <p className="text-[1.1rem] tracking-wide mb-6">
          I&apos;m a software engineering student with a passion for building
          useful applications and learning new technologies. I enjoy solving
          problems, working on challenging projects, and turning ideas into
          real-world solutions.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center gap-4">
            <span className="text-blue-500 dark:bg-[#2563eb1a] bg-white p-2 text-xl border border-border shadow rounded-lg">
              <MdLocationPin />
            </span>
            <div>
              <span className="tracking-wider">Location</span>
              <p className="text-black font-semibold tracking-wider dark:text-white">
                Kabul, Afghanistan
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <span className="text-blue-500 dark:bg-[#2563eb1a] bg-white p-2 text-xl border border-border shadow rounded-lg">
              <MdOutlineEmail />
            </span>
            <div>
              <span className="tracking-wider">Email</span>
              <p className="text-black font-semibold tracking-wider dark:text-white">
                rahmat.alizad2004@gmail.com
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <span className="text-blue-500 dark:bg-[#2563eb1a] bg-white p-2 text-xl border border-border shadow rounded-lg">
              <FaIdCardClip />
            </span>
            <div>
              <span className="tracking-wider">Availability</span>
              <p className="text-black font-semibold tracking-wider dark:text-white">
                Open for opportunities
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold tracking-wider text-black dark:text-white">
            My Interests
          </h3>
          <div className="flex flex-wrap justify-start items-center gap-3 mt-4">
            <span className="px-4 py-2 rounded-2xl dark:bg-[#2563eb1a] bg-white text-[0.78rem] tracking-wider font-medium border border-border">
              Web Development
            </span>
            <span className="px-4 py-2 rounded-2xl dark:bg-[#2563eb1a] bg-white text-[0.78rem] tracking-wider font-medium border border-border">
              Problem Solving
            </span>
            <span className="px-4 py-2 rounded-2xl dark:bg-[#2563eb1a] bg-white text-[0.78rem] tracking-wider font-medium border border-border">
              Technology
            </span>
            <span className="px-4 py-2 rounded-2xl dark:bg-[#2563eb1a] bg-white text-[0.78rem] tracking-wider font-medium border border-border">
              Travel
            </span>
            <span className="px-4 py-2 rounded-2xl dark:bg-[#2563eb1a] bg-white text-[0.78rem] tracking-wider font-medium border border-border">
              Reading
            </span>
            <span className="px-4 py-2 rounded-2xl dark:bg-[#2563eb1a] bg-white text-[0.78rem] tracking-wider font-medium border border-border">
              Football
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-3/4 h-auto">
          <Image
            src="/images/about.png"
            alt="homepage image"
            width={600}
            height={600}
            className="w-full max-w-130 sm:max-w-180 lg:max-w-150 h-auto rounded-xl"
          />
          <div className="absolute bottom-0 bg-black opacity-80 blur-sm w-[90%] h-12 left-2"></div>
          <p className="absolute bottom-2 lg:text-[1.6rem] md:text-[1.9rem] sm:text-[1.4rem] xs:text-[1.2rem] text-white font-semibold font-mono">
            &quot;Better code, better tomorrow.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
