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
  FaCode,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
            My Intro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 font-extrabold tracking-tight">
            About Me
          </h2>
          <p className="text-slate-500 text-lg">
            Web Developer & Mobile App Developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Left Card */}
          <div className="lg:col-span-2 rounded-3xl p-8 lg:p-10 bg-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute w-64 h-64 -right-10 -top-10 bg-cyan-500/10 blur-3xl rounded-full"></div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 relative z-10 text-cyan-400 text-3xl">
                <FaCode />
              </div>

              <h3 className="text-2xl lg:text-3xl mb-4 relative z-10 font-bold">
                Who I Am?
              </h3>

              <p className="text-base leading-relaxed text-slate-300 relative z-10">
                I am a student of BSc IT. I create modern, responsive and
                user-friendly websites with clean UI and smooth user experience.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 relative z-10">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <FaProjectDiagram className="text-2xl text-cyan-400 mb-3" />
                <h4 className="text-2xl mb-1 font-bold">4+</h4>
                <span className="text-slate-400 text-sm font-medium">Projects</span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <FaLaptopCode className="text-2xl text-cyan-400 mb-3" />
                <h4 className="text-2xl mb-1 font-bold">14+</h4>
                <span className="text-slate-400 text-sm font-medium">Skills</span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-3 rounded-3xl p-8 lg:p-10 bg-white border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-cyan-200 hover:shadow-md">
                <FaUser className="w-12 h-12 p-3.5 rounded-xl bg-cyan-100 text-cyan-600 shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Name</h4>
                  <p className="text-sm font-semibold text-slate-900 break-words">Maknojiya Mohammad</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-cyan-200 hover:shadow-md">
                <FaBirthdayCake className="w-12 h-12 p-3.5 rounded-xl bg-cyan-100 text-cyan-600 shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">DOB</h4>
                  <p className="text-sm font-semibold text-slate-900 break-words">Sept 02, 2006</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-cyan-200 hover:shadow-md">
                <FaMapMarkerAlt className="w-12 h-12 p-3.5 rounded-xl bg-cyan-100 text-cyan-600 shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-slate-900 break-words">Ahmedabad, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-cyan-200 hover:shadow-md">
                <MdLocationPin className="w-12 h-12 p-3.5 rounded-xl bg-cyan-100 text-cyan-600 shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Zip Code</h4>
                  <p className="text-sm font-semibold text-slate-900 break-words">385210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-cyan-200 hover:shadow-md">
                <FaPhoneAlt className="w-12 h-12 p-3.5 rounded-xl bg-cyan-100 text-cyan-600 shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Phone</h4>
                  <p className="text-sm font-semibold text-slate-900 break-words">+91 7276778597</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-cyan-200 hover:shadow-md">
                <FaEnvelope className="w-12 h-12 p-3.5 rounded-xl bg-cyan-100 text-cyan-600 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Email</h4>
                  <p className="text-sm font-semibold text-slate-900 truncate">mohammadmaknojiya0216@gmail.com</p>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="text-xl text-slate-900 mb-4 font-bold">Hobbies</h3>

              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold">
                  <FaMusic className="text-cyan-600" /> Music
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold">
                  <FaPlane className="text-cyan-600" /> Travel
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold">
                  <FaFilm className="text-cyan-600" /> Movies
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold">
                  <FaFutbol className="text-cyan-600" /> Sports
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