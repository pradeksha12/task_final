import { createStore, combineReducers } from 'redux';
import { taskReducer, viewTaskReducer } from './components/Dashboardtasks/reducers';

const rootReducer = combineReducers({
  tasks: taskReducer,
  viewTasks: viewTaskReducer,
});

const store = createStore(rootReducer);

export default store;