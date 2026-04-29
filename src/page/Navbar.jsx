import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import mmlogo from "../../public/i.png";

const sections = ["home", "about", "skills", "services", "projects", "contact"];

const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl =
  "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";
const resumeUrl = "../../public/Mohammad_Maknojiya.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-wrapper">
        <div className="nav-left" onClick={() => scrollToSection("home")}>
          <img src={mmlogo} alt="logo" />
        </div>

        <nav className={`nav-center ${mobileOpen ? "open" : ""}`}>
          {sections.map((sec) => (
            <span
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={activeSection === sec ? "active" : ""}
            >
              {sec}
            </span>
          ))}
        </nav>

        <div className="nav-right">
          <div className="nav-icons">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>

          <a href={resumeUrl} download className="resume-btn">
            <FaDownload /> Resume
          </a>

          <div
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;