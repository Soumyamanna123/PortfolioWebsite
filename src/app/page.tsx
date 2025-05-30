import About from "./section/About";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import SkillsSection from "./section/MySkills";
import NavBar from "./section/NavBar";
import ProjectsSection from "./section/ProjectList";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
