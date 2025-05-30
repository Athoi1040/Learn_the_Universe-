// src/pages/Signin.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { AuthContext } from '../context/AuthContext';

export default function Signin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simulated login (replace with API in real app)
    const fakeUser = {
      name: formData.email.split('@')[0],
      email: formData.email,
    };

    login(fakeUser); // Store user in context
    navigate('/'); // Redirect to home
  };

  const handleCancel = () => {
    setFormData({ email: '', password: '' });
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
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

        <div className="signup-right">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
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
