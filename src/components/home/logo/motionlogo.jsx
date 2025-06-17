import React from "react";
import Imagologo from "../../../assets/Imagologo_motion.svg"
import "./motionlogo.css"

const MotionLogo = () => {
  return (
    <div className="motionlogo">
      <img
        src={Imagologo} 
        alt="Motion Innovation Logo"
      />
    </div>
  );
}

export default MotionLogo;