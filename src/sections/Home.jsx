import React, { useEffect, useState } from "react";
import profileImg from "../assets/images/logo.jpeg";
import { Github, Linkedin, Mail, ArrowRight, Mouse, Download } from "lucide-react";

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
      className="relative min-h-screen pt-24 pb-8 lg:pt-28 lg:pb-10 px-4 sm:px-8 lg:px-12 flex items-center justify-center bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Ambient Mesh Backdrops & Glowing Radial Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Topographic Contour Pattern Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none stroke-cyan-400/20 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 100 Q 200 300 500 100 T 1100 200" strokeWidth="1.5" />
        <path d="M-100 300 Q 300 500 700 250 T 1300 400" strokeWidth="1" />
        <path d="M-100 600 Q 400 400 900 600 T 1500 500" strokeWidth="1.5" />
        <circle cx="85%" cy="35%" r="280" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="85%" cy="35%" r="380" strokeWidth="0.8" />
      </svg>

      {/* Main Grid Container */}
      <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-2 relative z-10">
        
        {/* Left Column: Text & Actions */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Welcome Tag */}
          <span className="text-sm sm:text-base font-semibold text-cyan-400 tracking-wide mb-4 inline-block">
            Welcome to my portfolio!
          </span>

          {/* Hero Main Heading */}
          <h1 className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] leading-[1.15] mb-5 text-white font-semibold tracking-normal">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 font-bold whitespace-nowrap inline-block">
              Mohammad Maknojiya.
            </span>
          </h1>

          {/* Subheading / Rotating Role */}
          <h2 className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-6 font-medium flex items-center justify-center lg:justify-start gap-2 flex-wrap min-h-[40px]">
            <span>And I am a</span>
            <span
              key={roleIndex}
              className="animate-role-slide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold inline-block"
            >
              {roles[roleIndex]}
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="max-w-[540px] text-base sm:text-lg leading-relaxed text-slate-400 mb-10 font-normal">
            I build modern, responsive and user-friendly websites with clean interfaces, scalable code and a strong focus on user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-12">
            {/* Primary Download CV Button */}
            <a
              href={resumeUrl}
              download="Maknojiya_Mohammad.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-base text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_10px_30px_rgba(6,182,212,0.35)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 ml-1" />
            </a>

            {/* Secondary Contact Me Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-base text-white bg-transparent border border-slate-700/80 hover:border-cyan-400 hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 group"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Bottom Bar: Scroll Down & Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 w-full text-slate-400">
            {/* Scroll Down Indicator */}
            <div className="hidden sm:flex items-center gap-3 text-xs tracking-wider uppercase font-semibold">
              <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
                <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
              </div>
              <span>Scroll down</span>
            </div>

            {/* Divider Line */}
            <div className="hidden sm:block w-px h-6 bg-slate-800" />

            {/* Follow Me On & Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase hidden md:inline-block">
                FOLLOW ME ON —
              </span>
              <div className="flex items-center gap-2.5">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all duration-300 shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all duration-300 shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#contact" 
                  className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all duration-300 shadow-md"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Arched Profile Frame & 3D Accents */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-start lg:pl-2 relative my-6 lg:my-0">
          
          {/* Orbital Rings in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[460px] sm:w-[420px] sm:h-[560px] border border-cyan-500/20 rounded-[180px] pointer-events-none animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[500px] sm:w-[470px] sm:h-[610px] border border-blue-500/10 rounded-[200px] pointer-events-none" />

          {/* Profile Window Container */}
          <div className="relative z-10 group">
            
            {/* 3D Cyan Floating Pyramid (Top-Left) */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 z-30 animate-float">
              <svg width="60" height="60" viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-[0_12px_24px_rgba(6,182,212,0.6)]">
                <path d="M32 6L58 48H6L32 6Z" fill="url(#pyramid-grad1)" />
                <path d="M32 6L58 48H32V6Z" fill="url(#pyramid-grad2)" />
                <defs>
                  <linearGradient id="pyramid-grad1" x1="6" y1="6" x2="58" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#0284C7" />
                  </linearGradient>
                  <linearGradient id="pyramid-grad2" x1="32" y1="6" x2="58" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#0369A1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 3D Cyan Floating Spiral Coil (Bottom-Right) */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 z-30 animate-float-delayed">
              <svg width="68" height="68" viewBox="0 0 72 72" fill="none" className="w-14 h-14 sm:w-18 sm:h-18 drop-shadow-[0_12px_24px_rgba(14,165,233,0.6)]">
                <path d="M20 16C20 10.4772 26.268 6 34 6C41.732 6 48 10.4772 48 16C48 21.5228 41.732 26 34 26C26.268 26 20 30.4772 20 36C20 41.5228 26.268 46 34 46C41.732 46 48 50.4772 48 56C48 61.5228 41.732 66 34 66" stroke="url(#spiral-grad)" strokeWidth="10" strokeLinecap="round" />
                <defs>
                  <linearGradient id="spiral-grad" x1="20" y1="6" x2="48" y2="66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="0.5" stopColor="#0284C7" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Arched Portrait Outer Glowing Glass Boundary */}
            <div className="p-2 sm:p-3 rounded-[130px] sm:rounded-[160px] bg-gradient-to-b from-cyan-400/30 via-blue-500/20 to-purple-600/20 backdrop-blur-md border border-cyan-400/30 shadow-[0_20px_60px_rgba(6,182,212,0.25)] transition-transform duration-500 group-hover:scale-[1.02]">
              
              {/* Arched Photo Canvas */}
              <div className="w-[260px] h-[360px] sm:w-[310px] sm:h-[430px] lg:w-[340px] lg:h-[460px] xl:w-[370px] xl:h-[500px] relative rounded-[120px] sm:rounded-[150px] overflow-hidden bg-slate-900 border border-slate-700/50">
                <img 
                  src={profileImg} 
                  alt="Mohammad Maknojiya" 
                  className="w-full h-full object-cover rounded-[120px] sm:rounded-[150px] transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                {/* Subtle Inner Glow Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;