// src/components/RiskBadge.jsx
import '../styles/Components.css';

const RiskBadge = ({ level = 'Medium', color }) => {
  // Map level to color if not provided
  const getColor = () => {
    if (color) return color;
    if (level === 'Low') return 'success';
    if (level === 'High') return 'danger';
    return 'warning';
  };

  const badgeColor = getColor();

  return (
    <div className="risk-badge-container">
      <div className={`risk-badge badge--${badgeColor}`}>
        <div className="risk-badge-header">
          <span className={`risk-icon risk-${badgeColor}`}>
            {badgeColor === 'success' && '✓'}
            {badgeColor === 'warning' && '!'}
            {badgeColor === 'danger' && '✕'}
          </span>
          <span className="risk-level">{level} Risk</span>
        </div>
        <div className="risk-description">
          {badgeColor === 'success' && 'Your health metrics are within normal range.'}
          {badgeColor === 'warning' && 'Monitor your health more closely.'}
          {badgeColor === 'danger' && 'Consult with a healthcare provider.'}
        </div>
      </div>
    </div>
  );
};

export default RiskBadge;