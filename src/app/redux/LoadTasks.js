"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "./todoSlice";

const LoadTasks = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasks(storedTasks));
  }, [dispatch]);

  return children;
};

export default LoadTasks;
