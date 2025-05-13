import './home.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// src/pages/Home.jsx
//import './home.css';

export default function Home() {
  return (
    
    <div className="home-hero">

      
       <div className="overlay">
        <header className="hero-header">
          <h1>EXPLORE THE UNIVERSE<br />WITH KNOWLEDGE</h1>
        </header>



        <section className='features'>
             <div className="slider">
                  <div className="slides">
                    <div className="slide" style={{ backgroundImage: `url('/images/slide1.jpg')` }}></div>
                    <div className="slide" style={{ backgroundImage: `url('/images/slide2.jpg')` }}></div>
                    <div className="slide" style={{ backgroundImage: `url('/images/slide3.jpg')` }}></div>
                  </div>
                </div>
        </section>
          


        



       

       <section className="features">
          <div className="feature-box">
            <h2>HOME</h2>
            <p>Learn about our solar neighborhood and the beauty of our planet Earth.</p>
            <button>EXPLORE</button>
          </div>
          <div className="feature-box">
            <h2>SELF LEARNING</h2>
            <p>Access interactive content and enhance your astronomy skills anytime.</p>
            <button>JOIN LEARNING</button>
          </div>
          <div className="feature-box">
            <h2>JOIN AS </h2>
            <p>Be a contributor, educator, or explorer and help others discover space.</p>
            <button>ENROLL NOW</button>
          </div>
        </section>
      </div>
    </div>
    
  );
}
