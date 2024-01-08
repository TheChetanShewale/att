import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/navigation";
import ScrollToTop from "./components/scroll";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Performance from "./pages/performance";

const App = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the fixed navbar after it's rendered
    const navbar = document.querySelector(".custom-navbar");
    if (navbar) {
      const height = navbar.clientHeight;
      setNavbarHeight(height);
    }
  }, []); // Run this effect only once after the initial render

  return (
    <Router>
      <ScrollToTop />
      <div className="h-100" style={{ marginTop: `${navbarHeight}px` }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home navbarHeight={navbarHeight} />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Home navbarHeight={navbarHeight} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
