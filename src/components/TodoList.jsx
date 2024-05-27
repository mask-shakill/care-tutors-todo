"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "@/redux/todoSlice";
import Header from "./Header";
import TodoCard from "./TodoCard";
import Pagination from "./Pagination";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      if (isEditing) {
        dispatch(
          updateTodo({
            id: currentTodoId,
            title,
            description,
          })
        );
        setIsEditing(false);
      } else {
        dispatch(
          addTodo({
            title,
            description,
          })
        );
      }
      setTitle("");
      setDescription("");
      setShowModal(false);
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleAddIconClick = () => {
    setTitle("");
    setDescription("");
    setShowModal(true);
    setIsEditing(false);
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setCurrentTodoId(todo.id);
    setShowModal(true);
    setIsEditing(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  return (
    <div className="">
      <Header onAddClick={handleAddIconClick} />

      <div className="lg:mx-16 mx-10">
        <h1 className="font-bold text-white mt-10 mb-5 text-3xl inline-block border-b-2">
          Todo List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
          {currentTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">
              {isEditing ? "Edit Todo" : "Add Todo"}
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter title"
                className="border rounded px-2 py-1 mb-2 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter description"
                className="border rounded px-2 py-1 mb-2 w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-1 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
