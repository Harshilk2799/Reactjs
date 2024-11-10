import { useState, useContext } from "react";
import { TodosContext } from "./App";

function AddTodoForm() {
  const { dispatch } = useContext(TodosContext);

  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(title);
    if (title.trim().length === 0) {
      alert("type something");
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: crypto.randomUUID(),
    };
    console.log(newTodo);
    dispatch({ type: "ADD_TODO", payload: { newTodo: newTodo } });
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
