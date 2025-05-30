// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useContext, useRef, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu(prev => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        Learn the<br /> Universe
      </div>

      {/* Only show buttons on main routes */}
      {!user && !['/signup', '/signin'].includes(location.pathname) && (
        <div className="nav-buttons">
          <Link to="/signup">
            <button className="btn-signup">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="btn-signin">Sign In</button>
          </Link>
        </div>
      )}

      {/* Profile Dropdown */}
      {user && (
        <div className="profile-section" ref={menuRef}>
          <div className="avatar-icon" onClick={toggleMenu}>
            <img src="/profile-icon.png" alt="User" />
          </div>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="profile-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="profile-header">
                  <strong>{user.name}</strong>
                  <small>{user.email}</small>
                </div>

                <ul>

                  <li><Link to="/profile">Edit Profile</Link></li>

                  
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/learn">Courses</Link></li>
                  

                  <li><button onClick={logout}>Log Out</button></li>
                </ul>
                
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </nav>
  );
}
