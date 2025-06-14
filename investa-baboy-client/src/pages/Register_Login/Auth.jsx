import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import Loader from '../../utils/Loader';

function Auth() {
  const navigate = useNavigate(); // <-- needed for redirection

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false); // 👈 added loader state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setForm({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // 👈 start loading

    setTimeout(() => {
      if (!isLogin && form.password !== form.confirmPassword) {
        alert('Passwords do not match!');
        setLoading(false);
        return;
      }

      if (isLogin) {
        if (
          form.email === 'johnkennethdalisay9@gmail.com' &&
          form.password === '123456789'
        ) {
          navigate('/dashboard'); // 👈 Redirect to User Dashboard
        } else {
          alert('Invalid credentials!');
        }
      } else {
        console.log('Registering:', form);
        alert('Registered successfully!');
      }

      setLoading(false); // 👈 stop loading
    }, 2000); // Simulate API call delay
  };

  return (
    <div className="auth-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        {loading ? (
          <Loader />
        ) : (
          <Card className="auth-card p-4 shadow-lg">
            <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Create Account'}</h3>

            <Form onSubmit={handleSubmit}>
              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              {isLogin && (
                <div className="text-end mb-3">
                  <Button variant="link" className="p-0 text-decoration-none small text-muted">
                    Forgot Password?
                  </Button>
                </div>
              )}

              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </Form.Group>
              )}

              <Button
                type="submit"
                className="w-100 mb-3 btn-lg auth-btn"
                variant={isLogin ? 'primary' : 'success'}
              >
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Form>

            <div className="text-center">
              <small className="text-muted">
                {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
                <Button variant="link" className="p-0 fw-bold" onClick={toggleForm}>
                  {isLogin ? 'Register here' : 'Login here'}
                </Button>
              </small>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default Auth;
