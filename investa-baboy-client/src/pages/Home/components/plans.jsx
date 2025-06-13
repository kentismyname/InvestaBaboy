import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { FaPiggyBank, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import useInView from '../../../hooks/useInView';
import planSettings from '../../../config/planConfig';

function Plans() {
  const [ref, inView] = useInView();
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const { pigletPrice, otherCosts } = planSettings;

  const getDynamicPrice = (count) => pigletPrice * count + otherCosts * count;

  const plans = [
    { title: 'Starter Plan 🐷', piglets: 1, roi: '50%', badge: 'Best for Beginners', color: 'success', border: 'border-success' },
    { title: 'Grower Plan 🌱', piglets: 4, roi: '55%', badge: '🌟 Most Popular', color: 'primary', border: 'border-primary' },
    { title: 'Premium Plan 💼', piglets: 5, roi: '60%', badge: 'High Yield', color: 'dark', border: 'border-dark' },
    { title: 'Pro Plan 🚀', piglets: 8, roi: '60%', badge: 'Advanced Investor', color: 'warning', border: 'border-warning' },
    { title: 'Elite Plan 👑', piglets: 12, roi: '60%', badge: 'Exclusive VIP', color: 'info', border: 'border-info' },
    { title: 'Diamond Plan 💎', piglets: 20, roi: '60%', badge: 'Ultimate Prestige', color: 'light', border: 'border-light' }
  ];

  const handleInvestShow = (plan) => {
    setSelectedPlan(plan);
    setShowInvestModal(true);
  };

  const handleInvestClose = () => setShowInvestModal(false);

  return (
    <div id="plans" ref={ref} className={`py-5 bg-light fadeinupAnimate ${inView ? 'visible' : ''}`}>
      <Container>
        <h2 className="text-center fw-bold mb-3 display-5">🚀 Choose Your Investment Plan</h2>
        <p className="text-center text-muted mb-2 fs-5">
          🐖 <strong>Current Baby Piglet Price:</strong> ₱{pigletPrice.toLocaleString()}
        </p>
        <p className="text-center mb-4 px-md-5" style={{ fontSize: '0.95rem', color: '#6c757d' }}>
          ⚙️ <strong className="text-dark">Note:</strong> Other costs are estimated at <strong>₱{otherCosts.toLocaleString()}</strong> per piglet.
          If actual expenses are lower, the difference will be <span className="text-success fw-semibold">refunded upon checkout</span> and all costs will be <span className="fw-semibold">fully documented</span>.
        </p>


        <Row className="g-4">
          {plans.map((plan, index) => (
            <Col key={index} md={4}>
              <Card className={`h-100 text-center border-2 ${plan.border} hover-shadow shadow-sm rounded-4`}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold fs-4">{plan.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted small">{plan.badge}</Card.Subtitle>
                    <h3 className={`my-3 fw-bold ${plan.title === 'Diamond Plan 💎' ? '' : 'text-success'}`}>
                      {plan.title === 'Diamond Plan 💎'
                        ? 'Contact Us'
                        : `₱${getDynamicPrice(plan.piglets).toLocaleString()}`}
                    </h3>
                    <ul className="list-unstyled text-start mb-0">
                      <li><FaPiggyBank className="me-2 text-success" /> {plan.piglets} piglets</li>
                      <li><FaClock className="me-2 text-success" /> 4 months</li>
                      <li><FaMoneyBillWave className="me-2 text-success" /> ~{plan.roi} ROI</li>
                    </ul>
                  </div>
                  {plan.title === 'Diamond Plan 💎' ? (
                    <Button variant="secondary" className="mt-4 w-100 rounded-pill">Contact Us</Button>
                  ) : (
                    <Button variant={plan.color} className="mt-4 w-100 rounded-pill" onClick={() => handleInvestShow(plan)}>
                      Invest Now
                    </Button>
                  )}
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>

        <Modal show={showInvestModal} onHide={handleInvestClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlan?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Dynamic Price:</strong> ₱{getDynamicPrice(selectedPlan?.piglets).toLocaleString()}</p>
            <p><strong>ROI:</strong> ~{selectedPlan?.roi}</p>
            <p><strong>Duration:</strong> 4 months</p>
            <p className="mt-3">
              This price is based on the current baby piglet cost. Price will adjust dynamically with market rates.
            </p>
            <p className="text-muted mt-3 px-2 py-2 bg-light border rounded-3" style={{ fontSize: '0.9rem' }}>
              ⚙️ <strong>Note:</strong> Other costs are estimated at <strong>₱{otherCosts.toLocaleString()}</strong> per piglet.
              Any unspent funds will be <span className="text-success">refunded</span> during your final payout,
              and a <strong>detailed cost breakdown</strong> will be provided.
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleInvestClose}>Cancel</Button>
            <Button variant={selectedPlan?.color}>Proceed</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Plans;
