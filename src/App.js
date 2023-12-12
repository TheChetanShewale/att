import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import "./App.css";

import Navigation from "./components/navigation";

import Home from "./pages/home";
import Contact from "./pages/contact-us";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<Outlet />}>
          <Route path="/" index element={<Home />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
