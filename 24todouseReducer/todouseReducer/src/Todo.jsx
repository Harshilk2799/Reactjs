import React from "react";

function Todo({ id, title, completed, dispatch }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#cecece",
        borderRadius: "1rem",
      }}
    >
      <h4>ID: {id}</h4>
      <h4 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        Title: {title}
      </h4>
      <h4>Completed: {completed ? "true" : "false"}</h4>
      <button
        onClick={() => dispatch({ type: "DELETE_TODO", payload: { id: id } })}
      >
        Delete
      </button>
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } })
        }
      >
        Toggle Completed
      </button>
    </div>
  );
}

export default Todo;
