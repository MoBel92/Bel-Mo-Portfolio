import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import Home from "./Components/Home";
import DarkModeToggle from "./Components/Toggle";
import { ThemeProvider } from "./Components/ThemeContext";
import "./Design/App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="app">
          <DarkModeToggle /> {/* Add the toggle button */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
