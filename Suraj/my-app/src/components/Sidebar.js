import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h4 className="text-white mb-4">CareerConnect</h4>
      <nav className="nav flex-column">
        <NavLink to="/dashboard" className="nav-link text-white">
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </NavLink>
        <NavLink to="/users" className="nav-link text-white">
          <i className="bi bi-people me-2"></i> User Management
        </NavLink>
        <NavLink to="/approvals" className="nav-link text-white">
          <i className="bi bi-person-check me-2"></i> Recruiter Approvals
        </NavLink>
        <NavLink to="/settings" className="nav-link text-white">
          <i className="bi bi-gear me-2"></i> System Settings
        </NavLink>
        <NavLink to="/analytics" className="nav-link text-white">
          <i className="bi bi-bar-chart-line me-2"></i> Analytics
        </NavLink>
        <NavLink to="/reports" className="nav-link text-white">
          <i className="bi bi-file-earmark-text me-2"></i> Reports
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
