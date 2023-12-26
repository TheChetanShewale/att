import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import people from "../../assets/people.png";

const Products = () => {
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
      ],
    },
  ];

  return (
    <div className="d-flex flex-wrap mt-4 justify-content-center">
      {data.map((item, index) => (
        <div
          key={index}
          style={{ flexBasis: `calc(30% - 10px)`, marginBottom: 10 }}
        >
          <div className="card-container">
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
            <div className="btn-container">
              <Link to="/" className="btn btn-dark">
                Check Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
