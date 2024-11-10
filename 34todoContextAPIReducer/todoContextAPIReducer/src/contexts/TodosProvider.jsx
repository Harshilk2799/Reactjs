import { createContext, useReducer } from "react";

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

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
