import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!state.todos) {
        state.todos = [];
      }
      state.todos.push({ id: Date.now(), ...action.payload });
    },
    removeTodo: (state, action) => {
      if (state.todos) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    },
    updateTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
