import React, { useState } from "react";
import "../css/Contact.css";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "maknojiya-moh0216",
        "template_752iomc",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: "mohammadmaknojiya0216@gmail.com",
        },
        "LNXfQdfwxgyIxPGO_"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert("Message send nahi hua. EmailJS ID/Key check karo.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">GET IN TOUCH</span>
          <h2>Let's Work Together</h2>
          <p>Have a project or opportunity? Send me a message.</p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="contact-info">
            <h3>Direct Contact</h3>
            <p>
              Got a project, opportunity, or just want to talk tech? Reach out
              directly.
            </p>

            <div className="info-box">
              <FaEnvelope />
              <div>
                <span>Email</span>
                <h4>mohammadmaknojiya0216@gmail.com</h4>
              </div>
            </div>

            <div className="info-box">
              <FaWhatsapp />
              <div>
                <span>WhatsApp</span>
                <h4>+91 72767 78597</h4>
              </div>
            </div>

            <div className="socials">
              <h4>Social Links</h4>

              <a href={githubUrl} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;