// features/Counter/CounterSlice.js
import { createSlice } from '@reduxjs/toolkit';

let initialState = 0;

const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
