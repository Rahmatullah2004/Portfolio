import AboutPage from "@/features/about/AboutPage";
import EducationPage from "@/features/education/EducationPage";
import HomePage from "@/features/home/HomePage";

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
    </div>
  );
}
