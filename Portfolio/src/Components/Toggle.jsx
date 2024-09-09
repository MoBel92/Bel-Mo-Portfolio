import React from "react";
import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "../Design/Toggle.css";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="dark-mode-toggle" onClick={toggleTheme}>
      {isDarkMode ? (
        <FaSun style={{ color: "yellow", fontSize: "24px" }} /> // Light mode icon
      ) : (
        <FaMoon style={{ color: "blue", fontSize: "24px" }} /> // Dark mode icon
      )}
    </button>
  );
};

export default DarkModeToggle;
