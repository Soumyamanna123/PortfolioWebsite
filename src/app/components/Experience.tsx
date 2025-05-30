import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "SattsCyberTech Pvt Ltd",
    period: "2022–Present",
    description:
      "Developed full-stack applications using modern technologies. Implemented security best practices and optimized application performance.",
  },
  {
    role: "Software Developer Intern",
    company: "DataSpace Security",
    period: "2020–2022",
    description:
      "Assisted in developing security-focused applications. Gained experience in secure coding practices and vulnerability assessment.",
  },
];

const Experience = () => {
  return (
    <div className="w-full space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl hover:bg-[#121212] transition-all duration-300"
        >
          <div className="flex gap-4">
            {/* Placeholder for company logo */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
              <span className="text-white/60 text-lg font-bold">
                {exp.company.charAt(0)}
              </span>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h4 className="font-medium text-white text-lg">{exp.role}</h4>
                  <p className="text-white/60 text-sm">{exp.company}</p>
                </div>
                <span className="text-white/60 text-sm bg-white/5 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-gray-500/20 via-gray-500/50 to-transparent my-4"></div>

              <p className="text-white/80 leading-relaxed">{exp.description}</p>

              {/* Skills tags - optional */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">
                  Cybersecurity
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
