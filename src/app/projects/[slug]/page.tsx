// app/projects/[slug]/page.tsx

import Link from "next/link";

import { Project, projects } from "../../constant/projectdetails/projectdata";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowLeft, Github, Radio } from "lucide-react";
import ProjectNotFound from "@/components/ProjectNotFound";

interface Params {
  slug: string;
}

export default function ProjectPage({ params }: { params: Params }) {
  const project: Project | undefined = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return <ProjectNotFound />;
  }

  // 404 if project doesn't exist

  return (
    <MaxWidthWrapper>
      <div className="">
        <div className=" py-12">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-gray-600 hover:text-white/60 mb-8 transition"
          >
            <ArrowLeft /> Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.shortDescription}</p>
          </header>

          {/* Hero Image/Video */}
          <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden bg-gray-100">
            {project.video ? (
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Project Metadata Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <ul className="space-y-1">
                {project.stack.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <div className="flex flex-col gap-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-500 hover:underline"
                  >
                    <Github /> GitHub Repository
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-500 hover:underline"
                  >
                    <Radio /> Live Demo
                  </Link>
                )}
              </div>
            </div>

            {/* Project Duration */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p>{project.duration}</p>
            </div>
          </div>

          {/* Project Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="prose max-w-none">{project.fullDescription}</div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <p className="mt-2 text-gray-700">{challenge.solution}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            {project.features && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Gallery (Screenshots) */}
            {project.gallery && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

// Generate static paths for SSG
// export function generateStaticParams(): { slug: string }[] {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }
