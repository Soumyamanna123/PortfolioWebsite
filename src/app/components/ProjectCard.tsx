// components/cards/ProjectCard.tsx
import { ArrowRight, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { Project } from "../constant/projectdata";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="w-full sticky top-50 md:top-75 lg:top-30 px-4 pt-6 md:pt-8 md:px-6 bg-[linear-gradient(to_top,_#0d0d0d,_rgba(3,20,87,0.5))] border border-[#1c1c1c] rounded-2xl bg-black overflow-hidden  after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-1 after:rounded-2xl after:outline-white/10 after:pointer-events-none"
      // style={{
      //   top: `calc(64px + ${project.id *40}px ) `
      // }}
    >
      <div className="grid md:grid-cols-2 gap-6 w-full">
        <div className="pb-8 md:pb-10">
          <div className="bg-gradient-to-r bg-clip-text from-emerald-300 to-sky-400 text-transparent inline-flex font-semibold uppercase text-xs tracking-wide gap-1">
            <span>{project.domain}</span>
            <span>&bull;</span>
            <span>{project.duration}</span>
          </div>

          <h3 className="font-serif mt-2 text-xl md:text-2xl text-white">
            {project.title}
          </h3>

          <ul className="flex flex-col gap-2 mt-3 text-white/60 text-sm">
            {project.stack.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <CheckCircleIcon className="size-4" />
                <span>{tech}</span>
              </li>
            ))}
          </ul>

          <Link href={`/projects/${project.slug}`}>
            <button className="bg-white/10 text-white text-sm h-10 w-full md:w-auto px-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 mt-6">
              <span>View</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
