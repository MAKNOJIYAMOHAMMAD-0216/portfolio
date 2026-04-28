import React from "react";
import "../css/Footer.css";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl =
  "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";
const resumeUrl = "../../public/Mohammad_Maknojiya.pdf";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Mohammad Maknojiya</h2>
          <p>
            Full stack developer passionate about building modern, responsive
            and scalable web applications with clean UI and smooth user
            experience.
          </p>

          <div className="footer-socials">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>RESOURCES</h4>
          <a href={resumeUrl} download>
            Resume
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mohammad Maknojiya. All rights reserved.</p>

        <a href={resumeUrl} download className="footer-btn">
          <FaDownload /> Download Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;