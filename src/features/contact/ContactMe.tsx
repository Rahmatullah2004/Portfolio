import Image from "next/image";
import React from "react";
import { FaIdCardClip } from "react-icons/fa6";
import { MdContacts, MdLocationPin, MdOutlineEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className=" mx-6 mb-12 gap-8">
      <div className="py-4 px-8 ">
        <div className="w-1/2">
          <span className="flex gap-2 justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
            <MdContacts className="text-[0.98rem]" />
            Get In Touch
          </span>
          <h1 className="my-2  text-4xl tracking-wide lg:leading-16 md:leading-14 sm:leading-12 leading-10 font-extrabold text-black dark:text-white">
            Let&apos;s Build Something Together
          </h1>
          <p className="text-[1.1rem] tracking-wide mb-6">
            Have a project in mind? Let&apos;s talk and create something amazing
            together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
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
          <div className="w-full px-2">
            {/* <div>
              <h3 className="uppercase mb-2 text-[0.8rem] font-bold text-[#2563eb]">
                contact us
              </h3>
              <h1 className="text-[1.98rem] font-extrabold mb-4">
                Let&apos;s Work Together
              </h1>
              <p className="text-[#64748b] text-[0.92rem]">
                Have a project in mind? Let&apos;s talk and create something
                amazing together.
              </p>
            </div> */}
            <form
              className="flex flex-col gap-8 border border-gray-400 dark:border-border px-8 py-16 rounded-2xl shadow-[0_10px_30px_rgba(20,30,60,0.1)]"
              // onSubmit={handleSubmit}
            >
              <div className="flex justify-center items-center gap-4">
                <input
                  type="text"
                  required
                  name="name"
                  // value={contact.name}
                  // onChange={handleInput}
                  className="border border-border px-5 py-3 rounded-md w-full bg-[#f8fafc] focus:bg-white dark:bg-[#212c42] dark:focus:bg-[#24304a] focus:border-[#2563eb] focus:outline-none"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  required
                  name="email"
                  // value={contact.email}
                  // onChange={handleInput}
                  className="border border-border px-5 py-3 rounded-md w-full bg-[#f8fafc] focus:bg-white dark:bg-[#212c42] dark:focus:bg-[#24304a] focus:border-[#2563eb] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <textarea
                rows={4}
                required
                name="message"
                // value={contact.message}
                // onChange={handleInput}
                className="border border-border px-5 py-3 rounded-md w-full bg-[#f8fafc] focus:bg-white dark:bg-[#212c42] dark:focus:bg-[#24304a] focus:border-[#2563eb] focus:outline-none"
                placeholder="Your Message"
              ></textarea>
              <button className="rounded-lg bg-[#2563eb] px-5 py-3 text-[0.95rem] font-semibold text-white hover:bg-[#1d4ed8] transition-all duration-150 ease-in-out">
                Send Message
              </button>
            </form>
            {/* {isSubmit && (
          <p className="m-2 text-green-500 font-bold">
            Thanks! Your message has been sent.
          </p>
        )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
