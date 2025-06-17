import React from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = (props) => {
  const handleDelete = (id) => {
    // console.log("Delete item with id:", id);
    props.dispatch({ type: "REMOVE_TODO", id: id });
  };

  const handleUpdate = (item) => {
    props.setEditingTodo(item);
    props.handleShowAddForm();
    // console.log("Update item date:", item.date);
    // console.log("Update item id:", item.id);
  };

  const handleAddTodo = () => {
    props.handleShowAddForm();
  };

  const handleCheckboxChange = (item) => {
    props.dispatch({
      type: "UPDATE_TODO",
      id: item.id,
      payload: { ...item, checked: !item.checked },
    });
    //console.log("Checkbox changed for item:", item.checked);
  };


  let selectedDateTodoLength = props.items.filter(
    (item) => item.date === props.selectedDate.toDateString()).length;

  return (
    <div className="bg-zinc-700 text-white flex flex-col items-center">
      <h2 className="pb-3">Here's what you need to do</h2>
      {selectedDateTodoLength === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="/robot-with-404-error-free-vector-removebg-preview.png"
            alt=""
            className="w-3xs h-3xs"
          />
          <br />
          <p className="text-center">
            Sorry Nothing todo's for {props.selectedDate.toDateString()}
          </p>
        </div>
      ) : (
        <>
        <ul className="">
          {props.items.filter((item) => item.date === props.selectedDate.toDateString() && !item.checked).map((item, index) => (
              <li className="flex flex-row" key={item.id}>
                <input type="checkbox" className="mr-3 w-5 mt-0.5" checked={item.checked} onChange={() => handleCheckboxChange(item)}/>
                {index + 1}. {item.name} - {item.description}
                <button className="bg-red-600 ml-6 rounded-md hover:bg-red-700" onClick={() => handleDelete(item.id)}>🗑️</button>
                <button className="bg-green-600 ml-2 rounded-md hover:bg-green-700" onClick={() => handleUpdate(item)}>✏️</button>
              </li>
            ))}
        </ul>

        <h2 className="pt-50">Completed Todos</h2>

        <ul className="">
          {props.items
            .filter((item) => item.date === props.selectedDate.toDateString() && item.checked).map((item, index) => (
              <li className="flex flex-row line-through" key={item.id}>
                {index + 1}. {item.name} - {item.description}
              </li>
            ))}
        </ul>



        </>
      )}
      <button
        className="bg-blue-500 rounded-lg p-2 hover:bg-blue-700 absolute bottom-4"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
