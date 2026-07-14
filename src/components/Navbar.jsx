import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import mmlogo from "../assets/images/i.png";

const sections = ["home", "about", "skills", "services", "projects", "contact"];
const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl = "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";
const resumeUrl = "/Maknojiya_Mohammad.pdf";

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3 backdrop-blur-lg bg-white/50" : "py-5 bg-transparent"}`}>
      <div className="w-11/12 max-w-6xl mx-auto px-6 py-3 rounded-full bg-white/90 backdrop-blur flex items-center justify-between shadow-sm border border-slate-100">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
          <img src={mmlogo} alt="logo" className="w-10 h-10 object-cover rounded-full" />
        </div>

        {/* Links */}
        <nav className={`fixed lg:static top-24 lg:top-auto right-[-100%] lg:right-auto w-64 lg:w-auto h-[calc(100vh-6rem)] lg:h-auto bg-white lg:bg-transparent rounded-l-3xl lg:rounded-none shadow-2xl lg:shadow-none flex flex-col lg:flex-row items-start lg:items-center p-8 lg:p-0 gap-8 transition-all duration-300 ease-in-out ${mobileOpen ? "!right-0" : ""}`}>
          {sections.map((sec) => (
            <span
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`text-sm font-semibold capitalize cursor-pointer relative transition-colors duration-300 ${activeSection === sec ? "text-cyan-600" : "text-slate-600 hover:text-cyan-600"}
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:rounded-full after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full ${activeSection === sec ? "after:w-full" : ""}`}
            >
              {sec}
            </span>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-3">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center transition-all hover:bg-cyan-600 hover:text-white hover:-translate-y-0.5">
              <FaGithub size={18} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center transition-all hover:bg-cyan-600 hover:text-white hover:-translate-y-0.5">
              <FaLinkedinIn size={18} />
            </a>
          </div>

          <a href={resumeUrl} download className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-600 text-white text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-cyan-700">
            <FaDownload size={14} /> Resume
          </a>

          {/* Hamburger */}
          <div className="lg:hidden w-7 h-5 cursor-pointer flex flex-col justify-between" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`block w-full h-[2px] bg-slate-800 rounded-full transition-all duration-300 origin-left ${mobileOpen ? "rotate-45 translate-x-1" : ""}`}></span>
            <span className={`block w-full h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-full h-[2px] bg-slate-800 rounded-full transition-all duration-300 origin-left ${mobileOpen ? "-rotate-45 translate-x-1" : ""}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;