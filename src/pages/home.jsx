import React from 'react';
import { Link } from 'react-router-dom';
import Monitoring from '../components/home/monitoring/monitoring.jsx';

function Home() {
  return (
    <div>
      <Monitoring />
      <Link to="/motions">
        Motion
      </Link>
    </div>
  );
}

export default Home;
