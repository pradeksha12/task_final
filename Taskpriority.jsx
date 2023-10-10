import React, { useState } from 'react';

function TaskPriority() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleReminderChange = (event) => {
    const reminder = event.target.value;
    setReminders([...reminders, reminder]);
  };

  const handleTaskCreation = () => {
    if (taskName.trim() === '') {
      alert('Please enter a task name.');
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Generate a unique ID (you might use a library for this)
      name: taskName,
      priority: priority,
      dueDate: dueDate,
      reminders: reminders,
    };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);

    // Clear the input fields
    setTaskName('');
    setPriority('Low');
    setDueDate('');
    setReminders([]);
  };

  return (
    <div>
      <h2>Task Prioritization and Scheduling</h2>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </div>
      <div>
        <label>Priority:</label>
        <select value={priority} onChange={handlePriorityChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={handleDueDateChange}
        />
      </div>
      <div>
        <label>Reminders:</label>
        <input
          type="text"
          placeholder="Add reminders..."
          value={reminders.join(', ')}
          onChange={handleReminderChange}
        />
      </div>
      <button onClick={handleTaskCreation}>Create Task</button>

      {/* Display the list of created tasks */}
      <div>
        <h3>Task List:</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.name}</strong> - Priority: {task.priority}, Due Date: {task.dueDate}, Reminders: {task.reminders.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskPriority;
