import React from "react";
import ReactDOM from "react-dom/client";

function HelloWorld() {
  return <h1>Hello World</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* First Way to call Component */}
    {/* <HelloWorld /> */}

    {/* Second Way to call Component */}
    <HelloWorld></HelloWorld>
  </React.StrictMode>
);
