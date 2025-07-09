import React from 'react';

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <nav className="nav-list">
        <a href="/" className="nav-item active">
          <span className="mr-3">🏠</span>
          Dashboard
        </a>
        <a href="/users" className="nav-item">
          <span className="mr-3">👥</span>
          Users
        </a>
        <a href="/products" className="nav-item">
          <span className="mr-3">📦</span>
          Products
        </a>
        <a href="/orders" className="nav-item">
          <span className="mr-3">🛍️</span>
          Orders
        </a>
        <a href="/settings" className="nav-item">
          <span className="mr-3">⚙️</span>
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
