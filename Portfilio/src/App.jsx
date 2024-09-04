import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import "./Design/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
