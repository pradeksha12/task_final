import React from 'react';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <nav className="dashboard">
      <h1>Task Dashboard</h1>
      <ul className="nav-links2">
        <li>
          <Link to="/taskcreation">Create Task</Link>
        </li>
        <li>
          <Link to="/viewtask">View Task</Link>
          
        </li>
        <li>
          <Link to="/taskprogress">Track Progress</Link>
          
        </li>
        <li>
        <Link to="/details">Employee Details</Link>
        </li>
        <li>
          <Link to="/">Log Out</Link>
          
        </li>
       
      </ul>
    </nav>
  );
};

export default Dashboard;
