import React from 'react';
import aboutImage from '../../../assets/imgs/about-section.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import useInView from '../../../hooks/useInView';
import { FaCheckCircle } from 'react-icons/fa';

function About() {
  const [ref, inView] = useInView();

  return (
    <div
      id="about"
      ref={ref}
      className={`py-5 bg-white fadeinupAnimate ${inView ? 'visible' : ''}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={aboutImage}
              alt="About InvestaBaboy"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '450px', objectFit: 'cover', width: '100%' }}
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-bold mb-3">
              About <span className="text-success">InvestaBaboy</span> 🐖
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>
              InvestaBaboy is a contract-based pig farming investment platform that connects
              everyday Filipinos to real-life pig farms. We help farms grow without loans —
              and investors earn smart profits, starting from just <strong>₱10,000</strong>.
            </p>

            <ul className="list-unstyled mt-4" style={{ fontSize: '1.05rem' }}>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Transparent profit-sharing model
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Live farm video monitoring
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                ROI is based on live market prices at time of pig sale
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" />
                Partnered with real farms in the Philippines
              </li>
            </ul>

            <p className="mt-4 fst-italic text-muted">
              "We’re making agri-tech investing simple, fair, and accessible for all."
              <br />
              <span className="fw-semibold">— Foodies Corp.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
