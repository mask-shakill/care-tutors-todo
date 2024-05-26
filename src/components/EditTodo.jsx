"use client";

import { updateTask } from "@/app/redux/todoSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditTodo = ({ id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.todos.tasks.find((task) => task.id === id)
  );
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { id, title, description };
    dispatch(updateTask(updatedTask));
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <form
        className="space-y-4 w-[300px] lg:w-[400px] lg:border-yellow-300 border border-teal-400 py-7 px-3 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-white text-xl">Edit Task</h1>
        <div>
          <label className="block text-white">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white">Description</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
