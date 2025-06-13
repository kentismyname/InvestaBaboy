import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar expand="lg" bg="white" variant="light" fixed="top" className="shadow-sm border-bottom py-2">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <span className="fw-bold text-dark" style={{ fontSize: '1.9rem', fontFamily: 'Poppins, monospace' }}>
            InvestaBaboy
          </span>
          <span style={{ fontSize: '1.5rem' }}>🐖</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center fw-medium">
            <Nav.Link href="#home" className="mx-2 text-dark">Home</Nav.Link>
            <Nav.Link href="#plans" className="mx-2 text-dark">Plans</Nav.Link>
            <Nav.Link href="#about" className="mx-2 text-dark">About</Nav.Link>
            <Nav.Link href="#dashboard" className="mx-2 text-dark">Market</Nav.Link>
            <Nav.Link href="#faq" className="mx-2 text-dark">FAQ</Nav.Link>
            <Nav.Link href="#referral" className="mx-2 text-dark">Referral</Nav.Link>
            <Nav.Link href="#contact" className="mx-2 text-dark">Contact</Nav.Link>
          </Nav>

          <div className="d-flex ms-3">
            <Button
              href='/InvestaBaboy/auth'
              variant="outline-success"
              className="me-2 px-4 rounded-pill fw-semibold"
            >
              Login
            </Button>
            <Button
              href='/InvestaBaboy/auth'
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
