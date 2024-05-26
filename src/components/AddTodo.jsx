"use client";

import { addTask } from "@/app/redux/todoSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description };
    dispatch(addTask(newTask));
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <form
        className="space-y-4 w-[300px] lg:w-[400px] lg:border-yellow-300 border border-teal-400 py-7 px-3 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-white text-xl">Add Task</h1>
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
