// src/components/Navbar.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, darkMode, toggleDarkMode } = useContext(AuthContext);

  return (
    <nav className="bg-soft-blue text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Health Care</Link>
      <div>
        {user ? (
          <>
            <Link to="/dashboard" className="mx-2">Dashboard</Link>
            <button onClick={logout} className="mx-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2">Login</Link>
            <Link to="/register" className="mx-2">Register</Link>
          </>
        )}
        <button onClick={toggleDarkMode} className="mx-2">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;