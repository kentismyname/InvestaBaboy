// src/components/User_loggedIn/components/DashboardHeader.jsx
import React from 'react';

const DashboardHeader = ({ userName }) => {
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold welcome-msg">
        Welcome back, {userName}! <span className="emoji">🐷📈</span>
      </h2>
    </div>
  );
};

export default DashboardHeader;
