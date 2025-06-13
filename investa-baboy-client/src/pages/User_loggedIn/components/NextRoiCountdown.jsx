// NextRoiCountdown.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import dayjs from 'dayjs';

const NextRoiCountdown = () => {
  const roiDate = dayjs('2025-07-12');
  const daysLeft = roiDate.diff(dayjs(), 'day');

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h6 className="text-muted">⏳ Next ROI Date</h6>
        <h5 className="fw-bold">July 12, 2025</h5>
        <p className="text-muted">{daysLeft} days left</p>
      </Card.Body>
    </Card>
  );
};

export default NextRoiCountdown;
