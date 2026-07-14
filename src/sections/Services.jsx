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
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
            My Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 font-extrabold tracking-tight">
            What I Can Do
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            I provide modern digital solutions for web, mobile and desktop platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-left transition-all hover:bg-white hover:border-cyan-200 hover:shadow-xl hover:-translate-y-1 group" 
              key={index}
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6 transition-all group-hover:bg-cyan-600 group-hover:text-white group-hover:-rotate-3">
                {service.icon}
              </div>

              <h3 className="text-slate-900 text-xl mb-3 font-bold">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              <a href="#contact" className="inline-flex items-center gap-2 text-cyan-600 text-sm font-bold transition-all hover:gap-3">
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