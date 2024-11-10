import { useReducer, createContext } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

export const TodosContext = createContext();

function reducer(todos, action) {
  console.log("Inside Reducer Called");
  console.log(action);
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }

  if (action.type === "DELETE_TODO") {
    console.log(action.payload);
    // const newState = [];
    // for (let todo of todos) {
    //   if (todo.id !== action.payload.id) {
    //     newState.push(todo);
    //   }
    // }
    // return newState;

    // Other Way
    return todos.filter((todo) => {
      return todo.id !== action.payload.id;
    });
  }

  if (action.type === "TOGGLE_COMPLETED") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  return todos;
}

const initialTodos = [
  { id: "1", title: "Python Programming", completed: true },
  { id: "2", title: "Javascript Programming", completed: false },
  { id: "3", title: "Reactjs Library", completed: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodosContext.Provider value={{ dispatch: dispatch, todos: todos }}>
      <AddTodoForm />
      <Todos />
    </TodosContext.Provider>
  );
}

export default App;
