import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import playstore from "../../assets/playstore.png";

const Home = ({ navbarHeight }) => {
  const adjustedHeight = `calc(100% - ${navbarHeight}px)`;

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Left Column */}
        <div className="col-sm-1 d-none d-sm-block bg-success p-3">
          Left Column
        </div>
        {/* Center Column */}
        <div
          className="col-sm-10 d-flex align-items-center justify-content-center p-3"
          style={{ height: adjustedHeight }}
        >
          {/* First Section */}
          <div className="text-center">
            <h2>Take the first step towards your profitable journey today!</h2>
            <p className="mt-3">
              Welcome to AlgoTradeTech, We believe in Accuracy and Consistency
              in every aspect of life and investments.
            </p>
            <button type="button" className="btn btn-dark">
              Learn More
            </button>

            {/* Updated additional content */}
            <div className="d-flex justify-content-center mt-5">
              <h6 className="col-sm-3 d-flex align-items-center justify-content-center no-bottom-margin">
                Our App is live now!
              </h6>
              <div
                className="col-sm-4 d-flex align-items-center justify-content-center"
                style={{ color: "gray" }}
              >
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

            {/* Updated additional content */}
            <div className="col-sm-12 mt-5 d-flex align-items-center justify-content-center no-bottom-margin">
              Follow ATT on social media
            </div>

            {/* Gray divider */}
            <div className="col-sm-12 mt-2 mb-3 mx-auto divider follow-us-divider align-self-center" />
          </div>
        </div>
        {/* Right Column */}
        <div className="col-sm-1 d-none d-sm-block bg-warning p-3">
          Right Column
        </div>
      </div>
    </div>
  );
};

export default Home;
