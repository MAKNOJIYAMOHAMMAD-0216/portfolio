import React from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl =
  "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";

const resumeUrl = "/Maknojiya_Mohammad.pdf";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
        
        <div className="md:col-span-2">
          <h2 className="text-2xl text-slate-900 mb-4 font-bold tracking-tight">Mohammad Maknojiya</h2>
          <p className="text-slate-500 leading-relaxed text-sm max-w-sm">
            Full stack developer passionate about building modern, responsive
            and scalable web applications with clean UI and smooth user
            experience.
          </p>

          <div className="mt-8 flex gap-4">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center transition-all hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
            >
              <FaGithub size={18} />
            </a>

            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center transition-all hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-widest text-slate-900 mb-6 font-bold uppercase">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <a href="#home" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">Home</a>
            <a href="#about" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">Skills</a>
            <a href="#projects" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">Projects</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">Contact</a>
          </nav>
        </div>

        <div>
          <h4 className="text-xs tracking-widest text-slate-900 mb-6 font-bold uppercase">Resources</h4>
          <nav className="flex flex-col gap-3">
            <a href={resumeUrl} download="Maknojiya_Mohammad.pdf" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">
              Resume
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">
              GitHub
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>

      <div className="w-11/12 max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Mohammad Maknojiya. All rights reserved.</p>

        <a
          href={resumeUrl}
          download="Maknojiya_Mohammad.pdf"
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-cyan-600 hover:shadow-lg hover:-translate-y-0.5"
        >
          <FaDownload size={14} /> Download Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;