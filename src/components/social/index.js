import React from "react";
import "./styles.css";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import x from "../../assets/x.svg";

const Social = () => {
  const socialMediaData = [
    { link: "#", name: "Facebook", icon: facebook },
    { link: "#", name: "Instagram", icon: instagram },
    { link: "#", name: "Telegram", icon: telegram },
    { link: "#", name: "X (Twitter)", icon: x },
  ];

  return (
    <div className="d-flex mt-1">
      {socialMediaData.map((socialMedia, index) => (
        <div style={{ marginLeft: index > 0 ? 15 : 0 }}>
          <a key={index} href={socialMedia.link} className="pe-auto link-dark">
            <img
              className="icon"
              src={socialMedia.icon}
              alt={socialMedia.name}
            />
            <p className="mt-1 name">{socialMedia.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Social;
