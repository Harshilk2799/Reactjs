import { useState } from "react";
import Name from "./components/Name";

// if not use memo every time child component called
// we use memo: Now, Child component will not re-render unless firstName and lastName changes.

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <Name firstName="Harshil" lastName="Khatri" />
    </>
  );
}

export default App;
