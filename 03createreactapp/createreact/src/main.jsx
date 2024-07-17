import React from "react";
import ReactDOM from "react-dom/client";

function HelloWorld() {
  return <h1>Hello Wolrd, My Name is Harshi</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);
