import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./store/cartSlice";

import "./App.css";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();
  const numberOfProductsInCart = useSelector((state) => state.cart.length);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Navigation = () => {
    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    if (location.pathname === "login") {
      return null;
    }

    //${isMobileMenuOpen ? "open" : ""}
    return (
      <nav className="top-navigation">
        {!isMobile ? (
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => setSelectedPage("home")}
                className={selectedPage === "home" ? "selected" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => setSelectedPage("cart")}
                className={
                  selectedPage === "cart" ? "cart-tab selected" : "cart-tab"
                }
              >
                Cart<div>{numberOfProductsInCart}</div>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => dispatch(reset())}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <div>
            <div className="hamburger" onClick={toggleMenu}>
              &#9776;
            </div>
            {isMenuOpen ? (
              <ul className="list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                {/* Add more list items as needed */}
              </ul>
            ) : null}
          </div>
        )}
      </nav>
    );
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index path="login" element={<Login />} />
        <Route element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
