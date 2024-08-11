// src/components/Skills.js
import React from "react";
import "../Design/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
