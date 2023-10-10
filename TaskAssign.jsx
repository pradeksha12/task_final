import React, { useState } from 'react';

function TaskAssign() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [assignee, setAssignee] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleTaskCreation = () => {
    if (taskName.trim() === '' || assignee.trim() === '') {
      alert('Please enter both task name and assignee.');
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Generate a unique ID (you might use a library for this)
      name: taskName,
      assignee: assignee,
      comments: comments,
    };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);

    // Clear the input fields
    setTaskName('');
    setAssignee('');
    setComments([]);
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }

    // Add the new comment to the comments array
    setComments([...comments, newComment]);

    // Clear the input field
    setNewComment('');
  };

  return (
    <div>
      <h2>Task Assignment and Collaboration</h2>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </div>
      <div>
        <label>Assignee:</label>
        <input
          type="text"
          value={assignee}
          onChange={handleAssigneeChange}
        />
      </div>
      <button onClick={handleTaskCreation}>Create Task</button>

      {/* Display the list of created tasks */}
      <div>
        <h3>Task List:</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.name}</strong> - Assignee: {task.assignee}
              <ul>
                {task.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={handleNewCommentChange}
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskAssign;
