import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Viewtask.css';
import { editTask, deleteTask } from './actions';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

const ViewTask = () => {
  const tasks = useSelector((state) => state.viewTasks.tasks);
  const dispatch = useDispatch();

  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = (task) => {
    dispatch(editTask(task));
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // State to store the search query and filtered tasks
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Filter tasks based on search query and selected date
  const filteredTasks = tasks.filter((task) => {
    const taskName = task.title.toLowerCase();
    const search = searchQuery.toLowerCase();

    // Filter by task name
    const taskNameMatch = taskName.includes(search);

    // Filter by date
    const dateMatch =
      selectedDate === '' || task.date === selectedDate;

    return taskNameMatch && dateMatch;
  });

  return (
    <div className="view-task">
      <nav className="dashboard">
        <div className="top-bar">
          <h1 className="top-bar-title">Dashboard</h1>
          
        </div>
        <ul className="nav-links2">
          <li>
            <Link to="/taskcreation">Create Task</Link>
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
      <h2 className="viewh2">View Tasks</h2>
      <div className="search-filter ms-8 column ">
            <input
              type="text"
              placeholder="Search by task name"
              className="search-input"
            />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-filter"
            />
             
            {/* Add the filter dropdown */}
            <select className="filter-dropdown">
              <option value="all">All</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>

            {/* Add the search button */}
            <button className="search-button">Search</button>
          </div>
     
      <ul className="viewbody">
        {filteredTasks.map((task) => (

          <li key={task.id}>
            {editingTask === task ? (
              <div>
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => handleSaveEdit({ ...task, title: e.target.value })}
                />
                <input
                  type="text"
                  value={task.description}
                  onChange={(e) =>
                    handleSaveEdit({ ...task, description: e.target.value })
                  }
                />
                <input
                  type="date"
                  value={task.date}
                  onChange={(e) => handleSaveEdit({ ...task, date: e.target.value })}
                />
                <select
                  value={task.priority}
                  onChange={(e) => handleSaveEdit({ ...task, priority: e.target.value })}
                  className='priority-dropdown'
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button onClick={() => handleSaveEdit(task)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className='viewt'>
                <p>Task Title: {task.title}</p>
                <p>Task Description: {task.description}</p>
                <p>Due date:{task.date}</p>
                <p>Priority:{task.priority}</p>
                <button onClick={() => handleEdit(task)} className='buttondel'>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            )}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default ViewTask;
