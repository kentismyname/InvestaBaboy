// src/components/User_loggedIn/components/WithdrawActions.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

const WithdrawActions = () => {
  return (
    <div className="text-center d-flex justify-content-center gap-3 flex-wrap">
      <Button variant="outline-primary" className="rounded-pill px-4">📄 View Contracts</Button>
      <Button variant="outline-dark" className="rounded-pill px-4">💸 Withdraw Earnings</Button>
    </div>
  );
};

export default WithdrawActions;
