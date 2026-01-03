import { useEffect, useState } from "react";

function ComponentWithEffects({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${name} Timer effect STARTED`);
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log(`${name} Time tick.`);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log(`${name} Timer effet CLEANED UP.`);
    };
  }, []);
  return (
    <div>
      <h3>
        <p>{name}</p>
        <strong>Timer Count: {count}</strong>
      </h3>
    </div>
  );
}

export default ComponentWithEffects;
