import React from "react";
import "../css/Projects.css";

const projectData = [
  {
    title: "Thegrovela",
    img: "/1.jpeg",
  },
  {
    title: "Generalmills",
    img: "/2.jpeg",
  },
  {
    title: "ForollyFood",
    img: "/3.png",
  },
  {
    title: "AWCIndia",
    img: "/4.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h3 className="project-heading-h3">MY PROJECTS</h3>
      <h1 className="projects-title">Projects</h1>
      <p>This are Awesome project made by me</p>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />

            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;