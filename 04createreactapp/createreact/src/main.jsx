import React from "react";
import ReactDOM from "react-dom/client";

function HelloWorld() {
  return <h1>Hello World, My Name is Harshil</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);
