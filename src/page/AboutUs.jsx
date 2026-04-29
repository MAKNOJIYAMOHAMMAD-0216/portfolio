import React from "react";
import "../css/AboutUs.css";
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
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-tag">MY INTRO</span>
          <h2>About Me</h2>
          <p>Web Developer & Mobile App Developer</p>
        </div>

        <div className="about-wrap">
          <div className="about-left">
            <div className="about-icon-box">
              <FaCode />
            </div>

            <h3>Who I Am?</h3>

            <p>
              I am a student of BSc IT. I create modern, responsive and
              user-friendly websites with clean UI and smooth user experience.
            </p>

            <div className="about-stats">
              <div>
                <FaProjectDiagram />
                <h4>4+</h4>
                <span>Projects</span>
              </div>

              <div>
                <FaLaptopCode />
                <h4>14+</h4>
                <span>Skills</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-info">
              <div className="info-card">
                <FaUser />
                <div>
                  <h4>Name</h4>
                  <p>Maknojiya Mohammad</p>
                </div>
              </div>

              <div className="info-card">
                <FaBirthdayCake />
                <div>
                  <h4>DOB</h4>
                  <p>Sept 02, 2006</p>
                </div>
              </div>

              <div className="info-card">
                <FaMapMarkerAlt />
                <div>
                  <h4>Location</h4>
                  <p>Ahmedabad, India</p>
                </div>
              </div>

              <div className="info-card">
                <MdLocationPin />
                <div>
                  <h4>Zip Code</h4>
                  <p>385210</p>
                </div>
              </div>

              <div className="info-card">
                <FaPhoneAlt />
                <div>
                  <h4>Phone</h4>
                  <p>+91 7276778597</p>
                </div>
              </div>

              <div className="info-card">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <p>mohammadmaknojiya0216@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="about-hobbies">
              <h3>Hobbies</h3>

              <div className="hobby-list">
                <span><FaMusic /> Music</span>
                <span><FaPlane /> Travel</span>
                <span><FaFilm /> Movies</span>
                <span><FaFutbol /> Sports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;