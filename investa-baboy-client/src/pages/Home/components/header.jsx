import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname === '/' || location.hash === '#/') {
      scrollToSection(id);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(id), 300); // wait until Home is loaded
    }
  };

  return (
    <Navbar expand="lg" bg="white" variant="light" fixed="top" className="shadow-sm border-bottom py-2">
      <Container fluid className="px-4">
        <Navbar.Brand onClick={() => handleNavClick('home')} className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
          <span className="fw-bold text-dark" style={{ fontSize: '1.9rem', fontFamily: 'Poppins, monospace' }}>
            InvestaBaboy
          </span>
          <span style={{ fontSize: '1.5rem' }}>🐖</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center fw-medium">
            <Nav.Link onClick={() => handleNavClick('home')} className="mx-2 text-dark">Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('plans')} className="mx-2 text-dark">Plans</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')} className="mx-2 text-dark">About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('dashboard')} className="mx-2 text-dark">Market</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('faq')} className="mx-2 text-dark">FAQ</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('referral')} className="mx-2 text-dark">Referral</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')} className="mx-2 text-dark">Contact</Nav.Link>
          </Nav>

          <div className="d-flex ms-3">
            <Button
              href="/InvestaBaboy/#/auth"
              variant="outline-success"
              className="me-2 px-4 rounded-pill fw-semibold"
            >
              Login
            </Button>
            <Button
              href="/InvestaBaboy/#/auth"
              variant="success"
              className="px-4 rounded-pill fw-semibold"
            >
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
