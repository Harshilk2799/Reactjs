import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrease() {
    // setCounter(counter + 1);

    // setCounter((currentState) => {
    //   return currentState + 1;
    // });

    setCounter((currentState) => currentState + 1);
  }
  function handleReset() {
    setCounter(0);
  }
  function handleDecrease() {
    // setCounter(counter - 1);

    // setCounter((currentState) => {
    //   return currentState - 1;
    // });

    setCounter((currentState) => currentState - 1);
  }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default Counter;
