import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="dashboard">
      <h1>Task Dashboard</h1>
      <ul className="nav-links">
        <li>
          <Link to="/taskcreation">Create Task</Link>
        </li>
        <li>
          <Link to="/taskprogress">Track Progress</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
