// src/components/layout/Sidebar/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/symptom-checker', icon: '🔍', label: 'Symptom Checker' },
    { path: '/chat-doctor', icon: '💬', label: 'AI Chat' },
    { path: '/diet-planner', icon: '🍎', label: 'Diet Plan' },
    { path: '/profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <>
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`} aria-label="Dashboard navigation">
        <div className="sidebar-header">
          <h2 className={collapsed ? 'hidden' : ''}>Health Care</h2>
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              title={collapsed ? item.label : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className={`nav-label ${collapsed ? 'hidden' : ''}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            onClick={logout}
            className="btn-logout"
            title={collapsed ? 'Logout' : ''}
          >
            <span className="logout-icon">🚪</span>
            <span className={`logout-label ${collapsed ? 'hidden' : ''}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>

      <div
        className="sidebar-overlay"
        onClick={() => setCollapsed(false)}
        onKeyDown={(e) => e.key === 'Escape' && setCollapsed(false)}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
      />

      <button
        className="sidebar-mobile-toggle"
        onClick={() => setCollapsed(!collapsed)}
        title="Toggle Menu"
      >
        ☰
      </button>
    </>
  );
};

export default Sidebar;
