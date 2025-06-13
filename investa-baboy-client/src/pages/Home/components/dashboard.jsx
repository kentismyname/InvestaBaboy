import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Badge } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import planSettings from '../../../config/planConfig';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import useInView from '../../../hooks/useInView';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function Dashboard() {
  const [ref, inView] = useInView();
  const [pigletPrice, setPigletPrice] = useState(planSettings.pigletPrice);
  const [otherCosts, setOtherCosts] = useState(planSettings.otherCosts);
  const [pricePerKilo, setPricePerKilo] = useState(planSettings.pricePerKilo);
  const { fixedWeight } = planSettings;

  const getPlanProfit = (pigletCount, roiRate) => {
    const sale = pricePerKilo * fixedWeight * pigletCount;
    const cost = (pigletPrice + otherCosts) * pigletCount;
    const netProfit = sale - cost;
    return netProfit * roiRate;
  };

  const investorROI = {
    Starter: getPlanProfit(1, 0.5),
    Grower: getPlanProfit(4, 0.55),
    Premium: getPlanProfit(5, 0.6),
    Pro: getPlanProfit(8, 0.6),
    Elite: getPlanProfit(12, 0.6),
    Diamond: getPlanProfit(20, 0.6),
  };

  const totalSale = pricePerKilo * fixedWeight;
  const starterCost = pigletPrice + otherCosts;
  const starterProfit = totalSale - starterCost;

  const priceData = {
    labels: ['Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Live Weight Price (₱/kg)',
        data: [180, 240, 245, 250, 245, 260, 265],
        fill: true,
        borderColor: '#198754',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(25, 135, 84, 0.2)');
          gradient.addColorStop(1, 'rgba(25, 135, 84, 0)');
          return gradient;
        },
        tension: 0.6,
        pointBackgroundColor: '#198754',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const pigletData = {
    labels: ['Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Piglet Price (₱)',
        data: [4100,4000, 4200, 4300, 4500, 4700, 4500],
        fill: true,
        borderColor: '#0d6efd',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(13, 110, 253, 0.2)');
          gradient.addColorStop(1, 'rgba(13, 110, 253, 0)');
          return gradient;
        },
        tension: 0.6,
        pointBackgroundColor: '#0d6efd',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      tooltip: { mode: 'index', intersect: false },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `₱${value}`,
          font: { size: 12, weight: '600' },
          color: '#555',
        },
        grid: { color: '#eee' },
      },
      x: {
        ticks: { font: { size: 12, weight: '600' }, color: '#555' },
        grid: { display: false },
      },
    },
  };

  return (
    <section id="dashboard" ref={ref} className={`py-5 bg-light fadeinupAnimate ${inView ? 'visible' : ''}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Card className="shadow-sm border-0 p-3 rounded-4 h-100">
              <h5 className="text-center fw-bold mb-3">📈 Live Pig Price History</h5>
              <Line data={priceData} options={options} />
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm border-0 p-3 rounded-4 h-100">
              <h5 className="text-center fw-bold mb-3">🐷 Piglet Price History</h5>
              <Line data={pigletData} options={options} />
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="p-4 shadow border-0 rounded-4 text-center bg-white">
              <h4 className="fw-bold mb-4">📊 Sample ROI Calculator</h4>

              <Form.Label className="fw-semibold mb-2">🐷 Baby Piglet Price: <strong>₱{pigletPrice}</strong></Form.Label>
              <Form.Range min={2000} max={8000} value={pigletPrice} onChange={(e) => setPigletPrice(Number(e.target.value))} className="mb-3" />

              <Form.Label className="fw-semibold mb-2">⚙️ Other Costs per Piglet: <strong>₱{otherCosts}</strong></Form.Label>
              <Form.Range min={5000} max={15000} value={otherCosts} onChange={(e) => setOtherCosts(Number(e.target.value))} className="mb-3" />

              <Form.Label className="fw-semibold mb-2">💹 Live Price per Kilo: <strong>₱{pricePerKilo}</strong></Form.Label>
              <Form.Range min={100} max={300} value={pricePerKilo} onChange={(e) => setPricePerKilo(Number(e.target.value))} className="mb-4" />

              <Card className="bg-light p-3 mb-4 border border-success-subtle rounded-3">
                <h6 className="fw-bold mb-3 text-success">📦 Starter Plan Summary</h6>
                <Row className="mb-2">
                  <Col xs={6}><strong>Total Cost (1 Piglet):</strong></Col>
                  <Col xs={6} className="text-end text-danger">₱{starterCost.toLocaleString()}</Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={6}><strong>Live Weight:</strong></Col>
                  <Col xs={6} className="text-end">{fixedWeight} kg</Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={6}><strong>Market Sale Price:</strong></Col>
                  <Col xs={6} className="text-end">₱{totalSale.toLocaleString()}</Col>
                </Row>
                <Row>
                  <Col xs={6}><strong>Projected Profit (50% ROI):</strong></Col>
                  <Col xs={6} className="text-end text-success">₱{(starterProfit * 0.5).toLocaleString()}</Col>
                </Row>
              </Card>

              <h5 className="fw-bold mt-3 mb-4">📋 Plan Profit Comparison</h5>
              <ul className="roi-list row row-cols-2 g-3 justify-content-center list-unstyled">
                {Object.entries(investorROI).map(([name, value]) => {
                  const badgeMap = {
                    Starter: '50%', Grower: '55%', Premium: '60%', Pro: '60%', Elite: '60%', Diamond: '60%'
                  };
                  const badgeColor = name === 'Starter' ? 'success' : name === 'Grower' ? 'primary' : name === 'Premium' ? 'dark' : name === 'Diamond' ? 'secondary' : 'primary';
                  return (
                    <li key={name} className="col text-center border rounded p-2">
                      <div className="fw-bold">{name} Plan</div>
                      <Badge bg={badgeColor}>{badgeMap[name]}</Badge>
                      <div className="roi-value mt-1 text-success">₱{value.toLocaleString()}</div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Dashboard;
