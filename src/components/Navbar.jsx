// src/components/Navbar.jsx
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout, darkMode, toggleDarkMode } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-icon">🏥</span>
          Health Care
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            {user ? (
              <>
                <Link to="/dashboard" className="nav-link" onClick={closeMobileMenu}>
                  Dashboard
                </Link>
                <Link to="/symptom-checker" className="nav-link" onClick={closeMobileMenu}>
                  Symptom Checker
                </Link>
                <Link to="/chat-doctor" className="nav-link" onClick={closeMobileMenu}>
                  AI Doctor
                </Link>
                <Link to="/diet-planner" className="nav-link" onClick={closeMobileMenu}>
                  Diet Plan
                </Link>
                <Link to="/profile" className="nav-link" onClick={closeMobileMenu}>
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </Link>
                <a href="#features" className="nav-link" onClick={closeMobileMenu}>
                  Features
                </a>
              </>
            )}
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">
            <button 
              className="btn-theme"
              onClick={toggleDarkMode}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {user ? (
              <>
                <span className="user-name">Welcome, {user.name}</span>
                <button 
                  onClick={() => {
                    logout();
                    closeMobileMenu();
                  }}
                  className="btn btn--danger btn--sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn--secondary btn--sm" onClick={closeMobileMenu}>
                  Login
                </Link>
                <Link to="/register" className="btn btn--primary btn--sm" onClick={closeMobileMenu}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;