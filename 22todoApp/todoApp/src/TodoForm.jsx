import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    // console.log(title);
    e.preventDefault();

    if (title.trim().length === 0) {
      toast.error("Please fill input", { autoClose: 1000 });
      return;
    }

    const newtodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    addTodo(newtodo);
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todoForm__btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
