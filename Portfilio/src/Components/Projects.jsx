// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Project Title</h3>
        <p>
          Brief description of the project. Explain what it does, the
          technologies used, and any challenges you faced.
        </p>
        <a
          href="https://github.com/your-github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;
