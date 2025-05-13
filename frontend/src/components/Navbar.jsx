import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const location = useLocation();

  // Hide buttons on these paths
  const hideAuthButtons = ['/signup', '/signin'];

  return (
    <nav className="navbar">
      <div className="logo">Learn the<br /> Universe</div>

      {/* Only show buttons if not on signup or signin page */}
      {!hideAuthButtons.includes(location.pathname) && (
        <div className="nav-buttons">
          <Link to="/signup">
            <button className="btn-signup">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="btn-signin">Sign In</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
