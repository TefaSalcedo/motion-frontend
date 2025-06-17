import React from "react";
import telefonoImg from "../../../assets/Telefono-01.png"
import "./monitoring.css";

const Monitoring = () => {
  return (
    <div className="monitoring-container">
      <span className="Bienvenido">BIENVENIDO A</span>
      <span className="Monitorig">MONITORING INNOVATION</span>
      <div className="monitoring-telefono"> 
        <img 
          src={telefonoImg} 
          alt="Motion Innovation Logo"
        />
      </div>
    </div>
  );
}

export default Monitoring;