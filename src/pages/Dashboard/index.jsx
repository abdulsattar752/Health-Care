// src/pages/Dashboard/index.jsx
import { Link } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import HealthCard from '../../components/ui/HealthCard';
import RiskBadge from '../../components/ui/RiskBadge';
import { generateHealthReportPDF } from '../../services/utils/pdfUtils';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  const healthMetrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: '❤️', status: 'normal' },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: '💉', status: 'normal' },
    { label: 'Temperature', value: '90.6', unit: '°F', icon: '🌡️', status: 'normal' },
    { label: 'BMI', value: '23.5', unit: 'kg/m²', icon: '⚖️', status: 'healthy' },
  ];

  const recentReports = [
    { date: 'Jan 15, 2026', type: 'Health Check', status: 'Completed', id: 'report-1' },
    { date: 'Jan 10, 2026', type: 'Symptom Analysis', status: 'Completed', id: 'report-2' },
    { date: 'Jan 5, 2026', type: 'Diet Assessment', status: 'Completed', id: 'report-3' },
  ];

  const generateReportData = (reportType) => ({
    patient: { 'Name': 'Abdul Sattar', 'Age': '32', 'Blood Type': 'B+' },
    metrics: healthMetrics,
    riskLevel: 'Low',
    recommendations: 'Continue current exercise routine. Maintain balanced diet. Schedule follow-up in 3 months.',
  });

  const handleDownloadPDF = (report) => {
    const reportData = generateReportData(report.type);
    const fileName = `${report.type.toLowerCase().replace(/\s+/g, '-')}-${report.date.replace(/\s+/g, '-')}`;
    generateHealthReportPDF(reportData, fileName);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Welcome Back Abdul Sattar 👋</h1>
            <p>Here's your health overview for today</p>
          </div>

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

          <section className="dashboard-section">
            <h2 className="section-title">Health Risk Assessment</h2>
            <div className="risk-assessment-grid">
              <RiskBadge level="Low" color="success" />
              <RiskBadge level="Moderate" color="warning" />
              <RiskBadge level="High" color="danger" />
            </div>
          </section>

          <section className="dashboard-section">
            <h2 className="section-title">Overall Health</h2>
            <HealthCard />
          </section>

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
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button className="btn btn--primary btn--sm">View</button>
                          <button className="btn btn--secondary btn--sm" onClick={() => handleDownloadPDF(report)} title="Download as PDF">
                            📥 PDF
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="dashboard-section">
            <h2 className="section-title">Quick Actions</h2>
            <div className="quick-actions-grid">
              <Link to="/symptom-checker" className="quick-action-card">
                <div className="quick-action-icon">🔍</div>
                <div className="quick-action-label">Check Symptoms</div>
              </Link>
              <Link to="/chat-doctor" className="quick-action-card">
                <div className="quick-action-icon">💬</div>
                <div className="quick-action-label">Chat with AI Doctor</div>
              </Link>
              <Link to="/diet-planner" className="quick-action-card">
                <div className="quick-action-icon">🍎</div>
                <div className="quick-action-label">Diet Plan</div>
              </Link>
              <Link to="/profile" className="quick-action-card">
                <div className="quick-action-icon">👤</div>
                <div className="quick-action-label">My Profile</div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
