import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import dayjs from 'dayjs';

const RecentActivity = () => {
  const activities = [
    {
      message: 'Invested in Starter Plan',
      amount: '₱15,000',
      type: 'investment',
      date: '2025-06-12T14:30:00',
    },
    {
      message: 'Generated contract for Grower Plan',
      amount: '',
      type: 'contract',
      date: '2025-06-13T09:15:00',
    },
    {
      message: 'Withdrew ROI from Premium Plan',
      amount: '₱22,500',
      type: 'withdrawal',
      date: '2025-06-14T18:45:00',
    },
  ];

  const getBadge = (type) => {
    switch (type) {
      case 'investment':
        return <Badge bg="success" className="me-2">✅</Badge>;
      case 'contract':
        return <Badge bg="primary" className="me-2">📄</Badge>;
      case 'withdrawal':
        return <Badge bg="warning" text="dark" className="me-2">💸</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h6 className="text-muted mb-3">🕒 Recent Activity</h6>
        <ListGroup variant="flush">
          {activities.map((activity, i) => (
            <ListGroup.Item key={i} className="d-flex justify-content-between align-items-start">
              <div>
                {getBadge(activity.type)}
                {activity.message} {activity.amount && <strong>– {activity.amount}</strong>}
              </div>
              <small className="text-muted">
                {dayjs(activity.date).format('MMM D, YYYY • h:mm A')}
              </small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default RecentActivity;
