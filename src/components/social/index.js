import React from "react";
import "./styles.css";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import x from "../../assets/x.svg";

const Social = ({ isFooter }) => {
  const socialMediaData = [
    {
      link: "https://www.facebook.com/AlgoTradeTech",
      name: "Facebook",
      icon: facebook,
    },
    {
      link: "https://www.instagram.com/AlgoTradeTech/",
      name: "Instagram",
      icon: instagram,
    },
    { link: "https://t.me/AlgoTradeTech", name: "Telegram", icon: telegram },
    { link: "https://twitter.com/AlgoTradeTech", name: "X (Twitter)", icon: x },
  ];

  return (
    <div className={`d-flex ${isFooter ? "mt-3" : "mt-1"}`}>
      {socialMediaData.map((socialMedia, index) => (
        <div style={{ marginLeft: index > 0 ? 15 : 0 }}>
          <a
            key={index}
            href={socialMedia.link}
            className="pe-auto link-dark"
            target="_blank"
          >
            <img
              className="icon"
              src={socialMedia.icon}
              alt={socialMedia.name}
            />
            {!isFooter && <p className="mt-1 name">{socialMedia.name}</p>}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Social;
