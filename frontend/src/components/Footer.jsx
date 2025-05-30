

import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h2>Learn The Universe 🌌</h2>
        <p>Explore planets, stars, black holes, and galaxies from our solar neighborhood and beyond.</p>
        <div className="footer-links">
          <Link to="">Facebook</Link>
          <Link to="">Instagram</Link>
          <Link to="">LinkedIn</Link>
          <Link to="">Twiteer</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@learntheuniverse.com</p>

        </div>



        <p className="footer-copy">&copy; {new Date().getFullYear()} Learn The Universe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
