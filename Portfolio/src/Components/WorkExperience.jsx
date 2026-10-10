import React from "react";
import { motion } from "framer-motion";
import "../Design/WorkExperience.css";

const experiences = [
  {
    title: "Telecoms Fibre Installation Engineer",
    company: "MJ Quinn",
    companyLink: "https://www.mjquinn.co.uk/",
    dates: "Feb 2025 - Present",
    responsibilities: [
      "Install, splice, and test fibre optic cables for residential and commercial customers.",
      "Perform fault finding and troubleshooting to identify and resolve fibre connectivity issues.",
      "Install and configure customer equipment to ensure reliable broadband connectivity.",
      "Use OTDR testing equipment, fibre splicing tools, and technical diagrams to complete installations accurately.",
      "Ensure all installation work complies with industry standards, technical specifications, and health and safety regulations.",
    ],
  },

  {
    title: "General Manager/Partner",
    company: "Zappza Thai Cafe",
    companyLink: "https://www.zappzaa.com/",
    dates: "Feb 2019 - Apr 2024",
    responsibilities: [
      "Directing and managing a 5-star Thai food restaurant.",
      "Overseeing P&L statements and quality controls.",
      "Ensuring safety compliance.",
      "Recruiting and training staff.",
    ],
  },

  {
    title: "Full-Stack Developer",
    company: "BH Bank",
    companyLink: "https://bhbank.tn/",
    dates: "Mar 2016 - Mar 2018",
    responsibilities: [
      "Worked on developing and integrating APIs using ASP.NET Core Web API and SQL, with a focus on backend development.",
      "Maintained and evolved web platforms, ensuring high performance and scalability.",
      "Enhanced user interfaces and ensured responsive designs.",
      "Key technologies: Node.js | C# | ASP.NET Core | JavaScript | React | SQL | MySQL | jQuery | Bootstrap | HTML | CSS.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2 className="work-experience-title">Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="experience-title">
              {experience.title} -{" "}
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="institution-link"
              >
                {experience.company}
              </a>
            </h3>

            <p className="experience-dates">
              <strong>Dates:</strong> {experience.dates}
            </p>

            <ul className="experience-responsibilities">
              {experience.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
