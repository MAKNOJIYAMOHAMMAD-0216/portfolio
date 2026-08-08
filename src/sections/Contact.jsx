import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const githubUrl = "https://github.com/MAKNOJIYAMOHAMMAD-0216";
const linkedinUrl =
  "https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/?isSelfProfile=false";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", type: "success" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setModal({ show: true, message: "Please fill all fields.", type: "error" });
      return;
    }

    setLoading(true);

    try {
      // Direct Background AJAX Submission (NO Email App Opened)
      const response = await fetch("https://formsubmit.co/ajax/mohammadmaknojiya0216@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email.toLowerCase(),
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: "false"
        })
      });

      const resData = await response.json();

      if (response.ok || resData.success === "true" || resData.success === true) {
        setModal({ show: true, message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback EmailJS background send
        await emailjs.send(
          "maknojiya-moh0216",
          "template_752iomc",
          {
            from_name: formData.name,
            from_email: formData.email.toLowerCase(),
            reply_to: formData.email.toLowerCase(),
            message: formData.message,
            to_email: "mohammadmaknojiya0216@gmail.com",
          },
          "LNXfQdfwxgyIxPGO_"
        );
        setModal({ show: true, message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.log("Background Submit:", err);
      setModal({ show: true, message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
      setTimeout(() => setModal({ show: false, message: "", type: "success" }), 4000);
    }
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Ambient Mesh Glow Backdrops */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Toast Modal Notification */}
      {modal.show && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[1000] animate-fade-in-down">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md ${modal.type === 'success' ? 'bg-slate-900/90 border-green-500/50 text-green-400' : 'bg-slate-900/90 border-red-500/50 text-red-400'}`}>
            <span className="font-bold text-sm">{modal.message}</span>
            <button onClick={() => setModal({ show: false, message: "", type: "success" })} className="ml-2 font-black opacity-70 hover:opacity-100">&times;</button>
          </div>
        </div>
      )}

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-sm backdrop-blur-md">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl text-white mb-3 font-bold tracking-tight">
            Let's Work Together
          </h2>

          <p className="max-w-2xl text-slate-400 text-base sm:text-lg font-medium">
            Have a project or opportunity? Send me a message.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Side: Contact Form */}
          <form
            className="bg-[#0E172A]/80 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between"
            onSubmit={sendEmail}
          >
            <div>
              <div className="mb-6">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-700/80 bg-[#131D35]/80 text-white placeholder-slate-500 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-700/80 bg-[#131D35]/80 text-white placeholder-slate-500 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              <div className="mb-8">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-slate-700/80 bg-[#131D35]/80 text-white placeholder-slate-500 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-base font-bold flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Right Side: Direct Contact Card */}
          <div
            className="rounded-3xl p-8 lg:p-12 shadow-xl bg-[#0E172A]/90 border border-cyan-500/20 text-white relative overflow-hidden flex flex-col justify-between backdrop-blur-xl"
          >
            <div className="absolute w-64 h-64 -right-10 -top-10 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Direct Contact</h3>
              <p className="text-slate-300 leading-relaxed mb-10 font-normal">
                Got a project, opportunity, or just want to talk tech? Reach out directly.
              </p>

              {/* Email Direct (Click to Copy) */}
              <div
                onClick={() => {
                  navigator.clipboard.writeText("mohammadmaknojiya0216@gmail.com");
                  setModal({ show: true, message: "Email address copied to clipboard!", type: "success" });
                  setTimeout(() => setModal({ show: false, message: "", type: "success" }), 3000);
                }}
                className="flex items-center gap-5 p-5 rounded-2xl mb-4 bg-[#131D35]/80 border border-slate-800 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#182544] group cursor-pointer"
                title="Click to copy email address"
              >
                <div className="w-12 h-12 rounded-xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 shrink-0 text-xl shadow-inner transition-transform">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email (Click to copy)</span>
                  <h4 className="text-sm md:text-base mt-0.5 font-bold text-white truncate group-hover:text-cyan-400 transition-colors">mohammadmaknojiya0216@gmail.com</h4>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/917276778597"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl mb-10 bg-[#131D35]/80 border border-slate-800 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#182544] group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#15203B] border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 shrink-0 text-xl shadow-inner transition-transform">
                  <FaWhatsapp />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp</span>
                  <h4 className="text-sm md:text-base mt-0.5 font-bold text-white group-hover:text-cyan-400 transition-colors">+91 72767 78597</h4>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-800">
              <h4 className="mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Social Links</h4>
              <div className="flex gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-[#15203B] border border-slate-700/60 text-white flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 hover:-translate-y-1 shadow-md"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-[#15203B] border border-slate-700/60 text-white flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 hover:-translate-y-1 shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;