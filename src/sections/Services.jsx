import React from "react";
import { Code2, Smartphone, Layers3, Monitor, ArrowRight } from "lucide-react";

const servicesData = [
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    desc: "Modern websites with frontend, backend, database and REST API integration.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Application",
    desc: "Android and iOS mobile applications using React Native.",
  },
  {
    icon: <Layers3 size={28} />,
    title: "Web Design",
    desc: "Clean, responsive and user-friendly UI design for smooth experience.",
  },
  {
    icon: <Monitor size={28} />,
    title: "Desktop Application",
    desc: "Desktop applications using Java and Electron JS.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-14 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Ambient Radial Mesh Backdrops */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-sm backdrop-blur-md">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              MY SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl text-white mb-3 font-bold tracking-tight">
            What I Can Do
          </h2>

          <p className="max-w-2xl text-slate-400 text-base sm:text-lg font-medium">
            I provide modern digital solutions for web, mobile and desktop platforms.
          </p>
        </div>

        {/* 4-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              className="bg-[#0E172A]/80 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-8 text-left transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)] hover:-translate-y-1 flex flex-col justify-between group" 
              key={index}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:-rotate-3 shadow-inner">
                  {service.icon}
                </div>

                <h3 className="text-white text-xl mb-3 font-bold tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {service.desc}
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold transition-all hover:gap-3 group-hover:text-cyan-300">
                Contact Me <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;