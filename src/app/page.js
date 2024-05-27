"use client";
import TodoList from "@/components/TodoList";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const HomePage = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default HomePage;
