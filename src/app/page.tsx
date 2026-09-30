import AboutPage from "@/features/about/AboutPage";
import EducationPage from "@/features/education/EducationPage";
import HomePage from "@/features/home/HomePage";
import ExperiencePage from "../features/experience/ExperiencePage";
import SkillsPage from "@/features/skills/SkillsPage";
import ProjectsPage from "@/features/projects/ProjectsPage";
import ResumePage from "@/features/resume/ResumePage";

export default function Home() {
  return (
    <div>
      <section id="home" className="scroll-mt-20">
        <HomePage />
      </section>
      <section id="about" className="scroll-mt-20">
        <AboutPage />
      </section>
      <section id="education" className="scroll-mt-20">
        <EducationPage />
      </section>
      <section id="experience" className="scroll-mt-20">
        <ExperiencePage />
      </section>
      <section id="skills" className="scroll-mt-20">
        <SkillsPage />
      </section>
      <section id="projects" className="scroll-mt-20">
        <ProjectsPage />
      </section>
      <section id="resume" className="scroll-mt-20">
        <ResumePage />
      </section>
    </div>
  );
}
