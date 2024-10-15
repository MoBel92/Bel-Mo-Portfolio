import React from "react";
import "../Design/Home.css";
import myPicture from "../assets/my-picture.png";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={myPicture}
              alt="Mohamed Belhaj Mohamed"
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <h1 className="profile-name">Mohamed Belhaj Mohamed</h1>
            <p className="profile-title">Full-Stack Developer</p>
          </div>
        </div>
      </header>

      <section className="status-section">
        <div className="status-content">
          <h2>Hi! I'm Mohamed.</h2>
          <p>
            Dynamic Software Developer with a Diverse Background With a
            background in IT software development and extensive experience in
            the hospitality industry, I bring a unique combination of technical
            expertise and practical skills to the software development field. My
            education provided me with a strong foundation in programming and
            technology. However, my career path led me to hospitality, where I
            gained invaluable experience in project management, team leadership,
            and working under pressure. The transition to hospitality, though
            different from my initial training, allowed me to develop critical
            skills that are highly relevant to software development. I learned
            to manage complex projects, lead diverse teams, and deliver
            exceptional customer service—skills that I am excited to bring back
            to the tech industry. Now, I am eager to leverage my technical
            skills, coupled with my hands-on experience and problem-solving
            abilities, to contribute to innovative software solutions. I am
            passionate about returning to IT and am committed to continuous
            learning and growth in this dynamic field.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Mohamed Belhaj Mohamed © 2023-present | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
