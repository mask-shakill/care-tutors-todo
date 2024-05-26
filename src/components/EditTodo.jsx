"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTodoPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);
  };
  return (
    <div className="flex items-center justify-center mt-28 ">
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
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white">Description</label>
          <input
            type="email"
            className="w-full px-4 py-6 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter descriptions"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={() => router.push("/")}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTodoPage;
