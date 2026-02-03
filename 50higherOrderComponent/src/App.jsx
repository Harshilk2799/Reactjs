import React from "react";
import Home from "./components/Home";
import withBorder from "./hoc/withBorder";

const HellowithBorder = withBorder(Home);

function App() {
  return (
    <div>
      <h2>App Component</h2>
      <HellowithBorder />
    </div>
  );
}

export default App;
