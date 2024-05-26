"use client";

import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const AllTasks = () => {
  const tasks = useSelector((state) => state.todos.tasks);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default AllTasks;
