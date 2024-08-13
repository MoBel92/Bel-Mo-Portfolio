// src/components/Projects.js
import React from "react";
import "../Design/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>NC News</h3>
        <p>
          <strong>Back-End:</strong> Created a RESTful API designed to support a
          news aggregation platform. Tech: Node.js, Express, SQL, PSQL, Git &
          GitHub.
          <br />
          Hosted:
          <a
            href="https://backend-project-nc-news-owan.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://backend-project-nc-news-owan.onrender.com
          </a>
          <br />
          README:
          <a
            href="https://github.com/MoBel92/backend-project-nc-news/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend README
          </a>
        </p>
        <p>
          <strong>Front-End:</strong> I developed a dynamic front-end
          application using React. This interface interacts with the NC News API
          to provide users with a rich news aggregation experience. Users can
          view articles, vote on them, and add comments. Key functionalities
          include fetching and displaying articles and comments, managing votes
          in real-time. This React-based front-end complements the robust
          back-end, ensuring a smooth and engaging user experience. Tech: React,
          React Router, Axios, CSS, HTML, JavaScript, Git & GitHub.
          <br />
          README:
          <a
            href="https://github.com/MoBel92/nc-news-project/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend README
          </a>
          <br />
          Hosted:
          <a
            href="https://nc-news-dynamic.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://nc-news-dynamic.netlify.app/
          </a>
        </p>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;
