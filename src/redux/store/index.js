import { combineReducers, createStore } from 'redux';
import todoListReducer from '../reducer/todoListReducer';

const allReducer = combineReducers({
  todo: todoListReducer,

})

const store = createStore(allReducer);

export default store;


