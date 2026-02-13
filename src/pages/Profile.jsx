// src/pages/Profile.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';     // ← This was missing!

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex">
      <Sidebar />                    {/* ← Now Sidebar is defined */}
      <div className="flex-1 p-4">
        <div className="card">
          <h2>Profile Settings</h2>
          <p>Name: {user?.name || 'Guest'}</p>
          <p>Email: {user?.email || 'Not logged in'}</p>
          {/* Add more profile fields / edit form here later */}
        </div>
      </div>
    </div>
  );
};

export default Profile;