import React, { use, useState } from "react";
import { useImmerReducer } from "use-immer";
import { todoReducer } from "../todoReducer";
import Navbar from "./Navbar";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Todo = () => {
  const [todos, dispatch] = useImmerReducer(todoReducer, []);
  const [editingTodo, setEditingTodo] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-row justify-between">
      {/* noteed */}
        <Calendar onChange={setSelectedDate} value={selectedDate}/>
      <div className=" w-md bg-zinc-700">
        <TodoList items = {todos} dispatch = {dispatch} setEditingTodo = {setEditingTodo} handleShowAddForm ={handleShowAddForm} selectedDate = {selectedDate}/>
      </div>
      </div>
      {showAddForm && 
      <div className="flex flex-col items-center absolute bottom-0 left-0 right-0 top-70">
        <AddTodoForm dispatch = {dispatch} editingTodo = {editingTodo} setEditingTodo = {setEditingTodo} handleShowAddForm ={handleShowAddForm} selectedDate = {selectedDate}/>
      </div>
      }

     
    </div>
  );
};

export default Todo;
