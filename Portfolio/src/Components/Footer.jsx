// src/components/Footer.js
import React from "react";
import "../Design/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Mohamed Belhaj Mohamed. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
