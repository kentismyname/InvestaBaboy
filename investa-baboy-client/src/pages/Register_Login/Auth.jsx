import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
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

    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (isLogin) {
      console.log('Logging in:', form.email, form.password);
    } else {
      console.log('Registering:', form);
    }

    // TODO: Send to backend
  };

  return (
    <Container className="py-5 d-flex justify-content-center align-items-center">
      <Card className="p-4 shadow-sm" style={{ width: '100%', maxWidth: '420px' }}>
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
                required />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required />
          </Form.Group>

          {!isLogin && (
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required />
            </Form.Group>
          )}

          <Button type="submit" className="w-100 mb-3" variant={isLogin ? 'primary' : 'success'}>
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </Form>

        <div className="text-center">
          <small>
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
            <Button variant="link" className="p-0" onClick={toggleForm}>
              {isLogin ? 'Register here' : 'Login here'}
            </Button>
          </small>
        </div>
      </Card>
    </Container>
  );
}

export default Auth;
