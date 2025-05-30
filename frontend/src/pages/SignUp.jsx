// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 💾 Simulate storing the user
    console.log("Registered User:", formData);

    // ✅ Redirect to Sign In page after signup
    navigate('/signin');
  };

  const handleCancel = () => {
    setFormData({ firstName: "", lastName: "", email: "", password: "", role: "user" });
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <h2>Become a <span className="highlight">Universe Learner</span></h2>
          <ul>
            <li>Track your progress</li>
            <li>Set learning goals</li>
            <li>Explore space topics</li>
            <li>Test your knowledge</li>
            <li>Build and grow your curiosity</li>
          </ul>
          <div className="rocket-img">
            <img src="/rocket.png" alt="Rocket" />
          </div>
        </div>

        <div className="signup-right">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
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

            <label>
              <input type="checkbox" /> Email me with updates
            </label>

            <div className="button-container">
              <button type="submit">Sign Up</button>
              <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>

            <p>Already registered? <a href="/signin">Sign In</a></p>
          </form>

          <p>
            By signing up, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
