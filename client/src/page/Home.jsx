import React, { useEffect, useState } from "react";
import "../css/Home.css";
import profileImg from "../../public/logo.jpeg";

const resumeUrl = "/Mohammad_Maknojiya.pdf";

const Home = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Web Designer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-left">
          <h4 className="hero-subtitle">WELCOME TO MY PORTFOLIO</h4>

          <h1 className="hero-title">
            Hi, I'm <span>Mohammad Maknojiya</span>
          </h1>

          <h2 className="hero-role">
           And I am <span>{roles[roleIndex]}</span>
          </h2>

          <p className="hero-desc">
            I build modern, responsive and user-friendly websites. Focused on
            clean UI and best user experience.
          </p>

          <div className="hero-buttons">
            <a href={resumeUrl} download>
              <button className="btn primary">Download CV</button>
            </a>

            <a href="#contact">
              <button className="btn secondary">Contact Me</button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-box">
            <img src={profileImg} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;