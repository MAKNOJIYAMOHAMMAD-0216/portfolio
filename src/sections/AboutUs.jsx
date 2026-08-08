import React from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMusic,
  FaPlane,
  FaFilm,
  FaFutbol,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const AboutUs = () => {
  return (
    <section id="about" className="py-10 lg:py-14 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Soft Ambient Radial Mesh Backdrops */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-sm backdrop-blur-md">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              MY INTRO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl text-white mb-3 font-bold tracking-tight">
            About Me
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Web Developer & Mobile App Developer
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Who I Am? */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-[#0E172A]/80 border border-cyan-500/20 backdrop-blur-xl shadow-[0_10px_40px_rgba(6,182,212,0.08)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Who I Am?
              </h3>

              <p className="text-base leading-relaxed text-slate-300 font-normal mb-8">
                I am a student of BSc IT. I create modern, responsive and user-friendly websites with clean UI and smooth user experience. My passion lies in bridging the gap between elegant design and robust technical architecture.
              </p>
            </div>

            {/* Bottom Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
              {/* Projects Stat */}
              <div className="p-5 rounded-2xl bg-[#131D35]/80 border border-slate-800 flex flex-col items-center text-center hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg mb-3 group-hover:scale-110 transition-transform">
                  <FaProjectDiagram />
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">4+</h4>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Projects</span>
              </div>

              {/* Skills Stat */}
              <div className="p-5 rounded-2xl bg-[#131D35]/80 border border-slate-800 flex flex-col items-center text-center hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg mb-3 group-hover:scale-110 transition-transform">
                  <FaLaptopCode />
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">14+</h4>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Skills</span>
              </div>
            </div>
          </div>

          {/* Right Card: Personal Information & Hobbies */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-[#0E172A]/90 border border-slate-800/80 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            
            {/* Info Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Name */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 text-xl shadow-inner">
                  <FaUser />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Name</h4>
                  <p className="text-base font-bold text-white">Maknojiya Mohammad</p>
                </div>
              </div>

              {/* Birthday */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 text-xl shadow-inner">
                  <FaBirthdayCake />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Birthday</h4>
                  <p className="text-base font-bold text-white">Sept 02, 2006</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 text-xl shadow-inner">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-base font-bold text-white">Chhapi, India</p>
                </div>
              </div>

              {/* Zip Code */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 text-xl shadow-inner">
                  <MdLocationPin />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Zip Code</h4>
                  <p className="text-base font-bold text-white">385210</p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <a 
                href="https://wa.me/917276778597" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 text-xl shadow-inner transition-transform">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                  <p className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">+91 7276778597</p>
                </div>
              </a>

              {/* Email */}
              <div 
                className="flex items-start gap-4 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 text-xl shadow-inner">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Email</h4>
                  <span className="text-sm font-bold text-white block break-all leading-snug">
                    mohammadmaknojiya0216<br className="hidden sm:block" />@gmail.com
                  </span>
                </div>
              </div>

            </div>

            {/* Hobbies Section */}
            <div className="mt-10 pt-8 border-t border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Interests & Hobbies
              </h4>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#15203B]/80 text-slate-200 border border-slate-700/60 text-xs font-semibold hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300 group cursor-default">
                  <FaMusic className="text-cyan-400 group-hover:scale-110 transition-transform" /> Music
                </span>
                <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#15203B]/80 text-slate-200 border border-slate-700/60 text-xs font-semibold hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300 group cursor-default">
                  <FaPlane className="text-cyan-400 group-hover:scale-110 transition-transform" /> Travel
                </span>
                <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#15203B]/80 text-slate-200 border border-slate-700/60 text-xs font-semibold hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300 group cursor-default">
                  <FaFilm className="text-cyan-400 group-hover:scale-110 transition-transform" /> Movies
                </span>
                <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#15203B]/80 text-slate-200 border border-slate-700/60 text-xs font-semibold hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300 group cursor-default">
                  <FaFutbol className="text-cyan-400 group-hover:scale-110 transition-transform" /> Sports
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;