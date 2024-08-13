// src/components/Skills.js
import React from "react";
import "../Design/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>
          Languages: JavaScript, using Node.js and browsers as environment
        </li>
        <li>Back-End: HTTP servers, SQL, PSQL, seeding, migrationst</li>
        <li>
          Front-End: HTML, CSS, React, Lighthouse and other accessibility tools
        </li>
        <li>Testing: Test Driven Development (TDD), Jest, SuperTest</li>
        <li>
          Soft Skills: Paired programming, technical communication, SDL, agile
          and SCRUM methodologies
        </li>
        <li>Hosting: Render, Netlify</li>
      </ul>
    </section>
  );
};

export default Skills;
