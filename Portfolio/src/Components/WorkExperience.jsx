import React from "react";
import { motion } from "framer-motion";
import "../Design/WorkExperience.css";

const experiences = [
  {
    title: "General Manager",
    company: "Zappza Thai Cafe",
    companyLink: "https://www.zappzaa.com/",
    dates: "Feb 2023 - Apr 2024",
    responsibilities: [
      "Directing and managing a 5-star Thai food restaurant.",
      "Overseeing P&L statements and quality controls.",
      "Ensuring safety compliance.",
      "Recruiting and training staff.",
    ],
  },
  {
    title: "Deputy General Manager",
    company: "PizzaExpress",
    companyLink: "https://www.pizzaexpress.com/",
    dates: "Mar 2018 - May 2023",
    responsibilities: [
      "Ensuring compliance with licensing, hygiene, and health and safety legislation.",
      "Promoting and marketing the business.",
      "Producing staff rotas.",
      "Managing budgets.",
      "Controlling stock and keeping statistical and financial records.",
    ],
  },
  {
    title: "Unit Manager",
    company: "Busaba Bangkok Thai",
    companyLink: "https://www.busaba.com/",
    dates: "Mar 2017 - Mar 2018",
    responsibilities: [
      "Bookkeeping all daily and weekly financial reports.",
      "Controlling stock and keeping statistical and financial records.",
      "Producing staff rotas.",
      "Recruiting and training new staff.",
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
            whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
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
