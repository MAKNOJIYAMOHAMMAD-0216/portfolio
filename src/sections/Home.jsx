import React, { useEffect, useState } from "react";
import profileImg from "../assets/images/logo.jpeg";

const resumeUrl = "/Maknojiya_Mohammad.pdf";

const Home = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Web Designer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-32 pb-20 px-6 lg:px-8 flex items-center bg-slate-50"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16 text-center md:text-left">
        
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase">
            Welcome to my portfolio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-4 text-slate-900 font-extrabold tracking-tight">
            Hi, I'm <br className="hidden md:block" /><span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Mohammad Maknojiya</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-6 font-bold">
            And I am a <span className="text-cyan-600">{roles[roleIndex]}</span>
          </h2>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-500 mb-10">
            I build modern, responsive and user-friendly websites. Focused on
            clean UI and the best user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={resumeUrl} download="Maknojiya_Mohammad.pdf" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 bg-cyan-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:bg-cyan-700">
                Download CV
              </button>
            </a>

            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 bg-white text-slate-700 border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-cyan-200">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-purple-500/20 blur-[60px] rounded-full"></div>
          
          <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[min(390px,90vw)] lg:h-[min(390px,90vw)] rounded-[35%_65%_55%_45%/45%_35%_65%_55%] p-[14px] bg-gradient-to-br from-purple-600 via-cyan-500 to-green-500 shadow-[0_25px_70px_rgba(124,58,237,0.28)] relative z-10 transition-transform duration-500 hover:scale-105">
            <img 
              src={profileImg} 
              alt="profile" 
              className="w-full h-full object-cover rounded-[35%_65%_55%_45%/45%_35%_65%_55%] bg-white border-[8px] border-white" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;