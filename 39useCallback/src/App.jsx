import { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

// unneccessary of re-render of child componenr
function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize the increment function
  const incrementBtn = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // No dependencies, so function doesn't change across renders
  // Function is re-created only when `count` changes

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={incrementBtn}>Increment</button>
      <br />
      <br />
      <ChildComponent btnName="Click" handleClick={incrementBtn} />
    </>
  );
}

export default App;
