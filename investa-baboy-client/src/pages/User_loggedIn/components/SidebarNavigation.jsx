// src/components/User_loggedIn/components/SidebarNavigation.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/sidebarNavigation.css'; // Ensure you have this CSS file for styling

const SidebarNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    'Dashboard',
    'Invest More',
    'My Contracts',
    'Withdraw Earnings',
    'Referral Program',
    'Support / FAQs',
  ];

  return (
    <div className="sidebar-nav p-3">
      <h5 className="mb-4 text-center">InvestaBaboy 🐷</h5>
      <Nav className="flex-column">
        {tabs.map((tab, index) => (
          <Nav.Link
            key={index}
            className={`sidebar-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default SidebarNavigation;
