import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPiggyBank,
  FaTiktok
} from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white pt-5 pb-4 mt-5">
      <Container>
        <Row className="align-items-start text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">
              InvestaBaboy <FaPiggyBank className="text-warning ms-1" />
            </h5>
            <p className="small text-white-50">
              Smart agri-tech investing made <strong>simple</strong>, <strong>safe</strong>, and <strong>rewarding</strong> for Filipinos worldwide.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <a href="https://www.facebook.com/profile.php?id=61577508654119" target='blank' className="text-white-50 fs-5 hover-opacity" title="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white-50 fs-5 hover-opacity" title="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-white-50 fs-5 hover-opacity" title="Tiktok">
                <FaTiktok />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              {[
                { name: 'Home', id: '#home' },
                { name: 'Plans', id: '#plans' },
                { name: 'About', id: '#about' },
                { name: 'Referral', id: '#referral' },
                { name: 'Dashboard', id: '#dashboard' },
                { name: 'FAQ', id: '#faq' },
                { name: 'Contact', id: '#contact' }
              ].map((link, idx) => (
                <li key={idx} className="mb-1">
                  <a href={link.id} className="text-white-50 text-decoration-none hover-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4} className="text-md-end">
            <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
            <p className="small mb-1">
              <FaEnvelope className="me-2 text-success" />
              investababoy@gmail.com
            </p>
            <p className="small">
              <FaMapMarkerAlt className="me-2 text-danger" />
              Tayabas City, PH
            </p>
          </Col>
        </Row>

        <hr className="my-4 border-light" />

        <Row>
          <Col className="text-center">
            <p className="mb-0 small text-white-50">
              © {new Date().getFullYear()} <strong>InvestaBaboy</strong>. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .hover-link:hover {
          color: #0fd172 !important;
          text-decoration: underline;
        }

        .hover-opacity:hover {
          opacity: 0.85;
          transition: opacity 0.3s;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
