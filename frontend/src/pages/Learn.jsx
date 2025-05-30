

import React from 'react';
import './learn.css';
import { Link } from 'react-router-dom';

function Learn() {
  return (
    <div className="learn-yourself-container">
      
      <div className="intro-section">
        <h1>Learn Yourself</h1>
        <p>
          Learn about our solar neighborhood and the beauty of our planet Earth.
        </p>
        
        <div className="explore-bar">
         <Link to="/">
                   <button className="explore-button">Home</button>
                   </Link>
        <Link to="/explore">
          <button className="explore-button">Explore Now</button>
        </Link>
        </div>
      </div>

      <div className="content-section">

        <div className="card earth">
          <h2>🌍 Planet Earth</h2>
          <p>Understand the unique qualities that make Earth our home.</p>
        </div>

        <div className="card solar">
          <h2>☀️ Solar Neighborhood</h2>
          <p>Meet the planets, moons, and other celestial neighbors of Earth.</p>
        </div>
         
         <div className="card atom">
          <h2>🌐 Atmosphere</h2>
          <p>Learn about the atmosphere of earth.</p>
        </div>


      </div>

    </div>
  );
}

export default Learn;
