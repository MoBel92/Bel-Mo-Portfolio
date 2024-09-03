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
      <div className="project-card">
        <h3>ShelfShare</h3>
        <p>
          <strong>Back-End:</strong> Developed a RESTful API to support a
          dynamic book-swapping platform, allowing users to exchange books
          within a community. Tech: Node.js, Express, MongoDB, Mongoose
          <br />
          Hosted:
          <a
            href="https://northflank.com/your-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            NorthFlank/Docker
          </a>
          <br />
          README:
          <a
            href="https://github.com/MoBel92/ShelfShare/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            README
          </a>
        </p>
        <p>
          <strong>Front-End:</strong> Created a responsive front-end application
          with Next.js, integrating with the Book Swapping API for browsing,
          sorting, filtering books, and initiating swaps. Tech: Next.js,
          Material-UI, Axios, CSS, HTML, JavaScript, Git & GitHub
          <br />
          Hosted:
          <a
            href="https://shelf-share-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://shelf-share-frontend.vercel.app/
          </a>
        </p>
      </div>
      <div className="project-card">
        <h3>Memory Card Game</h3>
        <p>
          Developed a classic memory matching card game where players flip cards
          to find and match pairs. The game supports single-player and
          multi-player modes, tracks scores in real-time, and includes a restart
          functionality. Tech: HTML, CSS, JavaScript. Deployed on Netlify.
          <br />
          Hosted:
          <a
            href="https://delightful-cheesecake-693b6f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://delightful-cheesecake-693b6f.netlify.app
          </a>
          <br />
          README:
          <a
            href="https://github.com/MoBel92/fe-dom-mini-apps/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            README
          </a>
        </p>
      </div>
      <div className="project-card">
        <h3>Music Player App</h3>
        <p>
          <strong>Description:</strong> A dynamic application that allows users
          to interact with a playlist of songs. Features include viewing song
          details, play counts, currently playing track, and managing an in-game
          balance. Tech: React, JavaScript, HTML, CSS
          <br />
          Hosted:
          <a
            href="https://fe-nc-jukebox.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fe-nc-jukebox.vercel.app/
          </a>
          <br />
          README:
          <a
            href="https://github.com/MoBel92/fe-nc-jukebox/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            README
          </a>
        </p>
      </div>
      <div className="project-card">
        <h3>Gifs Search Engine</h3>
        <p>
          <strong>Back-End:</strong> Integrated with the Giphy API to fetch GIFs
          based on user search queries. Tech: Giphy API, React.
          <br />
          Hosted:
          <a
            href="https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Gybpa8CmfE2g6mbgvYGD5IMpOjJyGcxS&limit=6"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fe-react-data-visualisation-xi.vercel.app/
          </a>
        </p>
        <p>
          <strong>Front-End:</strong> Developed a React-based application with
          functionalities for searching GIFs and uploading custom GIFs. The
          interface includes a search bar, a GIF display area, and an upload
          feature. Tech: React, Axios, CSS, HTML, JavaScript, Git & GitHub.
          <br />
          Hosted:
          <a
            href="https://fe-react-data-visualisation-xi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fe-react-data-visualisation-xi.vercel.app/
          </a>
          <br />
          README:
          <a
            href="https://github.com/MoBel92/fe-react-data-visualisation/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            README
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
