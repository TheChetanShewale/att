import React from "react";
import "./styles.css";

import people from "../../assets/people.png";

const Features = () => {
  const data = [
    {
      icon: people,
      title: "Mini and Micro Batches",
      desc: "Very small batches to provide more attention personally which enhances the learning and one to one communication",
    },
    {
      icon: people,
      title: "No Language Barrier",
      desc: "You can enroll for training in English, Hindi or Marathi depending on your preference. Complete training in your preferred langugage.",
    },
    {
      icon: people,
      title: "Practical focused",
      desc: "More practicals less theory, We provide indepth knowledge to help you become a PRO Trader",
    },
    {
      icon: people,
      title: "Dedicated Doubt Solving Sessions",
      desc: "Dedicated doubt solving sessions after the training.",
    },
    {
      icon: people,
      title: "Live Trade Sessions",
      desc: "Live trade sessions - to you aware about how to analyse in realtime and take decisions",
    },
    {
      icon: people,
      title: "Mentoring Community",
      desc: "You get access to our community for better understanding and to keep yourself on track after the training",
    },
    {
      icon: people,
      title: "Post course support via emails",
      desc: "Connect with us for any required support after the course via email",
    },
    {
      icon: people,
      title: "Support via chat",
      desc: "Keep posted to our team via chat with your queries and we are happy to help you at the earliest",
    },
  ];

  return (
    <div className="d-flex flex-wrap mt-4 justify-content-center">
      {data.map((item, index) => (
        <div
          key={index}
          style={{ flexBasis: `calc(30% - 10px)`, marginBottom: 10 }}
        >
          <div
            style={{
              borderRadius: "5px",
              height: "100%",
              minHeight: 120,
              border: "0.5px solid silver",
              margin: "5px",
              padding: "8px",
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: "50%",
                overflow: "hidden",
                width: "70px",
                height: "70px",
                margin: "0 auto",
                border: "0.5px solid silver",
              }}
            >
              <img className="feature-icon" src={item.icon} alt={item.title} />
            </div>
            <h6 className="mt-2 title">{item.title}</h6>
            <div className="mt-3 desc text-justify">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
