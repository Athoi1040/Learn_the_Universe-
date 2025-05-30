

import React from 'react';
import './explore.css';
import { Link } from 'react-router-dom';

const topics = [
  { title: 'Planets', description: 'Discover our solar system.', emoji: '🪐' },
  { title: 'Stars', description: 'Light and life of the universe.', emoji: '🌟' },
  { title: 'Black Holes', description: 'Mysterious cosmic vacuums.', emoji: '🕳️' },
  { title: 'Galaxies', description: 'Star cities in the cosmos.', emoji: '🌌' },
  { title: 'Comet', description: 'Consist of a neucleus of ice, dust and has a tail.', emoji: '☄' },
  { title: 'Asteroid', description: 'Satellite that turn around the planet.', emoji: '🌕' },

];

function Explore() {
  return (
    <div className="explore-container">
      
      
      <aside className="explore-sidebar">
        <div className="explore-logo"></div>
        <ul>
          <li>Planets</li>
          <li>Stars</li>
          <li>Black Holes</li>
          <li>Galaxies</li>
        </ul>
      </aside>


      <main className="explore-main">

        <div className="explore-navbar">
          
          <Link to="/">
          <button className="explore-button">Home</button>
          </Link>
          <Link to="/learn">
          <button className="explore-button">Learn yourself</button>
        </Link>
          <button>Read</button>
          <button>Gain</button>
        </div>


        <section className="explore-content">
          <h1>Learn the Universe</h1>
          <p>
            Dive deep into the cosmos. Explore planets, stars, black holes, and galaxies. Learn the science behind our vast universe.
          </p>
          <div className="explore-topics-bar">
            <button className="topics-btn">TOPICS</button>
            <input type="text" placeholder="🔍 Topic..." />
          </div>
          

          <div className="explore-cards">
            {topics.map((topic, index) => (
              <div key={index} className="explore-card">
                <div className="emoji">{topic.emoji}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                
                <button>Explore</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Explore;
