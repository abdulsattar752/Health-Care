// src/components/Sidebar.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 h-screen p-4">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/symptom-checker">Symptom Checker</Link></li>
        <li><Link to="/chat-doctor">AI Chat</Link></li>
        <li><Link to="/diet-planner">Diet Plan</Link></li>
        <li><Link to="/profile">Profile</Link></li> {/* Added */}
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;