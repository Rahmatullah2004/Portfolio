"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { FaDownload } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const sections = [
  "home",
  "about",
  "education",
  "experience",
  "skills",
  "projects",
  "achievements",
  "resume",
  "contact",
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.7],
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);

    if (!element) return;
    setActiveSection(section);
    setIsOpen(false);

    element.scrollIntoView({
      block: "start",
    });
    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-background shadow dark:shadow-indigo-900 shadow-neutral-100">
      {/* Desktop Screen */}
      <div className=" lg:flex hidden justify-between items-center xl:px-4 px-6 py-4 border-b border-border text-sm">
        <h1 className="xl:text-2xl text-xl font-extrabold">Rahmatullah</h1>
        <div className="flex justify-center items-center xl:gap-6 gap-3 font-medium tracking-wide">
          {sections.map((section) => {
            return (
              <Link
                href={`#${section}`}
                key={section}
                className={`font-medium hover:text-blue-500 transition-all duration-200 ease-in-out ${
                  activeSection === section ? "text-blue-500" : ""
                }`}
                onClick={() => handleNavigation(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-4">
          <ThemeToggle />
          <a
            className="flex justify-center items-center cursor-pointer gap-2 px-6 py-3 rounded-2xl bg-blue-500 text-white"
            href="/images/cv/Rahmatullah_Alizada_CV.pdf"
            download="Rahmatullah_Alizada_CV.pdf"
          >
            <span>
              <FaDownload />
            </span>
            Download CV
          </a>
        </div>
      </div>
      {/* Mobile header */}
      <div className="block p-4 lg:hidden">
        <a href="#">
          <h3 className="xs:text-3xl text-xl font-bold">Rahmatullah</h3>
        </a>
        <span className="absolute top-6 sm:right-18 right-14">
          <ThemeToggle />
        </span>
        <button
          className="absolute text-xl right-8 top-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex flex-col overflow-hidden px-4 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            onClick={() => handleNavigation(section)}
            className={`block text-[0.95rem] font-medium w-full border-t py-3 transition-colors ${
              activeSection === section
                ? "font-semibold text-[#2563eb]"
                : "hover:text-[#1d4ed8]"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
        <a
          className="flex justify-center items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500 text-white"
          href="/images/cv/Rahmatullah_Alizada_CV.pdf"
          download="Rahmatullah_Alizada_CV.pdf"
        >
          <span>
            <FaDownload />
          </span>
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Header;
