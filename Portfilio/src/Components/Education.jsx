import React from "react";
import "../Design/Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-card">
        <h3>Northcoders Graduate in Full-Stack Development</h3>
        <p>
          <a
            href="https://www.northcoders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            Northcoders
          </a>{" "}
          - Manchester 06/2024 - 09/2024
          <br />
          A highly regarded coding school known for its rigorous and immersive
          training programs. At Northcoders, I am gaining hands-on experience in
          full-stack development, mastering technologies such as JavaScript,
          React, Node.js, SQL, PSQL.
          <br />
          <a
            href="/Mohamed-Belhaj-Mohamed-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Diploma
          </a>
        </p>
      </div>
      <div className="education-card">
        <h3>National Diploma of Applied License in Science & Technology</h3>
        <p>
          <a
            href="http://www.isi.rnu.tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            Higher Institute of Computer Science
          </a>{" "}
          - Tunis 09/2011 - 06/2014
          <br />
          I have gained extensive knowledge and hands-on experience in various
          aspects of IT and coding.
          <br />
          <a
            href="/National-Diploma-of-Applied-License.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Diploma
          </a>
        </p>
      </div>
      <div className="education-card">
        <h3>Bachelor of Science in Computer Science</h3>
        <p>
          <a
            href="https://lyceefarhathached.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="institution-link"
          >
            High School Farhat Hashed Rades - Tunis 09/2010 - 06/2011{" "}
          </a>
          <br />
          Developed problem-solving skills and logical thinking through studying
          and implementing various algorithms, Pascal Programming, Database
          manipulation (SQL), and web development (HTML, CSS).
          <br />
          <a
            href="/Baccalaureat-Diploma.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Diploma
          </a>
        </p>
      </div>
    </section>
  );
};

export default Education;
