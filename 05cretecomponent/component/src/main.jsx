import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { HelloWorld2 } from "./HelloWorld";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld />
    <HelloWorld2 />
  </React.StrictMode>
);
