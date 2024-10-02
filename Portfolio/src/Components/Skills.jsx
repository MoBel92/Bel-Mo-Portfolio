import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faCloud,
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../Design/Skills.css";

// Skills Data Array
const skillsData = [
  {
    section: "Languages",
    skills: [
      { icon: faJs, name: "JavaScript", type: "icon" },
      { icon: faNodeJs, name: "Node.js", type: "icon" },
      { image: "/ASPNET.png", name: "ASP.NET Core", type: "image" },
    ],
  },
  {
    section: "Back-End",
    skills: [
      { icon: faServer, name: "HTTP Servers", type: "icon" },
      { image: "/PostgreSQL.png", name: "PostgreSQL", type: "image" },
      { icon: faDatabase, name: "SQL", type: "icon" },
      { image: "/ExpressJs.png", name: "Express.js", type: "image" },
      { image: "/MongoDB.png", name: "MongoDB", type: "image" },
    ],
  },
  {
    section: "Front-End",
    skills: [
      { icon: faHtml5, name: "HTML5", type: "icon" },
      { icon: faCss3, name: "CSS3", type: "icon" },
      { icon: faReact, name: "React", type: "icon" },
      { image: "/NextJS.png", name: "Next.js", type: "image" },
    ],
  },
  {
    section: "Hosting",
    skills: [
      { image: "/Vercel.png", name: "Vercel", type: "image" },
      { image: "/Netlify.png", name: "Netlify", type: "image" },
      { image: "/Amplify.png", name: "Amplify", type: "image" },
    ],
  },
  {
    section: "Testing",
    skills: [{ image: "/Jest.png", name: "Jest", type: "image" }],
  },
  {
    section: "Soft Skills",
    skills: [
      {
        image: "/PairProgramming.png",
        name: "Pair Programming",
        type: "image",
      },
      {
        image: "/TechnicalCom.png",
        name: "Technical Communication",
        type: "image",
      },
      { image: "/Agile.png", name: "Agile", type: "image" },
      { image: "/ScrumMaster.png", name: "SCRUM", type: "image" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      {skillsData.map((skillSection) => (
        <div key={skillSection.section} className="skills-section">
          <h3>{skillSection.section}</h3>
          <div className="skills-icons">
            {skillSection.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                {skill.type === "icon" ? (
                  <FontAwesomeIcon icon={skill.icon} size="6x" />
                ) : skill.type === "image" ? (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-image"
                  />
                ) : null}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
