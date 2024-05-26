import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/app/redux/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
