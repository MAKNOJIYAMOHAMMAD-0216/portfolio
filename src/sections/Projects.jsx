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
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 text-center">
      <div className="w-11/12 max-w-6xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
          My Projects
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-extrabold text-slate-900 tracking-tight">
          Featured Work
        </h2>
        <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
          Here are some of the awesome projects I've built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <div 
              className="relative w-full aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group bg-white border border-slate-200" 
              key={index}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
              />

              <div className="absolute inset-0 bg-slate-900/80 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
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