import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Card name={name} setName={setName} />
      <p>Parent Component Name: {name}</p>
    </>
  );
}

export default App;
