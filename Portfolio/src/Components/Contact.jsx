import React, { useState } from "react";
import "../Design/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">
        If you would like to get in touch, feel free to reach out via the
        following methods:
      </p>
      <ul className="contact-list">
        <li
          onMouseEnter={() => handleMouseEnter("email")}
          onMouseLeave={handleMouseLeave}
          className={
            hovered === "email" ? "contact-item hovered" : "contact-item"
          }
        >
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          Email:{" "}
          <a href="mailto:belhadj.mohamad@gmail.com">
            belhadj.mohamad@gmail.com
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave}
          className={
            hovered === "linkedin" ? "contact-item hovered" : "contact-item"
          }
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mohamed-belhadj-mohamed-a1422aa3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("github")}
          onMouseLeave={handleMouseLeave}
          className={
            hovered === "github" ? "contact-item hovered" : "contact-item"
          }
        >
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          GitHub:{" "}
          <a
            href="https://github.com/MoBel92"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("whatsapp")}
          onMouseLeave={handleMouseLeave}
          className={
            hovered === "whatsapp" ? "contact-item hovered" : "contact-item"
          }
        >
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
          WhatsApp:{" "}
          <a
            href="https://wa.me/4407392856557"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
