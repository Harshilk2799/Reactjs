import { useState } from "react";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <ChildA count={count} handleCount={handleCount} />
      <ChildB count={count} />
    </>
  );
}

export default App;
