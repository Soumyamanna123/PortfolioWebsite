// components/sections/ProjectsSection.tsx
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects, ProjectsSectionProps } from "../constant/projectdata";
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
            <motion.p
              className="text-xs md:text-sm text-left uppercase tracking-widest text-gray-400 md:mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C9E651]">{"{"}</span>
              {" 03 "}
              <span className="text-[#C9E651]">{"}"}</span>
              {" - PROJECTS "}
            </motion.p>
            <div className=" text-left   gap-4 pt-4 pb-8 md:pb-12 lg:pb-18  ">
              {/* <div className="w-24 h-[2px] bg-[linear-gradient(to_left,white_20%,transparent_100%)]"></div> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-sans flex flex-wrap gap-2 justify-left">
                {sentence.map((word, index) => {
                  const isHighlight = ["Passion & Code"].includes(word);
                  return (
                    <motion.span
                      key={word + index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: index * 0.3,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className={
                        isHighlight ? "text-[#C9E651] font-normal" : ""
                      }
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h2>
              {/* <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div> */}
            </div>

            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-sans py-4 text-center md:text-left">
              Built with <span className="text-[#C9E651] ">Passion & Code</span>
            </h2> */}
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
