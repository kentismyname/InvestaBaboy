import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaCheckCircle,
  FaPiggyBank,
  FaTags
} from 'react-icons/fa';
import useInView from '../../../hooks/useInView';

function Contact() {
  const [ref, inView] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-5 fadeinupAnimate ${inView ? 'visible' : ''}`}
      style={{ background: 'linear-gradient(to bottom right, #f8f9fa, #e9fcef)' }}
    >
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="fw-bold mb-3">
              📬 <span className="text-dark">Contact Us</span>
            </h2>
            <p className="text-muted">
              Have a question or want to invest? Tell us what you need and we’ll get back to you quickly!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-sm border-0 rounded-4 bg-white">
              {submitted && (
                <Alert variant="success" className="text-center d-flex align-items-center justify-content-center gap-2">
                  <FaCheckCircle className="text-success" />
                  Your message has been sent! We’ll reach out shortly.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="name">
                      <Form.Label className="fw-semibold">
                        <FaUser className="me-2 text-secondary" /> Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-pill px-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label className="fw-semibold">
                        <FaEnvelope className="me-2 text-secondary" /> Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="e.g. john@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-pill px-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="plan">
                      <Form.Label className="fw-semibold">
                        <FaPiggyBank className="me-2 text-secondary" /> Plan of Interest
                      </Form.Label>
                      <Form.Select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="rounded-pill"
                        required
                      >
                        <option value="">-- Select a Plan --</option>
                        <option value="Starter">Starter Plan</option>
                        <option value="Grower">Grower Plan</option>
                        <option value="Premium">Premium Plan</option>
                        <option value="Pro">Pro Plan</option>
                        <option value="Elite">Elite Plan</option>
                        <option value="Diamond">Diamond Plan</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group controlId="topic">
                      <Form.Label className="fw-semibold">
                        <FaTags className="me-2 text-secondary" /> Message Topic
                      </Form.Label>
                      <Form.Select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="rounded-pill"
                        required
                      >
                        <option value="">-- Select a Topic --</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="How to Invest">How to Invest</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="message" className="mb-4">
                  <Form.Label className="fw-semibold">
                    <FaCommentDots className="me-2 text-secondary" /> Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-4 px-3"
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="success"
                    type="submit"
                    className="px-5 py-2 fw-semibold rounded-pill shadow-sm"
                  >
                    Send Message 💌
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
