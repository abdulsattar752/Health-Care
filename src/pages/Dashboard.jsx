// src/pages/Dashboard.jsx
import Sidebar from '../components/Sidebar';
import HealthCard from '../components/HealthCard';
import RiskBadge from '../components/RiskBadge';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Health Score', data: [65, 75, 85], borderColor: 'blue' }],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <HealthCard />
        <RiskBadge level="Medium" />
        <div className="card">
          <Line data={chartData} />
        </div>
        <div className="card">Recent Reports</div>
      </div>
    </div>
  );
};

export default Dashboard;