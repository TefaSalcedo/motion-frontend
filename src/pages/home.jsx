import React from 'react';
import { useNavigate } from "react-router-dom";
import Monitoring from '../components/home/monitoring/monitoring.jsx';
import OptionHome from '../components/home/option/option-home.jsx';
import MotionLogo from '../components/home/logo/motionlogo.jsx';
import WaveCircle from '../components/home/animation/waveCircle.jsx';
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.closest("a")) return;
    navigate("/motions");
  };


  return (
    <div className="home-container" onClick={handleClick}>
      <WaveCircle/>
      <MotionLogo/>
      <Monitoring />
      <OptionHome/>
    </div>
  );
}

export default Home;
