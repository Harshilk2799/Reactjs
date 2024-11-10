import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "./contexts/TodosProvider";

function Todos() {
  const { todos } = useContext(TodosContext);
  return (
    <>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </>
  );
}

export default Todos;
