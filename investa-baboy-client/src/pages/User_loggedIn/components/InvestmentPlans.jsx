// src/components/User_loggedIn/components/InvestmentPlans.jsx
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import '../styles/investmentPlans.css';

const InvestmentPlans = () => {
  const plans = [
    {
      name: 'Plan A',
      price: '₱3,000',
      roi: '25% in 90 days',
      icon: '🐷',
    },
    {
      name: 'Plan B',
      price: '₱5,000',
      roi: '30% in 120 days',
      icon: '📈',
    },
  ];

  return (
    <>
      <h4 className="mb-4 text-center">Available Investment Plans</h4>
      <Row className="mb-5 g-4">
        {plans.map((plan, index) => (
          <Col md={6} key={index}>
            <Card className="plan-card shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold">
                    {plan.icon} {plan.name} - <span className="text-success">{plan.price}</span> / piglet
                  </h5>
                </div>
                <p className="text-muted">ROI: {plan.roi}</p>
                <Button variant="success" className="rounded-pill px-4">Invest Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default InvestmentPlans;
