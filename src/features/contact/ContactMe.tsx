"use client";

import { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { MdContacts, MdLocationPin, MdOutlineEmail } from "react-icons/md";

type Contact = {
  name: string;
  email: string;
  message: string;
};

const ContactMe = () => {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const [website, setWebsite] = useState("");

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (website) {
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: data.message || "Your message has been sent successfully!",
      });

      setContact({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-6 mb-12 gap-8">
      <div className="py-4 lg:px-8 md:px-4 sm:px-2">
        <div className="lg:w-1/2 w-full">
          <span className="flex gap-2 justify-center items-center w-fit px-4 py-2 rounded-2xl bg-[#2563eb1a] text-[#2563eb] dark:text-blue-400 text-[0.85rem] font-medium border border-border">
            <MdContacts className="text-[0.98rem]" />
            Get In Touch
          </span>

          <h1 className="my-2 text-4xl tracking-wide lg:leading-16 md:leading-14 sm:leading-12 leading-10 font-extrabold text-black dark:text-white">
            Let&apos;s Build Something Together
          </h1>

          <p className="text-[1.1rem] tracking-wide mb-6">
            Have a project in mind? Let&apos;s talk and create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 text-[0.94rem] dark:bg-[#182030] bg-white lg:p-8 md:p-4 sm:p-2 p-0 rounded-2xl">
          <div className="flex flex-col gap-4 m-8 md:text-sm xs:text-[0.75rem]">
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
                <BiPhone />
              </span>

              <div>
                <span className="tracking-wider">Phone</span>

                <p className="text-black font-semibold tracking-wider dark:text-white">
                  +93744541473
                </p>
              </div>
            </div>

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

            <div className="flex justify-start items-center lg:gap-6 sm:gap-4 gap-3">
              <a
                className="text-[2.8rem]"
                href="https://github.com/Rahmatullah2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="dark:bg-[#24304a] bg-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out my-3 p-2 rounded-full" />
              </a>

              <a
                className="text-[2.8rem]"
                href="https://linkedin.com/in/rahmatullah-alizada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedin className="dark:bg-[#24304a] bg-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out my-3 p-2 rounded-full" />
              </a>
            </div>
          </div>

          <div className="w-full px-2">
            <form
              className="flex flex-col lg:gap-6 md:gap-5 sm:gap-4 gap-3 border border-gray-400 dark:border-border lg:px-8 md:px-8 sm:px-6 px-4 lg:py-12 md:py-10 sm:py-8 py-6 rounded-2xl shadow-[0_10px_30px_rgba(20,30,60,0.1)]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <input
                type="text"
                required
                name="name"
                value={contact.name}
                onChange={handleInput}
                maxLength={100}
                className="border border-border sm:px-5 px-3 sm:py-3 py-2 rounded-md w-full bg-[#f8fafc] focus:bg-white dark:bg-[#212c42] dark:focus:bg-[#24304a] focus:border-[#2563eb] focus:outline-none"
                placeholder="Your Name"
              />

              <input
                type="email"
                required
                name="email"
                value={contact.email}
                onChange={handleInput}
                maxLength={254}
                className="border border-border sm:px-5 px-3 sm:py-3 py-2 rounded-md w-full bg-[#f8fafc] focus:bg-white dark:bg-[#212c42] dark:focus:bg-[#24304a] focus:border-[#2563eb] focus:outline-none"
                placeholder="Your Email"
              />

              <textarea
                rows={4}
                required
                name="message"
                value={contact.message}
                onChange={handleInput}
                maxLength={5000}
                className="border border-border sm:px-5 px-3 sm:py-3 py-2 rounded-md w-full bg-[#f8fafc] focus:bg-white dark:bg-[#212c42] dark:focus:bg-[#24304a] focus:border-[#2563eb] focus:outline-none"
                placeholder="Your Message"
              />

              {status.message && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-[#2563eb] px-5 py-3 text-[0.95rem] font-semibold text-white hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-150 ease-in-out"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
