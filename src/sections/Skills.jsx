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
    <section id="skills" className="py-10 lg:py-14 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Ambient Mesh Glow Backdrops */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-sm backdrop-blur-md">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              MY SKILLS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl text-white mb-3 font-bold tracking-tight">
            Technical Skills
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-medium max-w-xl">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((item, index) => (
            <div
              className="bg-[#0E172A]/80 border border-slate-800 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 hover:-translate-y-1 group"
              key={index}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center rounded-2xl text-2xl text-cyan-400 shadow-inner group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl text-white font-bold tracking-tight">{item.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, i) => (
                  <div 
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#15203B]/80 border border-slate-700/60 text-slate-200 text-sm font-semibold transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-[#1A284A] group/chip" 
                    key={i}
                  >
                    <span className="text-lg text-cyan-400 group-hover/chip:scale-110 transition-transform">
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