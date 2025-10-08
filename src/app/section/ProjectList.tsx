// components/sections/ProjectsSection.tsx
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projects, ProjectsSectionProps } from "../constant/projectdetails/projectdata";
import { motion } from "framer-motion";
const sentence = ["Built with", "Passion & Code"];

export default function ProjectsSection({ maxItems }: ProjectsSectionProps) {
  const displayedProjects = maxItems ? projects.slice(0, maxItems) : projects;

  return (
    <section id="projects" className="py-24">
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Sticky Section */}
          <div className="sticky top-20 md:top-30 lg:top-40 self-start">
            <SectionHeader
              sectionNumber="02"
              title="Experience and Skills"
              sentence={sentence}
              highlight={["Passion & Code"]} 
              alignClasses="text-center md:text-left"
              justify="start"
            
            />
          </div>

          {/* Scrollable Projects List */}
          <div className="flex flex-col gap-10">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
