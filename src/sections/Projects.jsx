import React from "react";

const projectData = [
  {
    title: "Thegrovela",
    img: "/1.jpeg",
  },
  {
    title: "Generalmills",
    img: "/2.jpeg",
  },
  {
    title: "ForollyFood",
    img: "/3.png",
  },
  {
    title: "AWCIndia",
    img: "/4.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 lg:py-14 bg-[#0F172A] text-white relative overflow-hidden text-center">
      {/* Ambient Mesh Glow Backdrops */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-sm backdrop-blur-md">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              MY PROJECTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl text-white mb-3 font-bold tracking-tight">
            Featured Work
          </h2>

          <p className="max-w-2xl text-slate-400 text-base sm:text-lg font-medium">
            Here are some of the awesome projects I've built.
          </p>
        </div>

        {/* 4-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <div 
              className="relative w-full aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer group bg-[#0E172A] border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1" 
              key={index}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110" 
              />

              {/* Hover Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent text-white flex flex-col justify-end p-6 text-left opacity-0 transition-all duration-300 group-hover:opacity-100 backdrop-blur-xs">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  Featured Project
                </span>
                <h3 className="text-xl font-bold text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;