import React from "react";
import {
  FaCode,
  FaServer,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaServer /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50">
      <div className="w-11/12 max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 font-extrabold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-500 text-lg">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((item, index) => (
            <div 
              className="bg-white p-8 rounded-3xl border border-slate-200 transition-all shadow-sm hover:shadow-md hover:border-cyan-200" 
              key={index}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-100 flex items-center justify-center rounded-2xl text-2xl text-cyan-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl text-slate-900 font-bold tracking-tight">{item.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, i) => (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-700 text-sm font-semibold transition-all hover:bg-white hover:border-cyan-300 hover:shadow-sm" key={i}>
                    <span className="text-lg text-cyan-600">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;