import { FaDownload, FaPhone } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";

const ResumePage = () => {
  return (
    <div className=" mx-6 mb-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div className="py-4 px-8 ">
        <span className="flex gap-2 justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
          <GrResume className="text-[0.98rem]" />
          Resume
        </span>
        <h1 className="my-2  text-4xl lg:leading-16 md:leading-14 sm:leading-12 leading-10 font-extrabold text-black dark:text-white">
          My Resume
        </h1>
        <p className="text-[1.1rem] tracking-wide mb-6">
          Download my resume or view it online. It contains a detailed summary
          of my education, experience, skills and more.
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center gap-4">
          <a
            className="flex sm:w-1/2 lg:w-2/3 w-full justify-center items-center cursor-pointer gap-2 px-6 py-3 rounded-2xl bg-blue-500 text-white"
            href="/images/cv/Rahmatullah_Alizada_CV.pdf"
            download="Rahmatullah_Alizada_CV.pdf"
          >
            <span>
              <FaDownload />
            </span>
            Download CV
          </a>
          <a
            className="cursor-pointer sm:w-1/2 lg:w-2/3 w-full text-center border border-border hover:bg-gray-100 dark:hover:bg-[#192134] transition-all duration-200 ease-in-out font-semibold gap-2 sm:px-6 px-4 py-3 rounded-2xl "
            target="_blank"
            href="/images/cv/Rahmatullah_Alizada_CV.pdf"
          >
            View My CV
          </a>
        </div>
        <div className=" sm:w-1/2 lg:w-2/3 w-full m-auto my-6 rounded-2xl border border-border dark:bg-[#182030]  bg-white px-5 py-5 lg:px-6 lg:py-6 tracking-wider hover:-translate-y-2 transition-all duration-300 ease-in-out ">
          <h3 className=" font-extrabold tracking-wider text-lg mb-5 flex justify-start items-center gap-4 ">
            <span>Quick Info</span>
          </h3>
          <div className="flex justify-start items-center gap-3 text-[.90rem] mb-4">
            <span className="text-blue-500 text-lg">
              <IoPerson />
            </span>
            <span>
              <h3 className="text-[#9ca3af]">Full name</h3>
              <h3>Rahmatullah Alizada</h3>
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 text-[.90rem] mb-4">
            <span className="text-blue-500 text-lg">
              <MdOutlineMail />
            </span>
            <span>
              <h3 className="text-[#9ca3af]">Email</h3>
              <h3 className="text-wrap">rahmat.alizad2004@gmail.com</h3>
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 text-[.90rem] mb-4">
            <span className="text-blue-500 text-lg">
              <FaPhone />
            </span>
            <span>
              <h3 className="text-[#9ca3af]">Phone</h3>
              <h3>+93744541473</h3>
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 text-[.90rem] mb-4">
            <span className="text-blue-500 text-lg">
              <MdLocationPin />
            </span>
            <span>
              <h3 className="text-[#9ca3af]">Location</h3>
              <h3>Kabul, Afghanistan</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
