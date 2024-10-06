import React from "react";

function ChildA({ count, handleCount }) {
  return (
    <div>
      <p>Child A: {count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
}

export default ChildA;
