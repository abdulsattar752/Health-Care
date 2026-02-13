// src/components/HealthCard.jsx
import { useState } from 'react';

const HealthCard = () => {
  const [score] = useState(75); // You can make this dynamic later

  // Determine color based on score
  const getColorClass = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="card text-center">
      <h2 className={`text-4xl font-bold ${getColorClass()}`}>
        {score}/100
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Health Score
      </p>
    </div>
  );
};

export default HealthCard;