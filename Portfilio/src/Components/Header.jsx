// src/components/Header.js
import React from "react";
import "../Design/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Mohamed Belhaj Mohamed </h1>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
