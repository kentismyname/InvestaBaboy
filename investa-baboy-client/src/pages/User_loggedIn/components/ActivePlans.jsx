import React, { useEffect, useState } from 'react';
import { Card, Row, Col, ProgressBar, Button, Badge } from 'react-bootstrap';
import dayjs from 'dayjs';
import planSettings from '../../../config/planConfig';
import '../styles/ActivePlans.css';

// Active plans data
const plans = [
  {
    planName: 'Grower Plan 🪴',
    pigs: 4,
    startDate: '2025-03-01',
    harvestDate: '2025-06-29',
    contractId: 'PLAN-F0973C7A',
    autoRenew: true,
  },
  {
    planName: 'Starter Plan 🐷',
    pigs: 1,
    startDate: '2025-04-05',
    harvestDate: '2025-08-03',
    contractId: 'PLAN-D4B54E5A',
    autoRenew: false,
  },
  {
    planName: 'Premium Plan 🐷',
    pigs: 5,
    startDate: '2025-06-05',
    harvestDate: '2025-10-03',
    contractId: 'PLAN-D4B54E5A',
    autoRenew: false,
  },
];

// ROI configuration (per plan type)
const planRoiRates = {
  Starter: 0.5,
  Grower: 0.55,
  Premium: 0.6,
  Pro: 0.6,
  Elite: 0.6,
  Diamond: 0.6,
};

// Calculates harvest progress
const calculateProgress = (start, end) => {
  const totalDays = dayjs(end).diff(dayjs(start), 'day');
  const passedDays = dayjs().diff(dayjs(start), 'day');
  const percent = Math.min(Math.max((passedDays / totalDays) * 100, 0), 100);
  return {
    daysLeft: Math.max(totalDays - passedDays, 0),
    percent: percent.toFixed(0),
  };
};

// Profit calculator using dynamic ROI rate
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

const ActivePlans = () => {
  const [totals, setTotals] = useState({
    pigs: 0,
    totalCost: 0,
    totalProfit: 0,
  });

  useEffect(() => {
    let pigSum = 0;
    let costSum = 0;
    let profitSum = 0;

    plans.forEach((plan) => {
      const key = plan.planName.split(' ')[0]; // Get "Starter", "Grower", etc.
      const roi = planRoiRates[key] || 0.5;
      const { totalCost, expectedProfit } = calculateProfit(plan.pigs, roi);

      pigSum += plan.pigs;
      costSum += totalCost;
      profitSum += expectedProfit;
    });

    setTotals({ pigs: pigSum, totalCost: costSum, totalProfit: profitSum });
  }, []);

  return (
    <>
      <h4 className="mb-4">📂 Active Investment Plans</h4>

      {/* Active Plans List */}
      <Row className="g-4">
        {plans.map((plan, index) => {
          const key = plan.planName.split(' ')[0];
          const roi = planRoiRates[key] || 0.5;

          const { totalCost, expectedProfit } = calculateProfit(plan.pigs, roi);
          const { daysLeft, percent } = calculateProgress(plan.startDate, plan.harvestDate);
          const formattedStart = dayjs(plan.startDate).format('MMM D, YYYY');
          const formattedHarvest = dayjs(plan.harvestDate).format('MMM D, YYYY');
          const isReady = parseInt(percent) >= 100;

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
                    label={`${percent}%`}
                    variant={isReady ? 'success' : 'primary'}
                    className="rounded-pill mb-3"
                    style={{ height: '8px' }}
                  />

                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="outline-primary" size="sm">📄 View Contract</Button>
                    {isReady && <Button variant="success" size="sm">📤 Withdraw ROI</Button>}
                    <Button variant="outline-dark" size="sm">🔁 Reinvest</Button>
                  </div>

                  <div className="mt-3 small text-muted">
                    📝 Contract ID: {plan.contractId}<br />
                    🔁 Auto-Renew: <strong>{plan.autoRenew ? 'Yes' : 'No'}</strong>
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
