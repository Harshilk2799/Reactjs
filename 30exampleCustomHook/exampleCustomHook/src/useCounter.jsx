import { useState } from "react";

// function useCounter() {
//   const [counter, setCounter] = useState(0);
//   function Increment() {
//     setCounter(counter + 1);
//   }
//   function Decrement() {
//     setCounter(counter - 1);
//   }
//   function Reset() {
//     setCounter(0);
//   }
//   return [counter, Increment, Decrement, Reset];
// }
// export default useCounter;

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    setCounter(counter - 1);
  }
  function Reset() {
    setCounter(0);
  }

  return [counter, Increment, Decrement, Reset];
}

export default useCounter;
