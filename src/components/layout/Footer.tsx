import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 border border-border dark:bg-[#182030]  bg-white pt-16 flex flex-col justify-center items-center ">
      <div className="w-xl text-center flex flex-col justify-center items-center">
        <h3 className=" font-bold text-black dark:text-white text-4xl ">
          Thank You!
        </h3>
        <p className="mt-4 text-lg font-semibold tracking-wide">
          for visiting my portfolio. I appreciate your time and hope we can work
          together soon.
        </p>
      </div>
      <div className="flex justify-center items-center py-8 border-t border-t-border mt-4 tracking-wider w-full">
        <span>© 2026 Rahmatullah Alizada. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
