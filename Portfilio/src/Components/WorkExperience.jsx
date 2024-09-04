import React from "react";
import "../Design/WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-card">
        <h3>
          General Manager -{" "}
          <a
            href="https://www.zappzaa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            Zappza Thai Cafe
          </a>
        </h3>
        <p>
          <strong>Dates:</strong> Feb 2023 - Apr 2024
        </p>
        <ul>
          <li>Directing and managing a 5-star Thai food restaurant.</li>
          <li>Overseeing P&L statements and quality controls.</li>
          <li>Ensuring safety compliance.</li>
          <li>Recruiting and training staff.</li>
        </ul>
      </div>
      <div className="experience-card">
        <h3>
          Deputy General Manager -{" "}
          <a
            href="https://www.pizzaexpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            PizzaExpress
          </a>
        </h3>
        <p>
          <strong>Dates:</strong> Mar 2018 - May 2023
        </p>
        <ul>
          <li>
            Ensuring compliance with licensing, hygiene, and health and safety
            legislation.
          </li>
          <li>Promoting and marketing the business.</li>
          <li>Producing staff rotas.</li>
          <li>Managing budgets.</li>
          <li>
            Controlling stock and keeping statistical and financial records.
          </li>
        </ul>
      </div>
      <div className="experience-card">
        <h3>
          Unit Manager -{" "}
          <a
            href="https://www.busaba.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            Busaba Bangkok Thai
          </a>
        </h3>
        <p>
          <strong>Dates:</strong> Mar 2017 - Mar 2018
        </p>
        <ul>
          <li>Bookkeeping all daily and weekly financial reports.</li>
          <li>
            Controlling stock and keeping statistical and financial records.
          </li>
          <li>Producing staff rotas.</li>
          <li>Recruiting and training new staff.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
