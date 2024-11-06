// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/CounterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
