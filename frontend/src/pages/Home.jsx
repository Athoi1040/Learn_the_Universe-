import './home.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="home-hero">
      <div className="overlay">
        <header className="hero-header">
          <h1>EXPLORE THE UNIVERSE<br />WITH KNOWLEDGE</h1>
        </header>

        {/* ✅ Only show profile panel if logged in 
        {user && (
          <aside className="profile-panel">
            <h3> Profile</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={logout} className="logout-btn">Log Out</button>
          </aside>
        )}*/}

        {/* Slider */}
        <section className='features'>
          <div className="slider">
            <div className="slides">
              <div className="slide" style={{ backgroundImage: `url('/images/slide1.jpg')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('/images/slide2.jpg')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('/images/slide3.jpg')` }}></div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature-box">
            <h2>CONTENT</h2>
            <p>Explore the universal objects and gain knowledge</p>
            <Link to="/explore">
              <button>EXPLORE</button>
            </Link>
          </div>

          <div className="feature-box">
            <h2>SELF LEARNING</h2>
            <p>Access interactive content and enhance your astronomy skills anytime.</p>
            <Link to="/learn">
              <button>JOIN LEARNING</button>
            </Link>
          </div>

          <div className="feature-box">
            <h2>JOIN AS</h2>
            <p>Be a contributor, educator, or explorer and help others discover space.</p>
            <button>ENROLL NOW</button>
          </div>
        </section>
      </div>
    </div>
  );
}
