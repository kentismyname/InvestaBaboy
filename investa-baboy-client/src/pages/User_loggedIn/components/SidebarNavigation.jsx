import React, { useState, useRef, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import {
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import '../styles/sidebarNavigation.css';

const SidebarNavigation = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const sidebarRef = useRef(null);

  const tabs = [
    'Dashboard',
    'Invest More',
    'My Contracts',
    'Withdraw Earnings',
    'Referral Program',
    'Support / FAQs',
    'Settings', // ✅ Add this
];


  const handleLogout = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileMenu && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMobileMenu]);

  return (
    <>
      <div className="sidebar-toggle d-md-none p-3">
        <Button variant="light" onClick={() => setIsMobileMenu(!isMobileMenu)}>
          {isMobileMenu ? <FaTimes /> : <FaBars />}
        </Button>
      </div>

      <div
        ref={sidebarRef}
        className={`sidebar-nav p-3 ${sidebarOpen ? 'expanded' : 'collapsed'} ${isMobileMenu ? 'open' : 'closed'} d-md-block`}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          {sidebarOpen && <h5 className="text-center w-100">InvestaBaboy 🐷</h5>}
          <Button
            variant="light"
            className="toggle-hide-btn"
            size="sm"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsMobileMenu(false);
              } else {
                setSidebarOpen(!sidebarOpen);
              }
            }}
          >
            {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </Button>
        </div>

        {sidebarOpen && (
          <Nav className="flex-column">
            {tabs.map((tab, index) => (
              <Nav.Link
                key={index}
                className={`sidebar-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMobileMenu(false);
                }}
              >
                {tab}
              </Nav.Link>
            ))}
            <Button
              variant="outline-danger"
              className="mt-4 w-100"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Nav>
        )}
      </div>
    </>
  );
};

export default SidebarNavigation;
