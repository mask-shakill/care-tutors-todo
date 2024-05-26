"use client";

import Link from "next/link";
import DeleteTodo from "./DeleteTodo";

const TaskCard = ({ task }) => {
  return (
    <div className="shadow rounded-xl w-full h-[120px] py-1 px-2 text-white shadow-teal-300 lg:shadow-yellow-300 font-serif ">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="mt-2">{task.description}</p>
      <div className="mt-4 flex space-x-2">
        <Link
          href={`/edit-todo/${task.id}`}
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Edit
        </Link>
        <DeleteTodo id={task.id} />
      </div>
    </div>
  );
};

export default TaskCard;
