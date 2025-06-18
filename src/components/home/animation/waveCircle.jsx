import React from "react";
import "./waveCircle.css";

const WaveCircle = () => {
  return (
    <svg className="wave-circle" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wave-shadow">
          <feDropShadow dx="-8" dy="0" stdDeviation="6" floodColor="black" floodOpacity="0.2" />
        </filter>
      </defs>
      <path
        filter="url(#wave-shadow)"
      />
    </svg>
  );
};

export default WaveCircle;
