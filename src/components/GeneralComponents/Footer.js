import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Admin Dashboard. All rights reserved.</div>
      <div>Version 1.0.0</div>
    </footer>
  );
};

export default Footer;
