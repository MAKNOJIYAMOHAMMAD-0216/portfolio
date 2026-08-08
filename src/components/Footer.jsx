import React from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl =
  "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";

const resumeUrl = "/Maknojiya_Mohammad.pdf";

const Footer = () => {
  return (
    <footer className="bg-[#070D19] text-white pt-20 pb-36 lg:pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient Radial Mesh Backdrops */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400">
              Mohammad Maknojiya
            </span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm max-w-sm font-normal mb-6">
            Full stack developer passionate about building modern, responsive
            and scalable web applications with clean UI and smooth user
            experience.
          </p>

          <a
            href={resumeUrl}
            download="Maknojiya_Mohammad.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-300 mb-6"
          >
            <FaDownload size={13} /> Download Resume
          </a>

          <div className="flex gap-4">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#131D35] border border-slate-700/60 text-slate-300 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 hover:text-white hover:-translate-y-1 shadow-md"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#131D35] border border-slate-700/60 text-slate-300 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 hover:text-white hover:-translate-y-1 shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xs tracking-widest text-cyan-400 mb-6 font-bold uppercase">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <a href="#home" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">Home</a>
            <a href="#about" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">Skills</a>
            <a href="#projects" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">Projects</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">Contact</a>
          </nav>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="text-xs tracking-widest text-cyan-400 mb-6 font-bold uppercase">Resources</h4>
          <nav className="flex flex-col gap-3">
            <a href={resumeUrl} download="Maknojiya_Mohammad.pdf" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">
              Resume
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">
              GitHub
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/80 relative z-10 text-center">
        <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Mohammad Maknojiya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;