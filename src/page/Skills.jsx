import React from "react";
import "../css/Skills.css";
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
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-header">
          <span className="skills-tag">MY SKILLS</span>
          <h2>Technical Skills</h2>
          <p>Technologies and tools I use to build modern applications</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((item, index) => (
            <div className="skills-card" key={index}>

              <div className="skills-card-top">
                <div className="skills-main-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>

              <div className="skills-list">
                {item.skills.map((skill, i) => (
                  <div className="skill-pill" key={i}>
                    {skill.icon}
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