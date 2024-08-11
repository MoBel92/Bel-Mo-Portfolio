// src/components/Contact.js
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        If you would like to get in touch, feel free to reach out via the
        following methods:
      </p>
      <ul className="contact-list">
        <li>
          Email:{" "}
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
