import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todos';

const store = combineReducers({
  todos: todoReducer
});

export default createStore(store);