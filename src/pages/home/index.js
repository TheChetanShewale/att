import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ navbarHeight }) => {
  const adjustedHeight = `calc(100% - ${navbarHeight}px)`;

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Left Column (Decreased from col-sm-3 to col-sm-2) */}
        <div className="col-sm-2 d-none d-sm-block bg-info p-3">
          {/* Content for the left column goes here */}
          Left Column
        </div>

        {/* Center Column (Increased from col-sm-6 to col-sm-8) */}
        <div className="col-sm-8 bg-success d-flex align-items-center justify-content-center p-3" style={{height: adjustedHeight}}>
          {/* First Section */}
          <div className="text-center">
            <h2>Take the first step towards your profitable journey today!</h2>
            <p className="mt-3">
              Welcome to AlgoTradeTech, We believe in accuracy and consistency
              in trading and investments.
            </p>
          </div>
        </div>

        {/* Right Column (Decreased from col-sm-3 to col-sm-2) */}
        <div className="col-sm-2 d-none d-sm-block bg-warning p-3">
          {/* Content for the right column goes here */}
          Right Column
        </div>
      </div>
    </div>
  );
};

export default Home;
