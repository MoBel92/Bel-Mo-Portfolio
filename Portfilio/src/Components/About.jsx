// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <img src="your-photo.jpg" alt="Your Name" className="about-photo" />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Your bio goes here. Share some information about yourself, your
          background, and your interests.
        </p>
      </div>
    </section>
  );
};

export default About;
