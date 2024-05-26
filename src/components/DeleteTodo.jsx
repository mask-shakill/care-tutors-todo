"use client";

import { deleteTask } from "@/app/redux/todoSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const DeleteTodo = ({ id }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
    router.push("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Delete
    </button>
  );
};

export default DeleteTodo;
