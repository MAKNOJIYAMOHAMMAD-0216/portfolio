import React, { useEffect, useState, useRef } from "react";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaDownload, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaLaptopCode, 
  FaFolderOpen, 
  FaEnvelope 
} from "react-icons/fa";
import mmlogo from "../assets/images/i.png";

const navItems = [
  { id: "home", label: "Home", icon: <FaHome size={18} /> },
  { id: "about", label: "About", icon: <FaUser size={18} /> },
  { id: "skills", label: "Skills", icon: <FaCode size={18} /> },
  { id: "services", label: "Services", icon: <FaLaptopCode size={18} /> },
  { id: "projects", label: "Projects", icon: <FaFolderOpen size={18} /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope size={18} /> },
];

const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl = "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";
const resumeUrl = "/Maknojiya_Mohammad.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Skip intermediate active section updates during manual smooth scroll clicks
      if (isManualScrolling.current) return;

      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            current = item.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    isManualScrolling.current = true;

    if (manualScrollTimer.current) {
      clearTimeout(manualScrollTimer.current);
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    manualScrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);
  };

  return (
    <>
      {/* Top Header Bar (Desktop Only) */}
      <header className={`hidden lg:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5 bg-transparent"}`}>
        <div className="w-[92%] max-w-[1240px] mx-auto px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-between shadow-xl shadow-slate-950/20 border border-white">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("home")}>
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <img src={mmlogo} alt="logo" className="w-9 h-9 object-cover rounded-full bg-slate-900" />
            </div>
            <span className="text-sm font-bold text-slate-900">Mohammad</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold capitalize cursor-pointer relative transition-colors duration-300 ${activeSection === item.id ? "text-cyan-600 font-bold" : "text-slate-700 hover:text-cyan-600 font-medium"}
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:rounded-full after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full ${activeSection === item.id ? "after:w-full" : ""}`}
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center transition-all duration-300 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white hover:-translate-y-0.5 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center transition-all duration-300 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white hover:-translate-y-0.5 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>

            <a 
              href={resumeUrl} 
              download 
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaDownload size={12} /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Luxury Floating Mobile Bottom Dock */}
      <nav className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-sm px-2.5 py-2 rounded-full bg-[#0F172A]/95 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-between transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                isActive
                  ? "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 text-xs font-bold scale-105"
                  : "p-2.5 rounded-full text-slate-400 hover:text-cyan-400 hover:scale-110"
              }`}
              aria-label={item.label}
            >
              {item.icon}
              {isActive && (
                <span className="text-[11px] font-bold tracking-tight whitespace-nowrap animate-fade-in">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;