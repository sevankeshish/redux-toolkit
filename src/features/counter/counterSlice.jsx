import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // this is the name of my STATE
  initialState: { value: 0 },
  // this is for Actions to Set States => setState
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;
