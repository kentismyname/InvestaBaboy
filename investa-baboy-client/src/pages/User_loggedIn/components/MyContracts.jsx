import React, { useState, useEffect } from 'react';
import { Table, Badge, Button, Modal } from 'react-bootstrap';
import dayjs from 'dayjs';
import planSettings from '../../../config/planConfig';

const initialPlans = [
  {
    planName: 'Grower Plan 🩴',
    pigs: 4,
    startDate: '2025-03-01',
    contractId: 'PLAN-F0973C7A',
    autoRenew: true,
  },
  {
    planName: 'Starter Plan 🐷',
    pigs: 1,
    startDate: '2025-04-05',
    contractId: 'PLAN-D4B54E5A',
    autoRenew: false,
  },
  {
    planName: 'Premium Plan 🐷',
    pigs: 5,
    startDate: '2024-06-03',
    contractId: 'PLAN-D4B54E5B',
    autoRenew: false,
  },
];

const planRoiRates = {
  Starter: 0.5,
  Grower: 0.55,
  Premium: 0.6,
  Pro: 0.6,
  Elite: 0.6,
  Diamond: 0.6,
};

const calculateHarvestDate = (start) => dayjs(start).add(4, 'month');

const calculateProfit = (pigs, roiRate) => {
  const { pigletPrice, otherCosts, fixedWeight, pricePerKilo } = planSettings;
  const totalCost = (pigletPrice + otherCosts) * pigs;
  const sale = pricePerKilo * fixedWeight * pigs;
  const netProfit = sale - totalCost;
  return {
    totalCost,
    expectedProfit: netProfit * roiRate,
  };
};

const MyContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  useEffect(() => {
    const enriched = initialPlans.map((plan) => {
      const key = plan.planName.split(' ')[0];
      const roi = planRoiRates[key] || 0.5;
      const start = dayjs(plan.startDate);
      const harvest = calculateHarvestDate(start);
      const isComplete = dayjs().isAfter(harvest);
      const { totalCost, expectedProfit } = calculateProfit(plan.pigs, roi);

      return {
        ...plan,
        startDate: start.format('MMM D, YYYY'),
        harvestDate: harvest.format('MMM D, YYYY'),
        totalCost,
        expectedProfit,
        status: isComplete ? 'Completed' : 'Active',
      };
    });
    setContracts(enriched);
  }, []);

  const getStatusBadge = (status) => (
    <Badge bg={status === 'Completed' ? 'success' : 'info'}>{status}</Badge>
  );

  const handleView = (contract) => {
    setSelectedContract(contract);
    setShowModal(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}contracts/Contract_INVESTABABOY_FINAL.pdf`;
    link.download = `${selectedContract?.contractId}_Contract.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    <>
      <h4 className="mb-4">📋 My Contracts</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Contract ID</th>
            <th>Start</th>
            <th>Harvest</th>
            <th>Pigs</th>
            <th>Cost</th>
            <th>Profit</th>
            <th>Status</th>
            <th>Auto-Renew</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((plan, index) => (
            <tr key={index}>
              <td>{plan.planName}</td>
              <td>{plan.contractId}</td>
              <td>{plan.startDate}</td>
              <td>{plan.harvestDate}</td>
              <td>{plan.pigs}</td>
              <td>₱{plan.totalCost.toLocaleString()}</td>
              <td>₱{plan.expectedProfit.toLocaleString()}</td>
              <td>{getStatusBadge(plan.status)}</td>
              <td>{plan.autoRenew ? 'Yes' : 'No'}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1" onClick={() => handleView(plan)}>
                  📄 View
                </Button>
                <Button variant="outline-secondary" size="sm" onClick={handleDownload}>
                  ⬇️ Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for viewing contract */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Contract Preview - {selectedContract?.contractId}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          <iframe
            src={`${import.meta.env.BASE_URL}contracts/Contract_INVESTABABOY_FINAL.pdf`}
            title="Contract PDF Preview"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyContracts;
