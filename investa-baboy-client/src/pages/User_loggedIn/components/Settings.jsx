import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

const Settings = () => {
  const [method, setMethod] = useState('Gcash');
  const [gcashNumber, setGcashNumber] = useState('');
  const [gcashName, setGcashName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    // You can send this data to backend here
  };

  return (
    <>
      <h4 className="mb-4">⚙️ Settings - Payment Method</h4>

      <Card className="p-4 shadow-sm border-0">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Choose Payment Method</Form.Label>
            <Form.Select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="Gcash">Gcash</option>
              <option value="Bank">Bank Transfer</option>
            </Form.Select>
          </Form.Group>

          {method === 'Gcash' && (
            <Form.Group className="mb-3">
              <Form.Label>Gcash Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Gcash number"
                value={gcashNumber}
                onChange={(e) => setGcashNumber(e.target.value)}
                required
              />
              <Form.Label>Gcash Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Gcash name"
                value={gcashName}
                onChange={(e) => setGcashName(e.target.value)}
                required
              />
            </Form.Group>
          )}

          {method === 'Bank' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. BDO, BPI, Metrobank"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Account Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your full name"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. 123456789"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </Form.Group>
            </>
          )}

          <Button type="submit" variant="primary">
            💾 Save Changes
          </Button>

          {saved && (
            <Alert variant="success" className="mt-3">
              ✅ Payment info updated successfully!
            </Alert>
          )}
        </Form>
      </Card>
    </>
  );
};

export default Settings;
