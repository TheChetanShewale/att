import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

import investor from "../../assets/investor.png";
import algo from "../../assets/algo.png";
import robot from "../../assets/robot.png";

const Products = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Set the breakpoint as needed

  const data = [
    {
      icon: investor,
      title: "Skilled Trader (Training)",
      subtext: "Master the art of trading",
      descTitle: "Covered Points",
      desc: [
        "Myths and Reality of trading",
        "Fundamental Analyis",
        "Technical Analysis",
        "Acquiring the right psychology for trading and investments",
        "Capital Management",
        "Trade Management",
        "Difference between different trading and investment types and which is best suitable for you",
        "How to be safe from noise around you (general public opinions about the market)",
      ],
      descTitle2: "Key Features",
      desc2: [
        "Candidate gets trained for Day trading, Short term investing and Long term investing in this course",
        "Mini and micro batches to focus on individual candidates",
        "Entire training in your preferred language i.e., English, Hindi or Marathi",
        "Focuses on basic to advanced concepts to make the candidate fully aware about the financial market ecosystem",
        "Dedicated doubt solving sessions after every training session",
        "Live trading sessions for better understanding",
        "Mentoring community access for post training support and handholding",
        "In person support via chats and emails post training",
        "Affordable enrollment fees",
        "Training Mode: Online",
      ],
      formLink: "https://forms.gle/iiSRNkWKWGBtbH1G8",
    },
    {
      icon: robot,
      title: "Algo Crafter (Training)",
      subtext: "Learn to create your own trading algos",
      descTitle: "Covered Points",
      desc: [
        "Basics of technical analyis",
        "Basics of programming required for developing an algo",
        "Knowledge transfer on how to code the technical analysis conditions in algo",
        "Fetching and Analysing the realtime data",
        "Transforming the realtime data",
        "Generating signals",
        "Executing trades automatically",
      ],
      descTitle2: "Key Features",
      desc2: [
        "Focused on training candidates towards developing their own algos",
        "Maximum practical focused",
        "Code snippets and sources are provided after training completion for reference",
        "Entire training in your preferred language i.e., English, Hindi or Marathi",
        "Mini and micro batches",
        "Dedicated doubt solving sessions after every training session",
        "In person support via chats and emails post training",
        "Affordable enrollment fees",
        "Training Mode: Online",
      ],
      formLink: "https://forms.gle/L45NGzhSkJe6qQB59",
    },
    {
      icon: algo,
      badge: "Coming Soon",
      title: "AutoTrader (Algo)",
      subtext: "Our algo for YOUR benefit in markets",
      descTitle: "Key Features",
      desc: [
        "Anyone with a basic computer handling knowledge can use it",
        "Execution without human intervention after running the program",
        "Automated entry and exits depending on market conditions*",
        "Built for generating good returns over a specific period of time*",
        "Automated SL/Target calculation and order placement*",
        "Affordable subscriptions",
      ],
      formLink: "https://forms.gle/HC1F8dNSG2y53G2V7",
    },
  ];

  const returnCard = (item, index) => {
    return (
      <div className="card-container d-flex flex-column position-relative">
        {item.badge && (
          <div className="position-absolute top-0 end-0 m-2 badge">
            {item.badge}
          </div>
        )}
        <div className="feature-icon-container">
          <img className="feature-icon" src={item.icon} alt={item.title} />
        </div>
        <h6 className="mt-2 medium">{item.title}</h6>
        <div className="subtext">{item.subtext}</div>
        <div className="mt-4 key-features medium">{item.descTitle}:</div>
        <ul className="desc">
          {item.desc.map((item, index) => (
            <li key={index} className="mb-3">
              {item}
            </li>
          ))}
        </ul>
        {item.descTitle2 && (
          <div>
            <div className="key-features medium">{item.descTitle2}:</div>
            <ul className="desc">
              {item.desc2.map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {index < 2 && (
          <div className={`btn-container ${isDesktop && "mt-auto"}`}>
            <Link className="btn btn-dark" to={item.formLink} target="_blank">
              Enroll
            </Link>
            <Link to="/" className="btn btn-dark product-btn-margin">
              Check Details
            </Link>
          </div>
        )}
        {index === 2 && (
          <div className={`btn-container ${isDesktop && "mt-auto"}`}>
            <Link className="btn btn-dark" to={item.formLink} target="_blank">
              Notify me
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {isDesktop ? (
        <div className="d-flex flex-wrap mt-4 justify-content-center">
          {data.map((item, index) => (
            <div
              key={index}
              style={{ flexBasis: `calc(30% - 10px)`, marginBottom: 10 }}
            >
              {returnCard(item, index)}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <div className="w-100 mt-4 justify-content-center">
              <div key={index} className="mb-4">
                <div className="w-100">{returnCard(item, index)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
