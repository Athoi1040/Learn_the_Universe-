// src/pages/Signin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Reuse the same CSS

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleCancel = () => {
    setFormData({ email: '', password: '' });
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Left Section */}
        <div className="signup-left">
          <h2>Welcome back, <span className="highlight">Universe Explorer</span></h2>
          <ul>
            <li>Access your learning dashboard</li>
            <li>Review saved progress</li>
            <li>Continue your journey through space</li>
          </ul>
          <div className="rocket-img">
            <img src="/rocket.png" alt="Rocket" />
          </div>
        </div>

        {/* Right Section */}
        <div className="signup-right">
          <h2>Sign In</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <div className="button-container">
              <button type="submit">Sign In</button>
              <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>

            <p>New here? <a href="/signup">Sign Up</a></p>
          </form>

          <p>
            By signing in, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
