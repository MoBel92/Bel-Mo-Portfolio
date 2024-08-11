import React from "react";
import "../Design/About.css";
import myPicture from "../assets/my-picture.png";

const About = () => {
  return (
    <section id="about" className="about">
      <img src={myPicture} alt="Your Name" className="about-photo" />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Experienced hospitality manager transitioning into software
          development, eager to apply my expertise in project management,
          customer service, and problem-solving to the IT field. With a solid
          foundation in programming and a passion for continuous improvement.
          Ready to leverage my background to drive excellence and innovation in
          software development.
        </p>
      </div>
    </section>
  );
};

export default About;
