import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Divider from "../../components/divider";

const AboutUs = () => {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [targetId]);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column */}
        <div className="col-sm-1 d-none d-sm-block" />
        {/* Center Column */}
        <div className="col-sm-10 d-flex align-items-center justify-content-center">
          {/* First Section */}
          <div className="d-flex flex-column mt-4">
            <h3 className="d-flex medium">About Us</h3>
            <p className="mt-3 fw-bold">
              Algo Trade Technologies is another name of passion that drives our
              team into financial markets.
            </p>
            <p>
              We formed AlgoTradeTech with an aim of -{" "}
              <span className="text-decoration-underline">
                Simplifying the learning of financial markets and eliminate the
                struggling phase of every trader or investor.
              </span>
            </p>
            <p>
              At some stage of life in pre-covid era, our financial markets
              journey also started at the same stage as many of us normally do
              without any proper guidance or knowledge.
            </p>
            <p>
              We spent a lot of sleepless days and nights finding our ways
              through the hurdles of markets to get ourselves profitable.
            </p>
            <p>
              <span className="text-decoration-underline">
                We thought of utilising this knowledge and bring it up to the
                needy people
              </span>{" "}
              who really are excited to choose trading or investing as a career.
            </p>
            <p>
              Our focus is on{" "}
              <span className="text-decoration-underline">
                being on top of the fundamental and technical analysis
              </span>{" "}
              which can be life changing for many of us.
            </p>
            <p>
              We try to give our best and analyse the right opportunities with
              minimum risks.
            </p>
            <p>
              At Algo Trade Technologies,{" "}
              <span className="text-decoration-underline">
                Instead of misleading people with{" "}
                <span className="fw-bold">
                  FAKE Promises and NON-FEASIBLE Achievements
                </span>
              </span>
              , we work with{" "}
              <span className="text-decoration-underline">
                ethics and result oriented approach
              </span>{" "}
              towards our trainings and services.
            </p>
            <p>
              Investing or Trading is a continuous process and the learnings are
              also meant to be up to date for that, that's why{" "}
              <span className="text-decoration-underline">
                we regularly update our course materials according to the latest
                trends and learnings in the market
              </span>{" "}
              over time.
            </p>
            <Divider classes={"mt-4 mb-4"} />
            <h3 id="mission" className="d-flex medium">
              Our Mission
            </h3>
            <p className="mt-3">
              Financial markets is the trending topic in recent times for many
              of us.
            </p>
            <p>
              But when it comes to start trading/investing or looking at the
              financial markets as a career{" "}
              <span className="text-decoration-underline">
                everyone who is a beginner
              </span>{" "}
              or even{" "}
              <span className="text-decoration-underline">
                someone with a bad experience in markets
              </span>
              , keeps searching for a{" "}
              <span className="text-decoration-underline">
                proven guidance and methodologies.
              </span>
            </p>
            <p>
              Our mission is to make things simpler and guide you through, which
              covers below points:
            </p>
            <ul className="goals-list mt-1">
              <li>
                Educating people to get the right mindset and trading skills
                with a step by step process to stay for long term in financial
                markets.
              </li>
              <li>
                Educating in the right direction to effectively master the skill
                of trading.
              </li>
              <li>
                Make trading/investing a pleasant experience for you with our
                trainings. (Our trainings are result oriented and we will try to
                solve every single problem you are facing through our support)
              </li>
              <li>
                Many people make losses in the markets due to lack of knowledge
                and loose their hard earned money instead of growing it over the
                time, We are here to help you out.
              </li>
              <li>
                Spread the awareness and power of investing/trading with facts.
              </li>
              <li>
                Keep you updated about the latest trends and shifts in the
                financial markets.
              </li>
            </ul>
            <Divider classes={"mt-4 mb-4"} />
          </div>
        </div>
        {/* Right Column */}
        <div className="col-sm-1 d-none d-sm-block" />
      </div>
    </div>
  );
};

export default AboutUs;
