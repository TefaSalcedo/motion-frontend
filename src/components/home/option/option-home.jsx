import React from "react";
import "./option-home.css";

const OptionHome = () => {
  const options = [
    {
      name: "MONITORINGINNOVATION",
      link: "https://monitoringinnovation.com/",
    },
    {
      name: "GPS CONTROL",
      link: "https://gpscontrol.co/",
    },
    {
      name: "Link repo front",
      link: "https://github.com/TefaSalcedo/motion-frontend",
    },
    {
      name: "Link repo back",
      link: "https://github.com/TefaSalcedo/motion-backend",
    },
    // {
    //     name: "Motion",
    //     link: "/motions",
    // }
  ];
  console.log(options);

  return (
    <div className="home-options-container">
      {options.map((option, index) => (
        <a
          key={index}
          href={option.link}
          target={option.link.startsWith("http") ? "_blank" : "_self"}
          rel={option.link.startsWith("http") ? "noopener noreferrer" : ""}
        >
          {option.name}
        </a>
      ))}
    </div>
  );
};

export default OptionHome;
