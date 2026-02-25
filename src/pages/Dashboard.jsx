// src/pages/Dashboard.jsx
import Sidebar from '../components/Sidebar';
import HealthCard from '../components/HealthCard';
import RiskBadge from '../components/RiskBadge';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Sample health data
  const healthMetrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: '❤️', status: 'normal' },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: '💉', status: 'normal' },
    { label: 'Temperature', value: '98.6', unit: '°F', icon: '🌡️', status: 'normal' },
    { label: 'BMI', value: '23.5', unit: 'kg/m²', icon: '⚖️', status: 'healthy' },
  ];

  const recentReports = [
    { date: 'Jan 15, 2026', type: 'Health Check', status: 'Completed' },
    { date: 'Jan 10, 2026', type: 'Symptom Analysis', status: 'Completed' },
    { date: 'Jan 5, 2026', type: 'Diet Assessment', status: 'Completed' },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Welcome Header */}
          <div className="dashboard-header">
            <h1>Welcome Back! 👋</h1>
            <p>Here's your health overview for today</p>
          </div>

          {/* Health Metrics Grid */}
          <section className="dashboard-section">
            <h2 className="section-title">Your Health Metrics</h2>
            <div className="metrics-grid">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-icon">{metric.icon}</div>
                  <div className="metric-content">
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-unit">{metric.unit}</div>
                  </div>
                  <div className={`metric-status status-${metric.status}`}>
                    {metric.status === 'normal' && '✓'}
                    {metric.status === 'healthy' && '✓'}
                    {metric.status === 'warning' && '!'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Risk Assessment */}
          <section className="dashboard-section">
            <h2 className="section-title">Health Risk Assessment</h2>
            <div className="risk-assessment-grid">
              <RiskBadge level="Low" color="success" />
              <RiskBadge level="Moderate" color="warning" />
              <RiskBadge level="High" color="danger" />
            </div>
          </section>

          {/* Health Card Component */}
          <section className="dashboard-section">
            <h2 className="section-title">Overall Health</h2>
            <HealthCard />
          </section>

          {/* Recent Reports */}
          <section className="dashboard-section">
            <div className="section-header-flex">
              <h2 className="section-title">Recent Reports</h2>
              <button className="btn btn--secondary btn--sm">View All</button>
            </div>
            <div className="reports-table-container">
              <table className="reports-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((report, index) => (
                    <tr key={index}>
                      <td>{report.date}</td>
                      <td>{report.type}</td>
                      <td><span className="badge badge--success">{report.status}</span></td>
                      <td><button className="btn btn--primary btn--sm">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="dashboard-section">
            <h2 className="section-title">Quick Actions</h2>
            <div className="quick-actions-grid">
              <a href="/symptom-checker" className="quick-action-card">
                <div className="quick-action-icon">🔍</div>
                <div className="quick-action-label">Check Symptoms</div>
              </a>
              <a href="/chat-doctor" className="quick-action-card">
                <div className="quick-action-icon">💬</div>
                <div className="quick-action-label">Chat with AI Doctor</div>
              </a>
              <a href="/diet-planner" className="quick-action-card">
                <div className="quick-action-icon">🍎</div>
                <div className="quick-action-label">Diet Plan</div>
              </a>
              <a href="/profile" className="quick-action-card">
                <div className="quick-action-icon">👤</div>
                <div className="quick-action-label">My Profile</div>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;