// LivePigletPrice.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import planSettings from '../../../config/planConfig';

const LivePigletPrice = () => {
  const { pigletPrice, otherCosts, fixedWeight, pricePerKilo } = planSettings;

  const totalInvestment = pigletPrice + otherCosts;
  const marketReturn = fixedWeight * pricePerKilo;
  const expectedROI = marketReturn - totalInvestment;
  const gainPercent = ((expectedROI / totalInvestment) * 100).toFixed(2);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h6 className="text-muted">🐷 Live Piglet Price Summary</h6>
        <p className="mb-1"><strong>Investment Cost:</strong> ₱{totalInvestment.toLocaleString()}</p>
        <p className="mb-1"><strong>Market Return:</strong> ₱{marketReturn.toLocaleString()}</p>
        <p className="mb-1"><strong>Expected Profit:</strong> ₱{expectedROI.toLocaleString()}</p>
        <p className="fw-bold">
          📈 Estimated ROI: <span className={gainPercent >= 0 ? 'text-success' : 'text-danger'}>{gainPercent}%</span>
        </p>
      </Card.Body>
    </Card>
  );
};

export default LivePigletPrice;
