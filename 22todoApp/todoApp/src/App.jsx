import { useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn Django", completed: false },
    { id: 3, title: "Learn Python", completed: false },
  ]);

  function addTodo(newTodo) {
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo]);
  }
  function removeTodo(id) {
    console.log(id);
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  }
  function toggleComplete(id) {
    // console.log(id);
    // Pure Javascript

    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id === id) {
    //     newTodos.push({ ...todo, completed: !todo.completed });
    //   } else {
    //     newTodos.push(todo);
    //   }
    // }
    // setTodos(newTodos);

    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }
  return (
    <>
      <div className="container">
        <ToastContainer />
        <h1 className="main-title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
