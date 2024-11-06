import Todo from "./Todo";

function Todos({ todos, dispatch }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} dispatch={dispatch} />
      ))}
    </>
  );
}

export default Todos;
