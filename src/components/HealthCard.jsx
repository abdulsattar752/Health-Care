// src/components/HealthCard.jsx (HealthScoreCard)
import { useEffect, useState } from 'react';

const HealthCard = () => {
  const [score, setScore] = useState(75); // Fake score

  const color = score > 80 ? 'green' : score > 50 ? 'yellow' : 'red';

  return (
    <div className={`card text-center`}>
      <h2 className="text-4xl font-bold text-${color}-500`}>{score}/100</h2>
      <p>Health Score</p>
    </div>
  );
};

export default HealthCard;