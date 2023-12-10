import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import "./App.css"; // You can create a corresponding CSS file for styling

import Home from "./components/Home/Home";
import Contact from "./components/contact-us/contact";

const App = () => {
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

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
