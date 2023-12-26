import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Social from "../../components/social";

import playstore from "../../assets/playstore.png";
import Divider from "../../components/divider";
import Products from "../../components/products";
import Features from "../../components/feature";

const Home = ({ navbarHeight }) => {
  const productsHeaderRef = useRef();

  const scrollToProducts = () => {
    const targetDiv = productsHeaderRef.current;
    const scrollAmount = targetDiv.offsetTop + 15;

    // Scroll to the target div with an additional offset
    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column */}
        <div className="col-sm-1 d-none d-sm-block p-3" />
        {/* Center Column */}
        <div
          className="col-sm-10 d-flex align-items-center justify-content-center"
          style={{ marginTop: `${navbarHeight - 20}px` }}
        >
          {/* First Section */}
          <div className="text-center">
            <div className="mesh grad">
              <h2 className="medium">
                Take the first step towards your profitable journey today!
              </h2>
              <p className="mt-3">
                Welcome to AlgoTradeTech, We believe in Accuracy and Consistency
                in every aspect of life and investments.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={scrollToProducts}
                >
                  Learn More
                </button>

                <button
                  style={{ marginLeft: 20 }}
                  type="button"
                  className="btn btn-dark"
                  onClick={scrollToProducts}
                >
                  Products and Services
                </button>
              </div>

              {/* Updated additional content */}
              <div className="d-flex justify-content-center mt-5">
                <h6 className="col-sm-3 d-flex align-items-center justify-content-center no-bottom-margin medium">
                  Our App is live now!
                </h6>
                <div className="col-sm-4 d-flex align-items-center justify-content-center">
                  Download the app to get started
                </div>
                <div className="col-sm-3">
                  <img
                    src={playstore}
                    alt="Your Alt Text"
                    style={{ width: "70%", height: "auto", maxWidth: "200px" }}
                  />
                </div>
              </div>

              {/* Social media buttons */}
              <div className="col-sm-12 mt-5 d-flex align-items-center justify-content-center no-bottom-margin">
                Follow ATT on social media
              </div>

              {/* Gray divider */}
              <div className="col-sm-12 mt-2 mb-3 mx-auto follow-us-divider align-self-center" />

              <div className="col-sm-12 mt-3 d-flex align-items-center justify-content-center">
                <Social />
              </div>
            </div>

            <Divider classes={"mt-4 mb-4"} />

            {/*Section 2*/}
            <h4 className="medium">Why Us?</h4>
            <p ref={productsHeaderRef} className="why-us-desc p-4">
              By spending years, we have bundled all the curated crux of trading
              in our trainings and our product (AutoTrader), which will help you
              to reach your destination of being a profitable trader faster!
            </p>
            <h4 className="medium">What we have for you?</h4>
            <Products />
            {/*<h4 className="medium">What makes us unique?</h4>
            <Features />*/}
          </div>
        </div>
        {/* Right Column */}
        <div className="col-sm-1 d-none d-sm-block p-3" />
      </div>
    </div>
  );
};

export default Home;
