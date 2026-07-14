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

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setModal({ show: true, message: "Please fill all fields.", type: "error" });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "maknojiya-moh0216", // Service ID
        "template_752iomc", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email.toLowerCase(),
          reply_to: formData.email.toLowerCase(),
          message: formData.message,
          to_email: "mohammadmaknojiya0216@gmail.com",
        },
        "LNXfQdfwxgyIxPGO_" // Public Key
      )
      .then(() => {
        setModal({ show: true, message: "Message sent successfully!", type: "success" });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("EmailJS Error Full:", error);
        setModal({ show: true, message: error.text || "Failed to send message. Please check your connection.", type: "error" });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setModal({ show: false, message: "", type: "success" }), 4000);
      });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      {/* Custom Modal / Toast */}
      {modal.show && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[1000] animate-fade-in-down">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${modal.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <span className="font-bold text-sm">{modal.message}</span>
            <button onClick={() => setModal({ show: false, message: "", type: "success" })} className="ml-2 font-black opacity-70 hover:opacity-100">&times;</button>
          </div>
        </div>
      )}

      <div className="w-11/12 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 font-extrabold tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Have a project or opportunity? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <form 
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm" 
            onSubmit={sendEmail}
          >
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none transition-all focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none transition-all focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>

            <div className="mb-8">
              <label className="block text-slate-700 text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none transition-all focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-full bg-cyan-600 text-white text-sm font-bold flex items-center justify-center gap-3 transition-all hover:bg-cyan-700 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div 
            className="rounded-3xl p-8 lg:p-12 shadow-xl bg-slate-900 text-white relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute w-64 h-64 -right-10 -top-10 bg-cyan-500/10 blur-3xl rounded-full"></div>
            
            <h3 className="text-3xl mb-4 relative z-10 font-bold tracking-tight">Direct Contact</h3>
            <p className="text-slate-300 leading-relaxed mb-10 relative z-10">
              Got a project, opportunity, or just want to talk tech? Reach out directly.
            </p>

            <div className="flex items-center gap-5 p-5 rounded-2xl mb-4 bg-white/5 border border-white/10 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</span>
                <h4 className="text-sm md:text-base mt-1 font-semibold text-white truncate">mohammadmaknojiya0216@gmail.com</h4>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 rounded-2xl mb-10 bg-white/5 border border-white/10 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                <FaWhatsapp size={22} />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp</span>
                <h4 className="text-sm md:text-base mt-1 font-semibold text-white">+91 72767 78597</h4>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 relative z-10">
              <h4 className="mb-4 text-sm font-bold text-slate-400 uppercase tracking-wider">Social Links</h4>
              <div className="flex gap-4">
                <a href={githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center transition-all hover:bg-cyan-600 hover:-translate-y-1">
                  <FaGithub size={20} />
                </a>

                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center transition-all hover:bg-cyan-600 hover:-translate-y-1">
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