import { useState, useEffect } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Parent: Re-render");
  });
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent />
    </div>
  );
}

export default App;
