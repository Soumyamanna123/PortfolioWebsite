// components/sections/Projects.tsx
import Link from "next/link";

import {
  Project,
  projects,
  ProjectsSectionProps,
} from "../projects/projectdata";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight, CheckCircleIcon } from "lucide-react";

export default function ProjectsSection({ maxItems }: ProjectsSectionProps) {
  const displayedProjects = maxItems ? projects.slice(0, maxItems) : projects;

  return (
    <section id="projects" className="min-h-screen">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div></div>
          <div className="w-24 h-[2px] bg-[linear-gradient(to_left,white_20%,transparent_100%)]"></div>
          <h2 className="text-3xl font-semibold font-sans py-10 text-center">
            Built with{" "}
            <span className="text-[#C9E651] bg-clip-text  font-normal [font-family:var(--font-carattere)]">
              Passion & Code
            </span>
          </h2>
          <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div>
        </div>
        <div className="flex flex-col mt-10 gap-20 md:mt-20 max-w-5xl mx-auto">
          {displayedProjects.map((project: Project) => (
            // <Link href={`/projects/${project.slug}`} key={project.id}>
            <div
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 bg-[linear-gradient(to_top,_#0d0d0d,_rgba(3,20,87,0.5))] border-[0.5px] border-[#0d0d0d] rounded-3xl z-0 overflow-hidden after:-z-10 relative after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-1 after:rounded-3xl after:outline-white/20 after:pointer-events-none lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 "
                //   style={{
                //     backgroundImage: `url(${"/assets/images/grain.jpg"})`,
                //   }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r gap-2 bg-clip-text from-emerald-300 to-sky-400 text-transparent inline-flex font-bold uppercase text-sm tracking-widest">
                    <span>{project.domain}</span>
                    <span>&bull;</span>
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="font-serif mt-2 md:mt-5 text-2xl md:text-4xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/projects/${project.slug}`}>
                    <button className="bg-white/10 text-white h-12 w-full md:w-auto px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer">
                      <span>View Details</span>
                      <ArrowRight />
                    </button>
                  </Link>
                </div>
                <div>
                  <img
                    //   src={project.image}
                    src="/images/assets/ai-startup-landing-page.png"
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
