// src/pages/Profile.jsx (Added for advanced)
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="card">
          <h2>Profile Settings</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add form to update */}
        </div>
      </div>
    </div>
  );
};

export default Profile;