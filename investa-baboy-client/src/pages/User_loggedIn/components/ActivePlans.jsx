import React, { useEffect, useState } from 'react';
import { Card, Row, Col, ProgressBar, Button, Badge } from 'react-bootstrap';
import dayjs from 'dayjs';
import planSettings from '../../../config/planConfig';
import Switch from './Switch';
import '../styles/ActivePlans.css';

const initialPlans = [
  {
    planName: 'Grower Plan 🪴',
    pigs: 4,
    startDate: '2025-03-01',
    contractId: 'PLAN-F0973C7A',
    autoRenew: true,
  },
  {
    planName: 'Starter Plan 🐷',
    pigs: 1,
    startDate: '2025-04-05',
    contractId: 'PLAN-D4B54E5A',
    autoRenew: false,
  },
  {
    planName: 'Premium Plan 🐷',
    pigs: 5,
    startDate: '2024-06-03',
    contractId: 'PLAN-D4B54E5A',
    autoRenew: false,
  },
];

const planRoiRates = {
  Starter: 0.5,
  Grower: 0.55,
  Premium: 0.6,
  Pro: 0.6,
  Elite: 0.6,
  Diamond: 0.6,
};

const calculateProgress = (start, end) => {
  const totalDays = dayjs(end).diff(dayjs(start), 'day');
  const passedDays = dayjs().diff(dayjs(start), 'day');
  const percent = Math.min(Math.max((passedDays / totalDays) * 100, 0), 100);
  return {
    daysLeft: Math.max(totalDays - passedDays, 0),
    percent: Math.round(percent),
  };
};

const calculateProfit = (pigs, roiRate) => {
  const { pigletPrice, otherCosts, fixedWeight, pricePerKilo } = planSettings;
  const totalCost = (pigletPrice + otherCosts) * pigs;
  const sale = pricePerKilo * fixedWeight * pigs;
  const netProfit = sale - totalCost;
  return {
    totalCost,
    expectedProfit: netProfit * roiRate,
  };
};

const ActivePlans = ({ setActiveTab }) => {
  const [plans, setPlans] = useState(initialPlans);
  const [totals, setTotals] = useState({ pigs: 0, totalCost: 0, totalProfit: 0 });

  useEffect(() => {
    let pigSum = 0, costSum = 0, profitSum = 0;

    plans.forEach((plan) => {
      const key = plan.planName.split(' ')[0];
      const roi = planRoiRates[key] || 0.5;
      const { totalCost, expectedProfit } = calculateProfit(plan.pigs, roi);
      pigSum += plan.pigs;
      costSum += totalCost;
      profitSum += expectedProfit;
    });

    setTotals({ pigs: pigSum, totalCost: costSum, totalProfit: profitSum });
  }, [plans]);

  const handleToggleRenew = (index) => {
    const updatedPlans = [...plans];
    updatedPlans[index].autoRenew = !updatedPlans[index].autoRenew;
    setPlans(updatedPlans);
  };

  return (
    <>
      <h4 className="mb-4">📂 Active Investment Plans</h4>
      <Row className="g-4">
        {plans.map((plan, index) => {
          const key = plan.planName.split(' ')[0];
          const roi = planRoiRates[key] || 0.5;
          const start = dayjs(plan.startDate);
          const harvest = start.add(4, 'month');
          const { totalCost, expectedProfit } = calculateProfit(plan.pigs, roi);
          const { daysLeft, percent } = calculateProgress(start, harvest);
          const formattedStart = start.format('MMM D, YYYY');
          const formattedHarvest = harvest.format('MMM D, YYYY');
          const isReady = percent >= 100;

          return (
            <Col md={6} key={index}>
              <Card className="active-plan-card shadow-sm border-0 position-relative">
                <Badge bg={isReady ? 'success' : 'info'} className="position-absolute top-0 end-0 m-3">
                  {isReady ? 'Ready to Harvest' : 'Active'}
                </Badge>

                <Card.Body>
                  <h5 className="fw-bold mb-3">{plan.planName}</h5>

                  <Row className="gy-2 mb-3">
                    <Col xs={12}><span>📅 <strong>Start:</strong> {formattedStart}</span></Col>
                    <Col xs={12}><span>🌾 <strong>Harvest:</strong> {formattedHarvest}</span></Col>
                    <Col xs={6}><span>🐷 <strong>Pigs:</strong> {plan.pigs}</span></Col>
                    <Col xs={6}><span>💰 <strong>Total:</strong> ₱{totalCost.toLocaleString()}</span></Col>
                    <Col xs={12}><span>📈 <strong>Profit:</strong> ₱{expectedProfit.toLocaleString()}</span></Col>
                    <Col xs={12}><span>⏳ <strong>Days Left:</strong> {daysLeft}</span></Col>
                  </Row>

                  <ProgressBar
                    now={percent}
                    label={isReady ? 'Completed' : `${percent}%`}
                    variant={isReady ? 'success' : 'primary'}
                    className="rounded-pill mb-3"
                    style={{ height: '8px' }}
                  />

                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="outline-primary" size="sm">📄 View Contract</Button>
                    {isReady && (
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => {
                          setActiveTab('Withdraw Earnings');
                          setTimeout(() => {
                            document.getElementById('withdraw')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                      >
                        📤 Withdraw ROI
                      </Button>

                    )}

                    {isReady && (
                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => setActiveTab('Withdraw Earnings')}
                      >
                        🔁 Reinvest
                      </Button>
                    )}
                  </div>

                  <div className="mt-3 small text-muted">
                    <div className="mb-1">📝 Contract ID: {plan.contractId}</div>
                    <div className="d-flex align-items-center gap-2">
                      <span>🔁 Auto-Renew:</span>
                      <div style={{ transform: 'scale(0.85)', transformOrigin: 'left center' }}>
                        <Switch checked={plan.autoRenew} onChange={() => handleToggleRenew(index)} />
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ActivePlans;