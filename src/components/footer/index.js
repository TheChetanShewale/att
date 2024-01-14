import React from "react";
import { useMediaQuery } from "react-responsive";

import "./styles.css";
import logo from "../../assets/logo_black.png";

import Social from "../social";
import Divider from "../divider";

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Set the breakpoint as needed

  return (
    <div className="container-fluid footer-container">
      <div className="row">
        {/* Left Column */}
        <div className="col-sm-1 d-none d-sm-block" />
        {/* Center Column */}
        <div className={`col-sm-10 d-flex ${!isDesktop && "flex-column"}`}>
          <div>
            <div className="medium">Contact Us</div>
            <div>+91 9284298715</div>
            <div>support@algotradetech.com</div>
            <div className="have-query medium">
              Have a query?{" "}
              <a
                className="submit-here medium"
                href="https://forms.gle/QXbwrW9f9EM7moDG6"
                target="_blank"
              >
                Submit here
              </a>
            </div>
            <Social isFooter={true} />
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "180px",
                height: "60px",
                marginTop: "10px",
                marginLeft: "-15px",
              }}
            />
            <div className="medium address">
              Sinhgad Road, Nanded City, Nanded, Pune - 411 041
            </div>
          </div>
          <Divider isVertical={true} classes="divider" />
          <div className={!isDesktop && "mt-3"}>
            <p
              className={isDesktop ? "footer-content" : "footer-content-mobile"}
            >
              <span className="fw-bold text-decoration-underline">
                Disclaimer :
              </span>{" "}
              Investment in securities markets are subject to market risks, read
              all the related documents carefully before investing as prescribed
              by SEBI. Issued in the interest of the investors.
            </p>
            <p
              className={isDesktop ? "footer-content" : "footer-content-mobile"}
            >
              <span className="fw-bold text-decoration-underline">Note :</span>{" "}
              It is important to note that our platform is not SEBI (Securities
              and Exchange Board of India) registered. While we strive to
              provide valuable information and services related to financial
              matters, investment, and trading, we are not authorized by SEBI.
              We do not offer financial advice or recommendations, and users are
              encouraged to consult with registered financial professionals for
              personalized guidance. Please be aware of the risks involved in
              financial activities, and be sure to comply with regulatory
              requirements.
            </p>
            <div className="d-flex justify-content-center text-center">
              © Algo Trade Technologies. All Rights Reserved.
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-sm-1 d-none d-sm-block" />
      </div>
    </div>
  );
};

export default Footer;
