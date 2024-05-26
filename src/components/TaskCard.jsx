import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const TaskCard = () => {
  return (
    <div className="shadow rounded-xl w-full h-[120px] py-1 px-2 text-white shadow-teal-300 lg:shadow-yellow-300 font-serif ">
      <h1 className="font-bold mt-1 ">Todo 1</h1>
      <p className="font-sm">
        description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestias, deleniti.
      </p>
      <div className="flex items-center justify-end mt-3 gap-x-2 lg:text-xl text-lg">
        <MdEdit />
        <MdDelete className="text-[#ff0000] " />
      </div>
    </div>
  );
};

export default TaskCard;
