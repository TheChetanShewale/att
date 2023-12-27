import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

import people from "../../assets/people.png";

const Products = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Set the breakpoint as needed

  const data = [
    {
      icon: people,
      title: "AutoTrader (Algo/Bot)",
      desc: [
        "Anyone with a basic computer handling knowledge can use it",
        "Execution without human intervention after running the program",
        "Automated entry and exits depending on market conditions*",
        "Built for generating good returns over a specific period of time*",
        "Automated SL/Target calculation and order placement*",
        "Affordable subscriptions",
      ],
    },
    {
      icon: people,
      title: "Skilled Trader (Training)",
      desc: [
        "Mini and micro batches to focus on individual candidates",
        "Entire training in your preferred language i.e., English, Hindi or Marathi",
        "Focuses on basic to advanced concepts to make the candidate fully aware about the financial market ecosystem",
        "Dedicated doubt solving sessions after every training session",
        "Live trading sessions for better understanding",
        "Mentoring community access for post training support and handholding",
        "In person support via chats and emails post training",
        "Affordable enrollment fees",
      ],
    },
    {
      icon: people,
      title: "AlgoCraft Trader (Training)",
      desc: [
        "Focused on training candidates towards developing their own bot",
        "Maximum practical focused",
        "Code snippets and sources are provided after training completion for reference",
        "Entire training in your preferred language i.e., English, Hindi or Marathi",
        "Mini and micro batches",
        "Dedicated doubt solving sessions after every training session",
        "In person support via chats and emails post training",
        "Affordable enrollment fees",
      ],
    },
  ];

  const returnCard = (item) => {
    return (
      <div className="card-container d-flex flex-column">
        <div className="feature-icon-container">
          <img className="feature-icon" src={item.icon} alt={item.title} />
        </div>
        <h6 className="mt-2 medium">{item.title}</h6>
        <div className="mt-4 key-features medium">Key Features:</div>
        <ul className="desc">
          {item.desc.map((item, index) => (
            <li key={index} className="mb-3">
              {item}
            </li>
          ))}
        </ul>
        <div className="btn-container mt-auto">
          <Link to="/" className="btn btn-dark">
            Check Details
          </Link>
        </div>
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
              {returnCard(item)}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <div className="w-100 mt-4 justify-content-center">
              <div key={index} className="mb-4">
                <div className="w-100">{returnCard(item)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
