import React from 'react';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <nav className="dashboard">
      <h1>Your Dashboard</h1>
      <ul className="nav-links1">
      <li>
          <Link to="/viewtask">View Task</Link>
          
      </li>
      <br>
      </br>
      <br>
      </br>
      <li>
          <Link to="/calendarview">Calendar</Link>
      </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
