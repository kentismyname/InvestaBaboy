import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal, Table, Badge } from 'react-bootstrap';
import '../styles/WithdrawActions.css';

const samplePlans = [
  {
    contractId: 'PLAN-001',
    planName: 'Grower Plan 🪴',
    value: 60000,
    profit: 14685,
  },
  {
    contractId: 'PLAN-002',
    planName: 'Starter Plan 🐷',
    value: 15000,
    profit: 3337.5,
  },
  {
    contractId: 'PLAN-003',
    planName: 'Premium Plan 🐷',
    value: 75000,
    profit: 10000,
  },
];

const WithdrawActions = () => {
  const [plans, setPlans] = useState(samplePlans);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [history, setHistory] = useState([
    {
      date: '2025-06-14 09:30:12 AM',
      contractId: 'PLAN-003',
      planName: 'Premium Plan 🐷',
      amount: 5000,
      status: 'Done',
      type: 'Withdraw'
    },
    {
      date: '2025-06-13 03:45:00 PM',
      contractId: 'PLAN-002',
      planName: 'Starter Plan 🐷',
      amount: 2500,
      status: 'Done',
      type: 'Reinvest'
    },
    {
      date: '2025-06-10 01:20:34 PM',
      contractId: 'PLAN-001',
      planName: 'Grower Plan 🪴',
      amount: 8000,
      status: 'Done',
      type: 'Withdraw'
    }
  ]);

  const handleWithdraw = (plan) => {
    const total = plan.value + plan.profit;
    setSelectedPlan({ ...plan, amount: total });
    setShowModal(true);
  };

  const confirmWithdraw = () => {
    const updatedPlans = plans.filter(p => p.contractId !== selectedPlan.contractId);

    const newHistory = [
      {
        ...selectedPlan,
        date: new Date().toLocaleString(),
        status: 'Done',
        type: 'Withdraw',
      },
      ...history,
    ];

    setPlans(updatedPlans);
    setHistory(newHistory);
    setShowModal(false);
  };

  const handleReinvest = (plan) => {
    const total = plan.value + plan.profit;
    const updatedPlans = plans.filter(p => p.contractId !== plan.contractId);

    const newHistory = [
      {
        ...plan,
        amount: total,
        date: new Date().toLocaleString(),
        status: 'Done',
        type: 'Reinvest'
      },
      ...history,
    ];

    setPlans(updatedPlans);
    setHistory(newHistory);
    alert(`Successfully reinvested ₱${total.toLocaleString()} from ${plan.planName}`);
  };

  const getStatusBadge = (status) => {
    const color = status === 'Pending' ? 'warning' : status === 'Processing' ? 'primary' : 'success';
    return <Badge bg={color}>{status}</Badge>;
  };

  return (
    <section id="withdraw">
      <h4 className="mb-4">💸 Withdraw Earnings</h4>
      <Row className="g-4 mb-5">
        {plans.map(plan => {
          const totalWithdrawable = plan.value + plan.profit;
          return (
            <Col md={6} key={plan.contractId}>
              <Card className="withdraw-card">
                <Card.Body>
                  <h5 className="fw-bold mb-3">{plan.planName}</h5>
                  <p className="mb-1">📍 Contract ID: <strong>{plan.contractId}</strong></p>
                  <p className="mb-1">💼 Plan Value: <strong>₱{plan.value.toLocaleString()}</strong></p>
                  <p className="mb-1">📈 Profit Available: <strong>₱{plan.profit.toLocaleString()}</strong></p>
                  <p className="mb-3">💰 Total Withdrawable: <strong>₱{totalWithdrawable.toLocaleString()}</strong></p>

                  <div className="d-flex gap-2">
                    <Button
                      variant="success"
                      className="withdraw-btn"
                      onClick={() => handleWithdraw(plan)}
                    >
                      📤 Withdraw
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="reinvest-btn"
                      onClick={() => handleReinvest(plan)}
                    >
                      🔁 Reinvest
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <h5 className="mb-3">📅 Withdrawal History</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Contract ID</th>
            <th>Plan</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.length === 0 ? (
            <tr><td colSpan="6" className="text-center">No withdrawal history yet.</td></tr>
          ) : (
            history.map((item, i) => (
              <tr key={i}>
                <td>{item.date}</td>
                <td>{item.contractId}</td>
                <td>{item.planName}</td>
                <td>{item.type}</td>
                <td>₱{item.amount.toLocaleString()}</td>
                <td>{getStatusBadge(item.status)}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Withdrawal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to withdraw the full amount of <strong>₱{selectedPlan?.amount?.toLocaleString()}</strong> from <strong>{selectedPlan?.planName}</strong>.</p>
          <p>Do you want to proceed?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={confirmWithdraw}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default WithdrawActions;