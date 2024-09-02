import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrease() {
    //  batching of state updates
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }
  function handleDecrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrease}>Increase Counter</button>
      <button onClick={handleDecrease}>Decrease Counter</button>
    </div>
  );
}

export default Counter;
