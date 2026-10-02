import React from "react";

const Footer = () => {
  return (
    <div className="px-8 mt-8 border border-border dark:bg-[#182030]  bg-white pt-16 flex flex-col justify-center items-center ">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <h3 className=" font-bold text-black dark:text-white text-4xl ">
          Thank You!
        </h3>
        <p className="mt-4 mb-4 lg:text-[1rem] md:text-[0.92rem] sm:text-[0.85rem] text-[0.80rem] tracking-wide">
          for visiting my portfolio. I appreciate your time and hope we can work
          together soon.
        </p>
      </div>
      <div className="flex justify-center text-center lg:text-[0.92rem] md:text-[0.86rem] sm:text-[0.82rem] text-[0.76rem]  items-center py-8 border-t border-t-border mt-4 tracking-wider w-full">
        <span>© 2026 Rahmatullah Alizada. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
