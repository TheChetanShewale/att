import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

const Navigation = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Set the breakpoint as needed

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          Your Logo
        </Link>

        {/* Hamburger menu for small screens */}
        {!isDesktop && <Navbar.Toggle aria-controls="navbarNav" />}

        {/* Navbar links */}
        {isDesktop ? (
          <div className="d-flex ml-auto">
            <Link
              to="/"
              className={`btn ${
                location.pathname === "/" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Home
            </Link>

            <Link
              to="/contact-us"
              className={`btn ${
                location.pathname === "/contact-us"
                  ? "btn-dark"
                  : "btn-outline-dark"
              } link-left-margin`}
            >
              Contact Us
            </Link>
          </div>
        ) : (
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Link
                to="/"
                className={`btn ${
                  location.pathname === "/contact-us"
                    ? "btn-dark"
                    : "btn-outline-dark"
                } link-top-margin}`}
              >
                Home
              </Link>
              <Link
                to="/contact-us"
                className={`btn ${
                  location.pathname === "/contact-us"
                    ? "btn-dark"
                    : "btn-outline-dark"
                } link-top-margin`}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </div>
    </Navbar>
  );
};

export default Navigation;
