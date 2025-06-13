import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, Toast } from 'react-bootstrap';
import { FaGift, FaCopy, FaUsers } from 'react-icons/fa';
import useInView from '../../../hooks/useInView';

function Referral() {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(false);

  const referralCode = "KEN123";
  const referralLink = `https://investababoy.com/register?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="referral"
      ref={ref}
      className={`py-5 fadeinupAnimate ${inView ? 'visible' : ''}`}
      style={{
        background: "linear-gradient(135deg, #e3fce4 0%, #d1f2d6 100%)",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h2 className="fw-bold mb-3 text-dark">
              <FaUsers className="me-2 text-warning" />
              Invite Friends & <span className="text-success">Earn ₱500</span>
            </h2>
            <p className="lead text-muted">
              Get rewarded for every successful referral! Share your link — when a friend signs up and invests, you earn ₱500. 💸
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm rounded-4 border-0 bg-white">
              <Card.Body className="text-center">
                <h5 className="fw-semibold text-dark mb-3">
                  <FaGift className="me-2 text-warning" />
                  Your Unique Referral Link
                </h5>
                <Form.Control
                  type="text"
                  readOnly
                  value={referralLink}
                  className="mb-3 text-center rounded-pill px-3 py-2 border-success"
                  style={{ fontSize: '0.95rem' }}
                />
                <Button
                  variant="success"
                  onClick={handleCopy}
                  className="w-100 rounded-pill fw-semibold shadow-sm"
                >
                  <FaCopy className="me-2" /> Copy My Link
                </Button>
                <p className="text-muted mt-3 small">
                  🔗 Share on Messenger, Viber, or social media!
                </p>
              </Card.Body>
            </Card>

            <Toast
              show={copied}
              onClose={() => setCopied(false)}
              delay={3000}
              autohide
              className="position-fixed bottom-0 end-0 m-4 bg-success text-white"
              style={{ zIndex: 1050 }}
            >
              <Toast.Body>Referral link copied to clipboard!</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Referral;
