// src/pages/Profile.jsx
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import '../styles/Features.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });
  const [editMode, setEditMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const onSubmit = (data) => {
    // Simulate save
    setTimeout(() => {
      setSaved(true);
      setEditMode(false);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  return (
    <div className="feature-layout">
      <Sidebar />
      
      <main className="feature-main">
        <div className="feature-container">
          {/* Header */}
          <div className="feature-header">
            <h1>👤 My Profile</h1>
            <p>Manage your account and health information</p>
          </div>

          <div className="feature-grid profile-grid">
            {/* Profile Card */}
            <section className="feature-card-section profile-section">
              <div className="profile-avatar-section">
                <div className="profile-avatar">{user?.name?.charAt(0) || 'U'}</div>
                <h2>{user?.name || 'Guest User'}</h2>
                <p className="profile-email">{user?.email || 'No email'}</p>
              </div>

              {saved && <div className="alert alert--success">✓ Profile updated successfully!</div>}

              <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
                {!editMode ? (
                  <>
                    <div className="profile-info">
                      <div className="info-group">
                        <label>Full Name</label>
                        <p>{user?.name || 'Not set'}</p>
                      </div>
                      <div className="info-group">
                        <label>Email</label>
                        <p>{user?.email || 'Not set'}</p>
                      </div>
                      <div className="info-group">
                        <label>Account Status</label>
                        <p><span className="badge badge--success">Active</span></p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setEditMode(true)}
                      className="btn btn--primary"
                    >
                      Edit Profile
                    </button>
                  </>
                ) : (
                  <>
                    <div className="input-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="error-message">{errors.name.message}</p>}
                    </div>

                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                      />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>

                    <div className="profile-actions">
                      <button 
                        type="button"
                        onClick={() => setEditMode(false)}
                        className="btn btn--secondary"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn--primary">
                        Save Changes
                      </button>
                    </div>
                  </>
                )}
              </form>
            </section>

            {/* Health Information */}
            <section className="feature-card-section">
              <h2>Health Information</h2>
              <div className="health-info-grid">
                <div className="info-card">
                  <label>Age</label>
                  <p>28 years</p>
                </div>
                <div className="info-card">
                  <label>Gender</label>
                  <p>Male</p>
                </div>
                <div className="info-card">
                  <label>Blood Type</label>
                  <p>O+</p>
                </div>
                <div className="info-card">
                  <label>Height</label>
                  <p>5'10"</p>
                </div>
                <div className="info-card">
                  <label>Weight</label>
                  <p>70 kg</p>
                </div>
                <div className="info-card">
                  <label>BMI</label>
                  <p>23.5 (Healthy)</p>
                </div>
              </div>
              <button className="btn btn--secondary btn--block">Edit Health Info</button>
            </section>

            {/* Medical History */}
            <section className="feature-card-section">
              <h2>Medical History</h2>
              <div className="medical-list">
                <div className="medical-item">
                  <h4>Allergies</h4>
                  <p>None recorded</p>
                </div>
                <div className="medical-item">
                  <h4>Medications</h4>
                  <p>None current</p>
                </div>
                <div className="medical-item">
                  <h4>Chronic Conditions</h4>
                  <p>None recorded</p>
                </div>
              </div>
              <button className="btn btn--secondary btn--block">Update Medical History</button>
            </section>

            {/* Settings */}
            <section className="feature-card-section">
              <h2>Settings & Preferences</h2>
              <div className="settings-list">
                <div className="setting-item">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Receive health tips and reminders</p>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <div>
                    <h4>Privacy Mode</h4>
                    <p>Keep your health data private</p>
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="setting-item">
                  <div>
                    <h4>Data Sharing</h4>
                    <p>Share with healthcare providers</p>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
            </section>

            {/* Account Actions */}
            <section className="feature-card-section">
              <h2>Account Actions</h2>
              <div className="account-actions">
                <button className="btn btn--secondary btn--block">
                  🔐 Change Password
                </button>
                <button className="btn btn--secondary btn--block">
                  📥 Download My Data
                </button>
                <button className="btn btn--danger btn--block">
                  ❌ Delete Account
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;