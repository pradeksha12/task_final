import React from 'react';
import './Taskprogress.css';
//import './Dashboard.css';
import { Link } from 'react-router-dom';
// const task = [
//   { id: 1, taskName: 'Task 1', assignee: 'User A', dueDate: '2023-09-30', progress: 30 },
//   { id: 2, taskName: 'Task 2', assignee: 'User B', dueDate: '2023-10-05', progress: 50 },
//   // Add more task objects as needed
// ];
const TrackProgress = () => {
  return (
    <div>
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
   <div className='taskh'>
      <h2>Track Progress</h2>
      </div>
      <div className='progress-nav'>
      <table>
        <thead>
          <tr>
            <th>Serial 
              Number</th>
            <th>Task Name</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Progress</th>
          </tr>
        </thead>
      </table>
      </div>
      
    </div>
  );
};

export default TrackProgress;
