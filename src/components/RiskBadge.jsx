// src/components/RiskBadge.jsx
const RiskBadge = ({ level }) => {
  const color = level === 'Low' ? 'green' : level === 'Medium' ? 'yellow' : 'red';

  return (
    <span className={`bg-${color}-100 text-${color}-800 px-2 py-1 rounded-full`}>
      {level} Risk
    </span>
  );
};

export default RiskBadge;