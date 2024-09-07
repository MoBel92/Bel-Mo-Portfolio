import React from "react";
import { motion } from "framer-motion";
import "../Design/Projects.css";

const projects = [
  {
    title: "NC News",
    description:
      "A dynamic front-end application using React, interacting with a RESTful API.",
    image: "/Nc-News.png",
    frontEndLink: "https://nc-news-dynamic.netlify.app/",
    frontEndReadme:
      "https://github.com/MoBel92/nc-news-project/blob/main/README.md",
    backEndLink: "https://backend-project-nc-news-owan.onrender.com",
    backEndReadme:
      "https://github.com/MoBel92/backend-project-nc-news/blob/main/README.md",
  },
  {
    title: "ShelfShare",
    description:
      "A book-swapping platform with a RESTful API and responsive front-end.",
    image: "/ShelfShare.png",
    frontEndLink: "https://shelf-share-frontend.vercel.app/",
    frontEndReadme: "https://github.com/MoBel92/ShelfShare/blob/main/README.md",
    backEndLink: "https://northflank.com/your-app",
    backEndReadme: null,
  },
  {
    title: "Memory Card Game",
    description:
      "A classic memory matching card game with single-player and multi-player modes.",
    image: "/Memory-Matching-Cards.png",
    frontEndLink: "https://delightful-cheesecake-693b6f.netlify.app",
    frontEndReadme:
      "https://github.com/MoBel92/fe-dom-mini-apps/blob/main/README.md",
    backEndLink: null,
    backEndReadme: null,
  },
  {
    title: "Music Player App",
    description:
      "A dynamic app to manage and interact with a playlist of songs.",
    image: "/Hot-Hits.png",
    frontEndLink: "https://fe-nc-jukebox.vercel.app/",
    frontEndReadme:
      "https://github.com/MoBel92/fe-nc-jukebox/blob/main/README.md",
    backEndLink: null,
    backEndReadme: null,
  },
  {
    title: "Gifs Search Engine",
    description:
      "A React-based app to search and display GIFs using the Giphy API.",
    image: "/Gifs-Engine.png",
    frontEndLink: "https://fe-react-data-visualisation-xi.vercel.app/",
    frontEndReadme:
      "https://github.com/MoBel92/fe-react-data-visualisation/blob/main/README.md",
    backEndLink: null,
    backEndReadme: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.backEndLink && (
              <div className="project-links">
                <p>
                  <strong>Back-End:</strong>
                </p>
                <p>
                  Hosted:{" "}
                  <a
                    href={project.backEndLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.backEndLink}
                  </a>
                </p>
                {project.backEndReadme && (
                  <p>
                    README:{" "}
                    <a
                      href={project.backEndReadme}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Back-End README
                    </a>
                  </p>
                )}
              </div>
            )}
            {project.frontEndLink && (
              <div className="project-links">
                <p>
                  <strong>Front-End:</strong>
                </p>
                <p>
                  Hosted:{" "}
                  <a
                    href={project.frontEndLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.frontEndLink}
                  </a>
                </p>
                {project.frontEndReadme && (
                  <p>
                    README:{" "}
                    <a
                      href={project.frontEndReadme}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Front-End README
                    </a>
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
