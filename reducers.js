// reducers.js

import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './ActionTypes';

const initialState = {
  tasks: [],
};

export function taskReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case EDIT_TASK:
        const editedTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        );
        return {
          ...state,
          tasks: editedTasks,
        };
      case DELETE_TASK:
        const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
        return {
          ...state,
          tasks: updatedTasks,
        };
      default:
        return state;
    }
  }

// New reducer for displaying tasks
export function viewTaskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      // When a new task is added, we update the tasks list in this reducer
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      // When a task is deleted, we update the tasks list in this reducer
      const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
}
