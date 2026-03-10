// src/components/layout/Navbar/Navbar.jsx
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, darkMode, toggleDarkMode } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="navbar-backdrop" aria-hidden="true" onClick={closeMobileMenu} data-open={mobileMenuOpen} />
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-icon" aria-hidden="true">🏥</span>
          Health Care
        </Link>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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
