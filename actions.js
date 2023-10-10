
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './ActionTypes';

// Action creators for adding, editing, and deleting tasks
// actions.js

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}


export function editTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
}