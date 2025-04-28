import { useState, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    console.log("Id: ", timerRef.current);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    console.log("Id: ", timerRef.current);
    timerRef.current = null;
    console.log("Ref Value: ", timerRef.current);
  }
  function resetTimer() {
    setTime(0);
  }
  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StopWatch;
