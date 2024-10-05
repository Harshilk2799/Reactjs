import { useState, useEffect } from "react";

function MultiEffectComponent() {
  const [count, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  console.log("Component Re-render");
  useEffect(() => {
    console.log("First useEffect");
    console.log("Count Changed: ", count);
  }, [count]);
  //   side-effect logic will run only when count is changed

  useEffect(() => {
    console.log("Second useEffect");
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      console.log("Cleanup function");
      clearInterval(intervalId);
    };
  }, []);
  //   It will run only on first render
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCounter(count + 1)}>Increment Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default MultiEffectComponent;
