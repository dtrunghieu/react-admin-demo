import React from 'react';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="flex items-center gap-4">
        <button 
          className="btn"
          onClick={onToggleSidebar}
        >
          ☰
        </button>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="btn">Profile</button>
        <button className="btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
