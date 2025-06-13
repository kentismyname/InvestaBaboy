import React from 'react';
import { Accordion, Container, Row, Col, Badge } from 'react-bootstrap';
import useInView from '../../../hooks/useInView';
import planSettings from '../../../config/planConfig';

function FAQ() {
  const [ref, inView] = useInView();
  const { pigletPrice, otherCosts } = planSettings;

  const getDynamicPrice = (count) => pigletPrice * count + otherCosts * count;

  return (
    <section id="faq" ref={ref} className={`py-5 bg-white fadeinupAnimate ${inView ? 'visible' : ''}`}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="fw-bold mb-2">
              ❓ <span className="text-danger">Frequently Asked Questions</span>
            </h2>
            <p className="text-muted mb-3">
              Find answers to common questions about investing in <strong>InvestaBaboy</strong>.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            <Accordion defaultActiveKey="0" className="border rounded-3 shadow-sm">
              <Accordion.Item eventKey="0">
                <Accordion.Header>🐷 What is InvestaBaboy?</Accordion.Header>
                <Accordion.Body>
                  <strong>InvestaBaboy</strong> is a contract-based pig farming investment platform that allows individuals to fund a pig and earn profits based on its <u>live market sale price</u>. We connect investors to real farms and help them grow without loans.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>💰 How much do I need to start?</Accordion.Header>
                <Accordion.Body>
                  You can begin investing for as low as{' '}
                  <strong className="text-success">₱{getDynamicPrice(1).toLocaleString()}</strong>{' '}
                  with our <Badge bg="success">Starter Plan</Badge>. We also offer higher-yield plans if you want to grow your investment further.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>⏳ How long does the investment run?</Accordion.Header>
                <Accordion.Body>
                  Each investment runs for a standard <strong>4-month grow-out cycle</strong>. You’ll receive updates throughout and your payout once the pig is sold.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>⚠️ Is there risk involved?</Accordion.Header>
                <Accordion.Body>
                  Every investment has risks, but we work hard to keep yours low. We team up with trusted farms, use efficient feeding strategies, and keep you informed with updates. Your peace of mind matters to us.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>📥 How do I get paid?</Accordion.Header>
                <Accordion.Body>
                  After the pig is sold, your profit will be deposited directly to your chosen payment method (GCash or bank account) within <strong>3–7 business days</strong>.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>📏 Why is the fixed pig weight set to 85 kg?</Accordion.Header>
                <Accordion.Body className="text-muted">
                  We use a fixed weight of <strong>85 kg</strong> because it’s the average market-ready weight in the Philippines. Most growers sell pigs between <strong>80–90 kg</strong>, balancing feed cost and market demand.

                  <div className="mt-3">
                    <strong>By standardizing this weight:</strong>
                    <ul className="mt-2 ps-3">
                      <li>📊 Ensures fair, consistent ROI calculations across plans</li>
                      <li>📝 Reflects realistic 4-month grow-out performance</li>
                      <li>💸 Matches weights that typically earn premium sale prices</li>
                    </ul>
                    This approach helps simplify ROI forecasting while keeping it honest and data-based.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FAQ;
