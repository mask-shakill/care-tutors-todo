import React from "react";
import TaskCard from "./TaskCard";

const AllTasks = () => {
  return (
    <div className="lg:mx-32 mx-4 mt-5 lg:mt-14">
      <h1 className="text-white border-b inline-block font-bold lg:text-xl ">
        All Tasks
      </h1>
      <div className="mt-3 lg:mt-5 flex flex-col gap-y-5 lg:grid lg:grid-cols-2 gap-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default AllTasks;
