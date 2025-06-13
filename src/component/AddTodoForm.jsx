import { useEffect } from "react";
import { useImmer } from "use-immer";

const AddTodoForm = (props) => {
  const [todo, setTodo] = useImmer({
    name: "",
    description: "",
    // ga boleh null
    date: props.selectedDate ? props.selectedDate.toDateString() : new Date().toDateString(),
  });

  useEffect(() =>{
    if (props.editingTodo) {
      setTodo((draft) => {
        draft.name = props.editingTodo.name;
        draft.description = props.editingTodo.description;
        draft.date = props.editingTodo.date;
      });
    }
  }, [props.editingTodo]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editingTodo) {
      // mencegah update todo yang jika diupdate tanggal nya berubah menjadi hari ini 
      props.dispatch({type: "UPDATE_TODO",payload: todo, id: props.editingTodo.id});
      props.setEditingTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        name: todo.name,
        description: todo.description,
        date: props.selectedDate.toDateString(),
      };
      props.dispatch({ type: "ADD_TODO", payload: newTodo });
    }
    setTodo((draf) => {
      draf.name = "";
      draf.description = "";
      //draf.date = props.selectedDate ? props.selectedDate.toDateString() : new Date().toDateString();
    });
    props.handleShowAddForm();
  };

  //console.log("Name : " + todo.name);
  console.log("select : " + props.selectedDate.toDateString());
  console.log("Todo date: " + todo.date);
  if (props.editingTodo){
     console.log("setEditing name: " + props.editingTodo.name);
  }
  // console.log("Description :" + todo.description);
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-8 p-4 bg-zinc-700 rounded-lg shadow-lg shadow-amber-300 items-center text-white w-fit mx-auto"
      >
        <h1 className="font-medium">To Do</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Name
          </label>
          <input
            type="text"
            className=" bg-amber-400 w-2xs text-black"
            value={todo.name}
            onChange={(e) =>
              setTodo((draf) => {
                draf.name = e.target.value;
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Description
          </label>
          <textarea
            name=""
            id=""
            className=" bg-amber-400 w-2xs text-black"
            value={todo.description}
            onChange={(e) =>
              setTodo((draft) => {
                draft.description = e.target.value;
              })
            }
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 rounded-full p-1 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
