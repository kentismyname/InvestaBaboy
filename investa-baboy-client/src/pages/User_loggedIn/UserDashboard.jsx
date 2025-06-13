import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardHeader from "./components/DashboardHeader";
import InvestmentSummary from "./components/InvestmentSummary";
import WithdrawActions from "./components/WithdrawActions";
import Plans from '../Home/components/plans';
import Dashboard from '../Home/components/dashboard';
import SidebarNavigation from "./components/SidebarNavigation";
import Referral from '../Home/components/referral';
import FAQ from '../Home/components/faq';
import NextRoiCountdown from "./components/NextRoiCountdown";
import LivePigletPrice from "./components/LivePigletPrice";
import RecentActivity from "./components/RecentActivity";
import ActivePlans from './components/ActivePlans';
// import InvestmentProgressChart from "./components/InvestmentProgressChart";


const UserDashboard = () => {
  const userName = 'John';
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="dashboard-bg py-5">
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3}>
            <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </Col>

          {/* Main Content */}
          <Col md={9}>
            <DashboardHeader userName={userName} />

            {activeTab === 'Dashboard' && (
              <>
                <InvestmentSummary />
                <ActivePlans />

                
                <RecentActivity />
              </>
            )}

            {activeTab === 'Invest More' && (
              <>
                <Plans />
                <Dashboard />
              </>
            )}
            {activeTab === 'Withdraw Earnings' && <WithdrawActions />}
            {activeTab === 'My Contracts' && <p>📄 Contract List (coming soon)</p>}
            {activeTab === 'Referral Program' && <Referral />}
            {activeTab === 'Support / FAQs' && <FAQ />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;
