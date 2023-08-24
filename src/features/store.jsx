import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
