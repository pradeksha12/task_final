import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';
import { Link } from 'react-router-dom';
import './Taskcreate.css';

import Swal from 'sweetalert2';

const CreateTask = () => {
  const [task, setTask] = useState({ title: '', description: '', date: '', priority: '' });
  const dispatch = useDispatch();

  const handleSubmit = () => {

    dispatch(addTask({ id: Date.now(), ...task }));

    setTask({ title: '', description: '', date: '', priority: '' });
    Swal.fire({
      icon: 'success',
      title: 'Task Created Successfully',
      showConfirmButton: false,
      timer: 1500, 
    });
  };

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
      <div className='card-container'>
        <div className='createtask card'>
          <input
            type="text"
            placeholder="Enter task title"
            className='tasktitle'
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <br></br>
          <textarea
            placeholder="Enter task description"
            className='tasktitle'
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <input
            type="date"
            value={task.date}
            onChange={(e) => setTask({ ...task, date: e.target.value })}
          />
          <select
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
            className='priority-dropdown'
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <br></br>
          <button onClick={handleSubmit}>Create Task</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
