import { useState, useEffect, useEffectEvent } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    console.log("Count: ", count);
    setCount((prev) => prev + 1);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      onTick();
    }, 1000);

    return () => {
      console.log("Unmounted data from UI...");
      clearInterval(timer);
    };
  }, [count]);
  return <div>Count: {count}</div>;
}

export default Timer;
