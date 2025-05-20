import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  function expensiveTask(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  // let doubleValue = expensiveTask(4);

  // let doubleValue = useMemo(() => expensiveTask(4), []);
  let doubleValue = useMemo(() => expensiveTask(initialValue), [initialValue]);

  return (
    <>
      <h1>Count: {count}</h1>
      <input
        type="number"
        value={initialValue}
        onChange={(e) => setInitialValue(e.target.value)}
      />
      <h3>Double Value: {doubleValue}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
