"use client";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const TodoCard = ({ todo, onEdit, onRemove }) => {
  return (
    <div className="shadow rounded-xl w-full h-[120px] py-1 px-2 text-white shadow-teal-300 lg:shadow-yellow-300 font-serif ">
      <h2 className="text-xl font-bold">{todo.title}</h2>
      <p className="mt-2">{todo.description}</p>
      <div className="mt-4 flex space-x-2">
        <button onClick={() => onEdit(todo)}>
          <AiFillEdit />
        </button>
        <button onClick={() => onRemove(todo.id)}>
          <AiFillDelete className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
