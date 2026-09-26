import Header from "@/components/layout/Header";

import {
  FiDownload,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiCalendar,
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiGlobe,
} from "react-icons/fi";
import { PiFileCSharp } from "react-icons/pi";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiDotnet,
} from "react-icons/si";

export default function ResumePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              {/* Left */}
              <div>
                <p className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  RESUME
                </p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Rahmatullah{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Alizad
                  </span>
                </h1>

                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                  Computer Science Student & Frontend Developer
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                  I build modern, responsive and user-friendly web applications
                  using React, Next.js, Tailwind CSS and JavaScript. I am also
                  interested in backend development and continuously expanding
                  my full-stack development skills.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href="/Rahmatullah_Alizad_CV.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  <FiDownload size={18} />
                  Download CV
                </a>

                <a
                  href="/Rahmatullah_Alizad_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
                >
                  <FiExternalLink size={18} />
                  View PDF
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
              <a
                href="mailto:rahmat.alizad2004@gmail.com"
                className="flex items-center gap-2 transition hover:text-blue-600"
              >
                <FiMail />
                rahmat.alizad2004@gmail.com
              </a>

              <span className="flex items-center gap-2">
                <FiMapPin />
                Kabul, Afghanistan
              </span>

              <a
                href="https://github.com/Rahmatullah2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-blue-600"
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/rahmatullah-alizada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-blue-600"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
            {/* ================= LEFT ================= */}
            <div>
              {/* EXPERIENCE */}
              <ResumeSection icon={<FiBriefcase />} title="Experience">
                <TimelineItem
                  year="2025 — Present"
                  title="Frontend Developer"
                  company="Hadaf-e-Bartar Academy"
                  description="Developing responsive and modern web interfaces using React and Tailwind CSS. Working with APIs and connecting frontend applications with backend services."
                  tags={["React", "Tailwind CSS", "JavaScript"]}
                />
              </ResumeSection>

              {/* EDUCATION */}
              <ResumeSection icon={<FiBookOpen />} title="Education">
                <TimelineItem
                  year="2023 — Present"
                  title="Bachelor of Computer Science"
                  company="Kabul Polytechnic University"
                  description="Studying Computer Science with a focus on Information Systems, software development, databases and modern application development."
                  tags={["Computer Science", "Information Systems"]}
                />
              </ResumeSection>

              {/* PROJECTS */}
              <ResumeSection icon={<FiCode />} title="Projects">
                <TimelineItem
                  year="University Project"
                  title="Futsal Management System"
                  company="Full-Stack Web Application"
                  description="A management system designed to handle futsal field bookings, customers, training sessions, payments and related gym operations."
                  tags={["React", "Node.js", "Express", "MySQL", "JWT"]}
                />

                <TimelineItem
                  year="Web Project"
                  title="Vanix Website"
                  company="Modern Responsive Website"
                  description="A modern responsive website built with a focus on clean UI, reusable components and responsive design."
                  tags={["Next.js", "React", "Tailwind CSS"]}
                  last
                />
              </ResumeSection>
            </div>

            {/* ================= RIGHT ================= */}
            <aside className="space-y-8">
              {/* SKILLS */}
              <div>
                <ResumeSectionTitle
                  icon={<FiCode />}
                  title="Technical Skills"
                />

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Skill icon={<SiReact />} name="React" />
                  <Skill icon={<SiNextdotjs />} name="Next.js" />
                  <Skill icon={<SiJavascript />} name="JavaScript" />
                  <Skill icon={<SiTypescript />} name="TypeScript" />
                  <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
                  <Skill icon={<SiNodedotjs />} name="Node.js" />
                  <Skill icon={<SiExpress />} name="Express.js" />
                  <Skill icon={<SiMysql />} name="MySQL" />
                  <Skill icon={<SiMongodb />} name="MongoDB" />
                  <Skill icon={<SiGit />} name="Git" />
                  <Skill icon={<SiGithub />} name="Github" />
                  <Skill icon={<SiPython />} name="Python" />
                  <Skill icon={<SiCplusplus />} name="C++" />
                  <Skill icon={<PiFileCSharp />} name="C#" />
                  <Skill icon={<SiDotnet />} name="ASP.NET Core" />
                </div>
              </div>

              {/* LANGUAGES */}
              <div>
                <ResumeSectionTitle icon={<FiGlobe />} title="Languages" />

                <div className="mt-5 space-y-4">
                  <Language name="Dari" level="Native" />
                  <Language name="English" level="Good" />
                  <Language name="German" level="Beginner" />
                </div>
              </div>

              {/* INTERESTS */}
              <div>
                <ResumeSectionTitle icon={<FiCalendar />} title="Interests" />

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Software Engineering",
                    "AI & Machine Learning",
                    "Open Source",
                    "Futsal",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <section className="border-t border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Interested in working together?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
              Feel free to contact me or download my complete CV for more
              information about my experience and skills.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:rahmat.alizad2004@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <FiMail />
                Contact Me
              </a>

              <a
                href="/Rahmatullah_Alizad_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function ResumeSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <ResumeSectionTitle icon={icon} title={title} />

      <div className="mt-8">{children}</div>
    </section>
  );
}

function ResumeSectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
        {icon}
      </div>

      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  company,
  description,
  tags,
  last = false,
}: {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  last?: boolean;
}) {
  return (
    <div className="relative grid grid-cols-[90px_1fr] gap-5 sm:grid-cols-[120px_1fr]">
      {/* Year */}
      <div className="pt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
        {year}
      </div>

      {/* Timeline */}
      <div className={`relative ${last ? "" : "pb-10"}`}>
        {/* Dot */}
        <div className="absolute -left-7.5 top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-950" />

        {/* Line */}
        {!last && (
          <div className="absolute -left-6.25 top-4 h-full w-px bg-gray-200 dark:bg-gray-800" />
        )}

        {/* Content */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-5 dark:border-gray-800 dark:bg-gray-900/40">
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            {company}
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-blue-500/50 hover:bg-blue-50/50 dark:border-gray-800 dark:hover:bg-blue-950/20">
      <span className="text-lg text-blue-600 dark:text-blue-400">{icon}</span>

      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

function Language({ name, level }: { name: string; level: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-800">
      <span className="font-medium">{name}</span>

      <span className="text-sm text-gray-500 dark:text-gray-400">{level}</span>
    </div>
  );
}
