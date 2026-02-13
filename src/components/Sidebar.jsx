// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f8fafc',
      height: '100vh',
      padding: '20px',
      borderRight: '1px solid #e5e7eb'
    }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/symptom-checker">Symptom Checker</Link></li>
        <li><Link to="/chat-doctor">AI Chat</Link></li>
        <li><Link to="/diet-planner">Diet Plan</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
          <button 
            onClick={logout}
            style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;