import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import PropTypes from 'prop-types';

const Layout = ({ children, breadcrumbs }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isSidebarCollapsed) {
        setIsSidebarCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarCollapsed]);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarCollapsed(true);
    }
  };

  return (
    <div className="layout-container">
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar isCollapsed={isSidebarCollapsed} />
      {isMobile && (
        <div 
          className={`sidebar-overlay ${!isSidebarCollapsed ? 'active' : ''}`}
          onClick={handleOverlayClick}
        />
      )}
      <main className="main-content">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
  breadcrumbs: PropTypes.array
};

export default Layout;