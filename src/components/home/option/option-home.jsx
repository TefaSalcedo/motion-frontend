import React from "react";


const OptionHome = () => {

    const options=[
        {
            name: "MONITORINGINNOVATION",
            link: "https://monitoringinnovation.com/",
        },
        {
            name:"GPS CONTROL",
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
        {
            name: "Motion",
            link: "/motions",
        }
    ]
    console.log(options);

  return (
    <div className="option-home">
    
        {options.map((option, index) => (
             <a key={index} href={option.link}>
                {option.name}
            </a>
        ))}
    </div>
  );
}

export default OptionHome;