import React from "react";
import { Code2, Smartphone, Layers3, Monitor, ArrowRight } from "lucide-react";
import "../css/Services.css";

const servicesData = [
  {
    icon: <Code2 size={30} />,
    title: "Web Development",
    desc: "Modern websites with frontend, backend, database and REST API integration.",
  },
  {
    icon: <Smartphone size={30} />,
    title: "Mobile Application",
    desc: "Android and iOS mobile applications using React Native.",
  },
  {
    icon: <Layers3 size={30} />,
    title: "Web Design",
    desc: "Clean, responsive and user-friendly UI design for smooth experience.",
  },
  {
    icon: <Monitor size={30} />,
    title: "Desktop Application",
    desc: "Desktop applications using Java and Electron JS.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">MY SERVICES</span>
          <h2>What I Can Do</h2>
          <p>I provide modern digital solutions for web, mobile and desktop platforms.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <a href="#contact" className="service-link">
                Contact Me <ArrowRight size={17} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;