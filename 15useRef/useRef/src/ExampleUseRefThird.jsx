import { useState, useEffect, useRef } from "react";

function ExampleUseRefThird() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    console.log("First TIme: ", count);
    prevCount.current = count;
    console.log("Previous : ", prevCount.current);
  }, [count]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Prev Count: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExampleUseRefThird;
