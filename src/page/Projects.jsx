import React from "react";
import "../CSS/Projects.css";

import thegrovela from "../../public/1.jpeg";
import generalmills from "../../public/2.jpeg";
import ForollyFood from "../../public/3.png";
import AWCIndia from "../../public/4.png";




const projectData = [
  {
    title: "Thegrovela",
    img: thegrovela,
  },
  {
    title: "Generalmills",
    img: generalmills,
  },
    {
    title: "ForollyFood",
    img: ForollyFood,
  },
    {
    title: "AWCIndia",
    img: AWCIndia,
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

            {/* Overlay */}
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