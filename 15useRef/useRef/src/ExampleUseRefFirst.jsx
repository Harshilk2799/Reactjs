import { useEffect, useRef, useState } from "react";

// function ExampleUseRefFirst() {
//   const [count, setCount] = useState(0);

//   function handleIncrease() {
//     setCount(count + 1);
//   }
//   // Runs on every render
//   useEffect(() => {
//     alert("Component Render");
//     // console.log("Component render");
//   });
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }
// export default ExampleUseRefFirst;

// Across Re-Render does not persist the value, Every time re-render value same
// normal variable re-render hojay to dubarase initialization hota hai
// function ExampleUseRefFirst() {
//   const [count, setCount] = useState(0);
//   let val = 1;
//   function handleIncrease() {
//     val = val + 1;
//     console.log("Value of Val: ", val);
//     setCount(count + 1);
//   }
//   // Runs on every render
//   useEffect(() => {
//     // alert("Component Render");
//     console.log("Component render");
//   });
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }
// export default ExampleUseRefFirst;

// Persist value across re-render
// useRef variable change doesn't trigger a re-render
function ExampleUseRefFirst() {
  console.log("Component Re-render");

  // useRef hook return a object, key is current
  let val = useRef(0);
  console.log(val);
  function handleIncrease() {
    val.current = val.current + 1;
    console.log("Value of Val: ", val.current);
  }
  // Runs on every render
  useEffect(() => {
    // alert("Component Render");
    console.log("Component render");
  });
  return (
    <div>
      <p>Count: {val.current}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
export default ExampleUseRefFirst;
