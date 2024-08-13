// src/components/Contact.js
import React from "react";
import "../Design/Contact.css";

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
          <a href="mailto:your-email@gmail.com">belhadj.mohamad@gmail.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mohamed-belhadj-mohamed-a1422aa3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          GitHub:
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
