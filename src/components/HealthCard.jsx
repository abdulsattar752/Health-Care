// src/components/HealthCard.jsx
import { useState } from 'react';
import '../styles/Components.css';

const HealthCard = () => {
  const [score] = useState(75);

  const getStatus = () => {
    if (score >= 80) return { label: 'Excellent', color: 'success' };
    if (score >= 60) return { label: 'Good', color: 'warning' };
    return { label: 'Needs Attention', color: 'danger' };
  };

  const status = getStatus();

  return (
    <div className="health-card card">
      <div className="health-score-circle">
        <div className="score-value">{score}</div>
        <div className="score-max">/100</div>
        <svg className={`score-ring score-${status.color}`} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" className="score-ring-bg" />
          <circle 
            cx="100" 
            cy="100" 
            r="90" 
            className="score-ring-progress"
            style={{
              strokeDasharray: `${(score / 100) * 565.48} 565.48`
            }}
          />
        </svg>
      </div>
      <div className="health-info">
        <h3>Overall Health Status</h3>
        <div className={`status-badge status-${status.color}`}>
          {status.label}
        </div>
        <p className="health-description">
          Your health score is based on your vitals, lifestyle, and medical history.
        </p>
        <button className="btn btn--primary btn--sm">Get Detailed Report</button>
      </div>
    </div>
  );
};

export default HealthCard;