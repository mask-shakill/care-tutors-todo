"use client";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { loadState, saveState } from "./localStorageUtils";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: {
    todos: preloadedState?.todos ? preloadedState : { todos: [] },
  },
});

store.subscribe(() => {
  saveState(store.getState().todos);
});

export default store;
