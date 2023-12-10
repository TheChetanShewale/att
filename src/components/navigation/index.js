import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Navigation = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="logo">Your Logo</div>
      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setSelectedPage("home");
                setIsMobileMenuOpen(false);
              }}
              className={selectedPage === "home" ? "selected" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => {
                setSelectedPage("contact-us");
                setIsMobileMenuOpen(false);
              }}
              className={selectedPage === "contact-us" ? "selected" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navigation