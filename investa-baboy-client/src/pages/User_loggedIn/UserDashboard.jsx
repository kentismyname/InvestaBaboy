import React, { useState, useEffect } from 'react';
import DashboardHeader from "./components/DashboardHeader";
import InvestmentSummary from "./components/InvestmentSummary";
import WithdrawActions from "./components/WithdrawActions";
import Plans from '../Home/components/plans';
import Dashboard from '../Home/components/dashboard';
import SidebarNavigation from "./components/SidebarNavigation";
import Referral from '../Home/components/referral';
import FAQ from '../Home/components/faq';
import RecentActivity from "./components/RecentActivity";
import ActivePlans from './components/ActivePlans';
import Loader from '../../utils/Loader';
import MyContracts from './components/MyContracts';
import Settings from './components/Settings';

const UserDashboard = () => {
  const userName = 'John';
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div className="dashboard-bg py-5 d-flex">
      <SidebarNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className={`dashboard-content ${!sidebarOpen ? 'collapsed' : ''} w-100`}
        style={{ transition: 'all 0.3s ease' }}
      >
        <DashboardHeader userName={userName} />
        {activeTab === 'Dashboard' && (
          <>
            <InvestmentSummary />
            <ActivePlans setActiveTab={setActiveTab} />
            
            <RecentActivity />
          </>
        )}
        {activeTab === 'Invest More' && (
          <>
            <Plans />
            <Dashboard />
          </>
        )}
        {activeTab === 'Settings' && <Settings />}
        {activeTab === 'Withdraw Earnings' && <WithdrawActions />}
        {activeTab === 'My Contracts' && <MyContracts />}
        {activeTab === 'Referral Program' && <Referral />}
        {activeTab === 'Support / FAQs' && <FAQ />}
      </div>
    </div>
  );
};

export default UserDashboard;
