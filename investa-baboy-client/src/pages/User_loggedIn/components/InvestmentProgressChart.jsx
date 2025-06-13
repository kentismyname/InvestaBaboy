// InvestmentProgressChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const InvestmentProgressChart = () => {
  const data = {
    labels: ['Day 0', 'Day 30', 'Day 60', 'Day 90'],
    datasets: [
      {
        label: 'Growth Progress',
        data: [0, 25, 60, 100],
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: '#007bff',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="mb-4">
      <h6 className="text-muted mb-2">📊 Investment Progress</h6>
      <Line data={data} options={options} height={80} />
    </div>
  );
};

export default InvestmentProgressChart;
