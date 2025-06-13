import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../styles/investmentSummary.css';
import { getActivePlanTotals } from '../../../utils/planHelpers';

const dummyPlans = [
  {
    planName: 'Grower Plan 🪴',
    pigs: 4,
    startDate: '2025-03-01',
    harvestDate: '2025-06-29',
  },
  {
    planName: 'Starter Plan 🐷',
    pigs: 1,
    startDate: '2025-04-05',
    harvestDate: '2025-08-03',
  },
  {
    planName: 'Premium Plan 🐷',
    pigs: 5,
    startDate: '2025-06-05',
    harvestDate: '2025-10-03',
  },
];


const InvestmentSummary = () => {
  const { pigs, totalCost, totalProfit } = getActivePlanTotals(dummyPlans);

  const stats = [
    {
      label: 'Total Invested',
      value: `₱${totalCost.toLocaleString()}`,
      icon: '💰',
      border: 'border-primary',
    },
    {
      label: 'Active Piglets',
      value: pigs.toString(),
      icon: '🐖',
      border: 'border-success',
    },
    {
      label: 'Expected ROI Base on Live Price',
      value: `₱${totalProfit.toLocaleString()}`,
      icon: '📈',
      border: 'border-info',
    },
  ];

  return (
    <Row className="mb-5 g-4 justify-content-center">
      {stats.map((stat, index) => (
        <Col md={4} key={index}>
          <Card className={`summary-card ${stat.border} shadow`}>
            <Card.Body>
              <div className="card-icon">{stat.icon}</div>
              <h6 className="text-muted">{stat.label}</h6>
              <h4 className="fw-bold">{stat.value}</h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default InvestmentSummary;
