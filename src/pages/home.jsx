import React from 'react';
import { Link } from 'react-router-dom';
import Monitoring from '../components/home/monitoring/monitoring.jsx';
import OptionHome from '../components/home/option/option-home.jsx';
import MotionLogo from '../components/home/logo/motionlogo.jsx';

function Home() {
  return (
    <div>
    <MotionLogo />
      <Monitoring />
      <OptionHome/>
    </div>
  );
}

export default Home;
